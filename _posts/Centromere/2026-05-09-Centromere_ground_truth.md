---
layout: post
title: Momonmer Types, Suprachromosomal Families (SFs) and HORs Identification
tags: centromere review Suprachromosomal_Families Momonmer_Type
categories: paper Suprachromosomal_Families Momonmer_Type
toc:
  sidebar: left
---

In this blog, we will introduce the structure/concepts in centromere study, like monomer types, Suprachromosomal Families (SFs), HORs. What is the modern understanding of these concepts. Then, we will reveiw how biologist studied these structure? In other words, how people identifies these ground truth in centromere. 

# Hierarchies in Alpha-Satellite Array

## Model of Centromeric Regions

Alpha satellite DNAs are credited as the genetic substrate of endogenous centromeres in primates, starting with the new-world monkeys. No alpha satellites have been found in tarsiers and lemurs [^1][^2]. In humans, arrays of alpha satellites are organized in discrete layers expanding out from a **multimegabase-sized homogeneous core** that is composed of chromosome-specific HORs (live or active arrays). Additional subsets of alpha satellites are often observed on one or both sides of the core in a **near symmetrical formation**. From center to outside, we have 

1. A zone of smaller homogeneous HOR arrays (pseudocentromeres or **inactive arrays**)

2. An outermost layer of progressively more **divergent** and smaller (center-to-periphery gradient) HOR

3. **Monomeric** arrays (relic centromeres)

Both inactive HOR arrays and divergent arrays are often in the range of a few to hundreds of kilobases. Other distinct satellite classes, such as the classical human satellites (human satellites 1–3, or HSat1–HSat3), are of variable size (up to several megabases) and positioned in the adjacent pericentromeric regions. Segmental duplications are often observed directly flanking the satellite arrays or in centromeric transition regions extending out to the p-arm or q-arm (greater than a megabase) or between adjacent satellite arrays. The entire centromeric region can be defined by those sequences in linkage or sharing a common centromere-spanning haplotype (cenhap), which is characterized by repressed meiotic recombination[^3].

Centromere expansion **likely** goes in waves of interchromosomal transfer and amplification, where the HORs (or monomeric sequences) of the newly formed novel centromere jump from one live centromere to another and amplify in the **new location** to form the next generation of live centromeres (a centromeric layer) in all chromosomes or in a group of chromosomes. The remnants of the old centromere are displaced sideways, shrink, diverge, and structurally degrade.

<p align="center">
    <img src="/assets/img/Centromere_Ground_truth/structure_human_cen_regions.jpg" width="70%">
</p>

> <small> Fig 1. General genomic structure of a human centromeric region, which includes one homogeneous core made of chromosome-specific HORs (*red*) and the imperfect symmetrical organization of smaller arrays of various other homogeneous HORs [**pseudocentromeres or inactive HOR arrays** (*light gray*)], **divergent HORs** [recent relic centromeres (*dark gray*)], and multiple distinct **divergent monomeric arrays** (older relic centromeres). These regions typically include other pericentromeric satellite classes [e.g., HSat1–HSat3 (*teal*)] and SDs. The entire centromeric region is defined by those sequences in the cenhap, presented as gray flanking regions extending into the p-arm and q-arm. Arrayed triangles indicate alpha satellite monomers and HORs of various length and structures composed of several different monomers [^1]. </small>

<p align="center">
    <img src="/assets/img/Centromere_Ground_truth/science.abl4178-f1.jpg" width="70%">
</p>

> <small> Fig 2. Overview of all peri/centromeric regions in CHM13[^7].  </small>

## Monomer Class and Monomer Type

Human centromeres contain approximately 171-bp alpha satellite repeat monomers, organized into sequences of $n$ monomers, referred to as $n$-mer HORs. The individual monomers within a HOR unit have 50–70% identity and can be distinguished such that HOR unit length is determined by where the next monomer shows nearly total sequence identity to the first monomer in the HOR. However, HOR copies appear in tandem, with the divergence between HOR copies usually being less than 5%. Monomers exhibiting less than 5% of mutual divergence belong to the same monomer type[^6]. For cyclic shift (a monomer start site), we advocate the use of the traditional first nucleotide in the BamHI site of DXZ1[^1].

## SF and A/B type

