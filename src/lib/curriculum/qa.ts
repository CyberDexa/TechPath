import { Track } from "./types";

export const qaTrack: Track = {
  id: "qa",
  title: "QA Engineer",
  description:
    "Master software quality assurance — from testing fundamentals and manual testing to automation frameworks and CI/CD integration.",
  icon: "Bug",
  color: "teal",
  category: "security-quality",
  modules: [
    {
      id: "qa-fundamentals",
      title: "QA Fundamentals",
      description:
        "Understand the role of QA, software quality principles, and different types of testing.",
      icon: "BookOpen",
      trackId: "qa",
      order: 1,
      lessons: [
        {
          id: "qa-what-is-qa",
          title: "What is Quality Assurance?",
          description:
            "Learn the difference between QA, QC, and Testing, and why quality matters in software development.",
          duration: "20 min",
          videoId: "oLc9gVM8FBM",
          videoTitle: "Software Testing Explained",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "qa-types-of-testing",
          title: "Types of Software Testing",
          description:
            "Overview of testing types — unit, integration, system, acceptance, regression, smoke, and sanity testing.",
          duration: "25 min",
          videoId: "YEBfamv-_do",
          videoTitle: "Types of Software Testing",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "qa-testing-levels",
          title: "Testing Levels & Test Pyramid",
          description:
            "Understand the test pyramid — unit tests at the base, integration in the middle, E2E at the top, and why balance matters.",
          duration: "20 min",
          videoId: "YaXJeUkBe4Y",
          videoTitle: "The Testing Pyramid",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
        {
          id: "qa-roles-responsibilities",
          title: "QA Roles & Responsibilities",
          description:
            "What a QA engineer does day-to-day — test planning, execution, bug reporting, and collaboration with developers.",
          duration: "20 min",
          videoId: "oLc9gVM8FBM",
          videoTitle: "Day in the Life of a QA Engineer",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
      ],
      project: {
        title: "QA Strategy Document",
        description:
          "Create a comprehensive QA strategy document for a sample e-commerce application, defining test levels, entry/exit criteria, test environments, and quality metrics.",
        difficulty: "beginner",
        estimatedHours: 3,
        skills: ["QA Fundamentals", "Test Strategy", "Documentation", "Test Planning"],
      },
    },
    {
      id: "qa-testing-approaches",
      title: "Testing Approaches",
      description:
        "Learn different testing approaches — black box, white box, and grey box testing methodologies.",
      icon: "Eye",
      trackId: "qa",
      order: 2,
      lessons: [
        {
          id: "qa-black-box",
          title: "Black Box Testing",
          description:
            "Test software without knowledge of internal code — equivalence partitioning, boundary value analysis, and decision tables.",
          duration: "25 min",
          videoId: "YEBfamv-_do",
          videoTitle: "Black Box Testing Techniques",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "qa-white-box",
          title: "White Box Testing",
          description:
            "Test with knowledge of internal code — statement coverage, branch coverage, path coverage, and code review.",
          duration: "25 min",
          videoId: "oLc9gVM8FBM",
          videoTitle: "White Box Testing Explained",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "qa-grey-box",
          title: "Grey Box & Exploratory Testing",
          description:
            "Combine black and white box approaches, and master exploratory testing — session-based testing with charters.",
          duration: "25 min",
          videoId: "YEBfamv-_do",
          videoTitle: "Exploratory Testing Techniques",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Testing Approach Comparison",
        description:
          "Apply black box, white box, and exploratory testing techniques to a calculator application, documenting test cases for each approach and comparing their effectiveness at finding bugs.",
        difficulty: "beginner",
        estimatedHours: 3,
        skills: ["Black Box Testing", "White Box Testing", "Exploratory Testing", "Test Cases"],
      },
    },
    {
      id: "qa-sdlc-agile",
      title: "SDLC & Agile Testing",
      description:
        "Understand how QA fits into different SDLC models, with a focus on Agile and Scrum testing practices.",
      icon: "RefreshCw",
      trackId: "qa",
      order: 3,
      lessons: [
        {
          id: "qa-sdlc-models",
          title: "SDLC Models & QA",
          description:
            "How QA integrates into Waterfall, V-Model, Agile, and DevOps software development lifecycles.",
          duration: "25 min",
          videoId: "oLc9gVM8FBM",
          videoTitle: "SDLC Models Explained",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "qa-agile-testing",
          title: "Agile Testing Principles",
          description:
            "Testing in Agile — sprint planning, user stories, acceptance criteria, definition of done, and continuous testing.",
          duration: "25 min",
          videoId: "scEDHsr3APg",
          videoTitle: "Agile Testing Fundamentals",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "qa-scrum-qa",
          title: "QA in Scrum Teams",
          description:
            "The QA role in Scrum ceremonies — sprint planning, daily standups, refinement, retrospectives, and demo.",
          duration: "20 min",
          videoId: "YaXJeUkBe4Y",
          videoTitle: "QA in Scrum",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "qa-bdd-tdd",
          title: "BDD & TDD Overview",
          description:
            "Behavior-Driven Development and Test-Driven Development — writing tests before code, Gherkin syntax, and the red-green-refactor cycle.",
          duration: "25 min",
          videoId: "Jv2uxzhPFl4",
          videoTitle: "TDD and BDD Explained",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Agile Test Plan",
        description:
          "Create a sprint-based test plan for a user story, including BDD scenarios in Gherkin format, acceptance criteria, test cases mapped to requirements, and definition of done checklist.",
        difficulty: "beginner",
        estimatedHours: 3,
        skills: ["Agile Testing", "Scrum", "BDD", "Test Planning", "User Stories"],
      },
    },
    {
      id: "qa-testing-techniques",
      title: "Testing Techniques",
      description:
        "Master essential testing techniques — test case design, boundary analysis, state transition, and decision tables.",
      icon: "Target",
      trackId: "qa",
      order: 4,
      lessons: [
        {
          id: "qa-test-case-design",
          title: "Test Case Design & Writing",
          description:
            "Write effective test cases with clear steps, preconditions, expected results, and proper traceability to requirements.",
          duration: "25 min",
          videoId: "oLc9gVM8FBM",
          videoTitle: "How to Write Test Cases",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "qa-boundary-value",
          title: "Boundary Value Analysis",
          description:
            "Test at the boundaries — minimum, just below minimum, maximum, just above maximum, and nominal values.",
          duration: "20 min",
          videoId: "YEBfamv-_do",
          videoTitle: "Boundary Value Analysis",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice boundary value analysis:\n1. Create `boundary_test.py`:\ndef validate_age(age):\n    if not isinstance(age, int):\n        return 'Invalid type'\n    if age < 0 or age > 150:\n        return 'Out of range'\n    if age < 18:\n        return 'Minor'\n    return 'Adult'\n\n# Test boundary values\ntest_cases = [-1, 0, 17, 18, 150, 151]\nfor tc in test_cases:\n    print(f'Age {tc}: {validate_age(tc)}')\n\n2. Run: `python3 boundary_test.py`\n3. Verify each boundary produces the correct result",
            validation: "python3 boundary_test.py",
          },
        },
        {
          id: "qa-equivalence-partitioning",
          title: "Equivalence Partitioning",
          description:
            "Divide inputs into equivalent classes and test one representative from each partition to reduce test cases efficiently.",
          duration: "20 min",
          videoId: "YEBfamv-_do",
          videoTitle: "Equivalence Partitioning",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "qa-state-transition",
          title: "State Transition Testing",
          description:
            "Model system behavior as states and transitions, and design tests to cover valid and invalid state changes.",
          duration: "25 min",
          videoId: "oLc9gVM8FBM",
          videoTitle: "State Transition Testing",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Model state transitions:\n1. Create `state_test.py`:\nclass ATM:\n    def __init__(self):\n        self.state = 'idle'\n        self.attempts = 0\n    def insert_card(self):\n        if self.state == 'idle':\n            self.state = 'card_inserted'\n            return 'Card accepted'\n        return 'Invalid action'\n    def enter_pin(self, correct):\n        if self.state != 'card_inserted':\n            return 'Insert card first'\n        if correct:\n            self.state = 'authenticated'\n            self.attempts = 0\n            return 'PIN correct'\n        self.attempts += 1\n        if self.attempts >= 3:\n            self.state = 'locked'\n            return 'Card locked'\n        return f'Wrong PIN ({self.attempts}/3)'\n\natm = ATM()\nprint(atm.insert_card())\nprint(atm.enter_pin(False))\nprint(atm.enter_pin(False))\nprint(atm.enter_pin(True))\n\n2. Run: `python3 state_test.py`",
            validation: "python3 state_test.py",
          },
        },
        {
          id: "qa-decision-tables",
          title: "Decision Table Testing",
          description:
            "Create decision tables to systematically test combinations of conditions and their expected actions.",
          duration: "20 min",
          videoId: "YEBfamv-_do",
          videoTitle: "Decision Table Testing",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Test Technique Lab",
        description:
          "Apply all four testing techniques (boundary value, equivalence partitioning, state transition, decision table) to a login system, producing a complete test suite with traceable test cases.",
        difficulty: "intermediate",
        estimatedHours: 4,
        skills: ["Test Design", "Boundary Analysis", "State Transition", "Decision Tables", "Test Cases"],
      },
    },
    {
      id: "qa-non-functional",
      title: "Non-Functional Testing",
      description:
        "Go beyond functionality — performance testing, security testing, usability testing, and accessibility.",
      icon: "Gauge",
      trackId: "qa",
      order: 5,
      lessons: [
        {
          id: "qa-performance-testing",
          title: "Performance Testing Fundamentals",
          description:
            "Load testing, stress testing, endurance testing, and spike testing — understand when and how to use each.",
          duration: "25 min",
          videoId: "r-Jte8Y8dvY",
          videoTitle: "Performance Testing Explained",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Basic load testing with curl:\n1. Create `loadtest.sh`:\n#!/bin/bash\nURL=\"https://httpbin.org/get\"\nfor i in $(seq 1 10); do\n  START=$(date +%s%N)\n  STATUS=$(curl -s -o /dev/null -w '%{http_code}' $URL)\n  END=$(date +%s%N)\n  DURATION=$(( ($END - $START) / 1000000 ))\n  echo \"Request $i: Status=$STATUS Time=${DURATION}ms\"\ndone\n2. `chmod +x loadtest.sh && ./loadtest.sh`\n3. Analyze response times and identify patterns",
            validation: "./loadtest.sh",
          },
        },
        {
          id: "qa-security-testing",
          title: "Security Testing for QA",
          description:
            "Basic security testing techniques — SQL injection, XSS, CSRF, and common vulnerability scanning from a QA perspective.",
          duration: "25 min",
          videoId: "rWHvp7rUka8",
          videoTitle: "Security Testing Basics",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "qa-usability-testing",
          title: "Usability & UX Testing",
          description:
            "Evaluate user experience — heuristic evaluation, user flows, accessibility checks, and usability test scripts.",
          duration: "20 min",
          videoId: "oLc9gVM8FBM",
          videoTitle: "Usability Testing Guide",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "qa-accessibility-testing",
          title: "Accessibility Testing (a11y)",
          description:
            "Test for WCAG compliance — screen reader compatibility, keyboard navigation, color contrast, and ARIA attributes.",
          duration: "25 min",
          videoId: "e0Ekq5LGmwc",
          videoTitle: "Web Accessibility Testing",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Accessibility audit with Lighthouse:\n1. `npx lighthouse https://example.com --only-categories=accessibility --output=json --output-path=a11y-report.json`\n2. `cat a11y-report.json | python3 -c \"import sys,json; d=json.load(sys.stdin); print(f'Score: {d[\\\"categories\\\"][\\\"accessibility\\\"][\\\"score\\\"]*100}%')\"`\n3. Review the accessibility score and findings\n4. Identify critical accessibility issues",
            validation: "lighthouse",
          },
        },
      ],
      project: {
        title: "Non-Functional Test Suite",
        description:
          "Create a comprehensive non-functional test plan covering performance benchmarks, security test cases, usability heuristic evaluation, and accessibility audit for a sample web application.",
        difficulty: "intermediate",
        estimatedHours: 5,
        skills: ["Performance Testing", "Security Testing", "Accessibility", "Usability", "WCAG"],
      },
    },
    {
      id: "qa-test-management",
      title: "Test Management",
      description:
        "Organize and manage testing activities — test plans, defect tracking, reporting, and test metrics.",
      icon: "ClipboardList",
      trackId: "qa",
      order: 6,
      lessons: [
        {
          id: "qa-test-plans",
          title: "Test Plans & Test Suites",
          description:
            "Create structured test plans with scope, approach, resources, schedule, and risk analysis; organize test suites effectively.",
          duration: "25 min",
          videoId: "oLc9gVM8FBM",
          videoTitle: "Writing Test Plans",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "qa-defect-management",
          title: "Defect Lifecycle & Bug Reporting",
          description:
            "Write effective bug reports, understand the defect lifecycle, severity vs priority, and defect triage processes.",
          duration: "25 min",
          videoId: "YEBfamv-_do",
          videoTitle: "Bug Reporting Best Practices",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "qa-test-metrics",
          title: "Test Metrics & Reporting",
          description:
            "Track and report on testing progress — pass/fail rates, defect density, test coverage, and quality dashboards.",
          duration: "20 min",
          videoId: "oLc9gVM8FBM",
          videoTitle: "QA Metrics That Matter",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Test Management Framework",
        description:
          "Build a complete test management framework with test plan templates, bug report templates, traceability matrix, and a test metrics dashboard specification for a project.",
        difficulty: "intermediate",
        estimatedHours: 4,
        skills: ["Test Planning", "Defect Management", "Traceability", "Test Metrics", "Reporting"],
      },
    },
    {
      id: "qa-manual-testing",
      title: "Manual Testing",
      description:
        "Master manual testing skills — test execution, API testing with Postman, database testing, and mobile testing.",
      icon: "Hand",
      trackId: "qa",
      order: 7,
      lessons: [
        {
          id: "qa-test-execution",
          title: "Test Execution & Documentation",
          description:
            "Execute test cases systematically, document results, capture evidence, and manage test cycles.",
          duration: "25 min",
          videoId: "oLc9gVM8FBM",
          videoTitle: "Manual Test Execution",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "qa-api-testing-postman",
          title: "API Testing with Postman",
          description:
            "Test REST APIs with Postman — requests, assertions, environments, collections, and automated test scripts.",
          duration: "30 min",
          videoId: "VywxIQ2ZXw4",
          videoTitle: "Postman API Testing Tutorial",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Test APIs with curl:\n1. `curl -s https://jsonplaceholder.typicode.com/posts/1 | python3 -m json.tool` — GET request\n2. `curl -s -X POST https://jsonplaceholder.typicode.com/posts -H 'Content-Type: application/json' -d '{\"title\":\"Test\",\"body\":\"QA test\",\"userId\":1}' | python3 -m json.tool` — POST request\n3. Verify status codes: `curl -s -o /dev/null -w '%{http_code}' https://jsonplaceholder.typicode.com/posts/1`\n4. Test invalid endpoint: `curl -s -o /dev/null -w '%{http_code}' https://jsonplaceholder.typicode.com/invalid`",
            validation: "curl",
          },
        },
        {
          id: "qa-database-testing",
          title: "Database Testing",
          description:
            "Verify data integrity with SQL queries — CRUD operations, data validation, stored procedures, and migration testing.",
          duration: "25 min",
          videoId: "HXV3zeQKqGY",
          videoTitle: "SQL for QA Engineers",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice SQL for testing:\n1. Create `test_db.py`:\nimport sqlite3\nconn = sqlite3.connect(':memory:')\nc = conn.cursor()\nc.execute('CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT UNIQUE)')\nc.execute(\"INSERT INTO users VALUES (1, 'Alice', 'alice@test.com')\")\nc.execute(\"INSERT INTO users VALUES (2, 'Bob', 'bob@test.com')\")\n\n# Test queries\nprint('All users:', c.execute('SELECT * FROM users').fetchall())\nprint('Count:', c.execute('SELECT COUNT(*) FROM users').fetchone()[0])\n\n# Test constraint\ntry:\n    c.execute(\"INSERT INTO users VALUES (3, 'Charlie', 'alice@test.com')\")\nexcept sqlite3.IntegrityError as e:\n    print(f'Constraint test passed: {e}')\nconn.close()\n2. Run: `python3 test_db.py`",
            validation: "python3 test_db.py",
          },
        },
        {
          id: "qa-mobile-testing",
          title: "Mobile Testing Basics",
          description:
            "Testing mobile applications — emulators, device testing, gesture testing, and platform-specific considerations.",
          duration: "25 min",
          videoId: "oLc9gVM8FBM",
          videoTitle: "Mobile Testing Guide",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Manual Testing Portfolio",
        description:
          "Complete a full manual testing cycle for a REST API: create a Postman collection with test scripts, write SQL validation queries, document test execution results, and produce a test summary report.",
        difficulty: "intermediate",
        estimatedHours: 5,
        skills: ["Manual Testing", "API Testing", "Postman", "SQL", "Test Documentation"],
      },
    },
    {
      id: "qa-frontend-automation",
      title: "Frontend Automation",
      description:
        "Automate UI testing with Selenium, Cypress, and Playwright — page objects, selectors, and test frameworks.",
      icon: "Monitor",
      trackId: "qa",
      order: 8,
      lessons: [
        {
          id: "qa-automation-fundamentals",
          title: "Test Automation Fundamentals",
          description:
            "When to automate, ROI analysis, test automation pyramid, and choosing the right framework.",
          duration: "20 min",
          videoId: "oLc9gVM8FBM",
          videoTitle: "Test Automation Strategy",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "qa-selenium",
          title: "Selenium WebDriver",
          description:
            "Automate browser testing with Selenium — locators, waits, actions, and cross-browser testing.",
          duration: "35 min",
          videoId: "j7VZsCCnptM",
          videoTitle: "Selenium Full Course",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Selenium with Python:\n1. `pip install selenium webdriver-manager`\n2. Create `selenium_test.py`:\nfrom selenium import webdriver\nfrom selenium.webdriver.common.by import By\nfrom selenium.webdriver.chrome.service import Service\nfrom webdriver_manager.chrome import ChromeDriverManager\n\ndriver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))\ndriver.get('https://example.com')\ntitle = driver.title\nheading = driver.find_element(By.TAG_NAME, 'h1').text\nprint(f'Title: {title}')\nprint(f'Heading: {heading}')\nassert 'Example' in title, 'Title check failed!'\nprint('Test PASSED!')\ndriver.quit()\n3. Run: `python3 selenium_test.py`",
            validation: "python3 selenium_test.py",
          },
        },
        {
          id: "qa-cypress",
          title: "Cypress E2E Testing",
          description:
            "Write fast, reliable end-to-end tests with Cypress — commands, assertions, fixtures, and custom commands.",
          duration: "35 min",
          videoId: "u8vMu7viCm8",
          videoTitle: "Cypress Testing Tutorial",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Set up Cypress:\n1. `mkdir cypress-demo && cd cypress-demo`\n2. `npm init -y && npm install cypress --save-dev`\n3. Create `cypress/e2e/first_test.cy.js`:\ndescribe('My First Test', () => {\n  it('visits example.com', () => {\n    cy.visit('https://example.com')\n    cy.get('h1').should('contain', 'Example')\n    cy.title().should('include', 'Example')\n  })\n})\n4. Run: `npx cypress run --spec cypress/e2e/first_test.cy.js`",
            validation: "npx cypress",
          },
        },
        {
          id: "qa-playwright",
          title: "Playwright Testing",
          description:
            "Modern end-to-end testing with Playwright — auto-waiting, multi-browser, codegen, and trace viewer.",
          duration: "35 min",
          videoId: "wawbt1cATsk",
          videoTitle: "Playwright Testing Tutorial",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Set up Playwright:\n1. `mkdir playwright-demo && cd playwright-demo`\n2. `npm init -y && npm init playwright@latest`\n3. Create `tests/example.spec.ts`:\nimport { test, expect } from '@playwright/test';\n\ntest('has title', async ({ page }) => {\n  await page.goto('https://example.com');\n  await expect(page).toHaveTitle(/Example/);\n});\n\ntest('has heading', async ({ page }) => {\n  await page.goto('https://example.com');\n  await expect(page.locator('h1')).toContainText('Example');\n});\n4. Run: `npx playwright test`",
            validation: "npx playwright test",
          },
        },
        {
          id: "qa-page-object-model",
          title: "Page Object Model Pattern",
          description:
            "Organize test code with the Page Object Model — reusable components, maintainable selectors, and clean test architecture.",
          duration: "25 min",
          videoId: "j7VZsCCnptM",
          videoTitle: "Page Object Model Explained",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create a Page Object:\n1. Create `pages/login_page.py`:\nclass LoginPage:\n    def __init__(self, driver):\n        self.driver = driver\n        self.username_input = '#username'\n        self.password_input = '#password'\n        self.login_button = '#login-btn'\n        self.error_message = '.error-msg'\n\n    def login(self, username, password):\n        self.driver.find_element('css selector', self.username_input).send_keys(username)\n        self.driver.find_element('css selector', self.password_input).send_keys(password)\n        self.driver.find_element('css selector', self.login_button).click()\n\n    def get_error(self):\n        return self.driver.find_element('css selector', self.error_message).text\n2. Use in tests for clean, maintainable code",
            validation: "cat pages/login_page.py",
          },
        },
      ],
      project: {
        title: "Frontend Test Automation Suite",
        description:
          "Build a complete frontend automation suite using Playwright or Cypress for a web application, implementing Page Object Model, data-driven tests, custom commands, and HTML test reports.",
        difficulty: "intermediate",
        estimatedHours: 6,
        skills: ["Playwright", "Cypress", "Page Object Model", "E2E Testing", "Test Automation"],
      },
    },
    {
      id: "qa-backend-automation",
      title: "Backend Automation",
      description:
        "Automate API testing, performance testing, and contract testing with modern tools.",
      icon: "Server",
      trackId: "qa",
      order: 9,
      lessons: [
        {
          id: "qa-api-automation",
          title: "API Test Automation",
          description:
            "Automate REST API testing with frameworks — request/response validation, schema validation, and chained tests.",
          duration: "30 min",
          videoId: "VywxIQ2ZXw4",
          videoTitle: "API Test Automation",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Automate API tests with Python:\n1. `pip install requests pytest`\n2. Create `test_api.py`:\nimport requests\nimport pytest\n\nBASE_URL = 'https://jsonplaceholder.typicode.com'\n\ndef test_get_posts():\n    resp = requests.get(f'{BASE_URL}/posts')\n    assert resp.status_code == 200\n    assert len(resp.json()) > 0\n\ndef test_get_single_post():\n    resp = requests.get(f'{BASE_URL}/posts/1')\n    assert resp.status_code == 200\n    data = resp.json()\n    assert data['id'] == 1\n    assert 'title' in data\n\ndef test_create_post():\n    payload = {'title': 'Test', 'body': 'QA', 'userId': 1}\n    resp = requests.post(f'{BASE_URL}/posts', json=payload)\n    assert resp.status_code == 201\n\ndef test_not_found():\n    resp = requests.get(f'{BASE_URL}/posts/99999')\n    assert resp.status_code == 404\n\n3. Run: `pytest test_api.py -v`",
            validation: "pytest test_api.py",
          },
        },
        {
          id: "qa-performance-tools",
          title: "Performance Testing with k6",
          description:
            "Write and run performance tests with k6 — load profiles, thresholds, checks, and result analysis.",
          duration: "30 min",
          videoId: "r-Jte8Y8dvY",
          videoTitle: "k6 Load Testing Tutorial",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Performance testing with k6:\n1. Install k6 or use Docker\n2. Create `load_test.js`:\nimport http from 'k6/http';\nimport { check, sleep } from 'k6';\n\nexport const options = {\n  vus: 10,\n  duration: '30s',\n  thresholds: {\n    http_req_duration: ['p(95)<500'],\n  },\n};\n\nexport default function () {\n  const res = http.get('https://httpbin.org/get');\n  check(res, {\n    'status is 200': (r) => r.status === 200,\n    'response time < 500ms': (r) => r.timings.duration < 500,\n  });\n  sleep(1);\n}\n3. Run: `k6 run load_test.js`",
            validation: "k6 run",
          },
        },
        {
          id: "qa-contract-testing",
          title: "Contract Testing with Pact",
          description:
            "Ensure API consumers and providers agree on contracts — consumer-driven contract testing with Pact.",
          duration: "25 min",
          videoId: "oLc9gVM8FBM",
          videoTitle: "Contract Testing Explained",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "qa-data-driven-testing",
          title: "Data-Driven & Parameterized Testing",
          description:
            "Run the same tests with different data sets — CSV, JSON, and database-driven test data management.",
          duration: "25 min",
          videoId: "YEBfamv-_do",
          videoTitle: "Data-Driven Testing",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Data-driven testing with pytest:\n1. Create `test_data_driven.py`:\nimport pytest\n\ntest_data = [\n    (2, 3, 5),\n    (0, 0, 0),\n    (-1, 1, 0),\n    (100, 200, 300),\n    (-5, -3, -8),\n]\n\n@pytest.mark.parametrize('a, b, expected', test_data)\ndef test_addition(a, b, expected):\n    assert a + b == expected, f'{a} + {b} should equal {expected}'\n\n2. Run: `pytest test_data_driven.py -v`\n3. Observe how each data set runs as a separate test",
            validation: "pytest test_data_driven.py",
          },
        },
      ],
      project: {
        title: "Backend Test Automation Suite",
        description:
          "Build a comprehensive API test automation suite with pytest covering CRUD operations, error handling, data-driven tests, and a performance test with k6 including pass/fail thresholds.",
        difficulty: "intermediate",
        estimatedHours: 6,
        skills: ["API Testing", "pytest", "k6", "Data-Driven Testing", "Performance Testing"],
      },
    },
    {
      id: "qa-cicd",
      title: "CI/CD for QA",
      description:
        "Integrate tests into CI/CD pipelines — automated test execution, reporting, and quality gates.",
      icon: "Workflow",
      trackId: "qa",
      order: 10,
      lessons: [
        {
          id: "qa-cicd-integration",
          title: "Tests in CI/CD Pipelines",
          description:
            "Integrate automated tests into GitHub Actions, Jenkins, or GitLab CI — running tests on every commit and pull request.",
          duration: "30 min",
          videoId: "R8_veQiYBjI",
          videoTitle: "CI/CD Testing Pipeline",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create a test pipeline with GitHub Actions:\n1. Create `.github/workflows/test.yml`:\nname: QA Pipeline\non: [push, pull_request]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-python@v5\n        with:\n          python-version: '3.11'\n      - run: pip install pytest requests\n      - run: pytest tests/ -v --junitxml=results.xml\n      - uses: actions/upload-artifact@v4\n        with:\n          name: test-results\n          path: results.xml",
            validation: "cat .github/workflows",
          },
        },
        {
          id: "qa-quality-gates",
          title: "Quality Gates & Test Thresholds",
          description:
            "Define quality gates — minimum test coverage, zero critical bugs, performance thresholds, and blocking deployments on failure.",
          duration: "25 min",
          videoId: "scEDHsr3APg",
          videoTitle: "Quality Gates in CI/CD",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "qa-test-reporting",
          title: "Test Reporting & Dashboards",
          description:
            "Generate and publish test reports — Allure, JUnit XML, test trend dashboards, and Slack/email notifications.",
          duration: "20 min",
          videoId: "oLc9gVM8FBM",
          videoTitle: "Test Reporting in CI/CD",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Generate test reports:\n1. `pip install pytest-html allure-pytest`\n2. Run tests with reporting:\n   `pytest tests/ --html=report.html --self-contained-html`\n3. Or with Allure:\n   `pytest tests/ --alluredir=allure-results`\n   `allure serve allure-results`\n4. Review the generated HTML report\n5. Integrate report upload into CI pipeline",
            validation: "pytest",
          },
        },
      ],
      project: {
        title: "Automated QA Pipeline",
        description:
          "Build a complete CI/CD QA pipeline with GitHub Actions that runs unit tests, API tests, E2E tests, generates HTML and Allure reports, enforces quality gates, and sends notifications on failure.",
        difficulty: "advanced",
        estimatedHours: 6,
        skills: ["CI/CD", "GitHub Actions", "Test Reporting", "Quality Gates", "Automation"],
      },
    },
  ],
};
