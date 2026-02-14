import { Track } from "./types";

export const fullStackTrack: Track = {
  id: "full-stack",
  title: "Full Stack Developer",
  description:
    "Become a complete Full Stack Developer — master frontend, backend, databases, and deployment from scratch following the roadmap.sh full-stack path.",
  icon: "Layers",
  color: "indigo",
  category: "web",
  modules: [
    // ==========================================
    // PHASE 1: FRONTEND
    // ==========================================
    {
      id: "html-css-foundations",
      title: "HTML & CSS Foundations",
      description:
        "Build the foundation of web development with semantic HTML, modern CSS layouts, and responsive design principles.",
      icon: "FileCode",
      trackId: "full-stack",
      order: 1,
      lessons: [
        {
          id: "fs-html-basics",
          title: "HTML Basics",
          description:
            "Learn the building blocks of the web — elements, attributes, headings, paragraphs, links, images, and document structure.",
          duration: "30 min",
          videoId: "UB1O30fR-EE",
          videoTitle: "HTML Crash Course For Absolute Beginners",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create your first HTML page:\n1. `mkdir my-website && cd my-website`\n2. `touch index.html`\n3. Add this structure:\n<!DOCTYPE html>\n<html>\n<head><title>My Page</title></head>\n<body>\n  <h1>Hello World</h1>\n  <p>My first web page!</p>\n  <a href=\"https://example.com\">A link</a>\n</body>\n</html>\n4. `cat index.html`",
            validation: "cat index.html",
          },
        },
        {
          id: "fs-semantic-html",
          title: "Semantic HTML",
          description:
            "Structure your pages with meaning using header, nav, main, section, article, aside, and footer elements for accessibility and SEO.",
          duration: "25 min",
          videoId: "kGW8Al_cga4",
          videoTitle: "Semantic HTML Tags Explained",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Refactor your page with semantic elements:\n1. Open `index.html`\n2. Replace generic divs with:\n   <header> for navigation\n   <main> for primary content\n   <section> for grouped content\n   <article> for self-contained content\n   <footer> for page footer\n3. `cat index.html` to verify",
            validation: "cat index.html",
          },
        },
        {
          id: "fs-css-basics",
          title: "CSS Basics",
          description:
            "Style your web pages with CSS — selectors, colors, typography, box model, margins, padding, and borders.",
          duration: "35 min",
          videoId: "1PnVor36_40",
          videoTitle: "CSS Crash Course For Absolute Beginners",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Add styles to your page:\n1. Create `style.css`\n2. Add:\nbody {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  padding: 20px;\n  background-color: #f4f4f4;\n}\nh1 { color: #333; }\np { line-height: 1.6; }\n3. Link it in index.html: <link rel=\"stylesheet\" href=\"style.css\">\n4. `cat style.css`",
            validation: "cat style.css",
          },
        },
        {
          id: "fs-flexbox-grid",
          title: "Flexbox & CSS Grid",
          description:
            "Master modern CSS layout techniques — Flexbox for one-dimensional layouts and CSS Grid for two-dimensional layouts.",
          duration: "40 min",
          videoId: "JJSoEo8JSnc",
          videoTitle: "Flexbox & Grid - CSS Crash Course",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice layouts:\n1. Create `layout.html` with a flex container:\n<div class=\"flex-container\">\n  <div class=\"card\">Card 1</div>\n  <div class=\"card\">Card 2</div>\n  <div class=\"card\">Card 3</div>\n</div>\n2. Add CSS:\n.flex-container { display: flex; gap: 1rem; }\n.card { flex: 1; padding: 1rem; background: white; }\n3. Try grid: display: grid; grid-template-columns: repeat(3, 1fr);",
            validation: "cat layout.html",
          },
        },
        {
          id: "fs-responsive-design",
          title: "Responsive Design",
          description:
            "Build websites that look great on any device using media queries, relative units, mobile-first approach, and responsive images.",
          duration: "30 min",
          videoId: "srvUrASNj0s",
          videoTitle: "Responsive Web Design in 100 Seconds",
          videoChannel: "Fireship",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Add responsive styles:\n1. Add viewport meta tag:\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n2. Add media queries to style.css:\n@media (max-width: 768px) {\n  .flex-container {\n    flex-direction: column;\n  }\n}\n@media (max-width: 480px) {\n  body { padding: 10px; }\n  h1 { font-size: 1.5rem; }\n}\n3. `cat style.css`",
            validation: "cat style.css",
          },
        },
      ],
      project: {
        title: "Responsive Portfolio Page",
        description:
          "Build a fully responsive personal portfolio page using semantic HTML, CSS Flexbox/Grid, and media queries. Include a header, about section, projects gallery, and contact footer.",
        difficulty: "beginner",
        estimatedHours: 4,
        skills: [
          "HTML5",
          "CSS3",
          "Flexbox",
          "CSS Grid",
          "Responsive Design",
        ],
      },
    },
    {
      id: "javascript-essentials",
      title: "JavaScript Essentials",
      description:
        "Learn the programming language of the web — from variables and functions to async JavaScript and API calls.",
      icon: "Braces",
      trackId: "full-stack",
      order: 2,
      lessons: [
        {
          id: "fs-js-basics",
          title: "JavaScript Basics",
          description:
            "Variables, data types, operators, conditionals, loops, functions, and arrays — the core building blocks of JavaScript.",
          duration: "45 min",
          videoId: "hdI2bqOjy3c",
          videoTitle: "JavaScript Crash Course For Beginners",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Write your first JavaScript:\n1. Create `app.js`:\nconst name = 'Full Stack Dev';\nconst skills = ['HTML', 'CSS', 'JavaScript'];\n\nfunction greet(person) {\n  return `Hello, ${person}! You know ${skills.length} skills.`;\n}\n\nconsole.log(greet(name));\nskills.forEach(skill => console.log(`- ${skill}`));\n2. Run: `node app.js`",
            validation: "node app.js",
          },
        },
        {
          id: "fs-dom-manipulation",
          title: "DOM Manipulation",
          description:
            "Select, create, modify, and remove HTML elements dynamically using JavaScript — querySelector, event listeners, and DOM traversal.",
          duration: "35 min",
          videoId: "y17RuWkWdn8",
          videoTitle: "JavaScript DOM Manipulation – Full Course",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create an interactive page:\n1. Create `dom.html`:\n<button id=\"btn\">Click Me</button>\n<ul id=\"list\"></ul>\n<script>\nconst btn = document.getElementById('btn');\nconst list = document.getElementById('list');\nlet count = 0;\nbtn.addEventListener('click', () => {\n  count++;\n  const li = document.createElement('li');\n  li.textContent = `Item ${count}`;\n  list.appendChild(li);\n});\n</script>\n2. `cat dom.html`",
            validation: "cat dom.html",
          },
        },
        {
          id: "fs-async-javascript",
          title: "Asynchronous JavaScript",
          description:
            "Understand callbacks, Promises, and async/await for handling asynchronous operations like API calls and timers.",
          duration: "40 min",
          videoId: "PoRJizFvM7s",
          videoTitle: "Async JavaScript Crash Course",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice async patterns:\n1. Create `async-demo.js`:\n// Promise example\nfunction fetchData(id) {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve({ id, name: `User ${id}` }), 1000);\n  });\n}\n\n// Async/await\nasync function main() {\n  console.log('Fetching...');\n  const user = await fetchData(1);\n  console.log('Got:', user);\n  const [u1, u2] = await Promise.all([fetchData(2), fetchData(3)]);\n  console.log('Parallel:', u1, u2);\n}\nmain();\n2. Run: `node async-demo.js`",
            validation: "node async-demo.js",
          },
        },
        {
          id: "fs-es6-features",
          title: "ES6+ Features",
          description:
            "Modern JavaScript features — destructuring, spread/rest operators, template literals, modules, optional chaining, and arrow functions.",
          duration: "30 min",
          videoId: "nZ1DMMsyVyI",
          videoTitle: "ES6 JavaScript Features",
          videoChannel: "Fireship",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice ES6+ features:\n1. Create `es6.js`:\nconst user = { name: 'Alice', age: 28, skills: ['JS', 'React'] };\n\n// Destructuring\nconst { name, skills: [first, ...rest] } = user;\nconsole.log(name, first, rest);\n\n// Spread\nconst updated = { ...user, age: 29, role: 'Dev' };\nconsole.log(updated);\n\n// Optional chaining\nconst address = user?.address?.city ?? 'Unknown';\nconsole.log('City:', address);\n2. Run: `node es6.js`",
            validation: "node es6.js",
          },
        },
        {
          id: "fs-fetch-api",
          title: "Fetch API & HTTP Requests",
          description:
            "Make HTTP requests from the browser and Node.js using the Fetch API — GET, POST, handling responses, and error handling.",
          duration: "30 min",
          videoId: "cuEtnrL9-H0",
          videoTitle: "Fetch API Introduction",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice Fetch API:\n1. Create `fetch-demo.js`:\nasync function getUsers() {\n  try {\n    const res = await fetch('https://jsonplaceholder.typicode.com/users');\n    if (!res.ok) throw new Error(`HTTP ${res.status}`);\n    const users = await res.json();\n    users.slice(0, 3).forEach(u => console.log(`${u.name} - ${u.email}`));\n  } catch (err) {\n    console.error('Error:', err.message);\n  }\n}\ngetUsers();\n2. Run: `node fetch-demo.js`",
            validation: "node fetch-demo.js",
          },
        },
      ],
      project: {
        title: "Weather Dashboard App",
        description:
          "Build a weather dashboard that fetches data from a public API, displays current weather and forecasts, with DOM manipulation, async/await, and error handling.",
        difficulty: "beginner",
        estimatedHours: 5,
        skills: [
          "JavaScript",
          "Fetch API",
          "DOM Manipulation",
          "Async/Await",
          "Error Handling",
        ],
      },
    },
    {
      id: "react-tailwind",
      title: "React & Tailwind CSS",
      description:
        "Build modern, interactive user interfaces with React components, hooks, and utility-first styling with Tailwind CSS.",
      icon: "Component",
      trackId: "full-stack",
      order: 3,
      lessons: [
        {
          id: "fs-react-components",
          title: "React Components & JSX",
          description:
            "Understand the component model — functional components, JSX syntax, props, and rendering lists with React.",
          duration: "40 min",
          videoId: "Tn6-PIqc4UM",
          videoTitle: "React Course - Beginner's Tutorial",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create a React app:\n1. `npx create-react-app my-react-app --template typescript`\n2. `cd my-react-app`\n3. Open `src/App.tsx` and replace with:\nfunction Greeting({ name }: { name: string }) {\n  return <h1>Hello, {name}!</h1>;\n}\nexport default function App() {\n  const skills = ['React', 'Tailwind', 'TypeScript'];\n  return (\n    <div>\n      <Greeting name=\"Developer\" />\n      <ul>{skills.map(s => <li key={s}>{s}</li>)}</ul>\n    </div>\n  );\n}\n4. `npm start`",
            validation: "npx create-react-app",
          },
        },
        {
          id: "fs-state-hooks",
          title: "State & React Hooks",
          description:
            "Manage component state with useState, handle side effects with useEffect, and understand the rules of hooks.",
          duration: "40 min",
          videoId: "TNhaISOUy6Q",
          videoTitle: "10 React Hooks Explained",
          videoChannel: "Fireship",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice React hooks:\nCreate a Counter component:\nimport { useState, useEffect } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    document.title = `Count: ${count}`;\n  }, [count]);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(c => c + 1)}>+</button>\n      <button onClick={() => setCount(c => c - 1)}>-</button>\n    </div>\n  );\n}",
            validation: "useState",
          },
        },
        {
          id: "fs-tailwind-css",
          title: "Tailwind CSS Fundamentals",
          description:
            "Style components rapidly using Tailwind's utility-first classes — spacing, colors, typography, flexbox, grid, and responsive modifiers.",
          duration: "35 min",
          videoId: "dFgzHOX84xQ",
          videoTitle: "Tailwind CSS Full Course",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Add Tailwind to your project:\n1. `npm install -D tailwindcss postcss autoprefixer`\n2. `npx tailwindcss init -p`\n3. Style a card:\n<div className=\"max-w-sm mx-auto bg-white rounded-xl shadow-md p-6\">\n  <h2 className=\"text-xl font-bold text-gray-900\">Card Title</h2>\n  <p className=\"mt-2 text-gray-600\">Card description here.</p>\n  <button className=\"mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700\">\n    Action\n  </button>\n</div>",
            validation: "tailwindcss init",
          },
        },
        {
          id: "fs-react-forms",
          title: "Forms & User Input",
          description:
            "Handle forms in React — controlled components, form validation, handling submissions, and managing complex form state.",
          duration: "30 min",
          videoId: "SdzMBWT2CDQ",
          videoTitle: "React Forms Tutorial",
          videoChannel: "Traversy Media",
          hasTerminal: false,
        },
        {
          id: "fs-project-structure",
          title: "React Project Structure & Routing",
          description:
            "Organize your React application with proper folder structure, React Router for navigation, and best practices for scalable projects.",
          duration: "30 min",
          videoId: "oTIJunBa6MA",
          videoTitle: "React Folder Structure in 5 Steps",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Task Manager App",
        description:
          "Build a task manager with React and Tailwind CSS featuring add/edit/delete tasks, filters, search, local storage persistence, and responsive design.",
        difficulty: "intermediate",
        estimatedHours: 6,
        skills: [
          "React",
          "Tailwind CSS",
          "useState",
          "useEffect",
          "Component Design",
        ],
      },
    },
    {
      id: "git-github",
      title: "Git & GitHub",
      description:
        "Master version control with Git and collaboration workflows on GitHub.",
      icon: "GitBranch",
      trackId: "full-stack",
      order: 4,
      lessons: [
        {
          id: "fs-git-basics",
          title: "Git Basics",
          description:
            "Initialize repositories, stage changes, commit with meaningful messages, view history, and understand the Git workflow.",
          duration: "35 min",
          videoId: "HVsySz-h9r4",
          videoTitle: "Git & GitHub Crash Course For Beginners",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Initialize and use Git:\n1. `git init my-project && cd my-project`\n2. `echo '# My Full Stack Project' > README.md`\n3. `git add README.md`\n4. `git status`\n5. `git commit -m 'Initial commit'`\n6. `git log --oneline`\n7. `echo 'node_modules/' > .gitignore`\n8. `git add . && git commit -m 'Add .gitignore'`",
            validation: "git commit",
          },
        },
        {
          id: "fs-branching",
          title: "Branching & Merging",
          description:
            "Create feature branches, switch between branches, merge changes, and resolve merge conflicts effectively.",
          duration: "30 min",
          videoId: "e9lnsKot_SQ",
          videoTitle: "Git Branching and Merging",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice branching:\n1. `git checkout -b feature/navbar`\n2. `echo '<nav>Navbar</nav>' > navbar.html`\n3. `git add . && git commit -m 'Add navbar component'`\n4. `git checkout main`\n5. `git merge feature/navbar`\n6. `git log --oneline --graph --all`\n7. `git branch -d feature/navbar`",
            validation: "git merge",
          },
        },
        {
          id: "fs-github-workflow",
          title: "GitHub Collaboration Workflow",
          description:
            "Push to GitHub, create pull requests, review code, and follow the GitHub Flow for team collaboration.",
          duration: "30 min",
          videoId: "nhNq2kIvi9s",
          videoTitle: "GitHub Pull Requests in 100 Seconds",
          videoChannel: "Fireship",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "GitHub workflow practice:\n1. `git remote add origin <your-repo-url>`\n2. `git push -u origin main`\n3. `git checkout -b feature/api`\n4. Make changes and commit\n5. `git push origin feature/api`\n6. Go to GitHub and create a Pull Request\n7. After review, merge and pull: `git checkout main && git pull`",
            validation: "git push",
          },
        },
      ],
      project: {
        title: "Collaborative Git Repository",
        description:
          "Set up a professional GitHub repository with branch protection, a branching strategy (main/develop/feature), a contributing guide, proper .gitignore, and meaningful commit history.",
        difficulty: "beginner",
        estimatedHours: 2,
        skills: [
          "Git",
          "GitHub",
          "Branching Strategy",
          "Pull Requests",
          "Code Review",
        ],
      },
    },
    // ==========================================
    // PHASE 2: BACKEND
    // ==========================================
    {
      id: "nodejs-express",
      title: "Node.js & Express",
      description:
        "Build server-side applications with Node.js and the Express framework — the backbone of full-stack JavaScript development.",
      icon: "Server",
      trackId: "full-stack",
      order: 5,
      lessons: [
        {
          id: "fs-nodejs-basics",
          title: "Node.js Basics",
          description:
            "Understand the Node.js runtime, the event loop, modules system, and how to run JavaScript outside the browser.",
          duration: "35 min",
          videoId: "ENrzD9HAZK4",
          videoTitle: "Node.js Ultimate Beginner's Guide",
          videoChannel: "Fireship",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Get started with Node.js:\n1. `node --version`\n2. `mkdir my-server && cd my-server`\n3. `npm init -y`\n4. Create `index.js`:\nconst os = require('os');\nconsole.log('Platform:', os.platform());\nconsole.log('CPUs:', os.cpus().length);\nconsole.log('Memory:', Math.round(os.totalmem() / 1024 / 1024), 'MB');\n5. Run: `node index.js`",
            validation: "node index.js",
          },
        },
        {
          id: "fs-express-setup",
          title: "Express Setup & First Server",
          description:
            "Install Express, create your first HTTP server, understand request/response objects, and serve static files.",
          duration: "35 min",
          videoId: "SccSCuHhOw0",
          videoTitle: "Express.js Full Course",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create an Express server:\n1. `npm install express`\n2. Create `server.js`:\nconst express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.json({ message: 'Hello from Express!' });\n});\n\napp.get('/health', (req, res) => {\n  res.json({ status: 'ok', uptime: process.uptime() });\n});\n\napp.listen(3000, () => console.log('Server on port 3000'));\n3. Run: `node server.js`\n4. Test: `curl http://localhost:3000`",
            validation: "node server.js",
          },
        },
        {
          id: "fs-express-routing",
          title: "Routing & Route Parameters",
          description:
            "Define routes, use route parameters and query strings, organize routes with Express Router, and handle different HTTP methods.",
          duration: "30 min",
          videoId: "Lr9WUkeYSA8",
          videoTitle: "Express Routing Crash Course",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice routing:\n1. Create `routes/users.js`:\nconst router = require('express').Router();\nconst users = [\n  { id: 1, name: 'Alice' },\n  { id: 2, name: 'Bob' },\n];\n\nrouter.get('/', (req, res) => res.json(users));\nrouter.get('/:id', (req, res) => {\n  const user = users.find(u => u.id === +req.params.id);\n  user ? res.json(user) : res.status(404).json({ error: 'Not found' });\n});\nmodule.exports = router;\n\n2. In server.js: app.use('/api/users', require('./routes/users'));",
            validation: "curl",
          },
        },
        {
          id: "fs-middleware",
          title: "Middleware",
          description:
            "Understand the middleware pattern — built-in middleware, third-party middleware (cors, morgan), and writing custom middleware.",
          duration: "30 min",
          videoId: "lY6icfhap2o",
          videoTitle: "Express Middleware Crash Course",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Add middleware:\n1. `npm install cors morgan`\n2. Update `server.js`:\nconst cors = require('cors');\nconst morgan = require('morgan');\n\napp.use(cors());\napp.use(morgan('dev'));\napp.use(express.json());\n\n// Custom middleware\napp.use((req, res, next) => {\n  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);\n  next();\n});\n3. Restart server and test with curl",
            validation: "npm install cors",
          },
        },
        {
          id: "fs-error-handling",
          title: "Error Handling",
          description:
            "Implement robust error handling — try/catch in async routes, custom error classes, global error handler middleware, and proper HTTP status codes.",
          duration: "25 min",
          videoId: "DyqVqaf1KnA",
          videoTitle: "Express Error Handling",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Add error handling:\n1. Create a custom error class:\nclass AppError extends Error {\n  constructor(message, statusCode) {\n    super(message);\n    this.statusCode = statusCode;\n  }\n}\n\n2. Add global error handler at the end:\napp.use((err, req, res, next) => {\n  const status = err.statusCode || 500;\n  res.status(status).json({\n    error: err.message || 'Internal Server Error',\n  });\n});\n\n3. Test with: `curl http://localhost:3000/nonexistent`",
            validation: "curl",
          },
        },
      ],
      project: {
        title: "Express REST API Server",
        description:
          "Build a full Express server with modular routing, middleware stack (CORS, logging, auth), error handling, and a clean project structure ready for a real application.",
        difficulty: "intermediate",
        estimatedHours: 5,
        skills: [
          "Node.js",
          "Express",
          "Routing",
          "Middleware",
          "Error Handling",
        ],
      },
    },
    {
      id: "restful-apis",
      title: "RESTful APIs",
      description:
        "Design and build professional RESTful APIs with proper conventions, CRUD operations, validation, and testing.",
      icon: "Plug",
      trackId: "full-stack",
      order: 6,
      lessons: [
        {
          id: "fs-rest-principles",
          title: "REST Principles & API Design",
          description:
            "Understand RESTful architecture — resources, HTTP verbs, status codes, URL naming conventions, and API versioning.",
          duration: "30 min",
          videoId: "-MTSQjw5DrM",
          videoTitle: "RESTful APIs in 100 Seconds",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
        {
          id: "fs-crud-api",
          title: "Building a CRUD API",
          description:
            "Implement Create, Read, Update, and Delete operations for a resource with proper HTTP methods and status codes.",
          duration: "40 min",
          videoId: "l8WPWK9mS5M",
          videoTitle: "Build a REST API with Node JS and Express",
          videoChannel: "CRUD API Tutorial",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Build a CRUD API:\n1. Create `routes/todos.js`:\nlet todos = [];\nlet idCounter = 1;\n\nrouter.get('/', (req, res) => res.json(todos));\nrouter.post('/', (req, res) => {\n  const todo = { id: idCounter++, ...req.body, done: false };\n  todos.push(todo);\n  res.status(201).json(todo);\n});\nrouter.put('/:id', (req, res) => { /* update */ });\nrouter.delete('/:id', (req, res) => { /* delete */ });\n\n2. Test with:\ncurl -X POST http://localhost:3000/api/todos -H 'Content-Type: application/json' -d '{\"title\":\"Learn REST\"}'",
            validation: "curl -X POST",
          },
        },
        {
          id: "fs-validation",
          title: "Input Validation & Sanitization",
          description:
            "Validate and sanitize user input using libraries like Zod or express-validator to prevent bad data and security vulnerabilities.",
          duration: "30 min",
          videoId: "7i7xmwowwCY",
          videoTitle: "Express Validator Tutorial",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Add validation with Zod:\n1. `npm install zod`\n2. Create a schema:\nconst { z } = require('zod');\n\nconst todoSchema = z.object({\n  title: z.string().min(1).max(200),\n  description: z.string().optional(),\n  priority: z.enum(['low', 'medium', 'high']).default('medium'),\n});\n\nrouter.post('/', (req, res) => {\n  const result = todoSchema.safeParse(req.body);\n  if (!result.success) return res.status(400).json(result.error);\n  // proceed with validated data\n});",
            validation: "npm install zod",
          },
        },
        {
          id: "fs-api-testing",
          title: "API Testing with Thunder Client & Jest",
          description:
            "Test your APIs using Thunder Client (VS Code), Postman, and write automated tests with Jest and Supertest.",
          duration: "30 min",
          videoId: "FKnzS_icp20",
          videoTitle: "Testing Node.js APIs with Jest",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Set up API testing:\n1. `npm install -D jest supertest`\n2. Create `__tests__/todos.test.js`:\nconst request = require('supertest');\nconst app = require('../server');\n\ndescribe('Todos API', () => {\n  it('GET /api/todos returns array', async () => {\n    const res = await request(app).get('/api/todos');\n    expect(res.status).toBe(200);\n    expect(Array.isArray(res.body)).toBe(true);\n  });\n\n  it('POST /api/todos creates todo', async () => {\n    const res = await request(app)\n      .post('/api/todos')\n      .send({ title: 'Test todo' });\n    expect(res.status).toBe(201);\n  });\n});\n3. Run: `npx jest`",
            validation: "npx jest",
          },
        },
      ],
      project: {
        title: "Blog API",
        description:
          "Build a complete blog REST API with posts, comments, and categories — full CRUD, input validation with Zod, pagination, filtering, and automated test suite.",
        difficulty: "intermediate",
        estimatedHours: 6,
        skills: [
          "REST API Design",
          "CRUD Operations",
          "Validation",
          "Testing",
          "Express",
        ],
      },
    },
    {
      id: "authentication",
      title: "Authentication & Authorization",
      description:
        "Secure your applications with JWT-based authentication, password hashing, protected routes, and social login.",
      icon: "Lock",
      trackId: "full-stack",
      order: 7,
      lessons: [
        {
          id: "fs-jwt-basics",
          title: "JWT Authentication Basics",
          description:
            "Understand JSON Web Tokens — how they work, token structure (header, payload, signature), and token-based authentication flow.",
          duration: "30 min",
          videoId: "7Q17ubqLfaM",
          videoTitle: "JWT Authentication Tutorial",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Explore JWTs:\n1. `npm install jsonwebtoken`\n2. Create `jwt-demo.js`:\nconst jwt = require('jsonwebtoken');\nconst SECRET = 'my-secret-key';\n\n// Create token\nconst token = jwt.sign(\n  { userId: 1, email: 'user@test.com' },\n  SECRET,\n  { expiresIn: '1h' }\n);\nconsole.log('Token:', token);\n\n// Verify token\nconst decoded = jwt.verify(token, SECRET);\nconsole.log('Decoded:', decoded);\n3. Run: `node jwt-demo.js`",
            validation: "node jwt-demo.js",
          },
        },
        {
          id: "fs-bcrypt-passwords",
          title: "Password Hashing with bcrypt",
          description:
            "Never store plain text passwords — learn to hash and verify passwords securely using bcrypt with salt rounds.",
          duration: "25 min",
          videoId: "AzA_LTDoFqY",
          videoTitle: "Password Hashing in Node.js",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice password hashing:\n1. `npm install bcryptjs`\n2. Create `hash-demo.js`:\nconst bcrypt = require('bcryptjs');\n\nasync function demo() {\n  const password = 'SuperSecret123';\n  const hash = await bcrypt.hash(password, 10);\n  console.log('Hash:', hash);\n\n  const isMatch = await bcrypt.compare(password, hash);\n  console.log('Match:', isMatch);\n\n  const wrong = await bcrypt.compare('wrong', hash);\n  console.log('Wrong:', wrong);\n}\ndemo();\n3. Run: `node hash-demo.js`",
            validation: "node hash-demo.js",
          },
        },
        {
          id: "fs-auth-middleware",
          title: "Auth Middleware & Protected Routes",
          description:
            "Build authentication middleware to protect API routes, implement login/register endpoints, and manage user sessions with tokens.",
          duration: "35 min",
          videoId: "mbsmsi7l3r4",
          videoTitle: "Node.js Auth Middleware",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create auth middleware:\n1. Create `middleware/auth.js`:\nconst jwt = require('jsonwebtoken');\n\nfunction authMiddleware(req, res, next) {\n  const token = req.headers.authorization?.split(' ')[1];\n  if (!token) return res.status(401).json({ error: 'No token' });\n  try {\n    req.user = jwt.verify(token, process.env.JWT_SECRET);\n    next();\n  } catch {\n    res.status(403).json({ error: 'Invalid token' });\n  }\n}\n\n2. Protect routes:\napp.get('/api/profile', authMiddleware, (req, res) => {\n  res.json({ user: req.user });\n});",
            validation: "cat middleware/auth.js",
          },
        },
        {
          id: "fs-oauth-social",
          title: "OAuth & Social Login",
          description:
            "Implement OAuth 2.0 social login with providers like Google and GitHub using Passport.js or NextAuth.",
          duration: "35 min",
          videoId: "ZV5yTm4pT8g",
          videoTitle: "OAuth 2 Explained In Simple Terms",
          videoChannel: "ByteByteGo",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Auth System",
        description:
          "Build a complete authentication system with user registration, login, JWT tokens, password hashing, protected routes, refresh tokens, and role-based access control.",
        difficulty: "intermediate",
        estimatedHours: 6,
        skills: [
          "JWT",
          "bcrypt",
          "Auth Middleware",
          "OAuth",
          "Security Best Practices",
        ],
      },
    },
    {
      id: "postgresql-prisma",
      title: "PostgreSQL & Prisma ORM",
      description:
        "Store and manage data with PostgreSQL and interact with it elegantly using Prisma ORM — the modern database toolkit for TypeScript.",
      icon: "Database",
      trackId: "full-stack",
      order: 8,
      lessons: [
        {
          id: "fs-sql-basics",
          title: "SQL Fundamentals",
          description:
            "Learn SQL from scratch — SELECT, INSERT, UPDATE, DELETE, WHERE clauses, JOINs, and aggregate functions.",
          duration: "40 min",
          videoId: "zsjvFFKOm3c",
          videoTitle: "SQL Tutorial - Full Database Course",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice SQL basics:\n1. If psql is available:\n`psql -c \"CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(100), email VARCHAR(255) UNIQUE);\"`\n`psql -c \"INSERT INTO users (name, email) VALUES ('Alice', 'alice@test.com');\"`\n`psql -c \"SELECT * FROM users;\"`\n\nOr practice with a SQL file:\n1. Create `schema.sql`:\nCREATE TABLE users (\n  id SERIAL PRIMARY KEY,\n  name VARCHAR(100) NOT NULL,\n  email VARCHAR(255) UNIQUE NOT NULL,\n  created_at TIMESTAMP DEFAULT NOW()\n);\n2. `cat schema.sql`",
            validation: "cat schema.sql",
          },
        },
        {
          id: "fs-postgresql-setup",
          title: "PostgreSQL Setup & Configuration",
          description:
            "Install PostgreSQL, create databases and users, understand connection strings, and use psql or pgAdmin for database management.",
          duration: "30 min",
          videoId: "qw--VYLpxG4",
          videoTitle: "PostgreSQL Tutorial for Beginners",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Set up PostgreSQL (with Docker):\n1. `docker run --name mydb -e POSTGRES_PASSWORD=secret -p 5432:5432 -d postgres:15`\n2. `docker exec -it mydb psql -U postgres`\n3. Inside psql:\n   CREATE DATABASE fullstack_app;\n   \\c fullstack_app\n   \\dt (list tables)\n   \\q (quit)\n4. Connection string: postgresql://postgres:secret@localhost:5432/fullstack_app",
            validation: "docker run",
          },
        },
        {
          id: "fs-prisma-orm",
          title: "Prisma ORM Setup & Schema",
          description:
            "Initialize Prisma, define your data model in the schema file, understand Prisma Client, and generate type-safe database queries.",
          duration: "35 min",
          videoId: "RebA5J-rlwg",
          videoTitle: "Prisma ORM Full Course",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Set up Prisma:\n1. `npm install prisma @prisma/client`\n2. `npx prisma init`\n3. Edit `prisma/schema.prisma`:\nmodel User {\n  id        Int      @id @default(autoincrement())\n  email     String   @unique\n  name      String\n  posts     Post[]\n  createdAt DateTime @default(now())\n}\n\nmodel Post {\n  id        Int      @id @default(autoincrement())\n  title     String\n  content   String?\n  author    User     @relation(fields: [authorId], references: [id])\n  authorId  Int\n}\n4. `cat prisma/schema.prisma`",
            validation: "npx prisma init",
          },
        },
        {
          id: "fs-prisma-migrations",
          title: "Database Migrations",
          description:
            "Create and manage database migrations with Prisma Migrate — evolve your database schema safely over time.",
          duration: "25 min",
          videoId: "RebA5J-rlwg",
          videoTitle: "Prisma Migrations Tutorial",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Run Prisma migrations:\n1. Set DATABASE_URL in `.env`:\nDATABASE_URL=\"postgresql://postgres:secret@localhost:5432/fullstack_app\"\n2. `npx prisma migrate dev --name init`\n3. `npx prisma studio` (opens database browser)\n4. `npx prisma generate` (regenerate client)\n5. Use in code:\nconst { PrismaClient } = require('@prisma/client');\nconst prisma = new PrismaClient();\nconst users = await prisma.user.findMany();",
            validation: "npx prisma migrate",
          },
        },
        {
          id: "fs-prisma-relations",
          title: "Relations & Advanced Queries",
          description:
            "Define one-to-many, many-to-many relations in Prisma and write advanced queries — includes, filters, pagination, and transactions.",
          duration: "35 min",
          videoId: "RebA5J-rlwg",
          videoTitle: "Prisma Relations & Queries",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice Prisma queries:\nCreate `seed.js`:\nconst { PrismaClient } = require('@prisma/client');\nconst prisma = new PrismaClient();\n\nasync function main() {\n  const user = await prisma.user.create({\n    data: {\n      name: 'Alice',\n      email: 'alice@dev.com',\n      posts: {\n        create: [\n          { title: 'First Post', content: 'Hello World' },\n          { title: 'Second Post', content: 'Prisma is great' },\n        ],\n      },\n    },\n    include: { posts: true },\n  });\n  console.log(user);\n}\nmain();\n\nRun: `node seed.js`",
            validation: "node seed.js",
          },
        },
      ],
      project: {
        title: "Database-Backed API",
        description:
          "Integrate PostgreSQL and Prisma into your Express API — full CRUD with relations, migrations, seed data, pagination, and type-safe queries for a blog or e-commerce schema.",
        difficulty: "intermediate",
        estimatedHours: 6,
        skills: [
          "PostgreSQL",
          "Prisma ORM",
          "SQL",
          "Migrations",
          "Data Modeling",
        ],
      },
    },
    {
      id: "redis-caching",
      title: "Redis & Caching",
      description:
        "Boost application performance with Redis — in-memory caching, session management, and common caching strategies.",
      icon: "Zap",
      trackId: "full-stack",
      order: 9,
      lessons: [
        {
          id: "fs-redis-basics",
          title: "Redis Basics",
          description:
            "Understand Redis as an in-memory data store — strings, lists, hashes, sets, and common commands (GET, SET, DEL, EXPIRE).",
          duration: "30 min",
          videoId: "jgpVdJB2sKQ",
          videoTitle: "Redis Crash Course",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Get started with Redis:\n1. `docker run --name myredis -p 6379:6379 -d redis:7`\n2. `docker exec -it myredis redis-cli`\n3. Inside redis-cli:\n   SET greeting 'Hello Redis'\n   GET greeting\n   SET session:user1 '{\"name\":\"Alice\"}' EX 3600\n   TTL session:user1\n   KEYS *\n   DEL greeting\n   QUIT",
            validation: "docker exec",
          },
        },
        {
          id: "fs-caching-strategies",
          title: "Caching Strategies",
          description:
            "Implement cache-aside, write-through, and TTL-based caching patterns in your Node.js application to reduce database load.",
          duration: "30 min",
          videoId: "dGAgxozNWFE",
          videoTitle: "Caching Strategies Explained",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Add caching to Express:\n1. `npm install ioredis`\n2. Create `cache.js`:\nconst Redis = require('ioredis');\nconst redis = new Redis();\n\nasync function cacheMiddleware(req, res, next) {\n  const key = `cache:${req.originalUrl}`;\n  const cached = await redis.get(key);\n  if (cached) {\n    return res.json(JSON.parse(cached));\n  }\n  res.sendResponse = res.json;\n  res.json = (data) => {\n    redis.setex(key, 300, JSON.stringify(data));\n    res.sendResponse(data);\n  };\n  next();\n}\nmodule.exports = { redis, cacheMiddleware };",
            validation: "npm install ioredis",
          },
        },
        {
          id: "fs-session-management",
          title: "Session Management with Redis",
          description:
            "Store user sessions in Redis for scalable, stateless authentication — perfect for load-balanced applications.",
          duration: "25 min",
          videoId: "jgpVdJB2sKQ",
          videoTitle: "Redis Sessions in Node.js",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Set up Redis sessions:\n1. `npm install express-session connect-redis`\n2. Configure in server.js:\nconst session = require('express-session');\nconst RedisStore = require('connect-redis').default;\nconst { redis } = require('./cache');\n\napp.use(session({\n  store: new RedisStore({ client: redis }),\n  secret: 'your-secret',\n  resave: false,\n  saveUninitialized: false,\n  cookie: { maxAge: 86400000 }\n}));\n\napp.get('/api/visits', (req, res) => {\n  req.session.visits = (req.session.visits || 0) + 1;\n  res.json({ visits: req.session.visits });\n});",
            validation: "npm install express-session",
          },
        },
      ],
      project: {
        title: "Cached API with Session Store",
        description:
          "Add a Redis caching layer and session store to your Express API — implement cache-aside pattern, cache invalidation, rate limiting, and session-based features.",
        difficulty: "intermediate",
        estimatedHours: 4,
        skills: [
          "Redis",
          "Caching Patterns",
          "Session Management",
          "Performance Optimization",
          "Express Middleware",
        ],
      },
    },
    // ==========================================
    // PHASE 3: DEVOPS
    // ==========================================
    {
      id: "linux-basics",
      title: "Linux Basics",
      description:
        "Get comfortable with the Linux command line — essential skills every full-stack developer needs for server management and deployment.",
      icon: "Terminal",
      trackId: "full-stack",
      order: 10,
      lessons: [
        {
          id: "fs-command-line",
          title: "Command Line Essentials",
          description:
            "Navigate the filesystem, manage files and directories, use pipes and redirects, and search with grep and find.",
          duration: "35 min",
          videoId: "ZtqBQ68cfJc",
          videoTitle: "60 Linux Commands you NEED to know",
          videoChannel: "Fireship",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice essential commands:\n1. `pwd` — current directory\n2. `ls -la` — list with details\n3. `mkdir -p projects/fullstack`\n4. `cd projects/fullstack`\n5. `touch app.js server.js`\n6. `echo 'console.log(\"hello\")' > app.js`\n7. `cat app.js`\n8. `grep -r 'hello' .`\n9. `find . -name '*.js'`\n10. `wc -l app.js` — count lines",
            validation: "find",
          },
        },
        {
          id: "fs-file-permissions",
          title: "File Permissions & Users",
          description:
            "Understand Linux file permissions, ownership, chmod, chown, and user management for securing your servers.",
          duration: "25 min",
          videoId: "D-VqgvBMV7g",
          videoTitle: "Linux File Permissions in 5 Minutes",
          videoChannel: "TechWorld with Nana",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice permissions:\n1. `touch deploy.sh`\n2. `ls -l deploy.sh` — see permissions\n3. `chmod +x deploy.sh` — make executable\n4. `chmod 755 deploy.sh` — rwxr-xr-x\n5. `echo '#!/bin/bash\necho Deploying...' > deploy.sh`\n6. `./deploy.sh`\n7. `ls -l deploy.sh` — verify",
            validation: "chmod",
          },
        },
        {
          id: "fs-shell-scripting",
          title: "Shell Scripting for Developers",
          description:
            "Write practical bash scripts — variables, conditionals, loops, functions, and automation scripts for deployment and maintenance.",
          duration: "35 min",
          videoId: "tK9Oc6AEnR4",
          videoTitle: "Bash Scripting Full Course",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create a deploy script:\n1. Create `deploy.sh`:\n#!/bin/bash\nset -e\n\nAPP_DIR=\"./my-app\"\nLOG_FILE=\"deploy.log\"\n\nlog() { echo \"[$(date '+%H:%M:%S')] $1\" | tee -a $LOG_FILE; }\n\nlog \"Starting deployment...\"\nlog \"Checking Node.js...\"\nnode --version || { log \"Node.js not found!\"; exit 1; }\n\nlog \"Installing dependencies...\"\n# npm install --production\n\nlog \"Running tests...\"\n# npm test\n\nlog \"Deployment complete!\"\n\n2. `chmod +x deploy.sh && ./deploy.sh`\n3. `cat deploy.log`",
            validation: "./deploy.sh",
          },
        },
      ],
      project: {
        title: "Server Setup Script",
        description:
          "Write a comprehensive bash script that automates initial server setup — installs Node.js, sets up a non-root user, configures firewall rules, and prepares the server for application deployment.",
        difficulty: "beginner",
        estimatedHours: 3,
        skills: [
          "Linux CLI",
          "Bash Scripting",
          "File Permissions",
          "Server Administration",
          "Automation",
        ],
      },
    },
    {
      id: "aws-services",
      title: "AWS Services for Full Stack",
      description:
        "Deploy and scale your full-stack applications on AWS — EC2, VPC, Route53, S3, and SES for production-grade infrastructure.",
      icon: "Cloud",
      trackId: "full-stack",
      order: 11,
      lessons: [
        {
          id: "fs-ec2-instances",
          title: "EC2 Instances",
          description:
            "Launch and manage EC2 instances — choosing instance types, security groups, key pairs, SSH access, and deploying your Node.js app.",
          duration: "40 min",
          videoId: "eaicwmnSdCs",
          videoTitle: "Amazon/AWS EC2 (Elastic Compute Cloud) Basics",
          videoChannel: "Create an EC2 Instance Tutorial",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Prepare for EC2 deployment:\n1. Generate an SSH key pair:\n   `ssh-keygen -t ed25519 -f ~/.ssh/aws-key -C 'fullstack-deploy'`\n2. Create a simple deployment package:\n   `mkdir deploy-package && cd deploy-package`\n3. `echo '{\"name\":\"my-app\",\"scripts\":{\"start\":\"node server.js\"}}' > package.json`\n4. Create `server.js` with a basic Express server\n5. `tar -czf app.tar.gz .` — create archive\n6. `ls -lh app.tar.gz`",
            validation: "tar -czf",
          },
        },
        {
          id: "fs-vpc-networking",
          title: "VPC & Networking",
          description:
            "Understand AWS VPC — subnets, internet gateways, route tables, and security groups to control network access to your resources.",
          duration: "30 min",
          videoId: "7_NNlnH7sAg",
          videoTitle: "AWS VPC Beginner to Pro",
          videoChannel: "TechWorld with Nana",
          hasTerminal: false,
        },
        {
          id: "fs-route53-domains",
          title: "Route53 & Domain Management",
          description:
            "Register domains, configure DNS records, set up hosted zones, and point your domain to your application on AWS.",
          duration: "25 min",
          videoId: "JRZiQFVWpi8",
          videoTitle: "Amazon Route 53 Basics Tutorial",
          videoChannel: "Domain Registration, A Records, CNAME Records, Aliases, Subdomains",
          hasTerminal: false,
        },
        {
          id: "fs-s3-storage",
          title: "S3 for Static Assets & File Uploads",
          description:
            "Use S3 for static website hosting, file uploads, pre-signed URLs, and serving assets through CloudFront CDN.",
          duration: "30 min",
          videoId: "DkU6t-v8nzo",
          videoTitle: "How to Upload Static Content on AWS S3 Bucket",
          videoChannel: "Elite Technocrat",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice S3 operations (requires AWS CLI):\n1. `aws s3 mb s3://my-fullstack-assets` — create bucket\n2. `echo '<h1>Hello S3</h1>' > index.html`\n3. `aws s3 cp index.html s3://my-fullstack-assets/`\n4. `aws s3 ls s3://my-fullstack-assets/`\n5. Configure static hosting:\n   `aws s3 website s3://my-fullstack-assets/ --index-document index.html`\n\nOr practice locally:\n1. Create an upload handler with `multer` and `@aws-sdk/client-s3`",
            validation: "aws s3",
          },
        },
        {
          id: "fs-ses-deployment",
          title: "SES & Full Deployment",
          description:
            "Set up AWS SES for transactional emails and deploy your complete full-stack application — frontend on S3/CloudFront, backend on EC2, database on RDS.",
          duration: "35 min",
          videoId: "l5k1ai_GBDE",
          videoTitle: "Full Stack AWS Deployment",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create a deployment checklist script:\n1. Create `check-deploy.sh`:\n#!/bin/bash\necho '=== Deployment Checklist ==='\necho '[ ] Environment variables set'\ntest -f .env && echo '[✓] .env file exists' || echo '[✗] .env file missing'\necho '[ ] Database migrated'\necho '[ ] Build completed'\ntest -d dist && echo '[✓] dist/ exists' || echo '[✗] dist/ not found'\necho '[ ] Tests passing'\necho '[ ] SSL certificate configured'\necho '[ ] Domain DNS configured'\n\n2. `chmod +x check-deploy.sh && ./check-deploy.sh`",
            validation: "./check-deploy.sh",
          },
        },
      ],
      project: {
        title: "AWS Full Stack Deployment",
        description:
          "Deploy your full-stack app to AWS — React frontend on S3 + CloudFront, Node.js API on EC2, PostgreSQL on RDS, with Route53 for DNS and SES for email notifications.",
        difficulty: "advanced",
        estimatedHours: 8,
        skills: [
          "AWS EC2",
          "S3",
          "Route53",
          "VPC",
          "Cloud Deployment",
        ],
      },
    },
    {
      id: "cicd-github-actions",
      title: "CI/CD & GitHub Actions",
      description:
        "Automate your deployment pipeline — run tests, build, and deploy your full-stack application on every push.",
      icon: "Workflow",
      trackId: "full-stack",
      order: 12,
      lessons: [
        {
          id: "fs-ci-concepts",
          title: "CI/CD Concepts",
          description:
            "Understand Continuous Integration and Continuous Deployment — why automation matters, pipeline stages, and best practices.",
          duration: "25 min",
          videoId: "1er2cjUq1UI",
          videoTitle: "CI/CD In 5 Minutes",
          videoChannel: "TechWorld with Nana",
          hasTerminal: false,
        },
        {
          id: "fs-github-actions-workflow",
          title: "GitHub Actions Workflows",
          description:
            "Write GitHub Actions workflows — triggers, jobs, steps, environment variables, secrets, and reusable actions for Node.js projects.",
          duration: "40 min",
          videoId: "R8_veQiYBjI",
          videoTitle: "GitHub Actions Tutorial",
          videoChannel: "TechWorld with Nana",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create a CI workflow:\n1. `mkdir -p .github/workflows`\n2. Create `.github/workflows/ci.yml`:\nname: Full Stack CI\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    services:\n      postgres:\n        image: postgres:15\n        env:\n          POSTGRES_PASSWORD: test\n        ports: ['5432:5432']\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with: { node-version: '20' }\n      - run: npm ci\n      - run: npx prisma migrate deploy\n      - run: npm test\n3. `cat .github/workflows/ci.yml`",
            validation: "cat .github/workflows",
          },
        },
        {
          id: "fs-automated-deployment",
          title: "Automated Deployment Pipeline",
          description:
            "Set up automated deployment — build frontend, run tests, deploy backend to EC2 or a PaaS, and deploy frontend to S3/Vercel with rollback strategies.",
          duration: "35 min",
          videoId: "R8_veQiYBjI",
          videoTitle: "GitHub Actions Deploy to Production",
          videoChannel: "TechWorld with Nana",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Add deploy job to your workflow:\nCreate `.github/workflows/deploy.yml`:\nname: Deploy\non:\n  push:\n    branches: [main]\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    needs: test\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with: { node-version: '20' }\n      - run: npm ci\n      - run: npm run build\n      - name: Deploy to server\n        env:\n          SSH_KEY: ${{ secrets.SSH_PRIVATE_KEY }}\n        run: |\n          echo \"Deploying to production...\"\n          # scp -r dist/ user@server:/app/\n          # ssh user@server 'pm2 restart app'\n\n`cat .github/workflows/deploy.yml`",
            validation: "cat .github/workflows/deploy.yml",
          },
        },
      ],
      project: {
        title: "Full CI/CD Pipeline",
        description:
          "Build a complete CI/CD pipeline with GitHub Actions — lint, test, build, database migration, deploy backend and frontend, with notifications on failure and rollback support.",
        difficulty: "intermediate",
        estimatedHours: 5,
        skills: [
          "GitHub Actions",
          "CI/CD",
          "Automated Testing",
          "Deployment Automation",
          "DevOps",
        ],
      },
    },
    {
      id: "infrastructure-as-code",
      title: "Infrastructure as Code",
      description:
        "Provision and configure your infrastructure programmatically with Ansible and Terraform — repeatable, version-controlled infrastructure.",
      icon: "FileCode",
      trackId: "full-stack",
      order: 13,
      lessons: [
        {
          id: "fs-ansible-basics",
          title: "Ansible Basics",
          description:
            "Automate server configuration with Ansible — inventory files, playbooks, modules, and idempotent tasks for setting up your web servers.",
          duration: "35 min",
          videoId: "1id6ERvfozo",
          videoTitle: "Ansible Full Course for Beginners",
          videoChannel: "TechWorld with Nana",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create an Ansible playbook:\n1. Create `playbook.yml`:\n---\n- name: Setup Full Stack Server\n  hosts: localhost\n  connection: local\n  tasks:\n    - name: Print welcome message\n      debug:\n        msg: 'Setting up full stack server...'\n\n    - name: Create app directory\n      file:\n        path: /tmp/fullstack-app\n        state: directory\n\n    - name: Create config file\n      copy:\n        content: 'NODE_ENV=production\\nPORT=3000'\n        dest: /tmp/fullstack-app/.env\n\n2. Run: `ansible-playbook playbook.yml`\n3. `cat /tmp/fullstack-app/.env`",
            validation: "ansible-playbook",
          },
        },
        {
          id: "fs-terraform-basics",
          title: "Terraform Basics",
          description:
            "Define cloud infrastructure as code with Terraform — providers, resources, variables, outputs, and the plan/apply workflow.",
          duration: "40 min",
          videoId: "l5k1ai_GBDE",
          videoTitle: "Terraform Course for Beginners",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Write Terraform config:\n1. `mkdir terraform-demo && cd terraform-demo`\n2. Create `main.tf`:\nterraform {\n  required_providers {\n    local = {\n      source = \"hashicorp/local\"\n    }\n  }\n}\n\nvariable \"app_name\" {\n  default = \"fullstack-app\"\n}\n\nresource \"local_file\" \"config\" {\n  content  = \"APP_NAME=${var.app_name}\\nENV=production\"\n  filename = \"${path.module}/output.env\"\n}\n\noutput \"config_path\" {\n  value = local_file.config.filename\n}\n\n3. `terraform init && terraform plan`\n4. `terraform apply -auto-approve`\n5. `cat output.env`",
            validation: "terraform init",
          },
        },
        {
          id: "fs-infra-automation",
          title: "Infrastructure Automation",
          description:
            "Combine Terraform and Ansible to provision cloud resources and configure them automatically — the complete infrastructure automation workflow.",
          duration: "30 min",
          videoId: "l5k1ai_GBDE",
          videoTitle: "Terraform + Ansible in Practice",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create an automation workflow:\n1. Create `infra/provision.sh`:\n#!/bin/bash\nset -e\necho '=== Infrastructure Automation ==='\n\necho '1. Provisioning with Terraform...'\n# cd terraform && terraform apply -auto-approve\necho '   ✓ Resources provisioned'\n\necho '2. Configuring with Ansible...'\n# ansible-playbook -i inventory playbook.yml\necho '   ✓ Servers configured'\n\necho '3. Deploying application...'\n# ssh user@server 'cd /app && git pull && pm2 restart all'\necho '   ✓ Application deployed'\n\necho '=== Deployment Complete! ==='\n\n2. `chmod +x infra/provision.sh && ./infra/provision.sh`",
            validation: "./infra/provision.sh",
          },
        },
      ],
      project: {
        title: "Automated Infrastructure Setup",
        description:
          "Create a complete infrastructure-as-code setup — Terraform to provision AWS resources (EC2, RDS, S3) and Ansible playbooks to configure the servers with Node.js, Nginx, PM2, and deploy your application.",
        difficulty: "advanced",
        estimatedHours: 7,
        skills: [
          "Terraform",
          "Ansible",
          "AWS",
          "Infrastructure Automation",
          "Server Configuration",
        ],
      },
    },
  ],
};
