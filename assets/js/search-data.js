// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-talks-posters-and-teaching",
          title: "Talks, Posters and Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-travelling-gallery",
          title: "Travelling Gallery",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-summary-for-latest-studies-on-centromere-evolution-and-mutation",
        
          title: "Summary for Latest studies on Centromere Evolution and Mutation",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/Centromere_Summary/";
          
        },
      },{id: "post-automated-annotation-of-human-centromeres-with-hormon",
        
          title: "Automated annotation of human centromeres with HORmon",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/HORmon/";
          
        },
      },{id: "post-centromerearchitect-inference-and-analysis-of-the-architecture-of-centromeres",
        
          title: "CentromereArchitect--inference and analysis of the architecture of centromeres",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/CentromereArchitect/";
          
        },
      },{id: "post-fastga-fast-genome-alignment",
        
          title: "FastGA -- fast genome alignment",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/FastGA/";
          
        },
      },{id: "post-expectation-of-absolute-distance-in-random-walk",
        
          title: "Expectation of absolute distance in Random walk",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/Random_Walk/";
          
        },
      },{id: "post-randomized-algs-permutation-routing-problem",
        
          title: "Randomized Algs:Permutation Routing Problem",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ADA_Lec_27/";
          
        },
      },{id: "post-randomized-algs-chernoff-bound",
        
          title: "Randomized Algs:Chernoff Bound",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ADA_Lec_26/";
          
        },
      },{id: "post-randomized-algs-randomized-selection",
        
          title: "Randomized Algs:Randomized Selection",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ADA_Lec_25/";
          
        },
      },{id: "post-randomized-algs-occupancy-problems-amp-markov-39-s-and-chebyshev-39-s-inequalities",
        
          title: "Randomized Algs:Occupancy Problems &amp; Markov&#39;s and Chebyshev&#39;s inequalities",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ADA_Lec_24/";
          
        },
      },{id: "post-randomized-algs-randomized-min-cut",
        
          title: "Randomized Algs:Randomized Min-Cut",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ADA_Lec_23/";
          
        },
      },{id: "post-randomized-algs-randomized-quicksort",
        
          title: "Randomized Algs:Randomized QuickSort",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ADA_Lec_22/";
          
        },
      },{id: "post-rounding-and-dynamic-programming-parallel-machines-job-scheduling",
        
          title: "Rounding and Dynamic Programming:Parallel Machines Job Scheduling",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ADA_Lec_21/";
          
        },
      },{id: "post-rounding-and-dynamic-programming-parallel-macines-job-scheduling",
        
          title: "Rounding and Dynamic Programming:Parallel Macines Job Scheduling",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ADA_Lec_20/";
          
        },
      },{id: "post-gready-alg-and-local-search-minimum-degree-spanning-tree",
        
          title: "Gready Alg and Local Search:Minimum-Degree Spanning Tree",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ADA_Lec_19/";
          
        },
      },{id: "post-gready-alg-and-local-search-parallel-macines-job-scheduling",
        
          title: "Gready Alg and Local Search:Parallel Macines Job Scheduling",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ADA_Lec_18/";
          
        },
      },{id: "post-gready-alg-and-local-search-the-k-center-problem",
        
          title: "Gready Alg and Local Search:The k-center problem",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ADA_Lec_17/";
          
        },
      },{id: "post-gready-alg-and-local-search-single-macine-job-scheduling",
        
          title: "Gready Alg and Local Search:Single Macine Job Scheduling",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ADA_Lec_16/";
          
        },
      },{id: "post-intro-appro-alg-randomized-rounding-algorithm",
        
          title: "Intro Appro Alg:Randomized Rounding Algorithm",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ADA_Lec_15/";
          
        },
      },{id: "post-intro-appro-alg-gready-algorithm",
        
          title: "Intro Appro Alg:Gready Algorithm",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ADA_Lec_14/";
          
        },
      },{id: "post-intro-appro-alg-primal-dual-method",
        
          title: "Intro Appro Alg:Primal-Dual Method",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ADA_Lec_13/";
          
        },
      },{id: "post-intro-appro-alg-rounding-and-dual-rounding-algorithm",
        
          title: "Intro Appro Alg:Rounding and Dual rounding algorithm",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ADA_Lec_12/";
          
        },
      },{id: "post-intro-appro-alg-definition-and-lp-techniques",
        
          title: "Intro Appro Alg:Definition and LP techniques",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ADA_Lec_11/";
          
        },
      },{id: "post-linear-programming-and-its-dual-problem",
        
          title: "Linear Programming and Its Dual Problem",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ADA_Lec_10/";
          
        },
      },{id: "post-np-np-complete-problems",
        
          title: "NP, NP-Complete Problems",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ADA_Lec_9/";
          
        },
      },{id: "post-polynimial-reduction",
        
          title: "Polynimial Reduction",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ADA_Lec_8/";
          
        },
      },{id: "post-applications-of-max-flow",
        
          title: "Applications of Max flow",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ADA_Lec_7/";
          
        },
      },{id: "post-polynomial-time-algorithm-to-max-flow-problem",
        
          title: "Polynomial time Algorithm to Max flow problem",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ADA_Lec_6/";
          
        },
      },{id: "post-ford-fulkerson-algorithm",
        
          title: "Ford-Fulkerson Algorithm",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ADA_Lec_5/";
          
        },
      },{id: "post-max-flow-and-min-cut",
        
          title: "Max flow and Min Cut",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ADA_Lec_4/";
          
        },
      },{id: "post-dynamic-programming-rna-secondary-strucure-problem-sequence-alignment-multiple-sequence-alignment",
        
          title: "Dynamic Programming:RNA secondary strucure problem, Sequence alignment, Multiple sequence alignment",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ADA_Lec_3/";
          
        },
      },{id: "post-dynamic-programming-knapsack-problem-fibonacci-number",
        
          title: "Dynamic Programming:Knapsack Problem, Fibonacci number",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ADA_Lec_2/";
          
        },
      },{id: "post-dynamic-programming-weighted-interval-scheduling",
        
          title: "Dynamic Programming:Weighted interval Scheduling",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ADA_Lec_1/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-passed-the-qualifying-exam-in-the-cse-phd-program-at-penn-state",
          title: 'I passed the Qualifying Exam in the CSE PhD program at Penn State...',
          description: "",
          section: "News",},{id: "news-our-paper-a-k-mer-based-estimator-of-the-substitution-rate-between-repetitive-sequences-was-accepted-by-wabi-2025",
          title: 'Our Paper A k-mer-based estimator of the substitution rate between repetitive sequences was...',
          description: "",
          section: "News",},{id: "news-i-give-the-talk-don-t-repeat-no-repeat-a-k-mer-based-estimator-of-the-substitution-rate-between-repetitive-sequences-at-wabi2025",
          title: 'I give the talk “Don’t repeat no repeat: A k-mer-based estimator of the...',
          description: "",
          section: "News",},{id: "news-i-give-a-talk-at-genome-informatics-2025-with-title-don-t-repeat-no-repeat-a-k-mer-based-estimator-of-the-substitution-rate-between-repetitive-sequences",
          title: 'I give a talk at Genome Informatics 2025 with title “Don’t repeat no...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/haonanwu.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%76%77%35%34%32%36@%70%73%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Wu-haonan# your GitHub user name", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/haonan-wu-2a7006193", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-4158-8678", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=https://scholar.google.com/citations?user=5I_-Lb0AAAAJ&hl=en", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/HaonanWu_1998", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
