---
layout: post
title: CentromereArchitect--inference and analysis of the architecture of centromeres
tags: centromere Monomer HOR
categories: paper centromere_algorithms
toc:
  sidebar: left
---

# Centromere Background and algorithms 

I plan to open a new series of blogs for centromere's background and related algorithms. Writing these blogs also helps me to understand the progress of study of centromere from biology side and gaps of existing tools. Traditional algorithms often become unreliable on highly repetitive regions and the recent updates of centromere sequences data shows an urgent need for new tools but also provides an opportunity for us to develop new science on methodology. 

# Background of Centromere Decomposition
## Structure of Centromere

1. *Alpha satellite arrays* in active centromeres (that we refer to simply as centromeres) are tandem repeats that are formed by units repeating thousands of times with extensive variations in copy numbers but  limited nucleotide-level variations. 
2. Each such unit (referred to as a *high-order repeat* or *HOR*) represents a tandem repeat formed by smaller repetitive building blocks (referred to as *monomers*). 
3. Each monomer is around 171 bp and each HOR is formed by multiple monomers that differ from each other.  
4. The tandem repeat structure of human centromeres may be interrupted by retrotransposon insertions (for example, cenX has a single insertion of a LINE element).

For example, the vast majority of HORs units on the centromere of the human X chromosome (referred to as cenX) consist of 12 monomers. Although different HOR units on cenX are highly similar (95–100% sequence identity), the 12 monomers forming each HOR are rather diverged (65–88% sequence identity). And cenX has a single insertion of a LINE element.

## Previous work -- StringDecomposer

We will not touch details of this tool *StringDecomposer* in this blog. But we will give a brief introduction. 

StringDecomposer takes a **monomer-set** and a **genomic segment** and partitions this segment into (monomeric) *blocks* (each block is similar to one of the monomers). For each monomer *M*, it generates the set of *M-blocks* in the centromere (that are more similar to *M* than to other monomers) and translates the centromere from the nucleotide alphabet into the alphabet of monomers.

Formal definition of **String Decomposition Problem**: Given a string *R* (corresponding to a read or an assembly of a centromere) and a set of strings *Blocks* (each *block* from *Blocks* corresponds to an monomer), the goal of the String Decomposition Problem (SD Problem) is to represent *R* in the alphabet of blocks. We define a *chain* as an arbitrary concatenation of blocks and an *optimal chain* for *R* as a chain that has the highest-scoring global alignment against *R* among all possible chains. The String Decomposition Problem is to find an optimal chain for *R*.

## Gaps

However, the challenge of properly defining the set of all human monomers remained outside the scope of the String Decomposition Problem. As a result, many questions about centromere architecture and evolution remain unanswered, e.g. it remains unclear how to define the complete set of human monomers (a prerequisite for launching StringDecomposer) and HORs, moreover, the rigorous algorithmic definitions of these concepts are still lacking.

# Methods

## Definitions and notations of MonomerGenerator

