import { Track } from "./types";

export const frontendTrack: Track = {
  id: "frontend",
  title: "Frontend Developer",
  description:
    "Master modern frontend development — from HTML and CSS fundamentals to React, build tools, testing, and performance optimization.",
  icon: "Layout",
  color: "cyan",
  category: "web",
  modules: [
    {
      id: "fe-internet-fundamentals",
      title: "Internet Fundamentals",
      description:
        "How the internet works, HTTP, domain names, DNS, hosting, and how browsers render pages.",
      icon: "Globe",
      trackId: "frontend",
      order: 1,
      lessons: [
        {
          id: "fe-how-internet-works",
          title: "How the Internet Works",
          description:
            "Understand packets, protocols, and how data travels across the globe.",
          duration: "20 min",
          videoId: "7_LPdttKXPc",
          videoTitle: "How The Internet Works",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "fe-http-https",
          title: "HTTP & HTTPS",
          description:
            "The HTTP request/response cycle, methods, status codes, and how HTTPS encrypts traffic.",
          duration: "25 min",
          videoId: "iYM2zFP3Zn0",
          videoTitle: "HTTP Crash Course & Exploration",
          videoChannel: "Traversy Media",
          hasTerminal: false,
        },
        {
          id: "fe-domain-names",
          title: "Domain Names & DNS",
          description:
            "How domain names resolve to IP addresses and how DNS works.",
          duration: "15 min",
          videoId: "27r4Bzuj5NQ",
          videoTitle: "DNS Explained in 100 Seconds",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
        {
          id: "fe-hosting",
          title: "Web Hosting",
          description:
            "Types of hosting — shared, VPS, dedicated, cloud, and static site hosting.",
          duration: "15 min",
          hasTerminal: false,
        },
        {
          id: "fe-how-browsers-work",
          title: "How Browsers Work",
          description:
            "The browser rendering pipeline — parsing HTML, CSS, layout, painting, and compositing.",
          duration: "25 min",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Explain the Request Lifecycle",
        description:
          "Write a document explaining what happens from typing a URL in the browser to seeing the full webpage — covering DNS, TCP, HTTP, and rendering.",
        difficulty: "beginner",
        estimatedHours: 2,
        skills: ["HTTP", "DNS", "Networking", "Browser rendering"],
      },
    },
    {
      id: "fe-html",
      title: "HTML",
      description:
        "Learn semantic HTML, accessibility, forms, and SEO basics — the foundation of every webpage.",
      icon: "FileText",
      trackId: "frontend",
      order: 2,
      lessons: [
        {
          id: "fe-html-basics",
          title: "HTML Basics & Document Structure",
          description:
            "Tags, elements, attributes, head vs body, and creating your first HTML page.",
          duration: "30 min",
          videoId: "UB1O30fR-EE",
          videoTitle: "HTML Crash Course For Absolute Beginners",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create your first HTML file:\n1. `touch index.html`\n2. Add basic HTML structure:\n   <!DOCTYPE html>\n   <html><head><title>My Page</title></head>\n   <body><h1>Hello World</h1></body></html>\n3. `cat index.html`",
            validation: "cat index.html",
          },
        },
        {
          id: "fe-semantic-html",
          title: "Semantic HTML",
          description:
            "Use meaningful tags — header, nav, main, article, section, footer — for accessibility and SEO.",
          duration: "20 min",
          hasTerminal: false,
        },
        {
          id: "fe-forms-inputs",
          title: "Forms & Input Elements",
          description:
            "Build interactive forms with input types, validation, labels, and fieldsets.",
          duration: "25 min",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create a form:\n1. Create `form.html` with a registration form\n2. Include: text, email, password, checkbox, and submit button\n3. Add proper labels and required attributes",
            validation: "cat form.html",
          },
        },
        {
          id: "fe-accessibility-basics",
          title: "Accessibility (a11y) Basics",
          description:
            "ARIA roles, alt text, keyboard navigation, and screen reader considerations.",
          duration: "20 min",
          hasTerminal: false,
        },
        {
          id: "fe-seo-basics",
          title: "SEO Basics with HTML",
          description:
            "Meta tags, Open Graph, structured data, and HTML best practices for search engines.",
          duration: "15 min",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Personal Portfolio Page (HTML Only)",
        description:
          "Build a semantic HTML portfolio page with proper heading hierarchy, navigation, about section, projects list, and contact form. No CSS — pure HTML structure.",
        difficulty: "beginner",
        estimatedHours: 3,
        skills: ["Semantic HTML", "Forms", "Accessibility", "SEO meta tags"],
      },
    },
    {
      id: "fe-css",
      title: "CSS",
      description:
        "Style your pages with CSS — selectors, box model, flexbox, grid, responsive design, and animations.",
      icon: "Paintbrush",
      trackId: "frontend",
      order: 3,
      lessons: [
        {
          id: "fe-css-basics",
          title: "CSS Basics & Selectors",
          description:
            "Selectors, specificity, cascade, inheritance, and linking stylesheets.",
          duration: "30 min",
          videoId: "1PnVor36_40",
          videoTitle: "CSS Crash Course For Absolute Beginners",
          videoChannel: "Traversy Media",
          hasTerminal: false,
        },
        {
          id: "fe-box-model",
          title: "Box Model & Spacing",
          description:
            "Content, padding, border, margin — how the box model works and box-sizing.",
          duration: "20 min",
          hasTerminal: false,
        },
        {
          id: "fe-flexbox",
          title: "Flexbox Layout",
          description:
            "Build flexible layouts with flex-direction, justify-content, align-items, flex-wrap, and gap.",
          duration: "30 min",
          videoId: "JJSoEo8JSnc",
          videoTitle: "Flexbox CSS In 20 Minutes",
          videoChannel: "Traversy Media",
          hasTerminal: false,
        },
        {
          id: "fe-css-grid",
          title: "CSS Grid Layout",
          description:
            "Two-dimensional layouts with grid-template, grid-area, auto-fit, auto-fill, and fr units.",
          duration: "30 min",
          videoId: "0xMQfnTU6oo",
          videoTitle: "CSS Grid Layout Crash Course",
          videoChannel: "Traversy Media",
          hasTerminal: false,
        },
        {
          id: "fe-responsive-design",
          title: "Responsive Design & Media Queries",
          description:
            "Mobile-first design, breakpoints, media queries, and responsive images.",
          duration: "25 min",
          hasTerminal: false,
        },
        {
          id: "fe-css-animations",
          title: "CSS Animations & Transitions",
          description:
            "Transitions, keyframe animations, transforms, and performance considerations.",
          duration: "20 min",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Responsive Landing Page",
        description:
          "Style your portfolio page with CSS — responsive layout using flexbox/grid, custom typography, hover effects, and mobile-friendly design.",
        difficulty: "beginner",
        estimatedHours: 4,
        skills: [
          "Flexbox",
          "CSS Grid",
          "Media queries",
          "Animations",
          "Responsive design",
        ],
      },
    },
    {
      id: "fe-javascript",
      title: "JavaScript",
      description:
        "Learn JavaScript from scratch — variables, functions, DOM manipulation, async programming, and ES6+ features.",
      icon: "Code",
      trackId: "frontend",
      order: 4,
      lessons: [
        {
          id: "fe-js-basics",
          title: "JavaScript Basics",
          description:
            "Variables, data types, operators, conditionals, and loops.",
          duration: "35 min",
          videoId: "hdI2bqOjy3c",
          videoTitle: "JavaScript Crash Course For Beginners",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Write your first JavaScript:\n1. Create `app.js`\n2. Add: const name = 'Frontend Dev';\n   console.log(`Hello, ${name}!`);\n   for (let i = 1; i <= 5; i++) { console.log(`Step ${i}`); }\n3. Run: `node app.js`",
            validation: "node app.js",
          },
        },
        {
          id: "fe-js-functions",
          title: "Functions & Scope",
          description:
            "Function declarations, expressions, arrow functions, closures, and scope.",
          duration: "25 min",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice functions:\n1. Create `functions.js`\n2. Write a function that takes an array of numbers and returns the sum\n3. Write an arrow function that filters even numbers\n4. Run: `node functions.js`",
            validation: "node functions.js",
          },
        },
        {
          id: "fe-js-arrays-objects",
          title: "Arrays & Objects",
          description:
            "Array methods (map, filter, reduce), object destructuring, spread/rest operators.",
          duration: "30 min",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice arrays and objects:\n1. Create `data.js`\n2. Create an array of user objects\n3. Use map, filter, and reduce to transform the data\n4. Use destructuring to extract values\n5. Run: `node data.js`",
            validation: "node data.js",
          },
        },
        {
          id: "fe-dom-manipulation",
          title: "DOM Manipulation",
          description:
            "Select elements, modify content, handle events, and dynamically update the page.",
          duration: "30 min",
          videoId: "y17RuWkWdn8",
          videoTitle: "JavaScript DOM Manipulation",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "fe-async-js",
          title: "Async JavaScript",
          description:
            "Callbacks, Promises, async/await, and the event loop explained.",
          duration: "35 min",
          videoId: "PoRJizFvM7s",
          videoTitle: "Async JavaScript Crash Course",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice async:\n1. Create `async.js`\n2. Write an async function that fetches data:\n   async function fetchData() {\n     const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');\n     const data = await res.json();\n     console.log(data.title);\n   }\n   fetchData();\n3. Run: `node async.js`",
            validation: "node async.js",
          },
        },
        {
          id: "fe-fetch-api",
          title: "Fetch API & Working with APIs",
          description:
            "Making HTTP requests, handling responses, error handling, and CORS.",
          duration: "25 min",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice fetch:\n1. Create `api.js`\n2. Fetch a list of users from jsonplaceholder\n3. Display each user's name and email\n4. Add error handling with try/catch\n5. Run: `node api.js`",
            validation: "node api.js",
          },
        },
        {
          id: "fe-es6-features",
          title: "ES6+ Features",
          description:
            "Template literals, destructuring, modules, optional chaining, nullish coalescing.",
          duration: "25 min",
          videoId: "NCwa_xi0Uuc",
          videoTitle: "JavaScript ES6 Tutorial",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Interactive Todo App",
        description:
          "Build a todo app with vanilla JavaScript — add, complete, delete, filter tasks, persist to localStorage, and style with CSS.",
        difficulty: "beginner",
        estimatedHours: 5,
        skills: [
          "DOM manipulation",
          "Event handling",
          "localStorage",
          "ES6+",
          "Async JS",
        ],
      },
    },
    {
      id: "fe-version-control",
      title: "Version Control with Git",
      description:
        "Learn Git for frontend development — commits, branches, and collaborating on GitHub.",
      icon: "GitBranch",
      trackId: "frontend",
      order: 5,
      lessons: [
        {
          id: "fe-git-basics",
          title: "Git Basics for Frontend",
          description:
            "Init, add, commit, status, log — the core Git workflow for frontend projects.",
          duration: "25 min",
          videoId: "HVsySz-h9r4",
          videoTitle: "Git & GitHub Crash Course For Beginners",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Initialize a frontend project:\n1. `mkdir my-site && cd my-site`\n2. `git init`\n3. `touch index.html style.css app.js`\n4. `git add .`\n5. `git commit -m 'Initial commit'`\n6. `git log --oneline`",
            validation: "git commit",
          },
        },
        {
          id: "fe-github-workflow",
          title: "GitHub & Pull Requests",
          description:
            "Push to GitHub, create pull requests, code review, and GitHub Pages.",
          duration: "20 min",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "GitHub workflow:\n1. `git checkout -b feature/nav`\n2. Make changes to index.html\n3. `git add . && git commit -m 'Add navigation'`\n4. `git push origin feature/nav`\n5. Create a pull request on GitHub",
            validation: "git push",
          },
        },
        {
          id: "fe-gitignore",
          title: ".gitignore & Best Practices",
          description:
            "Ignore node_modules, .env, build artifacts, and write meaningful commits.",
          duration: "15 min",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create .gitignore:\n1. `echo 'node_modules/\\n.env\\ndist/\\n.DS_Store' > .gitignore`\n2. `cat .gitignore`\n3. `git add .gitignore && git commit -m 'Add gitignore'`",
            validation: "cat .gitignore",
          },
        },
      ],
      project: {
        title: "Collaborative GitHub Repository",
        description:
          "Set up a GitHub repo for your portfolio with proper .gitignore, README, branch protection, and at least 3 feature branches merged via pull requests.",
        difficulty: "beginner",
        estimatedHours: 2,
        skills: ["Git", "GitHub", "Branching", "Pull requests"],
      },
    },
    {
      id: "fe-package-managers",
      title: "Package Managers",
      description:
        "Manage dependencies with npm, yarn, and pnpm — installing, updating, and publishing packages.",
      icon: "Package",
      trackId: "frontend",
      order: 6,
      lessons: [
        {
          id: "fe-npm-basics",
          title: "npm Basics",
          description:
            "package.json, npm install, scripts, versioning, and the node_modules folder.",
          duration: "20 min",
          videoId: "P3aKRdUyr0s",
          videoTitle: "NPM Crash Course",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "npm setup:\n1. `mkdir my-project && cd my-project`\n2. `npm init -y`\n3. `npm install lodash`\n4. `cat package.json`\n5. `ls node_modules | head -5`",
            validation: "cat package.json",
          },
        },
        {
          id: "fe-yarn-pnpm",
          title: "yarn & pnpm Overview",
          description:
            "Alternatives to npm — why they exist, when to use them, and key differences.",
          duration: "15 min",
          hasTerminal: false,
        },
        {
          id: "fe-npm-scripts",
          title: "npm Scripts & Task Running",
          description:
            "Define custom scripts for dev, build, test, and lint in package.json.",
          duration: "15 min",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Add scripts to package.json:\n1. Add a 'start' script: node index.js\n2. Add a 'dev' script: nodemon index.js\n3. Add a 'build' script: echo 'Building...'\n4. Run: `npm run build`",
            validation: "npm run",
          },
        },
      ],
      project: {
        title: "Package-Managed Project",
        description:
          "Initialize a project with npm, add 3+ useful packages, configure scripts for dev/build/lint, and document usage in README.",
        difficulty: "beginner",
        estimatedHours: 2,
        skills: ["npm", "package.json", "Scripts", "Dependencies"],
      },
    },
    {
      id: "fe-tailwind",
      title: "CSS Frameworks (Tailwind CSS)",
      description:
        "Build modern UIs rapidly with Tailwind CSS utility classes.",
      icon: "Wind",
      trackId: "frontend",
      order: 7,
      lessons: [
        {
          id: "fe-tailwind-basics",
          title: "Tailwind CSS Fundamentals",
          description:
            "Utility-first approach, setup, configuration, and core utility classes.",
          duration: "30 min",
          videoId: "UBOj6rqRUME",
          videoTitle: "Tailwind CSS Crash Course",
          videoChannel: "Traversy Media",
          hasTerminal: false,
        },
        {
          id: "fe-tailwind-responsive",
          title: "Responsive Design with Tailwind",
          description:
            "Breakpoint prefixes (sm, md, lg, xl), responsive utilities, and mobile-first approach.",
          duration: "20 min",
          hasTerminal: false,
        },
        {
          id: "fe-tailwind-components",
          title: "Building Components with Tailwind",
          description:
            "Cards, navbars, buttons, modals, and forms using Tailwind utilities.",
          duration: "25 min",
          hasTerminal: false,
        },
        {
          id: "fe-tailwind-customization",
          title: "Tailwind Config & Customization",
          description:
            "Custom colors, fonts, spacing, plugins, and the tailwind.config.js file.",
          duration: "20 min",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Tailwind Landing Page",
        description:
          "Recreate a modern landing page design using only Tailwind CSS — hero section, features grid, testimonials, pricing table, and footer.",
        difficulty: "beginner",
        estimatedHours: 4,
        skills: ["Tailwind CSS", "Responsive design", "Component patterns"],
      },
    },
    {
      id: "fe-react",
      title: "React",
      description:
        "Build modern UIs with React — components, state, hooks, and the React ecosystem.",
      icon: "Atom",
      trackId: "frontend",
      order: 8,
      lessons: [
        {
          id: "fe-react-intro",
          title: "React Introduction & Setup",
          description:
            "What is React, virtual DOM, JSX, and creating your first React app.",
          duration: "30 min",
          videoId: "Tn6-PIqc4UM",
          videoTitle: "React in 100 Seconds",
          videoChannel: "Fireship",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create a React app:\n1. `npx create-next-app@latest my-react-app`\n2. `cd my-react-app`\n3. `npm run dev`\n4. Open http://localhost:3000",
            validation: "npx create",
          },
        },
        {
          id: "fe-react-components",
          title: "Components & Props",
          description:
            "Functional components, props, children, composition, and component patterns.",
          duration: "30 min",
          videoId: "w7ejDZ8SWv8",
          videoTitle: "React JS Crash Course",
          videoChannel: "Traversy Media",
          hasTerminal: false,
        },
        {
          id: "fe-react-state",
          title: "State & useState",
          description:
            "Managing component state with useState, state updates, and derived state.",
          duration: "25 min",
          hasTerminal: false,
        },
        {
          id: "fe-react-effects",
          title: "useEffect & Side Effects",
          description:
            "Data fetching, subscriptions, cleanup, and dependency arrays.",
          duration: "25 min",
          hasTerminal: false,
        },
        {
          id: "fe-react-events",
          title: "Event Handling & Forms",
          description:
            "Handling clicks, form submissions, controlled vs uncontrolled components.",
          duration: "20 min",
          hasTerminal: false,
        },
        {
          id: "fe-react-hooks",
          title: "Advanced Hooks (useContext, useReducer, useRef)",
          description:
            "Context API for global state, reducers for complex state, and refs for DOM access.",
          duration: "30 min",
          hasTerminal: false,
        },
        {
          id: "fe-react-patterns",
          title: "React Patterns",
          description:
            "Custom hooks, render props, compound components, and code organization.",
          duration: "25 min",
          hasTerminal: false,
        },
      ],
      project: {
        title: "React Dashboard App",
        description:
          "Build a dashboard with React — data display with charts, form inputs, API data fetching, state management, and reusable components.",
        difficulty: "intermediate",
        estimatedHours: 8,
        skills: [
          "React",
          "Hooks",
          "State management",
          "API integration",
          "Component patterns",
        ],
      },
    },
    {
      id: "fe-typescript",
      title: "TypeScript",
      description:
        "Add type safety to your JavaScript — types, interfaces, generics, and TypeScript with React.",
      icon: "FileType",
      trackId: "frontend",
      order: 9,
      lessons: [
        {
          id: "fe-ts-basics",
          title: "TypeScript Basics",
          description:
            "Types, interfaces, type aliases, unions, and setting up a TypeScript project.",
          duration: "30 min",
          videoId: "BCg4U1FzODs",
          videoTitle: "TypeScript Crash Course",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "TypeScript setup:\n1. `npm init -y && npm install typescript`\n2. `npx tsc --init`\n3. Create `app.ts`:\n   interface User { name: string; age: number; }\n   const user: User = { name: 'Dev', age: 25 };\n   console.log(user);\n4. `npx tsc && node app.js`",
            validation: "npx tsc",
          },
        },
        {
          id: "fe-ts-advanced",
          title: "Advanced Types & Generics",
          description:
            "Generics, utility types, type guards, discriminated unions, and mapped types.",
          duration: "30 min",
          hasTerminal: false,
        },
        {
          id: "fe-ts-react",
          title: "TypeScript with React",
          description:
            "Typing components, props, hooks, events, and API responses in React.",
          duration: "25 min",
          hasTerminal: false,
        },
      ],
      project: {
        title: "TypeScript Utility Library",
        description:
          "Build a small utility library in TypeScript with generics, proper interfaces, and comprehensive type definitions. Include unit tests.",
        difficulty: "intermediate",
        estimatedHours: 4,
        skills: [
          "TypeScript",
          "Generics",
          "Interfaces",
          "Type guards",
          "Testing",
        ],
      },
    },
    {
      id: "fe-build-tools",
      title: "Build Tools",
      description:
        "Understand bundlers, transpilers, and modern build tooling — Vite, esbuild, and Webpack.",
      icon: "Hammer",
      trackId: "frontend",
      order: 10,
      lessons: [
        {
          id: "fe-why-build-tools",
          title: "Why Build Tools?",
          description:
            "Bundling, minification, code splitting, tree shaking, and the build pipeline.",
          duration: "15 min",
          hasTerminal: false,
        },
        {
          id: "fe-vite",
          title: "Vite",
          description:
            "Lightning-fast dev server, HMR, build optimization, and Vite configuration.",
          duration: "25 min",
          videoId: "KCrXgy8qtjM",
          videoTitle: "Vite in 100 Seconds",
          videoChannel: "Fireship",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create a Vite project:\n1. `npm create vite@latest my-vite-app -- --template react-ts`\n2. `cd my-vite-app && npm install`\n3. `npm run dev`\n4. `npm run build`\n5. `ls dist/`",
            validation: "npm run build",
          },
        },
        {
          id: "fe-esbuild-rollup",
          title: "esbuild & Rollup Overview",
          description:
            "Alternative bundlers and their roles in the modern toolchain.",
          duration: "15 min",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Custom Vite Project Setup",
        description:
          "Set up a Vite project with React, TypeScript, Tailwind CSS, path aliases, and environment variables. Configure build optimization.",
        difficulty: "intermediate",
        estimatedHours: 3,
        skills: ["Vite", "Build configuration", "Environment variables"],
      },
    },
    {
      id: "fe-linters-formatters",
      title: "Linters & Formatters",
      description:
        "Maintain code quality with ESLint, Prettier, and automated formatting.",
      icon: "CheckSquare",
      trackId: "frontend",
      order: 11,
      lessons: [
        {
          id: "fe-eslint",
          title: "ESLint Setup & Configuration",
          description:
            "Install ESLint, configure rules, plugins, and integrate with your editor.",
          duration: "20 min",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Set up ESLint:\n1. `npm install eslint --save-dev`\n2. `npx eslint --init`\n3. Create a file with intentional issues\n4. `npx eslint src/`\n5. Fix issues: `npx eslint src/ --fix`",
            validation: "npx eslint",
          },
        },
        {
          id: "fe-prettier",
          title: "Prettier & Code Formatting",
          description:
            "Auto-format code with Prettier, configure rules, and integrate with ESLint.",
          duration: "15 min",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Set up Prettier:\n1. `npm install prettier --save-dev`\n2. Create `.prettierrc`: { \"singleQuote\": true, \"semi\": true }\n3. `npx prettier --write src/`",
            validation: "npx prettier",
          },
        },
      ],
      project: {
        title: "Linting & Formatting Config",
        description:
          "Configure ESLint + Prettier for a React TypeScript project, add pre-commit hooks with Husky, and document the setup.",
        difficulty: "beginner",
        estimatedHours: 2,
        skills: ["ESLint", "Prettier", "Husky", "lint-staged"],
      },
    },
    {
      id: "fe-testing",
      title: "Testing",
      description:
        "Write reliable tests — unit tests with Vitest/Jest, component tests, and E2E tests with Playwright.",
      icon: "TestTube",
      trackId: "frontend",
      order: 12,
      lessons: [
        {
          id: "fe-testing-intro",
          title: "Testing Fundamentals",
          description:
            "Types of tests, testing pyramid, test-driven development, and when to test.",
          duration: "20 min",
          hasTerminal: false,
        },
        {
          id: "fe-vitest-jest",
          title: "Unit Testing with Vitest",
          description:
            "Write unit tests, describe/it blocks, assertions, mocking, and test coverage.",
          duration: "30 min",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Write your first test:\n1. `npm install vitest --save-dev`\n2. Create `sum.ts`: export const sum = (a, b) => a + b;\n3. Create `sum.test.ts`:\n   import { expect, test } from 'vitest';\n   import { sum } from './sum';\n   test('adds 1+2', () => expect(sum(1,2)).toBe(3));\n4. `npx vitest run`",
            validation: "npx vitest",
          },
        },
        {
          id: "fe-component-testing",
          title: "Component Testing (React Testing Library)",
          description:
            "Test React components — render, query, fire events, and assert on output.",
          duration: "30 min",
          hasTerminal: false,
        },
        {
          id: "fe-e2e-testing",
          title: "E2E Testing with Playwright",
          description:
            "End-to-end tests that simulate real user behavior in a browser.",
          duration: "30 min",
          videoId: "Xz6lhEzgI5I",
          videoTitle: "Playwright Testing Tutorial",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Tested React Component Library",
        description:
          "Build 3 reusable React components (Button, Input, Modal) with full unit tests, component tests, and one E2E test. Aim for 90%+ coverage.",
        difficulty: "intermediate",
        estimatedHours: 6,
        skills: [
          "Vitest",
          "React Testing Library",
          "Playwright",
          "Test coverage",
        ],
      },
    },
    {
      id: "fe-web-security",
      title: "Web Security",
      description:
        "Protect your frontend from common attacks — XSS, CSRF, CSP, CORS, and OWASP top risks.",
      icon: "Shield",
      trackId: "frontend",
      order: 13,
      lessons: [
        {
          id: "fe-xss-prevention",
          title: "XSS Prevention",
          description:
            "Cross-Site Scripting attacks, input sanitization, and Content Security Policy.",
          duration: "20 min",
          hasTerminal: false,
        },
        {
          id: "fe-cors-csrf",
          title: "CORS & CSRF",
          description:
            "Cross-Origin Resource Sharing, CSRF tokens, and SameSite cookies.",
          duration: "20 min",
          hasTerminal: false,
        },
        {
          id: "fe-https-security",
          title: "HTTPS & Security Headers",
          description:
            "SSL/TLS, HSTS, X-Frame-Options, and secure cookie flags.",
          duration: "15 min",
          hasTerminal: false,
        },
        {
          id: "fe-owasp-top-10",
          title: "OWASP Top 10 for Frontend",
          description:
            "The most common web vulnerabilities relevant to frontend developers.",
          duration: "20 min",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Security Audit Checklist",
        description:
          "Create a security audit checklist for a web application and apply it to your portfolio project — fix all identified issues.",
        difficulty: "intermediate",
        estimatedHours: 3,
        skills: ["XSS", "CSRF", "CORS", "CSP", "OWASP"],
      },
    },
    {
      id: "fe-authentication",
      title: "Authentication Strategies",
      description:
        "Implement authentication — JWT, OAuth, session-based auth, and popular libraries.",
      icon: "Key",
      trackId: "frontend",
      order: 14,
      lessons: [
        {
          id: "fe-auth-methods",
          title: "Auth Methods Overview",
          description:
            "Session vs JWT, OAuth 2.0, OpenID Connect, and when to use each.",
          duration: "25 min",
          hasTerminal: false,
        },
        {
          id: "fe-jwt-auth",
          title: "JWT Authentication",
          description:
            "JSON Web Tokens, storing tokens safely, refresh tokens, and token validation.",
          duration: "25 min",
          hasTerminal: false,
        },
        {
          id: "fe-oauth-social",
          title: "OAuth & Social Login",
          description:
            "Implement GitHub/Google login with OAuth 2.0 and NextAuth/Auth.js.",
          duration: "25 min",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Auth-Protected App",
        description:
          "Add authentication to your React app — login/register forms, protected routes, JWT storage, and social login with GitHub.",
        difficulty: "intermediate",
        estimatedHours: 5,
        skills: ["JWT", "OAuth", "Protected routes", "Auth.js"],
      },
    },
    {
      id: "fe-ssr-frameworks",
      title: "SSR Frameworks (Next.js)",
      description:
        "Server-side rendering, static generation, and full-stack React with Next.js.",
      icon: "Server",
      trackId: "frontend",
      order: 15,
      lessons: [
        {
          id: "fe-nextjs-intro",
          title: "Next.js Introduction",
          description:
            "App Router, file-based routing, server components, and project setup.",
          duration: "30 min",
          videoId: "Sklc_fQBmcs",
          videoTitle: "Next.js in 100 Seconds",
          videoChannel: "Fireship",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create a Next.js app:\n1. `npx create-next-app@latest my-next-app`\n2. `cd my-next-app`\n3. `npm run dev`\n4. Create a new page: `app/about/page.tsx`",
            validation: "npx create-next-app",
          },
        },
        {
          id: "fe-nextjs-data",
          title: "Data Fetching in Next.js",
          description:
            "Server components, async components, fetch API, caching, and revalidation.",
          duration: "30 min",
          hasTerminal: false,
        },
        {
          id: "fe-nextjs-routing",
          title: "Advanced Routing",
          description:
            "Dynamic routes, route groups, middleware, layouts, and loading states.",
          duration: "25 min",
          hasTerminal: false,
        },
        {
          id: "fe-nextjs-api",
          title: "API Routes & Server Actions",
          description:
            "Build API endpoints and use server actions for form handling.",
          duration: "25 min",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Next.js Blog Platform",
        description:
          "Build a blog with Next.js — MDX content, dynamic routes, server-side rendering, API routes, and deployment to Vercel.",
        difficulty: "intermediate",
        estimatedHours: 8,
        skills: [
          "Next.js",
          "SSR",
          "API routes",
          "Dynamic routing",
          "Deployment",
        ],
      },
    },
    {
      id: "fe-graphql",
      title: "GraphQL",
      description:
        "Query APIs efficiently with GraphQL — queries, mutations, and Apollo Client.",
      icon: "Workflow",
      trackId: "frontend",
      order: 16,
      lessons: [
        {
          id: "fe-graphql-basics",
          title: "GraphQL Fundamentals",
          description:
            "Queries, mutations, subscriptions, schema, and types — how GraphQL differs from REST.",
          duration: "25 min",
          videoId: "eIQh02xuVw4",
          videoTitle: "GraphQL in 100 Seconds",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
        {
          id: "fe-apollo-client",
          title: "Apollo Client with React",
          description:
            "Set up Apollo Client, write queries, handle loading/error states, and caching.",
          duration: "30 min",
          hasTerminal: false,
        },
      ],
      project: {
        title: "GraphQL Data Explorer",
        description:
          "Build a React app that fetches data from a public GraphQL API (GitHub, SpaceX) with Apollo Client, including search, pagination, and caching.",
        difficulty: "intermediate",
        estimatedHours: 5,
        skills: ["GraphQL", "Apollo Client", "Caching", "React"],
      },
    },
    {
      id: "fe-pwa",
      title: "Progressive Web Apps",
      description:
        "Build installable, offline-capable web apps with service workers and Web APIs.",
      icon: "Smartphone",
      trackId: "frontend",
      order: 17,
      lessons: [
        {
          id: "fe-pwa-basics",
          title: "PWA Fundamentals",
          description:
            "What makes a PWA — manifest, service workers, offline support, and installability.",
          duration: "25 min",
          videoId: "sFsRylCQblw",
          videoTitle: "PWA in 100 Seconds",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
        {
          id: "fe-service-workers",
          title: "Service Workers & Caching",
          description:
            "Register service workers, cache strategies, and offline-first patterns.",
          duration: "25 min",
          hasTerminal: false,
        },
        {
          id: "fe-web-apis",
          title: "Web APIs (Notifications, Storage, etc.)",
          description:
            "Push notifications, IndexedDB, Geolocation, and other Web Platform APIs.",
          duration: "20 min",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Installable PWA",
        description:
          "Convert one of your projects into a Progressive Web App with offline support, install prompt, and cached assets.",
        difficulty: "intermediate",
        estimatedHours: 4,
        skills: ["Service workers", "Web manifest", "Caching", "Offline-first"],
      },
    },
    {
      id: "fe-performance",
      title: "Performance & Best Practices",
      description:
        "Optimize frontend performance — Core Web Vitals, lazy loading, code splitting, and auditing.",
      icon: "Gauge",
      trackId: "frontend",
      order: 18,
      lessons: [
        {
          id: "fe-core-web-vitals",
          title: "Core Web Vitals",
          description:
            "LCP, FID, CLS — measuring and improving real-world performance metrics.",
          duration: "20 min",
          hasTerminal: false,
        },
        {
          id: "fe-code-splitting",
          title: "Code Splitting & Lazy Loading",
          description:
            "Dynamic imports, React.lazy, route-based splitting, and bundle analysis.",
          duration: "20 min",
          hasTerminal: false,
        },
        {
          id: "fe-image-optimization",
          title: "Image Optimization",
          description:
            "Responsive images, srcset, next/image, WebP/AVIF, and CDN delivery.",
          duration: "15 min",
          hasTerminal: false,
        },
        {
          id: "fe-lighthouse",
          title: "Lighthouse & DevTools Auditing",
          description:
            "Run Lighthouse audits, analyze performance waterfalls, and fix bottlenecks.",
          duration: "20 min",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Performance Optimization Sprint",
        description:
          "Audit one of your existing projects with Lighthouse, identify and fix all performance issues, achieve a score > 95 on all metrics.",
        difficulty: "intermediate",
        estimatedHours: 4,
        skills: [
          "Core Web Vitals",
          "Lighthouse",
          "Code splitting",
          "Image optimization",
        ],
      },
    },
  ],
};
