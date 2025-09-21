// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Check out my full list of publications on my Google Scholar. (* indicates equal contribution)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/assets/pdf/CV_YutingNing.pdf";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-paper-towards-a-holistic-understanding-of-mathematical-questions-with-contrastive-pre-training-is-accepted-by-aaai-2023",
          title: 'Our paper Towards a Holistic Understanding of Mathematical Questions with Contrastive Pre-training is...',
          description: "",
          section: "News",},{id: "news-our-team-long-won-the-4th-and-3rd-place-for-two-subtasks-respectively-in-nl4opt-neurips-2022-competition-i-will-present-our-solutions-in-the-workshop-check-out-our-poster-and-slides",
          title: 'Our team, Long, won the 4th and 3rd place for two subtasks respectively...',
          description: "",
          section: "News",},{id: "news-our-report-paper-a-novel-approach-for-auto-formulation-of-optimization-problems-for-nl4opt-neurips-2022-competition-is-now-available-at-arxiv",
          title: 'Our report paper A Novel Approach for Auto-Formulation of Optimization Problems for NL4Opt...',
          description: "",
          section: "News",},{id: "news-our-work-efficiently-measuring-the-cognitive-ability-of-llms-an-adaptive-testing-perspective-is-now-available-at-arxiv",
          title: 'Our work Efficiently Measuring the Cognitive Ability of LLMs: An Adaptive Testing Perspective...',
          description: "",
          section: "News",},{id: "news-i-am-joining-ink-lab-at-usc-as-a-visiting-graduate-student-working-with-prof-xiang-ren",
          title: 'I am joining INK Lab at USC as a visiting graduate student, working...',
          description: "",
          section: "News",},{id: "news-excited-to-share-our-new-work-in-search-of-the-long-tail-systematic-generation-of-long-tail-knowledge-via-logical-rule-guided-search",
          title: 'Excited to share our new work In Search of the Long-Tail: Systematic Generation...',
          description: "",
          section: "News",},{id: "news-check-out-our-world-model-pandora",
          title: 'Check out our world model 🪄Pandora!',
          description: "",
          section: "News",},{id: "news-check-out-edunlp-a-unified-and-modularized-library-for-educational-resources-don-t-forget-to-star-our-project",
          title: 'Check out 📑EduNLP: a unified and modularized library for educational resources. Don’t forget...',
          description: "",
          section: "News",},{id: "news-start-my-phd-at-osu",
          title: 'Start my PhD at OSU! 🥳',
          description: "",
          section: "News",},{id: "news-check-out-our-scienceagentbench-a-new-benchmark-to-rigorously-assess-language-agents-for-data-driven-scientific-discovery",
          title: 'Check out our 🔬ScienceAgentBench, a new benchmark to rigorously assess language agents for...',
          description: "",
          section: "News",},{id: "news-excited-to-share-my-first-project-during-my-phd-webdreamer-using-your-llms-as-a-web-world-model-for-model-based-planning",
          title: 'Excited to share my first project during my PhD - 💭WebDreamer, using your...',
          description: "",
          section: "News",},{id: "news-mind2web-2-is-released-a-rigorous-agentic-search-benchmark-with-long-horizon-tasks-and-agent-as-a-judge-evaluation",
          title: '🔍 Mind2Web 2 is released! A rigorous agentic search benchmark with long-horizon tasks...',
          description: "",
          section: "News",},{id: "news-glad-to-share-mind2web-2-is-accepted-to-neurips-2025-see-you-in-san-diego",
          title: 'Glad to share 🔍 Mind2Web 2 is accepted to NeurIPS 2025! See you...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%69%6E%67.%31%35%31@%62%75%63%6B%65%79%65%6D%61%69%6C.%6F%73%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/nnnyt", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yuting-ning-612a24323", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=HYmzF-QAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/yuting_ning", "_blank");
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
