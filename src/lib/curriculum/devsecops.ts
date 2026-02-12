import { Track } from "./types";

export const devsecopsTrack: Track = {
  id: "devsecops",
  title: "DevSecOps",
  description:
    "Integrate security into every phase of the software development lifecycle — from code to cloud, shifting security left.",
  icon: "ShieldCheck",
  color: "red",
  category: "security-quality",
  modules: [
    {
      id: "dso-intro-cia",
      title: "Introduction & CIA Triad",
      description:
        "Understand the DevSecOps philosophy and the foundational CIA triad — Confidentiality, Integrity, and Availability.",
      icon: "ShieldCheck",
      trackId: "devsecops",
      order: 1,
      lessons: [
        {
          id: "dso-what-is-devsecops",
          title: "What is DevSecOps?",
          description:
            "Learn how DevSecOps embeds security practices into DevOps workflows, shifting security left in the SDLC.",
          duration: "20 min",
          videoId: "nrhxNNH5lt0",
          videoTitle: "DevSecOps Explained",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
        {
          id: "dso-cia-triad",
          title: "The CIA Triad",
          description:
            "Understand the three pillars of information security — Confidentiality, Integrity, and Availability — and how they guide security decisions.",
          duration: "25 min",
          videoId: "6vMdBRPHwF0",
          videoTitle: "CIA Triad Explained",
          videoChannel: "NetworkChuck",
          hasTerminal: false,
        },
        {
          id: "dso-shift-left-security",
          title: "Shift-Left Security",
          description:
            "Discover why finding security issues early in development saves time, money, and headaches compared to fixing them in production.",
          duration: "20 min",
          videoId: "mkLVGHzktSA",
          videoTitle: "Shift Left Security in DevSecOps",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Security Policy Document",
        description:
          "Create a comprehensive security policy document for a fictional startup, covering CIA triad principles, acceptable use policies, incident response procedures, and security roles.",
        difficulty: "beginner",
        estimatedHours: 3,
        skills: ["CIA Triad", "Security Policy", "Risk Assessment", "Documentation"],
      },
    },
    {
      id: "dso-security-fundamentals",
      title: "Security Fundamentals",
      description:
        "Build a strong foundation in security concepts including risk management, threat modeling, and security frameworks.",
      icon: "Shield",
      trackId: "devsecops",
      order: 2,
      lessons: [
        {
          id: "dso-risk-management",
          title: "Risk Management Basics",
          description:
            "Learn to identify, assess, and prioritize risks using common frameworks and methodologies.",
          duration: "25 min",
          videoId: "2jnG3UKx-iE",
          videoTitle: "Risk Management in Cybersecurity",
          videoChannel: "NetworkChuck",
          hasTerminal: false,
        },
        {
          id: "dso-threat-modeling",
          title: "Threat Modeling (STRIDE)",
          description:
            "Apply the STRIDE model to systematically identify threats in your applications and infrastructure.",
          duration: "30 min",
          videoId: "GqmQg-cszw4",
          videoTitle: "Threat Modeling for Developers",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "dso-security-frameworks",
          title: "Security Frameworks (NIST, OWASP)",
          description:
            "Overview of key security frameworks — NIST Cybersecurity Framework, OWASP Top 10, and CIS Controls.",
          duration: "30 min",
          videoId: "UMHqFmEFb4g",
          videoTitle: "NIST Cybersecurity Framework Explained",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "dso-defense-in-depth",
          title: "Defense in Depth & Zero Trust",
          description:
            "Understand layered security architectures and the Zero Trust model — never trust, always verify.",
          duration: "25 min",
          videoId: "pyyd_OkSkAs",
          videoTitle: "Zero Trust Security Model",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Threat Model Report",
        description:
          "Perform a STRIDE-based threat model analysis on a sample web application, documenting threats, their severity ratings, and recommended mitigations in a structured report.",
        difficulty: "beginner",
        estimatedHours: 4,
        skills: ["Threat Modeling", "STRIDE", "Risk Assessment", "OWASP"],
      },
    },
    {
      id: "dso-networking-security",
      title: "Networking Security",
      description:
        "Secure network communications — firewalls, VPNs, TLS/SSL, and network segmentation.",
      icon: "Globe",
      trackId: "devsecops",
      order: 3,
      lessons: [
        {
          id: "dso-network-fundamentals",
          title: "Network Security Fundamentals",
          description:
            "Review OSI model, TCP/IP, and how network attacks exploit each layer.",
          duration: "25 min",
          videoId: "7IS7gigunyI",
          videoTitle: "OSI Model and Network Security",
          videoChannel: "NetworkChuck",
          hasTerminal: false,
        },
        {
          id: "dso-firewalls-ids",
          title: "Firewalls & IDS/IPS",
          description:
            "Configure firewalls, understand Intrusion Detection Systems (IDS), and Intrusion Prevention Systems (IPS).",
          duration: "30 min",
          videoId: "9GZlVOafYTg",
          videoTitle: "Firewalls Explained",
          videoChannel: "NetworkChuck",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice firewall rules with iptables:\n1. `sudo iptables -L` — list current rules\n2. `sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT` — allow SSH\n3. `sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT` — allow HTTP\n4. `sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT` — allow HTTPS\n5. `sudo iptables -L -v` — verify rules",
            validation: "iptables",
          },
        },
        {
          id: "dso-tls-ssl",
          title: "TLS/SSL & Certificate Management",
          description:
            "Understand TLS handshakes, certificate authorities, and how to manage SSL certificates.",
          duration: "25 min",
          videoId: "j9QmMEWmcfo",
          videoTitle: "TLS Explained in 100 Seconds",
          videoChannel: "Fireship",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Inspect TLS certificates:\n1. `openssl s_client -connect google.com:443 -brief` — check TLS connection\n2. `openssl x509 -in cert.pem -text -noout` — inspect a certificate\n3. `openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -nodes` — generate self-signed cert\n4. `openssl verify cert.pem` — verify certificate",
            validation: "openssl",
          },
        },
        {
          id: "dso-vpns-tunnels",
          title: "VPNs and Secure Tunnels",
          description:
            "How VPNs work, types of VPN protocols, and setting up secure tunnels for remote access.",
          duration: "20 min",
          videoId: "WVDQEoe6ZWY",
          videoTitle: "VPN Explained",
          videoChannel: "NetworkChuck",
          hasTerminal: false,
        },
        {
          id: "dso-network-segmentation",
          title: "Network Segmentation & DMZ",
          description:
            "Design secure network architectures using segmentation, DMZs, and micro-segmentation strategies.",
          duration: "20 min",
          videoId: "dV2Kn-xLgE4",
          videoTitle: "Network Segmentation Explained",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Secure Network Architecture",
        description:
          "Design and document a secure network architecture for a multi-tier web application, including firewall rules, network segmentation, TLS configuration, and a DMZ for public-facing services.",
        difficulty: "intermediate",
        estimatedHours: 5,
        skills: ["Firewalls", "TLS/SSL", "Network Segmentation", "VPN", "IDS/IPS"],
      },
    },
    {
      id: "dso-programming-security",
      title: "Programming for Security",
      description:
        "Write secure code with Python and Bash — scripting for security automation and vulnerability scanning.",
      icon: "Code",
      trackId: "devsecops",
      order: 4,
      lessons: [
        {
          id: "dso-python-security-scripting",
          title: "Python for Security Automation",
          description:
            "Use Python to automate security tasks — scanning, log parsing, and vulnerability detection.",
          duration: "35 min",
          videoId: "sNRzXSaTBsE",
          videoTitle: "Python for Cybersecurity",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create a simple port scanner:\n1. Create `scanner.py`:\nimport socket\n\ndef scan_port(host, port):\n    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n    sock.settimeout(1)\n    result = sock.connect_ex((host, port))\n    sock.close()\n    return result == 0\n\nhost = 'localhost'\nfor port in [22, 80, 443, 8080]:\n    status = 'OPEN' if scan_port(host, port) else 'CLOSED'\n    print(f'Port {port}: {status}')\n\n2. Run: `python3 scanner.py`",
            validation: "python3 scanner.py",
          },
        },
        {
          id: "dso-bash-security",
          title: "Bash Scripting for Security",
          description:
            "Write Bash scripts for log analysis, automated auditing, and security checks on Linux systems.",
          duration: "30 min",
          videoId: "TPRSJbtfK4M",
          videoTitle: "Bash for Security Auditing",
          videoChannel: "NetworkChuck",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create a security audit script:\n1. Create `audit.sh`:\n#!/bin/bash\necho '=== Security Audit Report ==='\necho \"Date: $(date)\"\necho ''\necho '--- Open Ports ---'\nss -tuln 2>/dev/null || netstat -tuln\necho ''\necho '--- Failed Login Attempts ---'\ngrep 'Failed' /var/log/auth.log 2>/dev/null | tail -5 || echo 'No auth log access'\necho ''\necho '--- Users with Shell Access ---'\ngrep -v '/nologin\\|/false' /etc/passwd | cut -d: -f1\necho ''\necho '=== Audit Complete ==='\n2. `chmod +x audit.sh && ./audit.sh`",
            validation: "./audit.sh",
          },
        },
        {
          id: "dso-secure-coding-practices",
          title: "Secure Coding Practices",
          description:
            "Learn OWASP secure coding guidelines — input validation, output encoding, error handling, and more.",
          duration: "25 min",
          videoId: "4YOpILi9Oxs",
          videoTitle: "Secure Coding Best Practices",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Security Automation Toolkit",
        description:
          "Build a Python-based security automation toolkit with port scanning, log analysis, password strength checking, and file integrity monitoring capabilities.",
        difficulty: "intermediate",
        estimatedHours: 5,
        skills: ["Python", "Bash", "Security Scanning", "Log Analysis", "Automation"],
      },
    },
    {
      id: "dso-application-security",
      title: "Application Security",
      description:
        "Protect applications from common vulnerabilities — OWASP Top 10, SAST, DAST, and secure development lifecycle.",
      icon: "Bug",
      trackId: "devsecops",
      order: 5,
      lessons: [
        {
          id: "dso-owasp-top-10",
          title: "OWASP Top 10 Vulnerabilities",
          description:
            "Deep dive into the OWASP Top 10 — injection, broken auth, XSS, CSRF, and more.",
          duration: "35 min",
          videoId: "rWHvp7rUka8",
          videoTitle: "OWASP Top 10 Explained",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "dso-sast-tools",
          title: "Static Application Security Testing (SAST)",
          description:
            "Use SAST tools to find vulnerabilities in source code before deployment.",
          duration: "30 min",
          videoId: "Kl4XtNGaYnA",
          videoTitle: "SAST vs DAST Explained",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Run a SAST scan with Bandit (Python):\n1. `pip install bandit`\n2. Create `vulnerable.py`:\nimport subprocess\nuser_input = input('Enter command: ')\nsubprocess.call(user_input, shell=True)  # Vulnerable!\npassword = 'admin123'  # Hardcoded password!\n3. `bandit vulnerable.py`\n4. Review the security findings\n5. Fix the issues and re-scan",
            validation: "bandit",
          },
        },
        {
          id: "dso-dast-tools",
          title: "Dynamic Application Security Testing (DAST)",
          description:
            "Test running applications for vulnerabilities using DAST tools like OWASP ZAP.",
          duration: "30 min",
          videoId: "3FNRUSd3tsI",
          videoTitle: "OWASP ZAP Tutorial",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Run OWASP ZAP baseline scan with Docker:\n1. `docker pull ghcr.io/zaproxy/zaproxy:stable`\n2. `docker run -t ghcr.io/zaproxy/zaproxy:stable zap-baseline.py -t https://example.com`\n3. Review the scan results\n4. Understand alert risk levels (High, Medium, Low, Informational)",
            validation: "docker run",
          },
        },
        {
          id: "dso-dependency-scanning",
          title: "Dependency & SCA Scanning",
          description:
            "Scan third-party dependencies for known vulnerabilities using Software Composition Analysis.",
          duration: "25 min",
          videoId: "z_6JdRK6MyY",
          videoTitle: "Software Composition Analysis",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Scan dependencies for vulnerabilities:\n1. `npm audit` — scan Node.js dependencies\n2. `pip install safety && safety check` — scan Python dependencies\n3. `docker run --rm aquasec/trivy fs .` — scan with Trivy\n4. Review found vulnerabilities and severity levels",
            validation: "npm audit",
          },
        },
        {
          id: "dso-secure-sdlc",
          title: "Secure Software Development Lifecycle",
          description:
            "Integrate security into every phase of the SDLC — from requirements to deployment and maintenance.",
          duration: "25 min",
          videoId: "snrVaqFbMF4",
          videoTitle: "Secure SDLC Explained",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Application Security Pipeline",
        description:
          "Build an automated application security pipeline that runs SAST (Bandit/Semgrep), dependency scanning (Trivy), and generates a consolidated security report.",
        difficulty: "intermediate",
        estimatedHours: 6,
        skills: ["SAST", "DAST", "Dependency Scanning", "OWASP", "CI/CD Security"],
      },
    },
    {
      id: "dso-iam",
      title: "Identity & Access Management",
      description:
        "Control who can access what — authentication, authorization, RBAC, and secrets management.",
      icon: "Users",
      trackId: "devsecops",
      order: 6,
      lessons: [
        {
          id: "dso-authn-authz",
          title: "Authentication vs Authorization",
          description:
            "Understand the difference between AuthN and AuthZ, and common protocols like OAuth 2.0, OIDC, and SAML.",
          duration: "25 min",
          videoId: "996OiexHze0",
          videoTitle: "OAuth 2.0 Explained",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
        {
          id: "dso-rbac-abac",
          title: "RBAC & ABAC Models",
          description:
            "Implement Role-Based and Attribute-Based Access Control for granular permission management.",
          duration: "25 min",
          videoId: "4Uya_I_Oxjk",
          videoTitle: "RBAC vs ABAC Explained",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "dso-secrets-management",
          title: "Secrets Management with Vault",
          description:
            "Store and manage secrets securely using HashiCorp Vault — API keys, passwords, certificates.",
          duration: "30 min",
          videoId: "o-YBi0KFQpo",
          videoTitle: "HashiCorp Vault Tutorial",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Run Vault in dev mode with Docker:\n1. `docker run --cap-add=IPC_LOCK -p 8200:8200 -e VAULT_DEV_ROOT_TOKEN_ID=myroot -d hashicorp/vault`\n2. `export VAULT_ADDR='http://127.0.0.1:8200'`\n3. `export VAULT_TOKEN='myroot'`\n4. `vault kv put secret/myapp username=admin password=s3cret`\n5. `vault kv get secret/myapp`",
            validation: "vault kv",
          },
        },
        {
          id: "dso-mfa-sso",
          title: "MFA & Single Sign-On",
          description:
            "Implement Multi-Factor Authentication and SSO solutions for stronger identity verification.",
          duration: "20 min",
          videoId: "SLs0UtCObs4",
          videoTitle: "MFA and SSO Explained",
          videoChannel: "NetworkChuck",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Secure Access Control System",
        description:
          "Design and implement an RBAC-based access control system with Vault for secrets management, documenting roles, policies, and access patterns for a microservices architecture.",
        difficulty: "intermediate",
        estimatedHours: 5,
        skills: ["RBAC", "OAuth 2.0", "Vault", "Secrets Management", "IAM"],
      },
    },
    {
      id: "dso-monitoring-response",
      title: "Monitoring & Response",
      description:
        "Detect threats in real time with security monitoring, SIEM, and automated response.",
      icon: "Activity",
      trackId: "devsecops",
      order: 7,
      lessons: [
        {
          id: "dso-security-monitoring",
          title: "Security Monitoring Fundamentals",
          description:
            "Set up security monitoring with metrics, logs, and anomaly detection for early threat identification.",
          duration: "25 min",
          videoId: "h4Sl21AKiDg",
          videoTitle: "Security Monitoring with Prometheus",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "dso-siem-intro",
          title: "SIEM Introduction",
          description:
            "Learn about Security Information and Event Management systems and how they correlate security events.",
          duration: "25 min",
          videoId: "2XLzMb9oZBI",
          videoTitle: "What is a SIEM?",
          videoChannel: "NetworkChuck",
          hasTerminal: false,
        },
        {
          id: "dso-log-analysis",
          title: "Security Log Analysis",
          description:
            "Parse, analyze, and correlate security logs to detect suspicious activity and potential breaches.",
          duration: "30 min",
          videoId: "4X0WLg05ASw",
          videoTitle: "Log Analysis for Security",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Analyze security logs:\n1. Create sample log: `echo '2025-01-15 10:00:00 FAILED LOGIN user=admin ip=192.168.1.100\n2025-01-15 10:00:05 FAILED LOGIN user=admin ip=192.168.1.100\n2025-01-15 10:00:10 FAILED LOGIN user=admin ip=192.168.1.100\n2025-01-15 10:00:15 SUCCESS LOGIN user=admin ip=192.168.1.100' > auth.log`\n2. `grep 'FAILED' auth.log | wc -l` — count failures\n3. `awk '{print $NF}' auth.log | sort | uniq -c` — count by IP\n4. `grep 'FAILED' auth.log | awk '{print $7}' | sort | uniq -c | sort -rn` — top failing IPs",
            validation: "grep",
          },
        },
        {
          id: "dso-automated-response",
          title: "Automated Incident Response",
          description:
            "Build automated playbooks to respond to security events — from alerting to containment.",
          duration: "25 min",
          videoId: "xG3jnbFayxo",
          videoTitle: "Automated Incident Response",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Security Monitoring Dashboard",
        description:
          "Build a security monitoring solution using log aggregation, create alert rules for common attack patterns (brute force, privilege escalation), and implement automated response scripts.",
        difficulty: "intermediate",
        estimatedHours: 6,
        skills: ["SIEM", "Log Analysis", "Alerting", "Automated Response", "Monitoring"],
      },
    },
    {
      id: "dso-security-tools",
      title: "Security Tools",
      description:
        "Master essential DevSecOps tools — vulnerability scanners, container security, and infrastructure scanning.",
      icon: "Wrench",
      trackId: "devsecops",
      order: 8,
      lessons: [
        {
          id: "dso-trivy-scanning",
          title: "Container Scanning with Trivy",
          description:
            "Scan container images for vulnerabilities, misconfigurations, and secrets using Trivy.",
          duration: "25 min",
          videoId: "Kl4XtNGaYnA",
          videoTitle: "Trivy Container Scanning",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Scan containers with Trivy:\n1. `docker pull aquasec/trivy`\n2. `docker run --rm aquasec/trivy image python:3.11`\n3. `docker run --rm aquasec/trivy image --severity HIGH,CRITICAL nginx:latest`\n4. Review vulnerability report\n5. Compare results for different image versions",
            validation: "trivy",
          },
        },
        {
          id: "dso-semgrep",
          title: "Code Analysis with Semgrep",
          description:
            "Use Semgrep for lightweight static analysis — custom rules, pattern matching, and CI integration.",
          duration: "25 min",
          videoId: "3FNRUSd3tsI",
          videoTitle: "Semgrep Code Analysis",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Run Semgrep analysis:\n1. `pip install semgrep`\n2. Create a test file with common vulnerabilities\n3. `semgrep --config auto .` — scan with default rules\n4. `semgrep --config p/owasp-top-ten .` — scan for OWASP Top 10\n5. Review findings and fix issues",
            validation: "semgrep",
          },
        },
        {
          id: "dso-tfsec-checkov",
          title: "Infrastructure Scanning (tfsec & Checkov)",
          description:
            "Scan Terraform and CloudFormation templates for security misconfigurations before deployment.",
          duration: "25 min",
          videoId: "POPP2WTJ8es",
          videoTitle: "Infrastructure Security Scanning",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Scan infrastructure code:\n1. `pip install checkov`\n2. Create a sample Terraform file:\nresource \"aws_s3_bucket\" \"data\" {\n  bucket = \"my-data-bucket\"\n}\n3. `checkov -f main.tf`\n4. Review security findings\n5. Fix issues (add encryption, versioning, etc.)",
            validation: "checkov",
          },
        },
        {
          id: "dso-snyk",
          title: "Snyk for Developer Security",
          description:
            "Use Snyk to find and fix vulnerabilities in code, dependencies, containers, and IaC from the developer workflow.",
          duration: "25 min",
          videoId: "z_6JdRK6MyY",
          videoTitle: "Snyk Developer Security",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Security Scanning Pipeline",
        description:
          "Build a comprehensive security scanning pipeline that integrates Trivy for containers, Semgrep for code, Checkov for IaC, and generates a unified security report with findings prioritized by severity.",
        difficulty: "advanced",
        estimatedHours: 6,
        skills: ["Trivy", "Semgrep", "Checkov", "CI/CD", "Vulnerability Management"],
      },
    },
    {
      id: "dso-cloud-security",
      title: "Cloud Security",
      description:
        "Secure cloud infrastructure — IAM policies, network security groups, encryption, and compliance.",
      icon: "Cloud",
      trackId: "devsecops",
      order: 9,
      lessons: [
        {
          id: "dso-cloud-shared-responsibility",
          title: "Cloud Shared Responsibility Model",
          description:
            "Understand what the cloud provider secures vs. what you are responsible for across IaaS, PaaS, and SaaS.",
          duration: "20 min",
          videoId: "M988_fsOSWo",
          videoTitle: "Cloud Shared Responsibility",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "dso-aws-security",
          title: "AWS Security Best Practices",
          description:
            "Implement AWS security — IAM policies, Security Groups, KMS encryption, and CloudTrail auditing.",
          duration: "30 min",
          videoId: "ulprqHHWlng",
          videoTitle: "AWS Security Best Practices",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice AWS IAM policies (using AWS CLI):\n1. Create a restrictive IAM policy:\n{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\"s3:GetObject\"],\n      \"Resource\": \"arn:aws:s3:::my-bucket/*\"\n    }\n  ]\n}\n2. Save as `policy.json`\n3. Review: Does this follow least-privilege principle?\n4. Identify what actions are missing/excessive",
            validation: "cat policy.json",
          },
        },
        {
          id: "dso-k8s-security",
          title: "Kubernetes Security",
          description:
            "Secure Kubernetes clusters — RBAC, Pod Security Standards, network policies, and secrets management.",
          duration: "30 min",
          videoId: "oBf5lrmquYI",
          videoTitle: "Kubernetes Security Best Practices",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "dso-cloud-compliance",
          title: "Cloud Compliance & Governance",
          description:
            "Ensure cloud environments meet compliance standards — SOC 2, HIPAA, GDPR, and PCI DSS.",
          duration: "25 min",
          videoId: "UMHqFmEFb4g",
          videoTitle: "Cloud Compliance Frameworks",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Cloud Security Assessment",
        description:
          "Perform a comprehensive cloud security assessment covering IAM review, network security evaluation, encryption audit, and compliance gap analysis, with documented findings and remediation recommendations.",
        difficulty: "advanced",
        estimatedHours: 6,
        skills: ["AWS Security", "IAM", "Kubernetes Security", "Compliance", "Cloud Governance"],
      },
    },
    {
      id: "dso-security-concepts",
      title: "Security Concepts",
      description:
        "Advanced security concepts — cryptography, secure architecture, and security design patterns.",
      icon: "Key",
      trackId: "devsecops",
      order: 10,
      lessons: [
        {
          id: "dso-cryptography-basics",
          title: "Cryptography Fundamentals",
          description:
            "Symmetric vs asymmetric encryption, hashing algorithms, and digital signatures explained.",
          duration: "30 min",
          videoId: "jhXCTbFnK8o",
          videoTitle: "Cryptography Explained",
          videoChannel: "Fireship",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice cryptography commands:\n1. `echo 'secret message' | openssl enc -aes-256-cbc -a -pbkdf2 -pass pass:mykey` — encrypt\n2. Decrypt with: `echo '<encrypted>' | openssl enc -aes-256-cbc -d -a -pbkdf2 -pass pass:mykey`\n3. `echo -n 'password123' | sha256sum` — hash a string\n4. `openssl genrsa -out private.pem 2048` — generate RSA key pair\n5. `openssl rsa -in private.pem -pubout -out public.pem` — extract public key",
            validation: "openssl",
          },
        },
        {
          id: "dso-pki",
          title: "Public Key Infrastructure (PKI)",
          description:
            "Understanding PKI, certificate authorities, certificate chains, and how trust is established on the internet.",
          duration: "25 min",
          videoId: "j9QmMEWmcfo",
          videoTitle: "PKI and Certificate Chains",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "dso-secure-architecture",
          title: "Secure Architecture Patterns",
          description:
            "Design secure system architectures — microservices security, API gateways, service mesh, and mTLS.",
          duration: "25 min",
          videoId: "pyyd_OkSkAs",
          videoTitle: "Secure Architecture Design",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "dso-data-protection",
          title: "Data Protection & Privacy",
          description:
            "Protect sensitive data at rest and in transit — encryption strategies, tokenization, and data masking.",
          duration: "25 min",
          videoId: "UMHqFmEFb4g",
          videoTitle: "Data Protection Strategies",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Crypto Implementation Lab",
        description:
          "Build a Python application demonstrating encryption (AES, RSA), hashing (SHA-256, bcrypt), digital signatures, and a simple PKI with self-signed certificates.",
        difficulty: "intermediate",
        estimatedHours: 5,
        skills: ["Cryptography", "PKI", "Hashing", "Encryption", "Python"],
      },
    },
    {
      id: "dso-incident-response",
      title: "Incident Response",
      description:
        "Prepare for and respond to security incidents — detection, containment, eradication, and recovery.",
      icon: "AlertTriangle",
      trackId: "devsecops",
      order: 11,
      lessons: [
        {
          id: "dso-ir-lifecycle",
          title: "Incident Response Lifecycle",
          description:
            "The NIST incident response lifecycle — Preparation, Detection, Containment, Eradication, Recovery, and Lessons Learned.",
          duration: "25 min",
          videoId: "2XLzMb9oZBI",
          videoTitle: "Incident Response Process",
          videoChannel: "NetworkChuck",
          hasTerminal: false,
        },
        {
          id: "dso-ir-detection",
          title: "Detection & Analysis",
          description:
            "Identify indicators of compromise (IOCs), analyze security events, and triage incidents by severity.",
          duration: "25 min",
          videoId: "xG3jnbFayxo",
          videoTitle: "Incident Detection Techniques",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice IOC detection:\n1. Create sample logs with suspicious activity\n2. `grep -E '(FAILED LOGIN|UNAUTHORIZED|403|401)' access.log`\n3. `awk '/FAILED/{count++} END{print count}' auth.log`\n4. Look for patterns: multiple failures from same IP\n5. Document findings in an incident ticket format",
            validation: "grep",
          },
        },
        {
          id: "dso-ir-containment",
          title: "Containment & Eradication",
          description:
            "Strategies for containing active threats — isolation, blocking, and removing the root cause.",
          duration: "25 min",
          videoId: "2jnG3UKx-iE",
          videoTitle: "Incident Containment Strategies",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "dso-ir-postmortem",
          title: "Post-Incident Review & Blameless Postmortems",
          description:
            "Conduct effective post-incident reviews, write blameless postmortems, and implement lasting improvements.",
          duration: "20 min",
          videoId: "nrhxNNH5lt0",
          videoTitle: "Blameless Postmortems",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Incident Response Playbook",
        description:
          "Create a complete incident response playbook covering preparation checklists, detection procedures, containment strategies, communication templates, and a postmortem document template for different incident types.",
        difficulty: "intermediate",
        estimatedHours: 5,
        skills: ["Incident Response", "Forensics", "Postmortems", "Communication", "Documentation"],
      },
    },
    {
      id: "dso-enterprise-security",
      title: "Enterprise Security Operations",
      description:
        "Scale security for large organizations — SOC operations, security governance, and compliance automation.",
      icon: "Building",
      trackId: "devsecops",
      order: 12,
      lessons: [
        {
          id: "dso-soc-operations",
          title: "Security Operations Center (SOC)",
          description:
            "How a SOC operates — tiers, workflows, tools, and key performance indicators for threat monitoring.",
          duration: "25 min",
          videoId: "2XLzMb9oZBI",
          videoTitle: "SOC Operations Explained",
          videoChannel: "NetworkChuck",
          hasTerminal: false,
        },
        {
          id: "dso-compliance-automation",
          title: "Compliance as Code",
          description:
            "Automate compliance checks and audits using policy-as-code tools like Open Policy Agent (OPA) and InSpec.",
          duration: "30 min",
          videoId: "POPP2WTJ8es",
          videoTitle: "Compliance as Code",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Write a compliance check with OPA/Rego:\n1. Create `policy.rego`:\npackage main\n\ndefault allow = false\n\nallow {\n  input.user.role == \"admin\"\n  input.action == \"read\"\n}\n\nallow {\n  input.user.role == \"developer\"\n  input.action == \"read\"\n  input.resource.sensitivity != \"high\"\n}\n2. Create `input.json` with test data\n3. Evaluate: `opa eval -i input.json -d policy.rego 'data.main.allow'`",
            validation: "opa eval",
          },
        },
        {
          id: "dso-security-governance",
          title: "Security Governance & Policies",
          description:
            "Establish security governance frameworks, policies, and procedures for enterprise environments.",
          duration: "25 min",
          videoId: "UMHqFmEFb4g",
          videoTitle: "Security Governance Frameworks",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Enterprise Security Framework",
        description:
          "Design an enterprise security governance framework including policies, compliance-as-code checks with OPA, automated audit reports, and a security metrics dashboard specification.",
        difficulty: "advanced",
        estimatedHours: 6,
        skills: ["SOC", "Compliance", "OPA", "Governance", "Security Metrics"],
      },
    },
    {
      id: "dso-supply-chain",
      title: "Supply Chain Security",
      description:
        "Protect the software supply chain — SBOMs, artifact signing, and secure build pipelines.",
      icon: "Link",
      trackId: "devsecops",
      order: 13,
      lessons: [
        {
          id: "dso-sbom",
          title: "Software Bill of Materials (SBOM)",
          description:
            "Generate and analyze SBOMs to track all components and dependencies in your software, enabling supply chain transparency.",
          duration: "25 min",
          videoId: "z_6JdRK6MyY",
          videoTitle: "SBOMs Explained",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Generate an SBOM:\n1. `docker run --rm aquasec/trivy sbom .` — generate SBOM with Trivy\n2. Alternative: `npm sbom --sbom-format cyclonedx` for Node.js projects\n3. Review the SBOM output\n4. Identify all direct and transitive dependencies\n5. Check for known vulnerabilities in listed components",
            validation: "sbom",
          },
        },
        {
          id: "dso-artifact-signing",
          title: "Artifact Signing & Verification",
          description:
            "Sign build artifacts and container images with Cosign/Sigstore to ensure authenticity and integrity.",
          duration: "25 min",
          videoId: "Kl4XtNGaYnA",
          videoTitle: "Container Image Signing",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "dso-secure-build-pipelines",
          title: "Secure Build Pipelines (SLSA)",
          description:
            "Implement SLSA framework levels for secure build pipelines — provenance, isolation, and verification.",
          duration: "25 min",
          videoId: "R8_veQiYBjI",
          videoTitle: "Secure CI/CD Pipelines",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Secure Supply Chain Pipeline",
        description:
          "Build a secure CI/CD pipeline with SBOM generation, dependency vulnerability scanning, artifact signing, and provenance attestation meeting SLSA Level 2 requirements.",
        difficulty: "advanced",
        estimatedHours: 6,
        skills: ["SBOM", "Cosign", "SLSA", "Supply Chain Security", "CI/CD"],
      },
    },
    {
      id: "dso-practices",
      title: "DevSecOps Practices",
      description:
        "Bring it all together — security champions, culture, metrics, and building a DevSecOps program.",
      icon: "Rocket",
      trackId: "devsecops",
      order: 14,
      lessons: [
        {
          id: "dso-security-pipeline-integration",
          title: "Security Pipeline Integration",
          description:
            "Integrate all security tools into a single CI/CD pipeline — gates, thresholds, and reporting.",
          duration: "30 min",
          videoId: "R8_veQiYBjI",
          videoTitle: "Full DevSecOps Pipeline",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Create a DevSecOps GitHub Actions pipeline:\n1. Create `.github/workflows/devsecops.yml`:\nname: DevSecOps Pipeline\non: [push]\njobs:\n  security:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: SAST Scan\n        run: pip install bandit && bandit -r . -f json -o sast.json || true\n      - name: Dependency Scan\n        run: pip install safety && safety check --json > deps.json || true\n      - name: Container Scan\n        run: docker run aquasec/trivy fs . --format json -o trivy.json || true\n      - name: Upload Reports\n        uses: actions/upload-artifact@v4\n        with:\n          name: security-reports\n          path: '*.json'",
            validation: "cat .github/workflows",
          },
        },
        {
          id: "dso-security-champions",
          title: "Security Champions Program",
          description:
            "Build a security champions program — embedding security advocates in every development team.",
          duration: "20 min",
          videoId: "nrhxNNH5lt0",
          videoTitle: "Security Champions Model",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "dso-security-metrics",
          title: "Security Metrics & KPIs",
          description:
            "Measure your security posture — mean time to remediate, vulnerability density, security debt, and more.",
          duration: "20 min",
          videoId: "mkLVGHzktSA",
          videoTitle: "Security Metrics That Matter",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "dso-devsecops-culture",
          title: "Building a DevSecOps Culture",
          description:
            "Foster a culture where security is everyone's responsibility — training, gamification, and continuous improvement.",
          duration: "20 min",
          videoId: "nrhxNNH5lt0",
          videoTitle: "DevSecOps Culture Building",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
      ],
      project: {
        title: "DevSecOps Program Blueprint",
        description:
          "Create a comprehensive DevSecOps program blueprint for an organization, including a full security pipeline, security champions program design, metrics dashboard, training curriculum, and a 90-day implementation roadmap.",
        difficulty: "advanced",
        estimatedHours: 8,
        skills: ["DevSecOps", "Security Culture", "Metrics", "Pipeline Design", "Program Management"],
      },
    },
  ],
};
