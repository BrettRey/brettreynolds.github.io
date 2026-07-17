/* Lexical retrieval over the book chunks.
   A direct port of the Retriever class in the book repo's
   scripts/run_ai_companion_chat.py (tf-idf cosine, title boost 0.07 per
   overlapping title token, exact-phrase boost 0.15).
   Loadable in the browser (window.LLRetrieval) and in node (module.exports). */
(function (global) {
  "use strict";

  var STOPWORDS = new Set([
    "a", "an", "and", "are", "as", "at", "be", "by", "for", "from", "how",
    "i", "in", "is", "it", "of", "on", "or", "that", "the", "this", "to",
    "was", "what", "when", "where", "which", "who", "why", "with", "you",
    "your",
  ]);

  function tokenize(text) {
    return String(text).toLowerCase().match(/[a-z0-9]+(?:'[a-z0-9]+)?/g) || [];
  }

  function normalizeSpaces(text) {
    return String(text).replace(/\s+/g, " ").trim();
  }

  function countTokens(tokens) {
    var counts = new Map();
    for (var i = 0; i < tokens.length; i++) {
      var tok = tokens[i];
      counts.set(tok, (counts.get(tok) || 0) + 1);
    }
    return counts;
  }

  function contentTokens(text) {
    return tokenize(text).filter(function (tok) { return !STOPWORDS.has(tok); });
  }

  /* chunks: array of {chunk_id, anchor, chapter_title, section_title, text, ...} */
  function buildIndex(chunks) {
    var docTermCounts = [];
    var docTitleCounts = [];
    var docFreq = new Map();

    chunks.forEach(function (chunk) {
      var counts = countTokens(contentTokens(chunk.text));
      docTermCounts.push(counts);

      var titleText = [
        chunk.chapter_title,
        chunk.section_title,
        chunk.subsection_title,
        chunk.subsubsection_title,
        chunk.box_title,
        chunk.anchor,
      ]
        .filter(Boolean)
        .join(" ");
      docTitleCounts.push(countTokens(contentTokens(titleText)));

      counts.forEach(function (_tf, tok) {
        docFreq.set(tok, (docFreq.get(tok) || 0) + 1);
      });
    });

    var totalDocs = Math.max(1, chunks.length);
    var idf = new Map();
    docFreq.forEach(function (freq, tok) {
      idf.set(tok, Math.log((1 + totalDocs) / (1 + freq)) + 1.0);
    });

    var docNorms = docTermCounts.map(function (counts) {
      var normSq = 0;
      counts.forEach(function (tf, tok) {
        var weight = (1.0 + Math.log(tf)) * (idf.get(tok) || 0);
        normSq += weight * weight;
      });
      return Math.sqrt(normSq) || 1;
    });

    return {
      chunks: chunks,
      docTermCounts: docTermCounts,
      docTitleCounts: docTitleCounts,
      docNorms: docNorms,
      idf: idf,
    };
  }

  /* allowedIndices: null (whole book) or a Set of chunk positions. */
  function search(index, query, topK, allowedIndices) {
    if (allowedIndices && allowedIndices.size === 0) {
      return [];
    }

    var queryTokens = contentTokens(query);
    if (!queryTokens.length) {
      queryTokens = tokenize(query);
    }

    var queryCounts = countTokens(queryTokens);
    var defaultIdf = Math.log(1 + index.chunks.length);
    var queryWeights = new Map();
    var queryNormSq = 0;
    queryCounts.forEach(function (tf, tok) {
      var weight = (1.0 + Math.log(tf)) * (index.idf.has(tok) ? index.idf.get(tok) : defaultIdf);
      queryWeights.set(tok, weight);
      queryNormSq += weight * weight;
    });
    var queryNorm = Math.sqrt(queryNormSq) || 1;

    var phrase = normalizeSpaces(query.toLowerCase());
    var results = [];

    for (var i = 0; i < index.chunks.length; i++) {
      if (allowedIndices && !allowedIndices.has(i)) {
        continue;
      }

      var docCounts = index.docTermCounts[i];
      var dot = 0;
      queryWeights.forEach(function (qWeight, tok) {
        var tf = docCounts.get(tok);
        if (!tf) {
          return;
        }
        dot += qWeight * (1.0 + Math.log(tf)) * (index.idf.get(tok) || 0);
      });
      var cosine = dot / (index.docNorms[i] * queryNorm);

      var titleCounts = index.docTitleCounts[i];
      var titleOverlap = 0;
      queryCounts.forEach(function (_tf, tok) {
        titleOverlap += titleCounts.get(tok) || 0;
      });
      var titleBoost = 0.07 * titleOverlap;
      var phraseBoost =
        phrase && index.chunks[i].text.toLowerCase().indexOf(phrase) !== -1 ? 0.15 : 0;

      var score = cosine + titleBoost + phraseBoost;
      if (score <= 0) {
        continue;
      }
      results.push({
        score: Math.round(score * 10000) / 10000,
        chunkIndex: i,
        chunk: index.chunks[i],
      });
    }

    results.sort(function (a, b) { return b.score - a.score; });
    return results.slice(0, topK);
  }

  var api = {
    STOPWORDS: STOPWORDS,
    tokenize: tokenize,
    normalizeSpaces: normalizeSpaces,
    buildIndex: buildIndex,
    search: search,
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  } else {
    global.LLRetrieval = api;
  }
})(typeof window !== "undefined" ? window : this);