1. We refer a decomposed block-set as $Blocks(Centromere, Monomers)$
2. The **divergence** between a pair of strings is defined as the edit distance between them divided by the length of the longest string.
3. For each block *Block*, StringDecomposer assigns the value **$div_1(Block)$ / $div_2(Block)$** that represents the **divergence** between this block and its **most similar** monomer / its **second-most similar** monomer.
4. Given a monomer $M$​ from the monomer-set *Monomers*, we refer to a block from $Blocks(Centromere, Monomers)$​ as an $M$​-block  if $M$​ is a most similar monomer to this block (ties are broken arbitrarily).
5. The $M$​-consensus is defined as the consensus of the multiple alignment of all $M$​-blocks. 
6. Given monomers $M$​ and $M'$​, we denote the edit distances between the $M$​-consensus and the $M'$​-consensus as $distance(M, M')$​.
7. The **separation** of a monomer $M$ denoted as $separation(M)$ is defined as the shortest distance between $M$ and all other monomers.
8. The **radius** of a monomer $M$, referred to as $radius(M)$, is defined as the maximum edit distance between its $M$-consensus and all $M$-blocks. 
9. **The separation ratio** of a monomer $M$​ is defined as $separationRatio(M) = separation(M)/radius(M)$​.
10. The **count** of a monomer $M$​, referred to as $count(Centromere, M)$​ is defined as the number of $M$​-blocks in $Blocks(Centromere, Monomers)$​. 
11. A monomer is classified as **frequent** if its count exceeds the threshold $ \vert Blocks(Centromere, Monomers) \vert /FreqCeiling$​ (default value $FreqCeiling = 40$​), and **infrequent**, otherwise. An infrequent monomer is classified as **rare** if its count does not exceed a threshold $rareMonomerCount$​ (default value $rareMonomerCount = 5$​).
12. We classify a block *Block* as 1) **resolved** if $div_1(Block)$​ is below the threshold $maxResolvedDivergence$​ (default value $maxResolvedDivergence= 5 \%$​); 2) **non-monomeric** if $div_1(Block)$​ exceeds the threshold $maxDivergence$​ (default value $maxDivergence = 40\%$​); 3) **unresolved** if it is neither resolved nor non-monomeric.
13. We say that a monomer-set **Monomers resolves** a centromere *Centromere* if the fraction of resolved blocks in this centromere exceeds the threshold $FractionResolvedBlocks$ and all other blocks are non-monomeric (default value $FractionResolvedBlocks = 0.95$). Given an integer $Length$, we say that a monomer-set is **Length-uniform** if all monomers in this set have a length similar to *Length*, i.e. that differs from *Length* by at most $MaxLengthDivergence$, where $MaxLengthDivergence$ is a parameter (the default value is $0.01 \times Length$).

## MonomerGenerator algorithm

MonomerGenerator takes a string Centromere and two parameters: a threshold $maxResolvedDivergence$, and a string $InitialMonomer$ as input. It is an iterative algorithm that gradually extends the monomer-set, starting with the monomer-set that consists of a single monomer $InitialMonomer$. In the case of the human genome, it sets $InitialMonomer = ConsensusMonomer$, which is a consensus alpha-satellite monomer in the human genome. 

1. Given a string *Centromere* and a monomer-set $Monomers$, MonomerGenerator launches StringDecomposer to generate the block-set $Blocks(Centromere, Monomers)$ and constructs the **block-graph** where vertices are unresolved blocks and edges connect unresolved blocks with divergence below $maxResolvedDivergence/2$. Note: To speed up the construction of connected components of the block-graph, they use a fast greedy algorithm. Given an arbitrary vertex $v$ in the block-graph, we compute its distance to all other vertices. Given the ranked list of all vertices in the increasing order of distances from $v$, we quickly generate $component(v)$ by starting with a single vertex $v$ and gradually adding more vertices by scanning this list. Therefore, if a vertex $w$ has already been added to $component(v)$, a necessary condition that $u \in component(v)$ is $d(v,u) \leq d(v,w)+d(w,u) \leq d(v,w) + maxResolvedDivergence/2$​. Using this necessary condition, we only need to analyze vertices with the distance. 

2. MonomerGenerator selects a **largest connected component** in the constructed block-graph and computes its consensus *newMonomer* by constructing the **multiple alignment** of all blocks (vertices) in this component using Clustal Omega. Afterward, MonomerGenerator extends the monomer-set by adding *newMonomer* and iterates until the monomer-set resolves $Centromere$. It also removes a monomer from the monomer-set if it does not represent the most similar monomer for any block in $Blocks(Centromere, Monomers)$​.

