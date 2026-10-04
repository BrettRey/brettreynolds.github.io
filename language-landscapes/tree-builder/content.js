// Answer structures transcribed from the actual Chapter 6 figures, 2026-10-04.
// category and function are distinct fields. Words remain in source order.
export const LEXICAL = [
  ['N', 'Noun (including pronouns)'], ['V', 'Verb (including auxiliaries)'],
  ['Adj', 'Adjective'], ['Adv', 'Adverb'],
  ['P', 'Preposition'], ['D', 'Determinative']
];
export const PHRASAL = [
  ['NP', 'Noun phrase'], ['VP', 'Verb phrase'], ['AdjP', 'Adjective phrase'],
  ['AdvP', 'Adverb phrase'], ['PP', 'Preposition phrase'], ['DP', 'Determinative phrase'], ['Clause', 'Clause']
];
export const FUNCTIONS = [
  ['Head', 'Head'], ['Subj', 'Subject'], ['Obj', 'Object'],
  ['Comp', 'Complement'], ['Mod', 'Modifier'], ['Det', 'Determiner']
];
const word = (index, category) => ({ kind: 'lexical', word: index, category, function: 'Head' });
const phrase = (category, func, children) => ({ kind: 'phrase', category, function: func, children });
const very = (i) => phrase('AdvP', 'Mod', [word(i, 'Adv')]);
const it = (i) => phrase('NP', 'Obj', [word(i, 'N')]);
const aboutIt = (start, func = '') => phrase('PP', func, [word(start, 'P'), it(start + 1)]);
export const EXERCISES = [
  {
    id: 'very-happy', title: 'very happy', words: ['very', 'happy'],
    focus: 'A head and a modifier', source: 'figures/veryhappy.pdf', section: 'Some trees',
    answer: phrase('AdjP', '', [very(0), word(1, 'Adj')]),
    hints: [
      'Which word is the head of the whole expression? Name its category, then the phrase it heads.',
      'Very heads its own AdvP. Consider what that phrase does in the larger AdjP.'
    ],
    explanation: 'Happy is the adjective heading the AdjP. Very heads a one-word AdvP, which functions as modifier in that AdjP. The category AdvP and the function Mod describe different aspects of the same branch.',
    relations: { 'AdvP:0': 'Very modifies happy. Its AdvP therefore functions as modifier in the larger AdjP. Put Mod on the AdvP; very itself is its head.' },
    notes: { '0': 'Very is an adverb here and heads an AdvP.', '1': 'Happy is an adjective and heads the whole AdjP.' }
  },
  {
    id: 'about-it', title: 'about it', words: ['about', 'it'],
    focus: 'A phrase can contain one word', source: 'figures/aboutit.pdf', section: 'Some trees',
    answer: aboutIt(0),
    hints: [
      'About is the head. What category is it, and what kind of phrase does it head?',
      'It is a pronoun, a subclass of noun. Its NP functions as the object in the PP.'
    ],
    explanation: 'About heads the PP. It is a pronoun heading an NP, even though that NP contains only one word. The NP functions as object, a more specific kind of complement, in the PP.',
    relations: { 'NP:1': 'The NP containing it functions as object in the PP headed by about. Object is the more specific complement function here, so label this NP Obj.' },
    notes: { '0': 'About is a preposition in this example.', '1': 'It is a pronoun, a subclass of noun, and is labelled N.' }
  },
  {
    id: 'very-happy-about-it', title: 'very happy about it', words: ['very', 'happy', 'about', 'it'],
    focus: 'A complement inside a complement', source: 'figures/veryhappyaboutit.pdf', section: 'Some trees',
    answer: phrase('AdjP', '', [very(0), word(1, 'Adj'), aboutIt(2, 'Comp')]),
    hints: [
      'Keep happy as the head of the whole AdjP. Consider the roles of very and about it in that phrase.',
      'About it is a PP functioning as complement in the AdjP. Inside that PP, it heads the object NP.'
    ],
    explanation: 'The AdjP has three immediate branches: modifier AdvP very, head adjective happy, and complement PP about it. Inside the PP, the NP it functions as object. Those are two different relationships at two levels of the tree.',
    relations: {
      'AdvP:0': 'Very modifies happy. Its AdvP therefore functions as modifier in the larger AdjP. Put Mod on the AdvP; very itself is its head.',
      'PP:2,3': 'About it supplies a complement of happy. Put Comp on this PP to show its function in the AdjP. About is the head inside the PP.',
      'NP:3': 'The NP containing it functions as object in the PP headed by about. Object is the more specific complement function here, so label this NP Obj.'
    },
    notes: { '0': 'Very is an adverb heading a modifier AdvP.', '1': 'Happy is the adjective heading the whole AdjP.', '2': 'About is the head preposition of the PP.', '3': 'It is a pronoun heading the object NP in the PP.' }
  },
  {
    id: 'my-breakfast', title: 'I had my breakfast', words: ['I', 'had', 'my', 'breakfast'],
    focus: 'One category, different functions', source: 'figures/ihadmybreakfast6.pdf', section: 'A top-down example',
    answer: phrase('Clause', '', [
      phrase('NP', 'Subj', [word(0, 'N')]),
      phrase('VP', 'Head', [word(1, 'V'), phrase('NP', 'Obj', [phrase('NP', 'Det', [word(2, 'N')]), word(3, 'N')])])
    ]),
    hints: [
      'The clause contains a subject NP and a head VP. The verb had heads the VP, which also contains an object NP.',
      'In my breakfast, breakfast is the head noun. My is a pronoun heading an NP that functions as determiner in the larger NP.'
    ],
    explanation: 'The NPs have different functions: I is subject of the clause, my breakfast is object in the VP, and my is determiner in the larger NP. The pronoun my heads an NP; its determiner function doesn’t make it a determinative. Had is a lexical verb here.',
    relations: {
      'NP:0': 'The NP containing I functions as subject of the clause. Put Subj on that NP. The pronoun inside it is its head.',
      'VP:1,2,3': 'The VP had my breakfast is the head of the clause. Had in turn heads that VP. These two Head labels describe relationships at different levels.',
      'NP:2,3': 'The NP my breakfast functions as object in the VP headed by had. Put Obj on the whole NP; breakfast is its head noun.',
      'NP:2': 'The NP containing my functions as determiner in my breakfast. Put Det on that NP. My remains a pronoun heading its own NP.'
    },
    notes: { '0': 'I is a pronoun heading the subject NP.', '1': 'Had is a lexical verb in this example.', '2': 'My is a pronoun, not a determinative. Its NP functions as determiner.', '3': 'Breakfast is the head noun of the object NP.' }
  }
];
export const SOURCE_NOTE = 'Based on Language Landscapes, Chapter 6, “Some trees” and “A top-down example”. The worked trees follow the figures’ categories, functions, and branching, with subclass subscripts omitted. Feedback is authored for these exercises; it is not an automatic grammar analyser.';
