---
layout: post
title: How to Write Introduction and Results
tags: academic writing
categories: academic writing
toc:
  sidebar: left
---

Recently, I was mentoring an undergraduate student on her graduation thesis. During our discussions, I realized she had no idea **how to get started or what each section of a paper was actually supposed to say**. And honestly, I completely understand that feeling. Research papers have a very fixed and standard structure: abstract, introduction, results, methods, discussion, etc. But when you actually start writing, especially for the first time, those section titles suddenly feel very abstract. You stare at the blank page and think: “Okay… but what am I supposed to write here?”



I still remember when I was an undergraduate writing my first paper. For the Methods section, things were actually not too bad. It was my own work, my own algorithm, my own methods. Even if I could not explain everything perfectly, at least I knew what I wanted to say. But **Introduction and Results**? Those sections made me scratch my head for hours. Sometimes students only put a bunch of figures into the Results section and then completely freeze, having no idea how to start writing around them. So I wanted to write this blog to share some practical advice on what these sections are *supposed* to do.



I am a CS PhD student working in bioinformatics, so the following tips are mainly for methodology papers. I also assume you already have your methods finished and already know what figures/tables/experiments you want to include. Also, this is *not* a blog about polishing English or fancy phrasing. I just want to talk about the *structure* and *logic* of Introduction and Results sections: what they are trying to communicate and what readers expect to see there.



# Introduction

Personally, I think a good Introduction looks like a **reverse hourglass**. You start broad, narrow down to the specific problem, and finally focus on your own work. Typically, it includes four parts.

## **1. Background: why should anyone care?**

First, explain the background of your problem. Why is this problem important? Why should readers care about it? What applications or scientific questions motivate it? Who cares about this problem? This part usually requires reading many papers related to your field and citing the appropriate literature. In many cases, this is also where you convince reviewers that your problem is not just “something random I happened to work on at 2 AM.”

## **2. Previous/related works and their limitations**

**There are very few completely new things under the sun.** With 99% probability, somebody has already worked on exactly your problem before. (And if you are truly in the 1% case… congratulations, but you still have related work anyway.)

So here, you briefly summarize previous methods and explain their limitations. Maybe they are:

- not accurate enough,
- too slow,
- memory inefficient,
- based on unrealistic assumptions,
- or unable to handle more general cases.

This naturally leads readers to the research gap. 

## **3. What do** **you** **do?**

Now you finally introduce your method.

At this point, readers already understand:

- the importance of the problem,
- previous solutions/attempts,
- and the missing gap.

So your method should feel like a natural next step. You should mention the main idea and contributions of your work, but avoid too many technical details here. Save those for Methods. The Introduction should focus more on:

- what is new about your method,
- what your method achieves,
- why it matters and what impact it could have.

Think of it as a movie trailer, not the full movie.

## **4. How do you evaluate it?**

Finally, briefly explain how you evaluate your method and summarize the main results. This part is actually more important than many students realize. Sometimes evaluation itself is difficult:

- maybe there is no ground truth,
- maybe existing benchmarks are limited,
- maybe metrics are controversial,
- maybe simulations are needed.

You should briefly explain your evaluation setup and give readers a quick sense of the performance. For example:

- “Our method improves accuracy by XX%,”
- “reduces memory usage,”
- “scales to larger datasets,” etc.

**Note**, every paper is different, for example, sometimes the limitations are not obvious to readers. In that case, you may need an extra paragraph or example to carefully explain *why* existing approaches are insufficient. So, you should adapt the structure to your own story. But overall, the logic flow should remain clear. The goal is not to tell readers everything, but to guide them to why your work is necessary.

# Results

In my opinion, a good Results section usually contains four or five components.

## **1. Clearly describe the datasets**

Readers first need to know what data you used. Sometimes you may create a separate subsection called “Datasets” so you do not need to repeatedly explain the same information in every experiment.

Try to help readers understand:

- where the data comes from,
- what the data looks like i.e. summary statistics that are relevant to your problem,
- and why it is relevant, etc. 

## **2. Clearly explain the experiment settings**

Before showing results, explain how you did the experiment, for example:

- parameters,
- experiment settings,
- baselines,
- replication details, etc. 

Readers need enough detail to understand what you actually did and potentially reproduce your experiments later.

## **3. Explain your figures and tables carefully**

Never assume figures explain themselves automatically. You should explicitly describe the following things in the main text (and captions, if needed):

- what the X-axis means,
- what the Y-axis means,
- what metrics are used,
- what each color/line/bar represents, etc. 

You are helping readers interpret the results. Remember: after staring at your own figures for three months, you may think they are “obvious.” They are not obvious to anyone else. A surprising number of papers skip this part and jump directly into conclusions like: “Look! Blue line better than red line!” But readers are left wondering: “What exactly am I looking at here?”

## **4. Summarize the takeaway honestly**

After presenting the figure/table, summarize the key takeaway. For example:

- how much improvement you achieved,
- where your method performs best,
- what tradeoffs exist,
- or where performance changes, etc. 

This is the honest summary of what readers should learn from the experiment. In some cases, it may become a bit nagging if you try to cover everything, you can pick one representative/typical example to say, for example, when $x=30$, we achieve $20\times$ faster running time than previous work. 

## **5. Discussion and interpretation**

This is the part many students forget. Besides honestly reporting results, you can also discuss:

- why your method improves performance,
- possible explanations for patterns in the figure,
- or intuitions behind the observations.

Importantly, these explanations do not always need rigorous validation. Sometimes they are just simply reasonable interpretations or guesses.

And honestly, this part becomes especially important when results look weird. Maybe:

- one dataset behaves strangely,
- one baseline unexpectedly wins,
- or your method suddenly performs worse somewhere.

Many authors may try very hard to hide these cases from readers (just kidding… maybe). But personally, I appreciate papers that honestly discuss unexpected behaviors and provide some intuition for why they happen. Even if the explanation is not fully validated yet, it still helps readers understand the story behind the results.

Again, every paper is different, so please adapt these ideas to your own situation.



# End

I hope these tips can help you get started with your thesis or paper writing. Writing papers is painful for many people at the beginning, so if you feel confused, you are definitely not alone. And of course, I wish your papers get accepted :)

Feel free to discuss or share your own thoughts about writing Introduction and Results sections. (I am very happy to write this type of blog, because, for once, I do not need to worry about citations)