In T2T-CHM13, we grouped αSat monomers into distinct classes belonging to 20 suprachromosomal families (SFs), identified 80 different HOR arrays and more than 1000 different monomers in HORs across the genome[^7]. An SF is a group of HOR or monomeric arrays more closely related to each other than to the other groups. Each SF is built of its own set of monomeric classes

<p align="center">
    <img src="/assets/img/Centromere_Ground_truth/SF_classes.png" width="70%">
</p>

> <small> Fig 2. Overview of all peri/centromeric regions in CHM13[^7].  </small>


The new SF1–SF3 form all of the live centromeres except for the Y and form most of the pseudocentromeric and relic inactive, or dead, HOR arrays. In SF1 and SF2 HORs, the J1 and J2 or D1 and D2 class monomers appear as internal J1J2 or D1D2 dimers, respectively, with perfect (SF1) or near-perfect (SF2) AB periodicity across arrays. In SF3 and SF5, the monomer classes (W1–W5 and R1R2, respectively) alternate in a more complex manner, and the AB pattern also does not have that simple regularity. Note that the presence of the A- or B-box in a monomer does not mean the presence of the actual pJα- or CENP-B-binding site. Boxes are just alternative configurations of the AB region that are permissive to respective sites [35–51 bp of the monomer in our cyclic shift]. 

## HOR and naming system

## SqV and StV 



# Where does the ground truth come from

# Reference

[^1]: Miga, Karen H., and Ivan A. Alexandrov. "Variation and evolution of human centromeres: a field guide and perspective." Annual review of genetics 55.1 (2021): 583-602.
[^2]: The Evolutionary Origin of Man Can Be Traced in the Layers of Defunct Ancestral Alpha Satellites Flanking the Active Centromeres of Human Chromosomes.
[^3]: Langley, Sasha A., et al. "Haplotypes spanning centromeric regions reveal persistence of large blocks of archaic DNA." *elife* 8 (2019): e42989.
[^4]: McNulty, Shannon M., and Beth A. Sullivan. "Alpha satellite DNA biology: finding function in the recesses of the genome." *Chromosome research* 26.3 (2018): 115-138.
[^5]: Uralsky, L. I., et al. "Classification and monomer-by-monomer annotation dataset of suprachromosomal family 1 alpha satellite higher-order repeats in hg38 human genome assembly." *Data in brief* 24 (2019): 103708.
[^6]: Glunčić, Matko, et al. "Precise identification of cascading alpha satellite higher order repeats in T2T CHM13 assembly of human chromosome 3." *Croatian medical journal* 65.3 (2024): 209-219.
[^7]: Altemose, Nicolas, et al. "Complete genomic and epigenetic maps of human centromeres." Science 376.6588 (2022): eabl4178.


[^11]: Gershman, Ariel, et al. "Epigenetic patterns in a complete human genome." *Science* 376.6588 (2022): eabj5089.
[^21]: Gao, Shenghan, et al. "A global view of human centromere variation and evolution." bioRxiv (2025): 2025-12.
[^31]: Altemose, Nicolas, et al. "Complete genomic and epigenetic maps of human centromeres." Science 376.6588 (2022): eabl4178.

[^41]: Miga, Karen H., and Ivan A. Alexandrov. "Variation and evolution of human centromeres: a field guide and perspective." Annual review of genetics 55.1 (2021): 583-602.
[^51]: Sullivan, Lori L., Kimberline Chew, and Beth A. Sullivan. "α satellite DNA variation and function of the human centromere." *Nucleus* 8.4 (2017): 331-339.
[^61]: Hoyt, Savannah J., et al. "Haplotype-Resolved Genomics Reveals Conserved Chromatin Architecture and Epigenetic Constraints of Human Neocentromeres." *bioRxiv* (2025): 2025-12.
[^71]: Rosin, Leah F., and Barbara G. Mellone. "Centromeres drive a hard bargain." *Trends in Genetics* 33.2 (2017): 101-117.
[^81]: Chmátal, Lukáš, et al. "Centromere strength provides the cell biological basis for meiotic drive and karyotype evolution in mice." *Current biology* 24.19 (2014): 2295-2300.
[^91]: Henikoff, Steven, Kami Ahmad, and Harmit S. Malik. "The centromere paradox: stable inheritance with rapidly evolving DNA." Science 293.5532 (2001): 1098-1102.

