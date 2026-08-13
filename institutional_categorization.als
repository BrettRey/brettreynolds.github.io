// Institutional categorization: the boundary rules of the paired Capitalism/Socialism
// entries (brettreynolds.ca/capitalism-socialism.html), formalized for consistency
// checking and countermodel generation. Alloy 6.
//
// Scope: categorization ONLY (Capitalism §1.2 three-condition test; Socialism §1.4
// layered project/institution/formation rule; the overlap ruling). The entries'
// attribution machinery (five-step evidential test, bounded verdicts) is evidential,
// not relational, and is deliberately not modeled.
//
// A satisfiable `run` certifies that a boundary claim has a witness under this
// formalization; a valid `check` certifies a definitional claim. Neither certifies
// the prose itself: the prose-to-model mapping is a judgment step.

module institutional_categorization

// ---------- Vocabulary ----------

// Domains that recurrent capital redeployment can materially structure (Cap §1.2).
abstract sig Domain {}
one sig ProductiveOrganization, LabourAccess, InvestmentAndProtection extends Domain {}

// Productive powers (Soc §1.2).
abstract sig Power {}
one sig ResidualIncome, GovernanceRights, OperationalAuthority,
    InvestmentAuthority, LiquidationRights, ResidualAuthority extends Power {}

// Allocation mechanisms.
abstract sig Allocation {}
one sig Market, Planning, Bargaining, Administration, Commons extends Allocation {}

// Labour regimes (Cap §1.4: accumulation has been connected to many).
abstract sig LabourRegime {}
one sig FreeWage, Coerced, HouseholdLabour, Tenancy extends LabourRegime {}

// Extent of socialization (Soc §1.4 threshold).
abstract sig Extent {}
one sig Enclave, Substantial extends Extent {}

sig SocialistProgramme {}

sig Formation {
    accumulationStructures: set Domain,      // which domains recurrent redeployment materially structures
    allocations: some Allocation,
    labour: some LabourRegime,
    socializedPowers: set Power,             // powers vested in collectively constituted bodies
    socializedExtent: one Extent,
    genealogy: lone SocialistProgramme,      // programmatic origin, if any (Soc §1.1, §1.4)
    recruitedAllocations: set Allocation     // mechanisms deliberately recruited (Soc §1.5)
} {
    recruitedAllocations in allocations
    no socializedPowers implies socializedExtent = Enclave
}

// ---------- Categorization predicates ----------

// Cap §1.2: three conditions "apply jointly rather than singly".
pred capitalist[f: Formation] {
    Domain in f.accumulationStructures
}

// Soc §1.4, layered.
pred socialistProject[f: Formation] {
    some f.genealogy
}
pred socialistInstitutionPresent[f: Formation] {
    some f.socializedPowers
}
// Threshold: socialized control materially structures investment, enterprise
// governance, and residual claims across a substantial part of productive life.
pred socialistFormation[f: Formation] {
    InvestmentAuthority + GovernanceRights + ResidualIncome in f.socializedPowers
    f.socializedExtent = Substantial
}

pred hybridOverlap[f: Formation] {
    capitalist[f] and socialistFormation[f]
}

// ---------- Boundary-claim witnesses (each `run` should be SAT) ----------

// Cap §1.2 + Sol correction: market socialism can sit in the overlap.
pred marketSocialismOverlap[f: Formation] {
    hybridOverlap[f]
    Market in f.allocations
    Planning not in f.allocations
    no f.genealogy or some f.genealogy
}
run marketSocialismOverlap for 3 but exactly 1 Formation

// Merchant capitalism qualifying: trading capital reorganized production and finance.
pred merchantQualifying[f: Formation] {
    capitalist[f]
    Market in f.allocations
    no f.socializedPowers
}
run merchantQualifying for 3 but exactly 1 Formation

// Merchant formation failing: commerce coexists but skims an unchanged base.
pred merchantFailing[f: Formation] {
    not capitalist[f]
    Market in f.allocations
    f.accumulationStructures in InvestmentAndProtection
}
run merchantFailing for 3 but exactly 1 Formation

// Household commercial production below the boundary; also: markets do not suffice.
pred householdBelowBoundary[f: Formation] {
    not capitalist[f]
    Market in f.allocations
    HouseholdLabour in f.labour
    no f.accumulationStructures
}
run householdBelowBoundary for 3 but exactly 1 Formation

// Plantation slavery: capitalist with coerced labour (labour regime is orthogonal).
pred plantationCapitalism[f: Formation] {
    capitalist[f]
    Coerced in f.labour
    FreeWage not in f.labour
}
run plantationCapitalism for 3 but exactly 1 Formation

// State capitalism / developmental state: structurally in the overlap, no programme.
pred stateCapitalismStructural[f: Formation] {
    hybridOverlap[f]
    no f.genealogy
}
run stateCapitalismStructural for 3 but exactly 1 Formation

// Social democracy: a socialist project governing a non-socialist formation.
pred socialDemocracyProjectOnly[f: Formation] {
    socialistProject[f]
    capitalist[f]
    not socialistFormation[f]
    some f.socializedPowers
    f.socializedExtent = Enclave
}
run socialDemocracyProjectOnly for 3 but exactly 1 Formation

// NEP-style recruitment: a socialist project deliberately recruiting markets (Soc §1.5).
pred nepRecruitment[f: Formation] {
    socialistProject[f]
    Market in f.recruitedAllocations
    socialistInstitutionPresent[f]
}
run nepRecruitment for 3 but exactly 1 Formation

// Comprehensive planning without markets remains categorizable as socialist.
pred plannedSocialismNoMarkets[f: Formation] {
    socialistFormation[f]
    socialistProject[f]
    Market not in f.allocations
    Planning in f.allocations
    not capitalist[f]
}
run plannedSocialismNoMarkets for 3 but exactly 1 Formation

// ---------- Definitional checks (each `check` should be VALID) ----------

// Soc §1.4 threshold: an enclave never makes a socialist formation.
assert enclaveNeverFormation {
    all f: Formation | f.socializedExtent = Enclave implies not socialistFormation[f]
}
check enclaveNeverFormation for 6

// Cap §1.1: markets, credit, profit-seeking do not suffice; without the three
// structured domains a formation is not capitalist however commercial it is.
assert marketsDoNotSuffice {
    all f: Formation | no f.accumulationStructures implies not capitalist[f]
}
check marketsDoNotSuffice for 6

// Soc §1.4: a socialist formation requires socialized powers; label follows powers.
assert formationRequiresPowers {
    all f: Formation | socialistFormation[f] implies socialistInstitutionPresent[f]
}
check formationRequiresPowers for 6

// Cap §1.2 jointness: structuring any two domains without the third is not enough.
assert twoDomainsInsufficient {
    all f: Formation | not (Domain in f.accumulationStructures) implies not capitalist[f]
}
check twoDomainsInsufficient for 6

// ---------- The exclusivity check that SHOULD FAIL ----------
// The pre-revision assumption (capitalist excludes socialist formation) must produce
// a counterexample: the machine-checked form of the overlap correction.
assert capitalistExcludesSocialistFormation {
    all f: Formation | capitalist[f] implies not socialistFormation[f]
}
check capitalistExcludesSocialistFormation for 6