3. Before launching the next iteration, MonomerGenerator **recomputes** the sequence of each monomer in the monomer-set by substituting it with the **consensus of all blocks resolved by this monomer**. In the resolved centromere, the $M$-consensus coincides with each monomer $M$ in the generated monomer-set. Even though the final monomer-set is not guaranteed to be *Length-uniform*, it is not an issue for human centromeres, since most monomers in the human genome have a rather conserved length of $\approx171$​.
   ### Identification of hybrid monomers

   Given a string, we refer to a string formed by its first (last) $i$ nucleotides as its $i$-prefix ($i$-suffix). We refer to a **hybrid monomer** formed by concatenating the $i$-prefix of a monomer $X$ and the $j$-suffix of a monomer $Y$ as the $X(i)+Y(j)$, or simply $X + Y$, when omitting the indices $i$ and $j$ does not cause confusion. For each **infrequent monomer** $M$, MonomerGenerator identifies the most similar hybrid candidate generated by a pair of frequent monomers $(X,Y)$ and reports $M$ as a hybrid monomer if $div(M, X + Y)$ does not exceed $MaxHybridDivergence$ (default value $1\%$​).

   ### Shifted monomer-set

   A unit of a tandem repeat is defined up to a **cyclic shift**. For example, AGGT, GGTA, GTAG and TAGG represent four cyclic shifts for a tandem repeat $\cdots AGGTAGGTAGGT \cdots$. To facilitate the comparison of the arbitrary monomer-sets (possibly with different shifts) MonomerGenerator has the **MonomerGraph** module that, given a monomer-set and a centromere, generates a shifted monomer-set.

## Definitions and notations of HOR inference problem

We define a HOR as a string in a monomer alphabet. 

1. We denote the length of a string $S$ as $\vert S \vert$, the number of elements in a set $A$ as $\vert A \vert$ and the total length of strings in a string-set $Strings$ as $length(Strings)$.
2. Given a string-set $Strings$, an arbitrary concatenate of strings from this set is called a **String-word**. For example, if $Strings =\{AB, CD, BD\}$, $ABBDCDAB$ is a *Strings*-word. We refer to the total number of strings from $Strings$ that form a *Strings-*word *w* as $orbit(w)$. For a *Strings*-word $w = ABBDCDAB$, $\vert w \vert =8$ and $orbit(w) = 4$​. 
3. A *Strings*-word $w$ is called a **Strings-decomposition** of a string $S$ if $w = S$. The score of this *Strings*-decomposition $score(Strings, w)$ is defined as $orbit(w)+length(Strings)$. 
4. Given a string $S$, a string-set $Strings$ is called **S-minimal** if there exists a *Strings*-decomposition $w$ of $S$ that minimizes $score(Strings, w)$ over all string-sets $Strings$ and over all *Strings*-decompositions of $S$. 
5. The elements of the *S*-minimal string-set are called **HORs.** We formulate the following HOR inference problem and note that it may have multiple solutions.
6. Given a substring $h$ of a string $S$, we define $count_S(h)$ as the number of non-overlapping occurrences of $h$ in $S$. There may be multiple ways to select $count_S(h)$ non-overlapping occurrences of $h$ in $S$, e.g. $count_{AABBCAAAD}(AA) = 2$ and there are two ways to select two non-overlapping occurrences of $AA$ in $AABBCAAAD$: <u>AA</u>BBC<u>AA</u>AD and <u>AA</u>BBCA<u>AA</u>D. HORDecomposer selects the set of the ‘leftmost’ occurrences.
7. A string is called a **monorun** if it is made of a single symbol. A substring of a string is called a **run** if it is a maximal monorun, i.e. is not a substring of another monorun. For example, ABBCAAAD has two runs of A. The **run-length encoding** of a string $S$ (denoted as $S^\star$) is defined as the substitution of each run of a symbol $X$ of length $n$ by an expression $X^n$ that we count as a single symbol. For example, the run-length encoding of $S = ABBCAAAD$ is $S^\star =AB^2CA^3D$, $\vert S\vert = 8$ and $\vert S^\star\vert = 5$.

## HORDecomposer algorithm



# Results

