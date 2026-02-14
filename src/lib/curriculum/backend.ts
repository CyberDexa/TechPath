import { Track } from "./types";

export const backendTrack: Track = {
  id: "backend",
  title: "Backend Developer",
  description:
    "Master backend development from programming fundamentals to system design — databases, APIs, security, testing, and scalable architectures.",
  icon: "Server",
  color: "green",
  category: "web",
  modules: [
    {
      id: "be-programming-languages",
      title: "Programming Languages",
      description:
        "Explore the most popular backend languages and choose the right one for your career path.",
      icon: "Code",
      trackId: "backend",
      order: 1,
      lessons: [
        {
          id: "be-python-basics",
          title: "Python for Backend Development",
          description:
            "Why Python is one of the most popular backend languages — Django, Flask, FastAPI, and the Python ecosystem.",
          duration: "30 min",
          videoId: "x7X9w_GIm1s",
          videoTitle: "Python in 100 Seconds",
          videoChannel: "Fireship",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Try Python basics:\n1. `python3 -c \"print('Hello Backend!')\"`\n2. Create a file: `nano server.py`\n3. Add:\nfrom http.server import HTTPServer, SimpleHTTPRequestHandler\nprint('Starting server on port 8000...')\nHTTPServer(('', 8000), SimpleHTTPRequestHandler).serve_forever()\n4. Run: `python3 server.py`\n5. Open another terminal and run: `curl http://localhost:8000`",
            validation: "python3",
          },
        },
        {
          id: "be-javascript-nodejs",
          title: "JavaScript & Node.js",
          description:
            "Learn how JavaScript powers the backend with Node.js — event-driven, non-blocking I/O, and the npm ecosystem.",
          duration: "35 min",
          videoId: "ENrzD9HAZK4",
          videoTitle: "Node.js Ultimate Beginner's Guide",
          videoChannel: "Fireship",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create a Node.js server:\n1. `mkdir node-server && cd node-server`\n2. `npm init -y`\n3. Create `index.js`:\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, {'Content-Type': 'text/plain'});\n  res.end('Hello from Node.js!');\n});\nserver.listen(3000, () => console.log('Running on port 3000'));\n4. `node index.js`",
            validation: "node index.js",
          },
        },
        {
          id: "be-java-overview",
          title: "Java for Enterprise Backend",
          description:
            "Java's role in enterprise backend systems — Spring Boot, JVM ecosystem, and why it remains a top choice.",
          duration: "25 min",
          videoId: "l9AzO1FMgM8",
          videoTitle: "Java in 100 Seconds",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
        {
          id: "be-go-overview",
          title: "Go for High-Performance Backends",
          description:
            "Why Go is the language of choice for cloud-native tools — simplicity, concurrency, and blazing performance.",
          duration: "25 min",
          videoId: "446E-r0rXHI",
          videoTitle: "Go in 100 Seconds",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
        {
          id: "be-picking-a-language",
          title: "Picking Your Backend Language",
          description:
            "Compare Python, JavaScript, Java, Go, and others — factors like ecosystem, performance, job market, and use cases.",
          duration: "20 min",
          videoId: "FKTxC9pl-WM",
          videoTitle: "How to OVER Engineer a Website",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
        {
          id: "be-language-deep-dive",
          title: "Language Fundamentals Deep Dive",
          description:
            "Understand core programming concepts every backend developer needs — data structures, algorithms, and OOP principles.",
          duration: "40 min",
          videoId: "zOjov-2OZ0E",
          videoTitle: "Data Structures & Algorithms for Beginners",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice fundamental concepts in Python:\n1. Create `fundamentals.py`:\n\n# Data structures\nusers = {'alice': 28, 'bob': 34}\nqueue = []\nqueue.append('request1')\nqueue.append('request2')\nprint('Next:', queue.pop(0))\n\n# OOP\nclass APIHandler:\n    def __init__(self, path):\n        self.path = path\n    def handle(self):\n        return f'Handling {self.path}'\n\nhandler = APIHandler('/api/users')\nprint(handler.handle())\n\n2. Run: `python3 fundamentals.py`",
            validation: "python3 fundamentals.py",
          },
        },
      ],
      project: {
        title: "Multi-Language HTTP Server",
        description:
          "Build a simple HTTP server in two different languages (e.g., Python and Node.js) that serves JSON responses, handles query parameters, and returns appropriate status codes. Compare the approaches.",
        difficulty: "beginner",
        estimatedHours: 4,
        skills: [
          "Python",
          "Node.js",
          "HTTP protocol",
          "JSON",
          "Server basics",
        ],
      },
    },
    {
      id: "be-version-control",
      title: "Version Control",
      description:
        "Master Git and GitHub for collaborative backend development — branching strategies, pull requests, and workflows.",
      icon: "GitBranch",
      trackId: "backend",
      order: 2,
      lessons: [
        {
          id: "be-git-basics",
          title: "Git Basics for Backend Developers",
          description:
            "Essential Git commands — init, add, commit, status, log, diff, and understanding the staging area.",
          duration: "30 min",
          videoId: "HVsySz-h9r4",
          videoTitle: "Git & GitHub Crash Course For Beginners",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Initialize a backend project with Git:\n1. `mkdir backend-api && cd backend-api`\n2. `git init`\n3. `echo '# Backend API' > README.md`\n4. `echo 'node_modules/\\n.env' > .gitignore`\n5. `git add .`\n6. `git status`\n7. `git commit -m 'Initial commit: project setup'`\n8. `git log --oneline`",
            validation: "git commit",
          },
        },
        {
          id: "be-github-collaboration",
          title: "GitHub & Collaboration",
          description:
            "Push code to GitHub, create pull requests, conduct code reviews, and manage issues for your backend projects.",
          duration: "25 min",
          videoId: "nhNq2kIvi9s",
          videoTitle: "GitHub Pull Requests in 100 Seconds",
          videoChannel: "Fireship",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice GitHub collaboration:\n1. `git remote add origin <your-repo-url>`\n2. `git push -u origin main`\n3. `git checkout -b feature/user-auth`\n4. Create a file and commit it\n5. `git push origin feature/user-auth`\n6. Create a pull request on GitHub",
            validation: "git push",
          },
        },
        {
          id: "be-branching-strategies",
          title: "Branching Strategies & Workflows",
          description:
            "Learn Git Flow, GitHub Flow, and trunk-based development — pick the right workflow for your team.",
          duration: "25 min",
          videoId: "e9lnsKot_SQ",
          videoTitle: "Git Branching and Merging",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice GitHub Flow:\n1. `git checkout -b feature/add-endpoint`\n2. `echo 'app.get(\"/users\", getUsers)' > routes.js`\n3. `git add . && git commit -m 'feat: add users endpoint'`\n4. `git checkout main`\n5. `git merge feature/add-endpoint`\n6. `git branch -d feature/add-endpoint`\n7. `git log --oneline --graph --all`",
            validation: "git merge",
          },
        },
      ],
      project: {
        title: "Collaborative Backend Repository",
        description:
          "Set up a professional backend repository on GitHub with branching strategy, pull request templates, .gitignore, conventional commits, and a CI-ready structure.",
        difficulty: "beginner",
        estimatedHours: 2,
        skills: [
          "Git",
          "GitHub",
          "Branching strategies",
          "Code review",
          "Conventional commits",
        ],
      },
    },
    {
      id: "be-relational-databases",
      title: "Relational Databases",
      description:
        "Learn SQL and relational database systems — PostgreSQL, MySQL, schema design, and ACID properties.",
      icon: "Database",
      trackId: "backend",
      order: 3,
      lessons: [
        {
          id: "be-sql-basics",
          title: "SQL Fundamentals",
          description:
            "Master core SQL — SELECT, INSERT, UPDATE, DELETE, WHERE, JOIN, GROUP BY, and aggregate functions.",
          duration: "40 min",
          videoId: "HXV3zeQKqGY",
          videoTitle: "SQL Tutorial - Full Database Course for Beginners",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice SQL basics (using SQLite):\n1. `sqlite3 test.db`\n2. `CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT);`\n3. `INSERT INTO users VALUES (1, 'Alice', 'alice@example.com');`\n4. `INSERT INTO users VALUES (2, 'Bob', 'bob@example.com');`\n5. `SELECT * FROM users;`\n6. `SELECT name FROM users WHERE id = 1;`\n7. `.quit`",
            validation: "sqlite3",
          },
        },
        {
          id: "be-postgresql",
          title: "PostgreSQL Deep Dive",
          description:
            "Set up and use PostgreSQL — the most advanced open-source relational database. Data types, indexes, and extensions.",
          duration: "35 min",
          videoId: "qw--VYLpxG4",
          videoTitle: "PostgreSQL Tutorial for Beginners",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "PostgreSQL with Docker:\n1. `docker run --name pg -e POSTGRES_PASSWORD=secret -p 5432:5432 -d postgres:16`\n2. `docker exec -it pg psql -U postgres`\n3. `CREATE DATABASE backend_app;`\n4. `\\c backend_app`\n5. `CREATE TABLE products (id SERIAL PRIMARY KEY, name VARCHAR(100), price DECIMAL(10,2));`\n6. `INSERT INTO products (name, price) VALUES ('Widget', 9.99);`\n7. `SELECT * FROM products;`",
            validation: "psql",
          },
        },
        {
          id: "be-mysql-overview",
          title: "MySQL Overview",
          description:
            "Understand MySQL's strengths, differences from PostgreSQL, and when to choose MySQL for your project.",
          duration: "25 min",
          videoId: "7S_tz1z_5bA",
          videoTitle: "MySQL Tutorial for Beginners",
          videoChannel: "Traversy Media",
          hasTerminal: false,
        },
        {
          id: "be-normalization",
          title: "Database Normalization",
          description:
            "Learn 1NF, 2NF, 3NF, and when to denormalize — design efficient, maintainable database schemas.",
          duration: "25 min",
          videoId: "GFQaEYEc8_8",
          videoTitle: "Database Normalization Explained",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice normalization with SQLite:\n1. `sqlite3 normalize.db`\n2. Bad design (unnormalized):\n`CREATE TABLE orders_bad (id INT, customer_name TEXT, customer_email TEXT, product TEXT, price REAL);`\n3. Normalized design:\n`CREATE TABLE customers (id INTEGER PRIMARY KEY, name TEXT, email TEXT);`\n`CREATE TABLE orders (id INTEGER PRIMARY KEY, customer_id INT, product TEXT, price REAL, FOREIGN KEY(customer_id) REFERENCES customers(id));`\n4. `INSERT INTO customers VALUES (1, 'Alice', 'alice@test.com');`\n5. `INSERT INTO orders VALUES (1, 1, 'Widget', 9.99);`\n6. `SELECT c.name, o.product, o.price FROM orders o JOIN customers c ON o.customer_id = c.id;`",
            validation: "sqlite3",
          },
        },
        {
          id: "be-acid-transactions",
          title: "ACID Properties & Transactions",
          description:
            "Understand Atomicity, Consistency, Isolation, Durability — the guarantees that make relational databases reliable.",
          duration: "20 min",
          videoId: "pomxJOFVcQs",
          videoTitle: "ACID Properties in Databases",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
      ],
      project: {
        title: "E-commerce Database Schema",
        description:
          "Design and implement a normalized relational database for an e-commerce platform with users, products, orders, reviews, and categories using PostgreSQL. Write complex queries with JOINs and aggregations.",
        difficulty: "intermediate",
        estimatedHours: 5,
        skills: [
          "SQL",
          "PostgreSQL",
          "Schema design",
          "Normalization",
          "JOINs",
        ],
      },
    },
    {
      id: "be-nosql-databases",
      title: "NoSQL Databases",
      description:
        "Explore non-relational databases — MongoDB, Redis, and understanding when NoSQL is the right choice.",
      icon: "Layers",
      trackId: "backend",
      order: 4,
      lessons: [
        {
          id: "be-mongodb-basics",
          title: "MongoDB Fundamentals",
          description:
            "Learn MongoDB — document-based storage, CRUD operations, and the flexible schema model.",
          duration: "35 min",
          videoId: "ofme2o29ngU",
          videoTitle: "MongoDB in 100 Seconds",
          videoChannel: "Fireship",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "MongoDB with Docker:\n1. `docker run --name mongo -p 27017:27017 -d mongo:7`\n2. `docker exec -it mongo mongosh`\n3. `use backend_app`\n4. `db.users.insertOne({name: 'Alice', email: 'alice@test.com', age: 28})`\n5. `db.users.insertOne({name: 'Bob', email: 'bob@test.com', age: 34})`\n6. `db.users.find()`\n7. `db.users.find({age: {$gt: 30}})`",
            validation: "mongosh",
          },
        },
        {
          id: "be-redis-basics",
          title: "Redis as a Data Store",
          description:
            "Master Redis — in-memory key-value store for caching, sessions, queues, and real-time features.",
          duration: "30 min",
          videoId: "G1rOthIU-uo",
          videoTitle: "Redis in 100 Seconds",
          videoChannel: "Fireship",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Redis with Docker:\n1. `docker run --name redis -p 6379:6379 -d redis:7`\n2. `docker exec -it redis redis-cli`\n3. `SET user:1 'Alice'`\n4. `GET user:1`\n5. `HSET user:2 name 'Bob' age 30`\n6. `HGETALL user:2`\n7. `SET session:abc123 '{\"userId\": 1}' EX 3600`\n8. `TTL session:abc123`",
            validation: "redis-cli",
          },
        },
        {
          id: "be-when-to-use-nosql",
          title: "SQL vs NoSQL — When to Use Each",
          description:
            "Understand the trade-offs between SQL and NoSQL — consistency vs flexibility, scaling patterns, and real-world use cases.",
          duration: "20 min",
          videoId: "W2Z7fbCLSTw",
          videoTitle: "SQL vs NoSQL Explained",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
        {
          id: "be-document-vs-keyvalue",
          title: "Document vs Key-Value vs Column Stores",
          description:
            "Compare NoSQL database types — document stores (MongoDB), key-value (Redis), column-family (Cassandra), and graph databases (Neo4j).",
          duration: "20 min",
          videoId: "mMdZEAKtntA",
          videoTitle: "NoSQL Database Types Explained: Document, Key-Value, Column-Family & Graph Databases",
          videoChannel: "CodeLucky",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Product Catalog with MongoDB",
        description:
          "Build a product catalog API using MongoDB with nested documents, text search, aggregation pipelines, and indexing. Compare the schema design approach with a relational equivalent.",
        difficulty: "intermediate",
        estimatedHours: 4,
        skills: [
          "MongoDB",
          "Document modeling",
          "Aggregation",
          "Indexing",
          "NoSQL design",
        ],
      },
    },
    {
      id: "be-database-concepts",
      title: "Database Concepts",
      description:
        "Advanced database topics — ORMs, indexing strategies, the N+1 problem, and database migrations.",
      icon: "Table",
      trackId: "backend",
      order: 5,
      lessons: [
        {
          id: "be-orms",
          title: "ORMs (Object-Relational Mapping)",
          description:
            "Use ORMs like Prisma, SQLAlchemy, and Sequelize to interact with databases using code instead of raw SQL.",
          duration: "30 min",
          videoId: "EwpT466EyP4",
          videoTitle: "What is an ORM and what does it do?",
          videoChannel: "Code With Bubb",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Try Prisma ORM:\n1. `mkdir prisma-demo && cd prisma-demo`\n2. `npm init -y`\n3. `npm install prisma @prisma/client`\n4. `npx prisma init --datasource-provider sqlite`\n5. Edit `prisma/schema.prisma` and add:\nmodel User {\n  id    Int    @id @default(autoincrement())\n  name  String\n  email String @unique\n}\n6. `npx prisma db push`\n7. `npx prisma studio` — opens a visual editor",
            validation: "npx prisma",
          },
        },
        {
          id: "be-indexing",
          title: "Database Indexing Strategies",
          description:
            "Understand B-tree indexes, composite indexes, partial indexes, and when indexing hurts performance.",
          duration: "25 min",
          videoId: "HubezKbFL7E",
          videoTitle: "Secret To Optimizing SQL Queries",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice indexing with SQLite:\n1. `sqlite3 index_demo.db`\n2. `CREATE TABLE products (id INTEGER PRIMARY KEY, name TEXT, category TEXT, price REAL);`\n3. Insert sample data:\n`INSERT INTO products VALUES (1,'Laptop','electronics',999.99);`\n`INSERT INTO products VALUES (2,'Phone','electronics',699.99);`\n`INSERT INTO products VALUES (3,'Shirt','clothing',29.99);`\n4. `EXPLAIN QUERY PLAN SELECT * FROM products WHERE category = 'electronics';`\n5. `CREATE INDEX idx_category ON products(category);`\n6. `EXPLAIN QUERY PLAN SELECT * FROM products WHERE category = 'electronics';`\n7. Compare the query plans!",
            validation: "CREATE INDEX",
          },
        },
        {
          id: "be-n-plus-one",
          title: "The N+1 Query Problem",
          description:
            "Identify and fix the infamous N+1 problem — one of the most common backend performance issues.",
          duration: "20 min",
          videoId: "uCbFMZYQbxE",
          videoTitle: "N+1 Query Problem Explained",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "be-transactions",
          title: "Database Transactions in Practice",
          description:
            "Implement transactions safely — BEGIN, COMMIT, ROLLBACK, isolation levels, and deadlock prevention.",
          duration: "25 min",
          videoId: "P80Js_qClUE",
          videoTitle: "Database Transactions Explained",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice transactions with SQLite:\n1. `sqlite3 bank.db`\n2. `CREATE TABLE accounts (id INTEGER PRIMARY KEY, name TEXT, balance REAL);`\n3. `INSERT INTO accounts VALUES (1, 'Alice', 1000.00);`\n4. `INSERT INTO accounts VALUES (2, 'Bob', 500.00);`\n5. Transfer money with a transaction:\n`BEGIN TRANSACTION;`\n`UPDATE accounts SET balance = balance - 200 WHERE id = 1;`\n`UPDATE accounts SET balance = balance + 200 WHERE id = 2;`\n`COMMIT;`\n6. `SELECT * FROM accounts;`",
            validation: "COMMIT",
          },
        },
        {
          id: "be-migrations",
          title: "Database Migrations",
          description:
            "Manage schema changes safely with migration tools — versioned schema changes, rollbacks, and team collaboration.",
          duration: "25 min",
          videoId: "mMsZPZKNc4g",
          videoTitle: "Database Migrations Explained",
          videoChannel: "Software Developer Diaries",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice migrations with Prisma:\n1. In your prisma-demo project, edit `schema.prisma`\n2. Add a new field to User:\nmodel User {\n  id        Int      @id @default(autoincrement())\n  name      String\n  email     String   @unique\n  createdAt DateTime @default(now())\n}\n3. `npx prisma migrate dev --name add-created-at`\n4. Check the generated migration SQL in `prisma/migrations/`\n5. `npx prisma migrate status`",
            validation: "npx prisma migrate",
          },
        },
      ],
      project: {
        title: "Blog Database with ORM",
        description:
          "Build a blog backend using Prisma ORM with users, posts, comments, and tags. Implement proper indexing, eager loading to avoid N+1 issues, and migration workflows.",
        difficulty: "intermediate",
        estimatedHours: 5,
        skills: [
          "Prisma ORM",
          "Migrations",
          "Indexing",
          "N+1 prevention",
          "Schema design",
        ],
      },
    },
    {
      id: "be-apis",
      title: "APIs",
      description:
        "Design and build APIs — RESTful services, GraphQL, gRPC, and professional API documentation.",
      icon: "Plug",
      trackId: "backend",
      order: 6,
      lessons: [
        {
          id: "be-rest-principles",
          title: "REST Principles",
          description:
            "Understand REST architecture — resources, HTTP methods, status codes, statelessness, and HATEOAS.",
          duration: "25 min",
          videoId: "-MTSQjw5DrM",
          videoTitle: "RESTful APIs in 100 Seconds",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
        {
          id: "be-restful-design",
          title: "RESTful API Design Best Practices",
          description:
            "Design clean APIs — URL naming conventions, versioning, pagination, filtering, and error handling.",
          duration: "30 min",
          videoId: "7nm1pYuKAhY",
          videoTitle: "Deep Dive into REST API Design and Implementation Best Practices",
          videoChannel: "Software Developer Diaries",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Build a RESTful API with Express:\n1. `mkdir rest-api && cd rest-api`\n2. `npm init -y && npm install express`\n3. Create `server.js`:\nconst express = require('express');\nconst app = express();\napp.use(express.json());\n\nlet todos = [{id: 1, title: 'Learn REST', done: false}];\n\napp.get('/api/todos', (req, res) => res.json(todos));\napp.post('/api/todos', (req, res) => {\n  const todo = {id: Date.now(), ...req.body};\n  todos.push(todo);\n  res.status(201).json(todo);\n});\n\napp.listen(3000, () => console.log('API on port 3000'));\n4. `node server.js`\n5. Test: `curl http://localhost:3000/api/todos`",
            validation: "node server.js",
          },
        },
        {
          id: "be-json-apis",
          title: "Building JSON APIs",
          description:
            "Build real-world JSON APIs with request validation, error responses, pagination, and proper HTTP status codes.",
          duration: "35 min",
          videoId: "lsMQRaeKNDk",
          videoTitle: "Build a REST API with Node.js",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Test JSON API patterns:\n1. POST with body: `curl -X POST http://localhost:3000/api/todos -H 'Content-Type: application/json' -d '{\"title\": \"Build API\", \"done\": false}'`\n2. Check response status: `curl -o /dev/null -s -w '%{http_code}' http://localhost:3000/api/todos`\n3. Test error handling: `curl -X GET http://localhost:3000/api/todos/999`",
            validation: "curl",
          },
        },
        {
          id: "be-graphql-intro",
          title: "GraphQL Introduction",
          description:
            "Understand GraphQL — schemas, queries, mutations, resolvers, and how it compares to REST.",
          duration: "30 min",
          videoId: "eIQh02xuVw4",
          videoTitle: "GraphQL Explained in 100 Seconds",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
        {
          id: "be-grpc",
          title: "gRPC & Protocol Buffers",
          description:
            "Learn gRPC for high-performance service-to-service communication — protobufs, streaming, and use cases.",
          duration: "20 min",
          videoId: "gnchfOojMk4",
          videoTitle: "gRPC Explained in 100 Seconds",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
        {
          id: "be-api-documentation",
          title: "API Documentation with OpenAPI/Swagger",
          description:
            "Document your APIs professionally using OpenAPI (Swagger) specification — auto-generated docs and client SDKs.",
          duration: "25 min",
          videoId: "dhMlXoTD3mQ",
          videoTitle: "Swagger API Documentation Tutorial",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create an OpenAPI spec:\n1. Create `openapi.yaml`:\nopenapi: 3.0.0\ninfo:\n  title: Todo API\n  version: 1.0.0\npaths:\n  /api/todos:\n    get:\n      summary: List all todos\n      responses:\n        '200':\n          description: A list of todos\n    post:\n      summary: Create a todo\n      requestBody:\n        content:\n          application/json:\n            schema:\n              type: object\n              properties:\n                title:\n                  type: string\n                done:\n                  type: boolean\n2. Verify: `cat openapi.yaml`",
            validation: "cat openapi.yaml",
          },
        },
      ],
      project: {
        title: "RESTful Task Management API",
        description:
          "Build a full-featured REST API for task management with CRUD operations, authentication, pagination, filtering, sorting, proper error handling, and Swagger documentation.",
        difficulty: "intermediate",
        estimatedHours: 6,
        skills: [
          "REST API design",
          "Express.js",
          "JSON",
          "Error handling",
          "OpenAPI/Swagger",
        ],
      },
    },
    {
      id: "be-caching",
      title: "Caching",
      description:
        "Speed up your applications with caching — in-memory caches, HTTP caching, and CDN strategies.",
      icon: "Zap",
      trackId: "backend",
      order: 7,
      lessons: [
        {
          id: "be-caching-concepts",
          title: "Caching Concepts & Strategies",
          description:
            "Understand caching fundamentals — cache-aside, write-through, write-back, TTL, cache invalidation, and eviction policies.",
          duration: "25 min",
          videoId: "dGAgxozNWFE",
          videoTitle: "Caching Explained",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "be-redis-caching",
          title: "Redis Caching in Practice",
          description:
            "Implement application-level caching with Redis — cache database queries, API responses, and session data.",
          duration: "30 min",
          videoId: "oaJq1mQ3dFI",
          videoTitle: "Redis Caching Tutorial",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Implement Redis caching:\n1. Start Redis: `docker run --name redis-cache -p 6379:6379 -d redis:7`\n2. `docker exec -it redis-cache redis-cli`\n3. Cache an API response:\n`SET api:/users '[{\"id\":1,\"name\":\"Alice\"}]' EX 300`\n4. `GET api:/users`\n5. `TTL api:/users`\n6. Invalidate cache:\n`DEL api:/users`\n7. `GET api:/users`  — returns (nil), cache miss!",
            validation: "redis-cli",
          },
        },
        {
          id: "be-http-caching",
          title: "HTTP Caching Headers",
          description:
            "Master HTTP caching — Cache-Control, ETag, Last-Modified, and conditional requests for optimal performance.",
          duration: "20 min",
          videoId: "HiBDZgTNpXY",
          videoTitle: "HTTP Caching Explained",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Explore HTTP caching headers:\n1. `curl -I https://api.github.com` — check GitHub's caching headers\n2. Look for: Cache-Control, ETag, Last-Modified\n3. Conditional request: `curl -H 'If-None-Match: \"etag-value\"' -I https://api.github.com`\n4. A 304 Not Modified means the cache is still valid!",
            validation: "curl -I",
          },
        },
        {
          id: "be-cdn-caching",
          title: "CDN & Edge Caching",
          description:
            "Leverage Content Delivery Networks to cache content at the edge — CloudFront, Cloudflare, and edge computing.",
          duration: "20 min",
          videoId: "RI9np1LWzqw",
          videoTitle: "CDN Explained in 100 Seconds",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Cached API Layer",
        description:
          "Add a Redis caching layer to an existing API. Implement cache-aside pattern, TTL-based expiration, cache invalidation on writes, and measure the performance improvement with before/after benchmarks.",
        difficulty: "intermediate",
        estimatedHours: 4,
        skills: [
          "Redis",
          "Cache patterns",
          "HTTP caching",
          "Performance",
          "TTL management",
        ],
      },
    },
    {
      id: "be-web-security",
      title: "Web Security",
      description:
        "Protect your backend from common attacks — authentication, encryption, OWASP top 10, and security best practices.",
      icon: "Shield",
      trackId: "backend",
      order: 8,
      lessons: [
        {
          id: "be-https-tls",
          title: "HTTPS & TLS/SSL",
          description:
            "How HTTPS works — TLS handshake, certificates, certificate authorities, and why encryption matters.",
          duration: "25 min",
          videoId: "j9QmMEWmcfo",
          videoTitle: "SSL/TLS Explained in 100 Seconds",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
        {
          id: "be-owasp-top-10",
          title: "OWASP Top 10 Vulnerabilities",
          description:
            "Understand the most critical web security risks — injection, broken auth, XSS, CSRF, and how to prevent them.",
          duration: "35 min",
          videoId: "avFR_Af0KGk",
          videoTitle: "OWASP Top 10 Explained",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "be-hashing-bcrypt",
          title: "Password Hashing with bcrypt",
          description:
            "Never store plain text passwords — learn hashing, salting, bcrypt, and secure password storage.",
          duration: "25 min",
          videoId: "cczlpiiu42M",
          videoTitle: "Password Hashing and Salting Explained",
          videoChannel: "Fireship",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice password hashing with Node.js:\n1. `mkdir security-demo && cd security-demo`\n2. `npm init -y && npm install bcrypt`\n3. Create `hash.js`:\nconst bcrypt = require('bcrypt');\n\nasync function main() {\n  const password = 'mySecretPass123';\n  const hash = await bcrypt.hash(password, 10);\n  console.log('Hash:', hash);\n  \n  const match = await bcrypt.compare('mySecretPass123', hash);\n  console.log('Match:', match);  // true\n  \n  const noMatch = await bcrypt.compare('wrongPassword', hash);\n  console.log('No match:', noMatch);  // false\n}\nmain();\n4. `node hash.js`",
            validation: "node hash.js",
          },
        },
        {
          id: "be-cors",
          title: "CORS (Cross-Origin Resource Sharing)",
          description:
            "Understand CORS headers, preflight requests, and how to configure CORS properly in your backend.",
          duration: "20 min",
          videoId: "4KHiSt0oLJ0",
          videoTitle: "CORS in 100 Seconds",
          videoChannel: "Fireship",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Configure CORS in Express:\n1. `npm install cors`\n2. Create `cors-server.js`:\nconst express = require('express');\nconst cors = require('cors');\nconst app = express();\n\n// Allow specific origins\napp.use(cors({\n  origin: ['http://localhost:3001'],\n  methods: ['GET', 'POST'],\n  credentials: true\n}));\n\napp.get('/api/data', (req, res) => {\n  res.json({message: 'CORS enabled!'});\n});\n\napp.listen(3000);\n3. `node cors-server.js`\n4. `curl -H 'Origin: http://localhost:3001' -I http://localhost:3000/api/data`",
            validation: "node cors-server.js",
          },
        },
        {
          id: "be-rate-limiting",
          title: "Rate Limiting & Throttling",
          description:
            "Protect your API from abuse — implement rate limiting with token bucket, sliding window, and middleware approaches.",
          duration: "20 min",
          videoId: "_qNHROq0pGk",
          videoTitle: "🔥 How Rate Limiting and Throttling Saves Your API Server From CRASHING!",
          videoChannel: "ByteMonk",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Implement rate limiting:\n1. `npm install express-rate-limit`\n2. Create `rate-limit.js`:\nconst express = require('express');\nconst rateLimit = require('express-rate-limit');\nconst app = express();\n\nconst limiter = rateLimit({\n  windowMs: 60 * 1000,  // 1 minute\n  max: 5,  // 5 requests per minute\n  message: {error: 'Too many requests, try again later'}\n});\n\napp.use('/api/', limiter);\napp.get('/api/data', (req, res) => res.json({ok: true}));\napp.listen(3000);\n3. `node rate-limit.js`\n4. Run `curl http://localhost:3000/api/data` six times quickly!",
            validation: "node rate-limit.js",
          },
        },
      ],
      project: {
        title: "Secure Authentication System",
        description:
          "Build a complete authentication system with bcrypt password hashing, JWT tokens, refresh tokens, rate limiting, CORS configuration, input validation, and protection against common OWASP vulnerabilities.",
        difficulty: "intermediate",
        estimatedHours: 6,
        skills: [
          "Authentication",
          "bcrypt",
          "JWT",
          "Rate limiting",
          "CORS",
          "Input validation",
        ],
      },
    },
    {
      id: "be-testing",
      title: "Testing",
      description:
        "Write reliable backend code with comprehensive testing — unit tests, integration tests, mocking, and TDD.",
      icon: "FlaskConical",
      trackId: "backend",
      order: 9,
      lessons: [
        {
          id: "be-unit-testing",
          title: "Unit Testing Fundamentals",
          description:
            "Write effective unit tests — test structure, assertions, test isolation, and testing pure functions.",
          duration: "30 min",
          videoId: "Jv2uxzhPFl4",
          videoTitle: "JavaScript Testing Introduction",
          videoChannel: "Fireship",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Write your first unit tests:\n1. `mkdir testing-demo && cd testing-demo`\n2. `npm init -y && npm install jest`\n3. Create `math.js`:\nfunction add(a, b) { return a + b; }\nfunction multiply(a, b) { return a * b; }\nmodule.exports = { add, multiply };\n4. Create `math.test.js`:\nconst { add, multiply } = require('./math');\ntest('adds 1 + 2 to equal 3', () => expect(add(1, 2)).toBe(3));\ntest('multiplies 3 * 4 to equal 12', () => expect(multiply(3, 4)).toBe(12));\ntest('handles negative numbers', () => expect(add(-1, 1)).toBe(0));\n5. `npx jest`",
            validation: "npx jest",
          },
        },
        {
          id: "be-integration-testing",
          title: "Integration Testing APIs",
          description:
            "Test your API endpoints end-to-end — HTTP request testing, database setup/teardown, and test fixtures.",
          duration: "35 min",
          videoId: "FKnzS_icp20",
          videoTitle: "Integration Testing with Supertest",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Write API integration tests:\n1. `npm install express supertest`\n2. Create `app.js`:\nconst express = require('express');\nconst app = express();\napp.use(express.json());\napp.get('/api/health', (req, res) => res.json({status: 'ok'}));\napp.post('/api/echo', (req, res) => res.json(req.body));\nmodule.exports = app;\n3. Create `app.test.js`:\nconst request = require('supertest');\nconst app = require('./app');\ntest('GET /api/health returns ok', async () => {\n  const res = await request(app).get('/api/health');\n  expect(res.statusCode).toBe(200);\n  expect(res.body.status).toBe('ok');\n});\n4. `npx jest`",
            validation: "npx jest",
          },
        },
        {
          id: "be-mocking",
          title: "Mocking & Test Doubles",
          description:
            "Use mocks, stubs, and spies to isolate units of code — mock databases, external APIs, and side effects.",
          duration: "25 min",
          videoId: "Jv2uxzhPFl4",
          videoTitle: "Mocking in JavaScript Tests",
          videoChannel: "Fireship",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice mocking:\n1. Create `userService.js`:\nconst db = require('./db');\nasync function getUser(id) {\n  const user = await db.findById(id);\n  if (!user) throw new Error('Not found');\n  return user;\n}\nmodule.exports = { getUser };\n2. Create `userService.test.js`:\nconst { getUser } = require('./userService');\njest.mock('./db', () => ({\n  findById: jest.fn()\n}));\nconst db = require('./db');\ntest('returns user when found', async () => {\n  db.findById.mockResolvedValue({id: 1, name: 'Alice'});\n  const user = await getUser(1);\n  expect(user.name).toBe('Alice');\n});\n3. `npx jest userService`",
            validation: "npx jest",
          },
        },
        {
          id: "be-tdd",
          title: "Test-Driven Development (TDD)",
          description:
            "Learn the Red-Green-Refactor cycle — write tests first, make them pass, then refactor. Build confidence in your code.",
          duration: "25 min",
          videoId: "Jv2uxzhPFl4",
          videoTitle: "Test-Driven Development Explained",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Fully Tested REST API",
        description:
          "Build a REST API using TDD methodology — write tests first for every endpoint, including unit tests for business logic, integration tests for API endpoints, and mocks for external services. Achieve 90%+ code coverage.",
        difficulty: "intermediate",
        estimatedHours: 6,
        skills: [
          "Jest",
          "Supertest",
          "Unit testing",
          "Integration testing",
          "TDD",
          "Code coverage",
        ],
      },
    },
    {
      id: "be-cicd",
      title: "CI/CD",
      description:
        "Automate your backend deployment pipeline — continuous integration, delivery, and deployment strategies.",
      icon: "Workflow",
      trackId: "backend",
      order: 10,
      lessons: [
        {
          id: "be-ci-concepts",
          title: "Continuous Integration Concepts",
          description:
            "What CI means for backend development — automated testing, builds, code quality checks, and integration workflows.",
          duration: "20 min",
          videoId: "1er2cjUq1UI",
          videoTitle: "CI/CD In 5 Minutes",
          videoChannel: "TechWorld with Nana",
          hasTerminal: false,
        },
        {
          id: "be-github-actions",
          title: "GitHub Actions for Backend Projects",
          description:
            "Build CI/CD pipelines with GitHub Actions — run tests, lint code, build Docker images, and deploy automatically.",
          duration: "35 min",
          videoId: "R8_veQiYBjI",
          videoTitle: "GitHub Actions Tutorial",
          videoChannel: "TechWorld with Nana",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create a backend CI workflow:\n1. `mkdir -p .github/workflows`\n2. Create `.github/workflows/backend-ci.yml`:\nname: Backend CI\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    services:\n      postgres:\n        image: postgres:16\n        env:\n          POSTGRES_PASSWORD: test\n        ports:\n          - 5432:5432\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n      - run: npm ci\n      - run: npm test\n      - run: npm run lint",
            validation: "cat .github/workflows",
          },
        },
        {
          id: "be-deployment-strategies",
          title: "Deployment Strategies",
          description:
            "Blue-green, canary, rolling, and A/B deployments — choose the right strategy for zero-downtime releases.",
          duration: "20 min",
          videoId: "AWVTKBUnoIg",
          videoTitle: "Deployment Strategies Explained",
          videoChannel: "TechWorld with Nana",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Automated Backend Pipeline",
        description:
          "Create a complete CI/CD pipeline for a backend application using GitHub Actions — automated testing, linting, Docker image build and push, database migrations, and deployment with rollback capability.",
        difficulty: "intermediate",
        estimatedHours: 5,
        skills: [
          "GitHub Actions",
          "CI/CD",
          "Docker",
          "Database migrations",
          "Deployment",
        ],
      },
    },
    {
      id: "be-architectural-patterns",
      title: "Architectural Patterns",
      description:
        "Design scalable backend systems — monoliths, microservices, MVC, twelve-factor apps, and domain-driven design.",
      icon: "Building",
      trackId: "backend",
      order: 11,
      lessons: [
        {
          id: "be-monolith-vs-microservices",
          title: "Monolith vs Microservices",
          description:
            "Understand the trade-offs between monolithic and microservice architectures — when to use each and migration strategies.",
          duration: "30 min",
          videoId: "y8OnoxKotPQ",
          videoTitle: "Microservices Explained in 5 Minutes",
          videoChannel: "TechWorld with Nana",
          hasTerminal: false,
        },
        {
          id: "be-soa",
          title: "Service-Oriented Architecture (SOA)",
          description:
            "Learn SOA principles — service contracts, loose coupling, service composition, and how SOA differs from microservices.",
          duration: "20 min",
          videoId: "jNiEMmoTDoE",
          videoTitle: "SOA vs Microservices",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "be-mvc-pattern",
          title: "MVC & Server-Side Patterns",
          description:
            "Model-View-Controller, Repository pattern, Service layer — organize your backend code for maintainability.",
          duration: "25 min",
          videoId: "DUg2SWWK18I",
          videoTitle: "MVC Explained in 4 Minutes",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Structure an Express app with MVC:\n1. `mkdir -p mvc-app/{models,controllers,routes,services}`\n2. Create `mvc-app/models/user.js`:\nclass User {\n  constructor(id, name, email) {\n    this.id = id; this.name = name; this.email = email;\n  }\n}\nmodule.exports = User;\n3. Create `mvc-app/controllers/userController.js`:\nconst users = [{id: 1, name: 'Alice', email: 'alice@test.com'}];\nexports.getAll = (req, res) => res.json(users);\nexports.getById = (req, res) => {\n  const user = users.find(u => u.id === parseInt(req.params.id));\n  user ? res.json(user) : res.status(404).json({error: 'Not found'});\n};\n4. Create `mvc-app/routes/userRoutes.js`:\nconst router = require('express').Router();\nconst ctrl = require('../controllers/userController');\nrouter.get('/', ctrl.getAll);\nrouter.get('/:id', ctrl.getById);\nmodule.exports = router;",
            validation: "ls mvc-app",
          },
        },
        {
          id: "be-twelve-factor",
          title: "The Twelve-Factor App",
          description:
            "Build cloud-native applications following the twelve-factor methodology — config, dependencies, processes, and more.",
          duration: "25 min",
          videoId: "1OhmRmMsGdQ",
          videoTitle: "What is 12-Factor App?",
          videoChannel: "Twelve Factor App Methodology Explained",
          hasTerminal: false,
        },
        {
          id: "be-ddd-basics",
          title: "Domain-Driven Design Basics",
          description:
            "Introduction to DDD — bounded contexts, entities, value objects, aggregates, and ubiquitous language.",
          duration: "25 min",
          videoId: "pMuiVlnGqjk",
          videoTitle: "Domain-Driven Design Crash Course",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Refactor to Clean Architecture",
        description:
          "Take a messy monolithic Express application and refactor it into clean architecture with proper separation — controllers, services, repositories, and domain models. Apply twelve-factor principles.",
        difficulty: "advanced",
        estimatedHours: 6,
        skills: [
          "MVC",
          "Clean architecture",
          "Service layer",
          "Repository pattern",
          "Twelve-factor app",
        ],
      },
    },
    {
      id: "be-message-brokers",
      title: "Message Brokers",
      description:
        "Decouple your services with asynchronous messaging — RabbitMQ, Apache Kafka, and event-driven patterns.",
      icon: "Mail",
      trackId: "backend",
      order: 12,
      lessons: [
        {
          id: "be-messaging-concepts",
          title: "Message Broker Concepts",
          description:
            "Understand pub/sub, message queues, topics, consumers, producers, and why asynchronous messaging matters.",
          duration: "25 min",
          videoId: "xErwDaOc-Gs",
          videoTitle: "Message Queues Explained",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "be-rabbitmq",
          title: "RabbitMQ in Practice",
          description:
            "Set up RabbitMQ — exchanges, queues, bindings, acknowledgments, and building a task queue.",
          duration: "30 min",
          videoId: "NQ3fZtyXji0",
          videoTitle: "RabbitMQ Tutorial",
          videoChannel: "TechWorld with Nana",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Run RabbitMQ with Docker:\n1. `docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management`\n2. Open http://localhost:15672 (guest/guest)\n3. Explore the management UI:\n   - Create a queue named 'tasks'\n   - Publish a test message\n   - View message stats and connections\n4. `docker logs rabbitmq` — view broker logs",
            validation: "docker run",
          },
        },
        {
          id: "be-apache-kafka",
          title: "Apache Kafka Fundamentals",
          description:
            "Learn Kafka — topics, partitions, consumer groups, offset management, and event streaming at scale.",
          duration: "30 min",
          videoId: "aj9CDZm0Glc",
          videoTitle: "Apache Kafka in 6 Minutes",
          videoChannel: "TechWorld with Nana",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Run Kafka with Docker Compose:\n1. Create `docker-compose-kafka.yml`:\nversion: '3.8'\nservices:\n  zookeeper:\n    image: confluentinc/cp-zookeeper:7.5.0\n    environment:\n      ZOOKEEPER_CLIENT_PORT: 2181\n  kafka:\n    image: confluentinc/cp-kafka:7.5.0\n    ports:\n      - '9092:9092'\n    environment:\n      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181\n      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:9092\n      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1\n2. `docker compose -f docker-compose-kafka.yml up -d`\n3. Verify: `docker compose -f docker-compose-kafka.yml ps`",
            validation: "docker compose",
          },
        },
      ],
      project: {
        title: "Event-Driven Order System",
        description:
          "Build an event-driven order processing system using RabbitMQ — order service publishes events, payment and notification services consume them. Implement retry logic and dead letter queues.",
        difficulty: "advanced",
        estimatedHours: 6,
        skills: [
          "RabbitMQ",
          "Event-driven architecture",
          "Message queues",
          "Pub/Sub",
          "Error handling",
        ],
      },
    },
    {
      id: "be-containerization",
      title: "Containerization",
      description:
        "Containerize your backend applications with Docker — images, Dockerfiles, Compose, and production best practices.",
      icon: "Box",
      trackId: "backend",
      order: 13,
      lessons: [
        {
          id: "be-docker-basics",
          title: "Docker Basics for Backend Developers",
          description:
            "Understand containers, images, and how Docker solves the 'works on my machine' problem for backend applications.",
          duration: "30 min",
          videoId: "Gjnup-PuquQ",
          videoTitle: "Docker in 100 Seconds",
          videoChannel: "Fireship",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Docker essentials:\n1. `docker --version`\n2. `docker pull node:20-alpine`\n3. `docker run -it node:20-alpine node -e \"console.log('Hello from Docker!')\"`\n4. `docker ps -a`\n5. `docker images`\n6. Clean up: `docker system prune -f`",
            validation: "docker run",
          },
        },
        {
          id: "be-dockerfiles",
          title: "Writing Production Dockerfiles",
          description:
            "Write optimized Dockerfiles — multi-stage builds, layer caching, non-root users, and minimal images.",
          duration: "35 min",
          videoId: "8vXoMqWgbQQ",
          videoTitle: "Top 8 Docker Best Practices for using Docker in Production",
          videoChannel: "TechWorld with Nana",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create an optimized Dockerfile:\n1. `mkdir backend-docker && cd backend-docker`\n2. `npm init -y && npm install express`\n3. Create `server.js`:\nconst express = require('express');\nconst app = express();\napp.get('/health', (req, res) => res.json({status: 'ok'}));\napp.listen(3000);\n4. Create `Dockerfile`:\n# Build stage\nFROM node:20-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\n\n# Production stage\nFROM node:20-alpine\nRUN addgroup -S app && adduser -S app -G app\nWORKDIR /app\nCOPY --from=builder /app/node_modules ./node_modules\nCOPY server.js .\nUSER app\nEXPOSE 3000\nCMD [\"node\", \"server.js\"]\n5. `docker build -t backend-app .`\n6. `docker run -p 3000:3000 backend-app`",
            validation: "docker build",
          },
        },
        {
          id: "be-docker-compose",
          title: "Docker Compose for Backend Stacks",
          description:
            "Orchestrate multi-container backend environments — app server, database, cache, and message broker together.",
          duration: "30 min",
          videoId: "SXwC9fSwct8",
          videoTitle: "Docker Compose Tutorial",
          videoChannel: "TechWorld with Nana",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create a full backend stack:\n1. Create `docker-compose.yml`:\nversion: '3.8'\nservices:\n  api:\n    build: .\n    ports:\n      - '3000:3000'\n    environment:\n      - DATABASE_URL=postgresql://postgres:secret@db:5432/app\n      - REDIS_URL=redis://cache:6379\n    depends_on:\n      - db\n      - cache\n  db:\n    image: postgres:16-alpine\n    environment:\n      POSTGRES_PASSWORD: secret\n      POSTGRES_DB: app\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n  cache:\n    image: redis:7-alpine\nvolumes:\n  pgdata:\n2. `docker compose up -d`\n3. `docker compose ps`\n4. `docker compose logs api`",
            validation: "docker compose up",
          },
        },
        {
          id: "be-container-best-practices",
          title: "Container Security & Best Practices",
          description:
            "Production container practices — health checks, resource limits, secrets management, image scanning, and .dockerignore.",
          duration: "25 min",
          videoId: "8vXoMqWgbQQ",
          videoTitle: "Docker Security Best Practices",
          videoChannel: "TechWorld with Nana",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Apply container best practices:\n1. Create `.dockerignore`:\nnode_modules\n.git\n.env\n*.md\n.github\n2. Add health check to Dockerfile:\nHEALTHCHECK --interval=30s --timeout=3s \\\n  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1\n3. Add resource limits to docker-compose.yml:\nservices:\n  api:\n    deploy:\n      resources:\n        limits:\n          memory: 512M\n          cpus: '0.5'\n4. Scan image: `docker scout quickview backend-app`",
            validation: "cat .dockerignore",
          },
        },
      ],
      project: {
        title: "Production-Ready Containerized Backend",
        description:
          "Containerize a complete backend application with Docker — multi-stage Dockerfile, Docker Compose with PostgreSQL and Redis, health checks, secrets management, and optimized image size under 100MB.",
        difficulty: "intermediate",
        estimatedHours: 5,
        skills: [
          "Docker",
          "Multi-stage builds",
          "Docker Compose",
          "Health checks",
          "Container security",
        ],
      },
    },
    {
      id: "be-web-servers",
      title: "Web Servers",
      description:
        "Configure and manage web servers — Nginx, Apache, reverse proxies, and load balancing.",
      icon: "Globe",
      trackId: "backend",
      order: 14,
      lessons: [
        {
          id: "be-nginx",
          title: "Nginx Configuration",
          description:
            "Set up Nginx as a web server — serving static files, server blocks, SSL termination, and configuration syntax.",
          duration: "30 min",
          videoId: "7VAI73roXaY",
          videoTitle: "NGINX Tutorial for Beginners",
          videoChannel: "TechWorld with Nana",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Run Nginx with Docker:\n1. Create `nginx.conf`:\nserver {\n    listen 80;\n    server_name localhost;\n    \n    location / {\n        root /usr/share/nginx/html;\n        index index.html;\n    }\n    \n    location /api {\n        return 200 '{\"status\": \"ok\"}';\n        add_header Content-Type application/json;\n    }\n}\n2. `echo '<h1>Hello from Nginx!</h1>' > index.html`\n3. `docker run -d -p 8080:80 -v $(pwd)/nginx.conf:/etc/nginx/conf.d/default.conf -v $(pwd)/index.html:/usr/share/nginx/html/index.html --name nginx nginx:alpine`\n4. `curl http://localhost:8080`\n5. `curl http://localhost:8080/api`",
            validation: "curl http://localhost:8080",
          },
        },
        {
          id: "be-apache-overview",
          title: "Apache HTTP Server Overview",
          description:
            "Understand Apache httpd — virtual hosts, .htaccess, mod_rewrite, and how it compares to Nginx.",
          duration: "20 min",
          videoId: "1CDxpAzvLKY",
          videoTitle: "Apache vs Nginx Explained",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "be-reverse-proxy-lb",
          title: "Reverse Proxy & Load Balancing",
          description:
            "Configure Nginx as a reverse proxy and load balancer — upstream servers, health checks, and traffic distribution.",
          duration: "30 min",
          videoId: "7VAI73roXaY",
          videoTitle: "Nginx Reverse Proxy and Load Balancing",
          videoChannel: "TechWorld with Nana",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Set up Nginx as a reverse proxy:\n1. Create `proxy.conf`:\nupstream backend {\n    server app1:3000;\n    server app2:3000;\n}\n\nserver {\n    listen 80;\n    location / {\n        proxy_pass http://backend;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    }\n}\n2. Create a docker-compose.yml with nginx + 2 app instances\n3. `docker compose up -d`\n4. Test: `curl http://localhost` — requests distribute across instances",
            validation: "cat proxy.conf",
          },
        },
      ],
      project: {
        title: "Load-Balanced Backend Deployment",
        description:
          "Deploy a backend API behind Nginx as a reverse proxy with load balancing across multiple app instances, SSL termination, static file serving, and gzip compression.",
        difficulty: "intermediate",
        estimatedHours: 4,
        skills: [
          "Nginx",
          "Reverse proxy",
          "Load balancing",
          "SSL/TLS",
          "Docker Compose",
        ],
      },
    },
    {
      id: "be-realtime",
      title: "Real-time Communication",
      description:
        "Build real-time features — WebSockets, Server-Sent Events, and choosing the right real-time pattern.",
      icon: "Radio",
      trackId: "backend",
      order: 15,
      lessons: [
        {
          id: "be-websockets",
          title: "WebSockets",
          description:
            "Understand the WebSocket protocol — full-duplex communication, connection lifecycle, and building a chat server.",
          duration: "30 min",
          videoId: "1BfCnjr_Vjg",
          videoTitle: "WebSockets in 100 Seconds",
          videoChannel: "Fireship",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Build a WebSocket server:\n1. `mkdir ws-demo && cd ws-demo`\n2. `npm init -y && npm install ws`\n3. Create `server.js`:\nconst { WebSocketServer } = require('ws');\nconst wss = new WebSocketServer({ port: 8080 });\n\nwss.on('connection', (ws) => {\n  console.log('Client connected');\n  ws.on('message', (data) => {\n    console.log('Received:', data.toString());\n    // Broadcast to all clients\n    wss.clients.forEach(client => {\n      if (client.readyState === 1) {\n        client.send(`Echo: ${data}`);\n      }\n    });\n  });\n  ws.send('Welcome to the WebSocket server!');\n});\nconsole.log('WS server on port 8080');\n4. `node server.js`",
            validation: "node server.js",
          },
        },
        {
          id: "be-sse",
          title: "Server-Sent Events (SSE)",
          description:
            "Implement SSE for one-way real-time streaming — live feeds, notifications, and progress updates from server to client.",
          duration: "25 min",
          videoId: "4HlNv1qpZFY",
          videoTitle: "Server-Sent Events Explained",
          videoChannel: "Fireship",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Build an SSE endpoint:\n1. `mkdir sse-demo && cd sse-demo`\n2. `npm init -y && npm install express`\n3. Create `server.js`:\nconst express = require('express');\nconst app = express();\n\napp.get('/events', (req, res) => {\n  res.setHeader('Content-Type', 'text/event-stream');\n  res.setHeader('Cache-Control', 'no-cache');\n  res.setHeader('Connection', 'keep-alive');\n  \n  let count = 0;\n  const interval = setInterval(() => {\n    res.write(`data: ${JSON.stringify({time: new Date().toISOString(), count: ++count})}\\n\\n`);\n  }, 2000);\n  \n  req.on('close', () => clearInterval(interval));\n});\n\napp.listen(3000, () => console.log('SSE server on port 3000'));\n4. `node server.js`\n5. Test: `curl http://localhost:3000/events`",
            validation: "node server.js",
          },
        },
        {
          id: "be-realtime-patterns",
          title: "Real-time Architecture Patterns",
          description:
            "Compare WebSockets, SSE, long polling, and WebRTC — choose the right real-time pattern for your use case.",
          duration: "20 min",
          videoId: "1BfCnjr_Vjg",
          videoTitle: "Real-time Communication Patterns",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Real-time Chat Application",
        description:
          "Build a real-time chat application with WebSockets — multiple rooms, user presence indicators, message history, typing indicators, and graceful disconnection handling.",
        difficulty: "intermediate",
        estimatedHours: 5,
        skills: [
          "WebSockets",
          "Real-time communication",
          "Event handling",
          "Connection management",
          "Broadcasting",
        ],
      },
    },
    {
      id: "be-scaling-patterns",
      title: "Scaling & Design Patterns",
      description:
        "Scale your backend to millions of users — horizontal scaling, database strategies, and resilience patterns.",
      icon: "TrendingUp",
      trackId: "backend",
      order: 16,
      lessons: [
        {
          id: "be-horizontal-vs-vertical",
          title: "Horizontal vs Vertical Scaling",
          description:
            "Understand scaling strategies — scaling up (bigger servers) vs scaling out (more servers), and when to use each.",
          duration: "20 min",
          videoId: "xpDnVSmNFX0",
          videoTitle: "System Design: Scaling",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
        {
          id: "be-database-sharding",
          title: "Database Sharding",
          description:
            "Split your database across multiple servers — sharding strategies, shard keys, consistent hashing, and trade-offs.",
          duration: "25 min",
          videoId: "hdxdhCpgYo8",
          videoTitle: "Database Sharding Explained",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "be-replication",
          title: "Database Replication",
          description:
            "Set up read replicas and primary-secondary replication — improve read performance and ensure data availability.",
          duration: "25 min",
          videoId: "bI8Ry6GhMSE",
          videoTitle: "Database Replication Explained",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "be-cap-theorem",
          title: "CAP Theorem & Distributed Systems",
          description:
            "Understand the CAP theorem — Consistency, Availability, Partition tolerance, and what it means for your architecture.",
          duration: "20 min",
          videoId: "BHqjEjzAicA",
          videoTitle: "CAP Theorem Simplified",
          videoChannel: "ByteByteGo",
          hasTerminal: false,
        },
        {
          id: "be-circuit-breaker",
          title: "Circuit Breaker & Resilience Patterns",
          description:
            "Build resilient systems — circuit breaker, retry with backoff, bulkhead, timeout patterns, and graceful degradation.",
          duration: "25 min",
          videoId: "ADHcBxEXvFA",
          videoTitle: "Circuit Breaker Pattern Explained",
          videoChannel: "TechWorld with Nana",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Implement a simple circuit breaker:\n1. `mkdir circuit-demo && cd circuit-demo`\n2. `npm init -y`\n3. Create `circuitBreaker.js`:\nclass CircuitBreaker {\n  constructor(fn, options = {}) {\n    this.fn = fn;\n    this.failures = 0;\n    this.threshold = options.threshold || 3;\n    this.timeout = options.timeout || 10000;\n    this.state = 'CLOSED';\n    this.nextAttempt = Date.now();\n  }\n  async call(...args) {\n    if (this.state === 'OPEN') {\n      if (Date.now() < this.nextAttempt) throw new Error('Circuit is OPEN');\n      this.state = 'HALF-OPEN';\n    }\n    try {\n      const result = await this.fn(...args);\n      this.reset();\n      return result;\n    } catch (err) {\n      this.failures++;\n      if (this.failures >= this.threshold) {\n        this.state = 'OPEN';\n        this.nextAttempt = Date.now() + this.timeout;\n      }\n      throw err;\n    }\n  }\n  reset() { this.failures = 0; this.state = 'CLOSED'; }\n}\nmodule.exports = CircuitBreaker;\n4. `node -e \"const CB = require('./circuitBreaker'); console.log(new CB(() => {}).state);\"`",
            validation: "node -e",
          },
        },
      ],
      project: {
        title: "Scalable Backend Architecture Design",
        description:
          "Design and document a scalable architecture for a high-traffic application — load balancing, database sharding strategy, read replicas, caching layers, message queues, circuit breakers, and a detailed system design diagram.",
        difficulty: "advanced",
        estimatedHours: 7,
        skills: [
          "System design",
          "Scaling strategies",
          "Database sharding",
          "Replication",
          "Resilience patterns",
          "CAP theorem",
        ],
      },
    },
  ],
};
