import { Track } from "./types";

export const devopsTrack: Track = {
  id: "devops",
  title: "DevOps Fundamentals",
  description:
    "Master the foundations of DevOps — from Linux basics to cloud infrastructure and CI/CD pipelines.",
  icon: "Server",
  color: "blue",
  category: "infrastructure",
  modules: [
    {
      id: "computer-basics",
      title: "Computer & Internet Basics",
      description:
        "Understand how computers work, what the internet is, and get introduced to the command line.",
      icon: "Monitor",
      trackId: "devops",
      order: 1,
      lessons: [
        {
          id: "how-computers-work",
          title: "How Computers Work",
          description:
            "Learn the fundamental components of a computer — CPU, RAM, storage, and how they work together.",
          duration: "20 min",
          videoId: "mCq8-xTH7jA",
          videoTitle: "How Computers Work - Crash Course",
          videoChannel: "CrashCourse",
          hasTerminal: false,
        },
        {
          id: "what-is-the-internet",
          title: "What is the Internet & Networking",
          description:
            "Understand how the internet works, IP addresses, DNS, and how data travels across networks.",
          duration: "25 min",
          videoId: "7_LPdttKXPc",
          videoTitle: "How The Internet Works",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "intro-to-command-line",
          title: "Introduction to the Command Line",
          description:
            "Your first steps with the terminal — navigating files, running basic commands, and understanding the shell.",
          duration: "30 min",
          videoId: "uwAqEzhyjtw",
          videoTitle: "Command Line Crash Course",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Try these commands in the terminal:\n1. Type `echo Hello World` and press Enter\n2. Type `pwd` to see your current directory\n3. Type `ls` to list files\n4. Create a folder: `mkdir my-first-folder`\n5. Navigate into it: `cd my-first-folder`",
            validation: "mkdir",
          },
        },
      ],
      project: {
        title: "System Info Script",
        description:
          "Set up your development environment and create a simple bash script that displays system information like OS type, hostname, disk usage, and memory.",
        difficulty: "beginner",
        estimatedHours: 2,
        skills: ["Terminal", "Bash basics", "System commands"],
      },
    },
    {
      id: "linux-terminal",
      title: "Linux & Terminal Essentials",
      description:
        "Master essential Linux commands, file permissions, text editors, and shell scripting.",
      icon: "Terminal",
      trackId: "devops",
      order: 2,
      lessons: [
        {
          id: "basic-linux-commands",
          title: "Basic Linux Commands",
          description:
            "Learn essential commands — ls, cd, mkdir, rm, cp, mv, cat, grep, and more.",
          duration: "35 min",
          videoId: "ZtqBQ68cfJc",
          videoTitle: "60 Linux Commands you NEED to know",
          videoChannel: "NetworkChuck",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice these commands:\n1. `ls -la` — list all files with details\n2. `mkdir projects` — create a directory\n3. `touch hello.txt` — create a file\n4. `echo 'Hello DevOps' > hello.txt` — write to file\n5. `cat hello.txt` — read the file\n6. `cp hello.txt backup.txt` — copy a file\n7. `rm backup.txt` — remove a file",
            validation: "cat hello.txt",
          },
        },
        {
          id: "file-permissions",
          title: "File Permissions",
          description:
            "Understand Linux file permissions, ownership, and how to use chmod and chown.",
          duration: "25 min",
          videoId: "D-VqgvBMV7g",
          videoTitle: "Linux File Permissions in 5 Minutes",
          videoChannel: "TechWorld with Nana",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice file permissions:\n1. `touch script.sh` — create a file\n2. `ls -l script.sh` — see permissions\n3. `chmod +x script.sh` — make executable\n4. `chmod 644 script.sh` — set specific permissions\n5. `ls -l script.sh` — verify the change",
            validation: "chmod",
          },
        },
        {
          id: "text-editors",
          title: "Text Editors (nano & vim basics)",
          description:
            "Learn to edit files in the terminal using nano and the basics of vim.",
          duration: "20 min",
          videoId: "g2PU--TctAM",
          videoTitle: "Nano Text Editor on Linux Basics - How to Use Nano Tutorial (Beginners Guide)",
          videoChannel: "SavvyNik",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Try nano editor:\n1. `nano myfile.txt` — opens nano editor\n2. Type some text\n3. Press Ctrl+O to save, Enter to confirm\n4. Press Ctrl+X to exit\n5. `cat myfile.txt` — verify your changes",
            validation: "nano",
          },
        },
        {
          id: "shell-scripting-basics",
          title: "Shell Scripting Basics",
          description:
            "Write your first bash scripts with variables, loops, and conditionals.",
          duration: "40 min",
          videoId: "tK9Oc6AEnR4",
          videoTitle: "Bash Scripting Full Course",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create your first script:\n1. `nano greet.sh`\n2. Add these lines:\n   #!/bin/bash\n   NAME=\"DevOps Learner\"\n   echo \"Hello, $NAME!\"\n   echo \"Today is $(date)\"\n3. Save and exit (Ctrl+O, Enter, Ctrl+X)\n4. `chmod +x greet.sh`\n5. `./greet.sh`",
            validation: "./greet.sh",
          },
        },
      ],
      project: {
        title: "File Organizer Script",
        description:
          "Build a bash script that scans a directory and automatically sorts files into subdirectories based on their extension (.txt, .jpg, .pdf, etc.).",
        difficulty: "beginner",
        estimatedHours: 3,
        skills: ["Bash scripting", "File operations", "Conditionals", "Loops"],
      },
    },
    {
      id: "git-version-control",
      title: "Version Control with Git",
      description:
        "Learn Git from scratch — commits, branches, merges, and collaborating on GitHub.",
      icon: "GitBranch",
      trackId: "devops",
      order: 3,
      lessons: [
        {
          id: "what-is-version-control",
          title: "What is Version Control",
          description:
            "Understand why version control matters and how Git tracks changes to your code.",
          duration: "15 min",
          videoId: "Yc8sCSeMhi4",
          videoTitle: "Git Explained in 100 Seconds",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
        {
          id: "git-basics",
          title: "Git Basics",
          description:
            "Master the core Git commands: init, add, commit, status, log, and diff.",
          duration: "35 min",
          videoId: "HVsySz-h9r4",
          videoTitle: "Git & GitHub Crash Course For Beginners",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Initialize and use Git:\n1. `git init my-project` — create a repo\n2. `cd my-project`\n3. `echo '# My Project' > README.md`\n4. `git add README.md`\n5. `git status`\n6. `git commit -m 'Initial commit'`\n7. `git log --oneline`",
            validation: "git commit",
          },
        },
        {
          id: "github-workflows",
          title: "GitHub Workflows",
          description:
            "Learn to push code to GitHub, create pull requests, and collaborate with others.",
          duration: "30 min",
          videoId: "nhNq2kIvi9s",
          videoTitle: "GitHub Pull Requests in 100 Seconds",
          videoChannel: "Fireship",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice GitHub workflow:\n1. `git remote add origin <url>` — connect to GitHub\n2. `git push -u origin main` — push your code\n3. `git checkout -b feature-branch` — create branch\n4. Make changes and commit\n5. `git push origin feature-branch`",
            validation: "git push",
          },
        },
        {
          id: "branching-merging",
          title: "Branching & Merging",
          description:
            "Create branches for features, merge them back, and understand different merge strategies.",
          duration: "25 min",
          videoId: "e9lnsKot_SQ",
          videoTitle: "Git Branching and Merging",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice branching:\n1. `git checkout -b feature-login`\n2. Create a file: `echo 'login page' > login.html`\n3. `git add . && git commit -m 'Add login page'`\n4. `git checkout main`\n5. `git merge feature-login`\n6. `git log --oneline --graph`",
            validation: "git merge",
          },
        },
        {
          id: "resolving-conflicts",
          title: "Resolving Conflicts",
          description:
            "Learn how to handle and resolve merge conflicts like a pro.",
          duration: "20 min",
          videoId: "lz5OuKzvadQ",
          videoTitle: "Resolve Git MERGE CONFLICTS",
          videoChannel: "TechWorld with Nana",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Simulate a conflict:\n1. Create two branches that modify the same file\n2. Try to merge them\n3. Open the conflicting file\n4. Resolve the conflict markers (<<<, ===, >>>)\n5. `git add .` and `git commit`",
            validation: "git add",
          },
        },
      ],
      project: {
        title: "Portfolio Repository",
        description:
          "Create a professional portfolio repository on GitHub with proper branching strategy (main/develop/feature branches), meaningful commits, README with markdown formatting, and .gitignore.",
        difficulty: "beginner",
        estimatedHours: 3,
        skills: ["Git", "GitHub", "Branching", "README", "Markdown"],
      },
    },
    {
      id: "programming-fundamentals",
      title: "Programming Fundamentals",
      description:
        "Learn Python and Bash scripting — the essential languages for DevOps automation.",
      icon: "Code",
      trackId: "devops",
      order: 4,
      lessons: [
        {
          id: "python-basics",
          title: "Python Basics for DevOps",
          description:
            "Variables, data types, print statements, and input — your first Python code.",
          duration: "40 min",
          videoId: "kqtD5dpn9C8",
          videoTitle: "Python for Beginners – Full Course",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Write your first Python:\n1. `python3 -c \"print('Hello DevOps!')\"`\n2. Create a file: `nano hello.py`\n3. Add: name = input('Your name: ')\n   print(f'Welcome to DevOps, {name}!')\n4. Run: `python3 hello.py`",
            validation: "python3",
          },
        },
        {
          id: "python-loops-functions",
          title: "Variables, Loops, and Functions",
          description:
            "Control flow with if/else, for/while loops, and writing reusable functions.",
          duration: "35 min",
          videoId: "eWRfhZUzrAc",
          videoTitle: "Python Functions and Loops",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice loops and functions:\nCreate a file `tools.py`:\n\ndef check_servers(servers):\n    for server in servers:\n        print(f'Checking {server}...')\n\nservers = ['web-01', 'db-01', 'cache-01']\ncheck_servers(servers)",
            validation: "python3 tools.py",
          },
        },
        {
          id: "python-files-apis",
          title: "Working with Files and APIs",
          description:
            "Read/write files, parse JSON/YAML, and make HTTP requests with Python.",
          duration: "35 min",
          videoId: "xi0vhXFPegw",
          videoTitle: "Python API Tutorial",
          videoChannel: "TechWorld with Nana",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Work with files:\n1. Create `config.py`:\nimport json\n\nconfig = {'server': 'web-01', 'port': 8080}\nwith open('config.json', 'w') as f:\n    json.dump(config, f, indent=2)\n\nprint('Config saved!')\n\n2. Run: `python3 config.py`\n3. `cat config.json`",
            validation: "python3 config.py",
          },
        },
        {
          id: "bash-advanced",
          title: "Advanced Bash Scripting",
          description:
            "Functions, error handling, command substitution, and practical automation scripts.",
          duration: "30 min",
          videoId: "TPRSJbtfK4M",
          videoTitle: "Advanced Bash Scripting Tutorial",
          videoChannel: "NetworkChuck",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Advanced bash:\nCreate `monitor.sh`:\n#!/bin/bash\ncheck_service() {\n  if command -v $1 &>/dev/null; then\n    echo \"✅ $1 is installed\"\n  else\n    echo \"❌ $1 is NOT installed\"\n  fi\n}\n\ncheck_service git\ncheck_service docker\ncheck_service python3",
            validation: "./monitor.sh",
          },
        },
        {
          id: "yaml-json-config",
          title: "YAML & JSON Configuration",
          description:
            "Understand YAML and JSON formats — the backbone of DevOps configuration files.",
          duration: "20 min",
          videoId: "1uFVr15xDGg",
          videoTitle: "YAML Tutorial for DevOps",
          videoChannel: "TechWorld with Nana",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create a YAML config:\n1. `nano app-config.yaml`\n2. Add:\napp:\n  name: my-web-app\n  version: 1.0.0\n  environment: development\n  database:\n    host: localhost\n    port: 5432\n3. Save and verify with `cat app-config.yaml`",
            validation: "cat app-config.yaml",
          },
        },
      ],
      project: {
        title: "Website Uptime Monitor",
        description:
          "Build a Python script that monitors a list of websites for uptime, checks HTTP status codes, measures response times, and logs results to a file with timestamps.",
        difficulty: "beginner",
        estimatedHours: 4,
        skills: [
          "Python",
          "HTTP requests",
          "File I/O",
          "Error handling",
          "Logging",
        ],
      },
    },
    {
      id: "networking",
      title: "Networking & Protocols",
      description:
        "Understand DNS, HTTP/HTTPS, SSH, firewalls, and the fundamentals of network communication.",
      icon: "Globe",
      trackId: "devops",
      order: 5,
      lessons: [
        {
          id: "dns-http-https",
          title: "DNS, HTTP/HTTPS Explained",
          description:
            "How domain names resolve, HTTP request/response cycle, and HTTPS encryption.",
          duration: "30 min",
          videoId: "27r4Bzuj5NQ",
          videoTitle: "DNS Explained in 100 Seconds",
          videoChannel: "Fireship",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Explore networking:\n1. `nslookup google.com` — DNS lookup\n2. `curl -I https://google.com` — see HTTP headers\n3. `dig google.com` — detailed DNS info\n4. `curl -v https://httpbin.org/get` — verbose request",
            validation: "curl",
          },
        },
        {
          id: "ssh-connections",
          title: "SSH and Secure Connections",
          description:
            "Generate SSH keys, connect to remote servers, and configure SSH securely.",
          duration: "25 min",
          videoId: "hQWRp-FdTpc",
          videoTitle: "SSH Crash Course",
          videoChannel: "Traversy Media",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "SSH key practice:\n1. `ssh-keygen -t ed25519 -C 'devops@learn'` — generate key\n2. `ls ~/.ssh/` — see your keys\n3. `cat ~/.ssh/id_ed25519.pub` — view public key\n4. Learn: public key goes on server, private stays with you",
            validation: "ssh-keygen",
          },
        },
        {
          id: "ports-firewalls",
          title: "Ports and Firewalls",
          description:
            "Understand network ports, common port numbers, and basic firewall concepts.",
          duration: "20 min",
          videoId: "LKz1jYngpcU",
          videoTitle: "What are Ports?",
          videoChannel: "NetworkChuck",
          hasTerminal: false,
        },
        {
          id: "load-balancing",
          title: "Load Balancing Concepts",
          description:
            "How load balancers distribute traffic, types of balancing, and common tools.",
          duration: "20 min",
          videoId: "dBmxNsS3BGE",
          videoTitle: "Load Balancing Explained",
          videoChannel: "TechWorld with Nana",
          hasTerminal: false,
        },
        {
          id: "osi-model",
          title: "OSI Model Simplified",
          description:
            "The 7 layers of networking explained in simple terms with real-world examples.",
          duration: "20 min",
          videoId: "7IS7gigunyI",
          videoTitle: "OSI Model Explained",
          videoChannel: "NetworkChuck",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Network Diagnostic Script",
        description:
          "Create a script that performs comprehensive network diagnostics: DNS lookups, HTTP checks, port scanning for common services, and generates a network health report.",
        difficulty: "intermediate",
        estimatedHours: 4,
        skills: ["Networking", "DNS", "SSH", "Bash scripting", "HTTP"],
      },
    },
    {
      id: "docker",
      title: "Containers & Docker",
      description:
        "Learn containerization from scratch — Docker images, containers, volumes, networking, and Compose.",
      icon: "Container",
      trackId: "devops",
      order: 6,
      lessons: [
        {
          id: "what-are-containers",
          title: "What are Containers (vs VMs)",
          description:
            "Understand the difference between containers and virtual machines, and why containers matter.",
          duration: "20 min",
          videoId: "Gjnup-PuquQ",
          videoTitle: "Docker in 100 Seconds",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
        {
          id: "docker-basics",
          title: "Docker Installation and Basics",
          description:
            "Install Docker and learn core commands — run, pull, ps, stop, and rm.",
          duration: "35 min",
          videoId: "pg19Z8LL06w",
          videoTitle: "Docker Tutorial for Beginners",
          videoChannel: "TechWorld with Nana",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Docker basics (requires Docker installed):\n1. `docker --version`\n2. `docker pull hello-world`\n3. `docker run hello-world`\n4. `docker ps -a` — list containers\n5. `docker images` — list images",
            validation: "docker run",
          },
        },
        {
          id: "dockerfile",
          title: "Dockerfile Creation",
          description:
            "Write Dockerfiles to build custom images for your applications.",
          duration: "30 min",
          videoId: "SnSH8Ht3MIc",
          videoTitle: "Build YOUR OWN Dockerfile, Image, and Container - Docker Tutorial",
          videoChannel: "Techno Tim",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create a Dockerfile:\n1. `mkdir my-app && cd my-app`\n2. `echo '<h1>Hello Docker</h1>' > index.html`\n3. Create Dockerfile:\nFROM nginx:alpine\nCOPY index.html /usr/share/nginx/html/\n4. `docker build -t my-app .`\n5. `docker run -p 8080:80 my-app`",
            validation: "docker build",
          },
        },
        {
          id: "docker-images-volumes",
          title: "Images, Containers, and Volumes",
          description:
            "Deep dive into image layers, container lifecycle, and persistent storage with volumes.",
          duration: "30 min",
          videoId: "p2PH_YPCsis",
          videoTitle: "Docker Volumes Explained",
          videoChannel: "TechWorld with Nana",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Work with volumes:\n1. `docker volume create mydata`\n2. `docker volume ls`\n3. `docker run -v mydata:/data alpine sh -c 'echo hello > /data/test.txt'`\n4. `docker run -v mydata:/data alpine cat /data/test.txt`",
            validation: "docker volume",
          },
        },
        {
          id: "docker-compose",
          title: "Docker Compose Multi-Container Apps",
          description:
            "Define and run multi-container applications with Docker Compose.",
          duration: "35 min",
          videoId: "SXwC9fSwct8",
          videoTitle: "Docker Compose Tutorial",
          videoChannel: "TechWorld with Nana",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create docker-compose.yml:\nversion: '3.8'\nservices:\n  web:\n    image: nginx:alpine\n    ports:\n      - '8080:80'\n  db:\n    image: postgres:15\n    environment:\n      POSTGRES_PASSWORD: secret\n\nRun: `docker compose up -d`\nCheck: `docker compose ps`",
            validation: "docker compose",
          },
        },
        {
          id: "docker-networking",
          title: "Docker Networking",
          description:
            "How containers communicate — bridge networks, host networking, and custom networks.",
          duration: "25 min",
          videoId: "bKFMS5C4CG0",
          videoTitle: "Docker Networking Crash Course",
          videoChannel: "NetworkChuck",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Docker networking:\n1. `docker network ls`\n2. `docker network create my-net`\n3. `docker run --network my-net --name web -d nginx`\n4. `docker run --network my-net alpine ping web -c 3`",
            validation: "docker network",
          },
        },
      ],
      project: {
        title: "Containerized Web App",
        description:
          "Containerize a simple web application (Node.js or Python) with a PostgreSQL database using Docker Compose, with proper networking, health checks, and persistent volumes.",
        difficulty: "intermediate",
        estimatedHours: 5,
        skills: [
          "Docker",
          "Dockerfile",
          "Docker Compose",
          "Networking",
          "Volumes",
        ],
      },
    },
    {
      id: "cloud-platforms",
      title: "Cloud Platforms",
      description:
        "Get started with cloud computing — AWS fundamentals, cloud services, and serverless.",
      icon: "Cloud",
      trackId: "devops",
      order: 7,
      lessons: [
        {
          id: "cloud-concepts",
          title: "Cloud Concepts (IaaS, PaaS, SaaS)",
          description:
            "Understand the different cloud service models and when to use each one.",
          duration: "20 min",
          videoId: "M988_fsOSWo",
          videoTitle: "Cloud Computing In 6 Minutes",
          videoChannel: "Simplilearn",
          hasTerminal: false,
        },
        {
          id: "aws-fundamentals",
          title: "AWS Fundamentals (EC2, S3, IAM)",
          description:
            "Learn the core AWS services — launch instances, store files, and manage access.",
          duration: "45 min",
          videoId: "Nzv-tzU-UAw",
          videoTitle: "AWS Tutorial for Beginners – Step-by-Step Guide to Cloud Computing",
          videoChannel: "Kevin Stratvert",
          hasTerminal: false,
        },
        {
          id: "gcp-azure-overview",
          title: "GCP & Azure Overview",
          description:
            "A quick tour of Google Cloud Platform and Microsoft Azure services.",
          duration: "25 min",
          videoId: "JIbIYCM48to",
          videoTitle: "Cloud Platform Comparison",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
        {
          id: "serverless-intro",
          title: "Serverless Introduction (Lambda)",
          description:
            "What is serverless computing, AWS Lambda, and when to go serverless.",
          duration: "20 min",
          videoId: "W_VV2Fx32_Y",
          videoTitle: "Serverless in 100 Seconds",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
        {
          id: "cloud-cost-management",
          title: "Cost Management Basics",
          description:
            "Avoid surprise cloud bills — budgets, alerts, and cost optimization strategies.",
          duration: "20 min",
          videoId: "KuCZ1dAkuso",
          videoTitle: "My Top 3 Things for AWS Cost Management",
          videoChannel: "Jon Myer Podcast Powered by Myer Media",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Static Website on AWS",
        description:
          "Deploy a static portfolio website to AWS S3 with CloudFront CDN for global distribution, Route53 for DNS, and proper bucket policies.",
        difficulty: "intermediate",
        estimatedHours: 4,
        skills: ["AWS S3", "CloudFront", "IAM", "DNS", "Cloud deployment"],
      },
    },
    {
      id: "cicd",
      title: "CI/CD Pipelines",
      description:
        "Automate your software delivery — from code commit to production deployment.",
      icon: "Workflow",
      trackId: "devops",
      order: 8,
      lessons: [
        {
          id: "ci-concepts",
          title: "Continuous Integration Concepts",
          description:
            "What is CI, why it matters, and how it fits into the development workflow.",
          duration: "20 min",
          videoId: "1er2cjUq1UI",
          videoTitle: "CI/CD In 5 Minutes",
          videoChannel: "TechWorld with Nana",
          hasTerminal: false,
        },
        {
          id: "cd-vs-cd",
          title: "Continuous Delivery vs Deployment",
          description:
            "Understand the difference between continuous delivery and continuous deployment.",
          duration: "15 min",
          videoId: "LNLKZ4Rvk8w",
          videoTitle: "Continuous Delivery vs Continuous Deployment",
          videoChannel: "TechWorld with Nana",
          hasTerminal: false,
        },
        {
          id: "github-actions",
          title: "GitHub Actions Deep Dive",
          description:
            "Build CI/CD pipelines with GitHub Actions — workflows, jobs, steps, and secrets.",
          duration: "40 min",
          videoId: "R8_veQiYBjI",
          videoTitle: "GitHub Actions Tutorial",
          videoChannel: "TechWorld with Nana",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create a GitHub Actions workflow:\n1. `mkdir -p .github/workflows`\n2. Create `.github/workflows/ci.yml`:\nname: CI\non: [push]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: echo 'Hello CI!'",
            validation: "cat .github/workflows",
          },
        },
        {
          id: "testing-in-pipelines",
          title: "Testing in Pipelines",
          description:
            "Add automated tests to your CI/CD pipeline — unit tests, integration tests, and linting.",
          duration: "25 min",
          videoId: "scEDHsr3APg",
          videoTitle: "Testing in CI/CD",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Add tests to your pipeline:\nUpdate your ci.yml job:\nsteps:\n  - uses: actions/checkout@v4\n  - uses: actions/setup-node@v4\n  - run: npm install\n  - run: npm test\n  - run: npm run lint",
            validation: "cat .github",
          },
        },
        {
          id: "deployment-strategies",
          title: "Deployment Strategies",
          description:
            "Blue-green, canary, and rolling deployments — pros, cons, and when to use each.",
          duration: "20 min",
          videoId: "AWVTKBUnoIg",
          videoTitle: "Deployment Strategies Explained",
          videoChannel: "TechWorld with Nana",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Automated CI/CD Pipeline",
        description:
          "Create a complete CI/CD pipeline with GitHub Actions that runs tests, lints code, builds a Docker image, and deploys to a staging environment on every push.",
        difficulty: "intermediate",
        estimatedHours: 5,
        skills: [
          "GitHub Actions",
          "CI/CD",
          "Docker",
          "Testing",
          "Deployment",
        ],
      },
    },
    {
      id: "infrastructure-as-code",
      title: "Infrastructure as Code",
      description:
        "Provision and manage infrastructure programmatically with Terraform and Ansible.",
      icon: "FileCode",
      trackId: "devops",
      order: 9,
      lessons: [
        {
          id: "iac-principles",
          title: "IaC Principles and Benefits",
          description:
            "Why infrastructure as code matters — repeatability, version control, and automation.",
          duration: "20 min",
          videoId: "POPP2WTJ8es",
          videoTitle: "Infrastructure as Code Explained",
          videoChannel: "TechWorld with Nana",
          hasTerminal: false,
        },
        {
          id: "terraform-basics",
          title: "Terraform Basics",
          description:
            "Write your first Terraform configuration — providers, resources, and terraform init/plan/apply.",
          duration: "40 min",
          videoId: "l5k1ai_GBDE",
          videoTitle: "Terraform Course for Beginners",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create a Terraform config:\n1. `mkdir terraform-demo && cd terraform-demo`\n2. Create `main.tf`:\nterraform {\n  required_providers {\n    local = {\n      source = \"hashicorp/local\"\n    }\n  }\n}\nresource \"local_file\" \"hello\" {\n  content  = \"Hello Terraform!\"\n  filename = \"hello.txt\"\n}",
            validation: "terraform",
          },
        },
        {
          id: "terraform-state",
          title: "Terraform State Management",
          description:
            "Understand Terraform state, remote backends, and state locking.",
          duration: "25 min",
          videoId: "yhLrH0Q-kq4",
          videoTitle: "Learn Terraform State in 10 Minutes",
          videoChannel: "Chris Wahl",
          hasTerminal: false,
        },
        {
          id: "ansible-basics",
          title: "Ansible for Configuration Management",
          description:
            "Automate server configuration with Ansible playbooks, roles, and inventory.",
          duration: "35 min",
          videoId: "1id6ERvfozo",
          videoTitle: "Ansible Full Course",
          videoChannel: "TechWorld with Nana",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create an Ansible playbook:\n1. Create `playbook.yml`:\n---\n- hosts: localhost\n  tasks:\n    - name: Create a file\n      copy:\n        content: 'Hello Ansible!'\n        dest: /tmp/hello-ansible.txt\n    - name: Print message\n      debug:\n        msg: 'Ansible is working!'",
            validation: "ansible",
          },
        },
        {
          id: "terraform-ansible-combo",
          title: "Combining Terraform & Ansible",
          description:
            "Use Terraform to provision infrastructure and Ansible to configure it — the perfect combo.",
          duration: "25 min",
          videoId: "l5k1ai_GBDE",
          videoTitle: "Terraform + Ansible Workflow",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Provision & Configure a VM",
        description:
          "Use Terraform to provision a cloud VM (or local VM with Vagrant) and Ansible to configure it with Nginx, Node.js, and your application code.",
        difficulty: "advanced",
        estimatedHours: 6,
        skills: [
          "Terraform",
          "Ansible",
          "Cloud VMs",
          "Configuration management",
        ],
      },
    },
    {
      id: "monitoring",
      title: "Monitoring & Observability",
      description:
        "Keep your systems healthy — metrics, dashboards, logging, and alerting.",
      icon: "Activity",
      trackId: "devops",
      order: 10,
      lessons: [
        {
          id: "why-monitoring",
          title: "Why Monitoring Matters",
          description:
            "The importance of observability — what to monitor, the three pillars, and common patterns.",
          duration: "20 min",
          videoId: "CAQ_a2-9UOI",
          videoTitle: "Observability vs. APM vs. Monitoring",
          videoChannel: "IBM Technology",
          hasTerminal: false,
        },
        {
          id: "prometheus",
          title: "Prometheus Metrics Collection",
          description:
            "Set up Prometheus to collect metrics from your applications and infrastructure.",
          duration: "35 min",
          videoId: "h4Sl21AKiDg",
          videoTitle: "Prometheus Monitoring Tutorial",
          videoChannel: "TechWorld with Nana",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Prometheus with Docker:\n1. Create `prometheus.yml`:\nglobal:\n  scrape_interval: 15s\nscrape_configs:\n  - job_name: 'prometheus'\n    static_configs:\n      - targets: ['localhost:9090']\n\n2. `docker run -p 9090:9090 -v ./prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus`",
            validation: "docker run",
          },
        },
        {
          id: "grafana",
          title: "Grafana Dashboards",
          description:
            "Build beautiful monitoring dashboards with Grafana connected to Prometheus.",
          duration: "30 min",
          videoId: "lILY8eSspEo",
          videoTitle: "Grafana Tutorial for Beginners",
          videoChannel: "TechWorld with Nana",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Run Grafana with Docker:\n1. `docker run -d -p 3000:3000 grafana/grafana`\n2. Open http://localhost:3000\n3. Login: admin/admin\n4. Add Prometheus data source\n5. Create your first dashboard",
            validation: "docker run",
          },
        },
        {
          id: "logging-elk",
          title: "Logging with ELK Stack Concepts",
          description:
            "Understand centralized logging with Elasticsearch, Logstash, and Kibana.",
          duration: "25 min",
          videoId: "4X0WLg05ASw",
          videoTitle: "ELK Stack Tutorial",
          videoChannel: "TechWorld with Nana",
          hasTerminal: false,
        },
        {
          id: "alerting",
          title: "Alerting and Incident Response",
          description:
            "Set up alerts for when things go wrong and learn incident response procedures.",
          duration: "20 min",
          videoId: "-1wZrkRzy5s",
          videoTitle: "Alerting & Incident Response: Proactive Monitoring & Management for Beginners",
          videoChannel: "CodeLucky",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Full Monitoring Stack",
        description:
          "Set up a complete monitoring stack with Prometheus + Grafana for a Docker application, including custom dashboards, metrics exporters, and alert rules.",
        difficulty: "advanced",
        estimatedHours: 6,
        skills: [
          "Prometheus",
          "Grafana",
          "Docker Compose",
          "Metrics",
          "Alerting",
        ],
      },
    },
  ],
};
