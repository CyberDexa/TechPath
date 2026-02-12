import { Track } from "./types";

export const cyberSecurityTrack: Track = {
  id: "cyber-security",
  title: "Cyber Security",
  description:
    "Build a career in cybersecurity — from IT fundamentals and networking to penetration testing, incident response, and governance.",
  icon: "Lock",
  color: "rose",
  category: "security-quality",
  modules: [
    {
      id: "cs-it-fundamentals",
      title: "IT Fundamentals",
      description:
        "Build a solid foundation in IT — hardware, operating systems, troubleshooting, and basic networking.",
      icon: "Monitor",
      trackId: "cyber-security",
      order: 1,
      lessons: [
        {
          id: "cs-how-computers-work",
          title: "How Computers Work",
          description:
            "Understand CPU, RAM, storage, BIOS/UEFI, and how hardware components interact to run software.",
          duration: "20 min",
          videoId: "mCq8-xTH7jA",
          videoTitle: "How Computers Work",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "cs-operating-systems-overview",
          title: "Operating Systems Overview",
          description:
            "Compare Windows, macOS, and Linux — file systems, processes, services, and security models at a high level.",
          duration: "25 min",
          videoId: "26QPDBe-NB8",
          videoTitle: "Operating Systems Explained",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "cs-it-troubleshooting",
          title: "IT Troubleshooting Methodology",
          description:
            "Learn systematic troubleshooting — CompTIA methodology, isolating problems, and documentation.",
          duration: "20 min",
          videoId: "oLc9gVM8FBM",
          videoTitle: "IT Troubleshooting Basics",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "cs-virtualization-basics",
          title: "Virtualization & Virtual Machines",
          description:
            "Set up virtual machines for safe security testing — VirtualBox, VMware, and creating isolated lab environments.",
          duration: "25 min",
          videoId: "wX75Z-4MEoM",
          videoTitle: "Virtual Machines Explained",
          videoChannel: "NetworkChuck",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Home Lab Setup",
        description:
          "Set up a cybersecurity home lab with VirtualBox or VMware, including a Kali Linux VM, a vulnerable target VM (Metasploitable), and document the network configuration.",
        difficulty: "beginner",
        estimatedHours: 3,
        skills: ["Virtualization", "Kali Linux", "Lab Setup", "Networking"],
      },
    },
    {
      id: "cs-networking-basics",
      title: "Networking Basics",
      description:
        "Understand how networks work — IP addressing, subnetting, DNS, DHCP, and basic network troubleshooting.",
      icon: "Globe",
      trackId: "cyber-security",
      order: 2,
      lessons: [
        {
          id: "cs-ip-addressing",
          title: "IP Addressing & Subnetting",
          description:
            "IPv4, IPv6, subnet masks, CIDR notation, and calculating subnets for network design.",
          duration: "30 min",
          videoId: "5WfiTHiU4x8",
          videoTitle: "IP Addressing and Subnetting",
          videoChannel: "NetworkChuck",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice IP addressing:\n1. `ifconfig` or `ip addr show` — view your IP configuration\n2. `python3 -c \"import ipaddress; net = ipaddress.ip_network('192.168.1.0/24'); print(f'Network: {net.network_address}'); print(f'Broadcast: {net.broadcast_address}'); print(f'Hosts: {net.num_addresses - 2}')\"`\n3. `ping -c 3 8.8.8.8` — test connectivity\n4. `traceroute google.com` — trace the route",
            validation: "ip addr",
          },
        },
        {
          id: "cs-dns-dhcp",
          title: "DNS & DHCP",
          description:
            "How DNS resolution works, DNS record types (A, AAAA, MX, CNAME, TXT), and DHCP lease process.",
          duration: "25 min",
          videoId: "27r4Bzuj5NQ",
          videoTitle: "DNS Explained",
          videoChannel: "Fireship",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Explore DNS:\n1. `nslookup google.com` — basic DNS lookup\n2. `dig google.com ANY` — all DNS records\n3. `dig google.com MX` — mail server records\n4. `dig +trace google.com` — trace DNS resolution path\n5. `host -t TXT google.com` — TXT records (SPF, DKIM)",
            validation: "dig",
          },
        },
        {
          id: "cs-common-protocols",
          title: "Common Network Protocols",
          description:
            "HTTP/HTTPS, FTP, SSH, SMTP, SNMP, and other protocols — their ports, purposes, and security implications.",
          duration: "25 min",
          videoId: "LKz1jYngpcU",
          videoTitle: "Network Protocols Explained",
          videoChannel: "NetworkChuck",
          hasTerminal: false,
        },
        {
          id: "cs-network-tools",
          title: "Network Diagnostic Tools",
          description:
            "Master essential network tools — ping, traceroute, netstat, ss, nmap, and Wireshark for troubleshooting.",
          duration: "30 min",
          videoId: "bKFMS5C4CG0",
          videoTitle: "Network Tools Every Hacker Uses",
          videoChannel: "NetworkChuck",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice network diagnostics:\n1. `ping -c 5 google.com` — test connectivity and latency\n2. `traceroute google.com` — trace packet path\n3. `ss -tuln` — list listening ports\n4. `curl -I https://example.com` — check HTTP headers\n5. `whois example.com` — domain information",
            validation: "ss -tuln",
          },
        },
      ],
      project: {
        title: "Network Discovery Script",
        description:
          "Build a Python script that performs network discovery — pinging a subnet, identifying live hosts, performing DNS lookups, and generating a network map report.",
        difficulty: "beginner",
        estimatedHours: 4,
        skills: ["Networking", "IP Addressing", "DNS", "Python", "Network Tools"],
      },
    },
    {
      id: "cs-operating-systems",
      title: "Operating Systems",
      description:
        "Deep dive into Windows and Linux security — hardening, permissions, services, and security configurations.",
      icon: "Terminal",
      trackId: "cyber-security",
      order: 3,
      lessons: [
        {
          id: "cs-linux-security",
          title: "Linux Security Essentials",
          description:
            "Linux file permissions, user management, sudo, PAM, and security-focused Linux distributions.",
          duration: "30 min",
          videoId: "ZtqBQ68cfJc",
          videoTitle: "Linux Security Fundamentals",
          videoChannel: "NetworkChuck",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Linux security commands:\n1. `whoami && id` — current user info\n2. `cat /etc/passwd | head -5` — view user accounts\n3. `sudo lastlog | head -10` — recent logins\n4. `find / -perm -4000 2>/dev/null | head -10` — find SUID files\n5. `ss -tuln` — check open ports\n6. `uname -a` — system information",
            validation: "whoami",
          },
        },
        {
          id: "cs-windows-security",
          title: "Windows Security Essentials",
          description:
            "Active Directory basics, Group Policy, Windows Firewall, Event Viewer, and Windows security features.",
          duration: "25 min",
          videoId: "wX75Z-4MEoM",
          videoTitle: "Windows Security for Hackers",
          videoChannel: "NetworkChuck",
          hasTerminal: false,
        },
        {
          id: "cs-os-hardening",
          title: "Operating System Hardening",
          description:
            "CIS benchmarks, disabling unnecessary services, patch management, and secure configurations.",
          duration: "25 min",
          videoId: "ZtqBQ68cfJc",
          videoTitle: "OS Hardening Guide",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Linux hardening checklist:\n1. Check for unnecessary services:\n   `systemctl list-unit-files --type=service | grep enabled`\n2. Check password policy:\n   `cat /etc/login.defs | grep -E 'PASS_MAX|PASS_MIN'`\n3. Check SSH config:\n   `grep -E 'PermitRootLogin|PasswordAuth' /etc/ssh/sshd_config 2>/dev/null`\n4. Check firewall status:\n   `sudo ufw status 2>/dev/null || sudo iptables -L`\n5. Check for world-writable files:\n   `find /tmp -type f -perm -002 2>/dev/null | head -5`",
            validation: "systemctl",
          },
        },
        {
          id: "cs-command-line-mastery",
          title: "Command Line for Security",
          description:
            "Advanced command line skills for security — text processing, log analysis, scripting, and automation.",
          duration: "30 min",
          videoId: "ZtqBQ68cfJc",
          videoTitle: "Command Line for Hackers",
          videoChannel: "NetworkChuck",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Security-focused CLI skills:\n1. `cat /var/log/syslog 2>/dev/null | tail -20` — view recent logs\n2. `grep -r 'password' /etc/ 2>/dev/null | head -5` — search for passwords in configs\n3. `find / -name '*.log' -mtime -1 2>/dev/null | head -10` — recently modified logs\n4. `awk '{print $1}' access.log 2>/dev/null | sort | uniq -c | sort -rn | head` — top IPs from access log\n5. `netstat -an 2>/dev/null | grep ESTABLISHED` — active connections",
            validation: "grep",
          },
        },
      ],
      project: {
        title: "OS Security Audit Script",
        description:
          "Create a comprehensive Bash security audit script that checks user accounts, file permissions, open ports, running services, firewall rules, and generates a security compliance report.",
        difficulty: "intermediate",
        estimatedHours: 5,
        skills: ["Linux Security", "Bash Scripting", "OS Hardening", "Audit", "Compliance"],
      },
    },
    {
      id: "cs-networking-knowledge",
      title: "Networking Knowledge",
      description:
        "Advanced networking — OSI model deep dive, routing, switching, VLANs, and wireless networking.",
      icon: "Network",
      trackId: "cyber-security",
      order: 4,
      lessons: [
        {
          id: "cs-osi-deep-dive",
          title: "OSI Model Deep Dive",
          description:
            "Understand each OSI layer in depth — protocols, PDUs, encapsulation, and how attacks target each layer.",
          duration: "25 min",
          videoId: "7IS7gigunyI",
          videoTitle: "OSI Model Deep Dive",
          videoChannel: "NetworkChuck",
          hasTerminal: false,
        },
        {
          id: "cs-routing-switching",
          title: "Routing & Switching",
          description:
            "How routers and switches work, routing protocols (OSPF, BGP), VLANs, and network architecture design.",
          duration: "30 min",
          videoId: "bKFMS5C4CG0",
          videoTitle: "Routing and Switching Basics",
          videoChannel: "NetworkChuck",
          hasTerminal: false,
        },
        {
          id: "cs-wireless-security",
          title: "Wireless Network Security",
          description:
            "WiFi security protocols (WPA2, WPA3), wireless attacks (evil twin, deauth), and securing wireless networks.",
          duration: "25 min",
          videoId: "SLs0UtCObs4",
          videoTitle: "WiFi Security Explained",
          videoChannel: "NetworkChuck",
          hasTerminal: false,
        },
        {
          id: "cs-packet-analysis",
          title: "Packet Analysis with Wireshark",
          description:
            "Capture and analyze network traffic with Wireshark — filters, protocol analysis, and identifying suspicious activity.",
          duration: "30 min",
          videoId: "lb1Dw0elj0Q",
          videoTitle: "Wireshark Tutorial for Beginners",
          videoChannel: "NetworkChuck",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Network packet basics (using tcpdump):\n1. `sudo tcpdump -i any -c 10` — capture 10 packets\n2. `sudo tcpdump -i any -c 5 port 80` — capture HTTP packets\n3. `sudo tcpdump -i any -c 5 host google.com` — filter by host\n4. `sudo tcpdump -i any -w capture.pcap -c 20` — save to file\n5. `sudo tcpdump -r capture.pcap` — read capture file",
            validation: "tcpdump",
          },
        },
        {
          id: "cs-network-architecture",
          title: "Secure Network Architecture",
          description:
            "Design secure networks — DMZ, network segmentation, zero trust networking, and defense in depth.",
          duration: "25 min",
          videoId: "dV2Kn-xLgE4",
          videoTitle: "Network Security Architecture",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Network Traffic Analyzer",
        description:
          "Build a Python packet analysis tool that captures network traffic, identifies protocols, detects anomalies (port scans, suspicious DNS queries), and generates a traffic summary report.",
        difficulty: "intermediate",
        estimatedHours: 5,
        skills: ["Wireshark", "tcpdump", "Packet Analysis", "Python", "Network Protocols"],
      },
    },
    {
      id: "cs-security-fundamentals",
      title: "Security Fundamentals",
      description:
        "Core security concepts — CIA triad, authentication, authorization, security models, and threat landscape.",
      icon: "Shield",
      trackId: "cyber-security",
      order: 5,
      lessons: [
        {
          id: "cs-cia-triad",
          title: "CIA Triad & Security Principles",
          description:
            "Confidentiality, Integrity, Availability — plus additional principles: non-repudiation, least privilege, and defense in depth.",
          duration: "25 min",
          videoId: "6vMdBRPHwF0",
          videoTitle: "CIA Triad and Security Principles",
          videoChannel: "NetworkChuck",
          hasTerminal: false,
        },
        {
          id: "cs-authentication-mechanisms",
          title: "Authentication Mechanisms",
          description:
            "Passwords, MFA, biometrics, tokens, certificates — understanding authentication factors and secure implementation.",
          duration: "25 min",
          videoId: "996OiexHze0",
          videoTitle: "Authentication Explained",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
        {
          id: "cs-threat-landscape",
          title: "Modern Threat Landscape",
          description:
            "Current cyber threats — ransomware, phishing, APTs, insider threats, supply chain attacks, and zero-day exploits.",
          duration: "25 min",
          videoId: "2XLzMb9oZBI",
          videoTitle: "Cyber Threat Landscape",
          videoChannel: "NetworkChuck",
          hasTerminal: false,
        },
        {
          id: "cs-security-models",
          title: "Security Models & Frameworks",
          description:
            "Bell-LaPadula, Biba, NIST CSF, ISO 27001, and the Cyber Kill Chain — theoretical foundations of security.",
          duration: "25 min",
          videoId: "UMHqFmEFb4g",
          videoTitle: "Security Models and Frameworks",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Security Assessment Report",
        description:
          "Conduct a security assessment of a sample organization, documenting the threat landscape, identifying risks mapped to the CIA triad, and recommending controls aligned with the NIST Cybersecurity Framework.",
        difficulty: "beginner",
        estimatedHours: 4,
        skills: ["CIA Triad", "Risk Assessment", "NIST Framework", "Threat Analysis", "Security Models"],
      },
    },
    {
      id: "cs-cryptography",
      title: "Cryptography",
      description:
        "Master cryptographic concepts — symmetric/asymmetric encryption, hashing, PKI, and real-world applications.",
      icon: "Key",
      trackId: "cyber-security",
      order: 6,
      lessons: [
        {
          id: "cs-encryption-basics",
          title: "Encryption Fundamentals",
          description:
            "Symmetric (AES, DES) vs asymmetric (RSA, ECC) encryption, key exchange, and when to use each.",
          duration: "30 min",
          videoId: "jhXCTbFnK8o",
          videoTitle: "Encryption Explained",
          videoChannel: "Fireship",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice encryption with OpenSSL:\n1. `echo 'Top Secret Data' > secret.txt`\n2. Encrypt: `openssl enc -aes-256-cbc -salt -pbkdf2 -in secret.txt -out encrypted.bin -pass pass:mypassword`\n3. `cat encrypted.bin` — see encrypted data\n4. Decrypt: `openssl enc -aes-256-cbc -d -pbkdf2 -in encrypted.bin -out decrypted.txt -pass pass:mypassword`\n5. `cat decrypted.txt` — verify decryption\n6. Compare: `diff secret.txt decrypted.txt`",
            validation: "openssl enc",
          },
        },
        {
          id: "cs-hashing",
          title: "Hashing Algorithms",
          description:
            "MD5, SHA-256, bcrypt, scrypt — understanding hash functions, collisions, salting, and password storage.",
          duration: "25 min",
          videoId: "jhXCTbFnK8o",
          videoTitle: "Hashing Algorithms Explained",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice hashing:\n1. `echo -n 'password123' | md5sum` — MD5 (insecure)\n2. `echo -n 'password123' | sha256sum` — SHA-256\n3. `echo -n 'password124' | sha256sum` — notice completely different hash\n4. `openssl dgst -sha512 secret.txt` — hash a file\n5. Python hashing:\n   python3 -c \"import hashlib; print(hashlib.sha256(b'hello').hexdigest())\"",
            validation: "sha256sum",
          },
        },
        {
          id: "cs-pki-certificates",
          title: "PKI & Digital Certificates",
          description:
            "Public Key Infrastructure — certificate authorities, certificate chains, X.509 format, and certificate lifecycle.",
          duration: "25 min",
          videoId: "j9QmMEWmcfo",
          videoTitle: "PKI and Certificates Explained",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Work with certificates:\n1. Generate RSA key pair:\n   `openssl genrsa -out private.pem 2048`\n   `openssl rsa -in private.pem -pubout -out public.pem`\n2. Create self-signed cert:\n   `openssl req -x509 -new -key private.pem -out cert.pem -days 365 -subj '/CN=Test/O=Lab'`\n3. Inspect cert:\n   `openssl x509 -in cert.pem -text -noout | head -20`\n4. Check a remote cert:\n   `echo | openssl s_client -connect google.com:443 2>/dev/null | openssl x509 -text -noout | head -15`",
            validation: "openssl req",
          },
        },
        {
          id: "cs-crypto-attacks",
          title: "Cryptographic Attacks & Weaknesses",
          description:
            "Common attacks on cryptography — brute force, rainbow tables, padding oracle, downgrade attacks, and quantum threats.",
          duration: "25 min",
          videoId: "jhXCTbFnK8o",
          videoTitle: "Breaking Cryptography",
          videoChannel: "NetworkChuck",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Cryptography Toolkit",
        description:
          "Build a Python cryptography toolkit with symmetric encryption (AES), asymmetric encryption (RSA), hashing with salting, digital signatures, and certificate generation capabilities.",
        difficulty: "intermediate",
        estimatedHours: 5,
        skills: ["AES", "RSA", "Hashing", "PKI", "Python", "OpenSSL"],
      },
    },
    {
      id: "cs-web-app-security",
      title: "Web Application Security",
      description:
        "Find and fix web vulnerabilities — OWASP Top 10, injection attacks, authentication flaws, and secure coding.",
      icon: "Bug",
      trackId: "cyber-security",
      order: 7,
      lessons: [
        {
          id: "cs-owasp-top-10",
          title: "OWASP Top 10 (2021)",
          description:
            "The ten most critical web application security risks — from broken access control to SSRF.",
          duration: "30 min",
          videoId: "rWHvp7rUka8",
          videoTitle: "OWASP Top 10 Explained",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "cs-sql-injection",
          title: "SQL Injection Attacks",
          description:
            "Understand and exploit SQL injection — classic, blind, and union-based attacks, plus prevention techniques.",
          duration: "30 min",
          videoId: "2OPVViV-GQk",
          videoTitle: "SQL Injection for Beginners",
          videoChannel: "NetworkChuck",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Demonstrate SQL injection vulnerability:\n1. Create `sqli_demo.py`:\nimport sqlite3\n\nconn = sqlite3.connect(':memory:')\nc = conn.cursor()\nc.execute('CREATE TABLE users (id INT, username TEXT, password TEXT)')\nc.execute(\"INSERT INTO users VALUES (1, 'admin', 'secret')\")\nc.execute(\"INSERT INTO users VALUES (2, 'user', 'pass123')\")\n\n# VULNERABLE query\nuser_input = \"' OR '1'='1\"\nquery = f\"SELECT * FROM users WHERE username='{user_input}'\"\nprint(f'Query: {query}')\nresults = c.execute(query).fetchall()\nprint(f'Results: {results}')  # Returns ALL users!\n\n# SAFE query with parameterization\nsafe_results = c.execute('SELECT * FROM users WHERE username=?', (user_input,)).fetchall()\nprint(f'Safe results: {safe_results}')  # Returns nothing\nconn.close()\n\n2. Run: `python3 sqli_demo.py`",
            validation: "python3 sqli_demo.py",
          },
        },
        {
          id: "cs-xss-csrf",
          title: "XSS & CSRF Attacks",
          description:
            "Cross-Site Scripting and Cross-Site Request Forgery — stored, reflected, DOM-based XSS, and CSRF token protection.",
          duration: "25 min",
          videoId: "rWHvp7rUka8",
          videoTitle: "XSS and CSRF Explained",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "cs-auth-vulnerabilities",
          title: "Authentication & Session Vulnerabilities",
          description:
            "Broken authentication, session hijacking, credential stuffing, and secure session management practices.",
          duration: "25 min",
          videoId: "996OiexHze0",
          videoTitle: "Authentication Security Flaws",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
        {
          id: "cs-web-security-headers",
          title: "Security Headers & CSP",
          description:
            "HTTP security headers — Content-Security-Policy, HSTS, X-Frame-Options, and configuring secure web servers.",
          duration: "25 min",
          videoId: "j9QmMEWmcfo",
          videoTitle: "HTTP Security Headers",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Check security headers:\n1. `curl -I https://google.com` — check headers\n2. `curl -sI https://github.com | grep -iE 'security|policy|strict|frame|content-type'`\n3. `curl -sI https://example.com | grep -iE 'x-frame|x-content|strict|csp'`\n4. Create `check_headers.sh`:\n#!/bin/bash\nURL=$1\necho \"Security Headers for $URL:\"\ncurl -sI $URL | grep -iE 'strict-transport|content-security|x-frame|x-content-type|referrer-policy|permissions-policy'\n5. `chmod +x check_headers.sh && ./check_headers.sh https://github.com`",
            validation: "curl -sI",
          },
        },
      ],
      project: {
        title: "Web Vulnerability Scanner",
        description:
          "Build a Python web vulnerability scanner that checks for common issues — missing security headers, SQL injection patterns, XSS vectors, directory traversal, and generates a prioritized findings report.",
        difficulty: "intermediate",
        estimatedHours: 6,
        skills: ["OWASP Top 10", "SQL Injection", "XSS", "Security Headers", "Python"],
      },
    },
    {
      id: "cs-network-security",
      title: "Network Security",
      description:
        "Defend networks — firewalls, IDS/IPS, VPNs, network monitoring, and attack detection.",
      icon: "ShieldCheck",
      trackId: "cyber-security",
      order: 8,
      lessons: [
        {
          id: "cs-firewall-config",
          title: "Firewall Configuration",
          description:
            "Configure host and network firewalls — iptables, ufw, Windows Firewall, and next-gen firewalls.",
          duration: "30 min",
          videoId: "9GZlVOafYTg",
          videoTitle: "Firewall Configuration Guide",
          videoChannel: "NetworkChuck",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice firewall configuration:\n1. `sudo ufw status` — check UFW status\n2. `sudo ufw default deny incoming`\n3. `sudo ufw default allow outgoing`\n4. `sudo ufw allow ssh`\n5. `sudo ufw allow 80/tcp`\n6. `sudo ufw allow 443/tcp`\n7. `sudo ufw --dry-run enable` — preview rules\n8. Review: Is this a good baseline configuration?",
            validation: "ufw",
          },
        },
        {
          id: "cs-ids-ips",
          title: "IDS/IPS with Snort & Suricata",
          description:
            "Deploy and configure intrusion detection/prevention systems — rules, signatures, and alert management.",
          duration: "30 min",
          videoId: "9GZlVOafYTg",
          videoTitle: "IDS with Snort and Suricata",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "cs-network-monitoring",
          title: "Network Monitoring & Analysis",
          description:
            "Monitor network traffic for threats — NetFlow, packet capture, anomaly detection, and baseline modeling.",
          duration: "25 min",
          videoId: "lb1Dw0elj0Q",
          videoTitle: "Network Monitoring Techniques",
          videoChannel: "NetworkChuck",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Network monitoring basics:\n1. `ss -s` — socket statistics summary\n2. `ss -tuln` — list listening ports\n3. `ss -tupn` — show processes with connections\n4. `watch -n 2 'ss -s'` — monitor in real-time (Ctrl+C to stop)\n5. Create a monitoring script:\n#!/bin/bash\nwhile true; do\n  CONNS=$(ss -tun | wc -l)\n  echo \"$(date): Active connections: $CONNS\"\n  sleep 5\ndone",
            validation: "ss -s",
          },
        },
        {
          id: "cs-vpn-security",
          title: "VPN Technologies & Security",
          description:
            "IPSec, OpenVPN, WireGuard — setting up secure VPN tunnels and understanding VPN architectures.",
          duration: "25 min",
          videoId: "WVDQEoe6ZWY",
          videoTitle: "VPN Technologies Compared",
          videoChannel: "NetworkChuck",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Network Defense Lab",
        description:
          "Set up a network defense lab with firewall rules, basic IDS signatures, network monitoring scripts, and a VPN configuration. Document the security architecture and test it against simulated attacks.",
        difficulty: "intermediate",
        estimatedHours: 6,
        skills: ["Firewalls", "IDS/IPS", "VPN", "Network Monitoring", "Defense"],
      },
    },
    {
      id: "cs-penetration-testing",
      title: "Penetration Testing",
      description:
        "Ethical hacking — reconnaissance, scanning, exploitation, post-exploitation, and professional reporting.",
      icon: "Crosshair",
      trackId: "cyber-security",
      order: 9,
      lessons: [
        {
          id: "cs-pentest-methodology",
          title: "Penetration Testing Methodology",
          description:
            "The five phases of pentesting — reconnaissance, scanning, gaining access, maintaining access, and reporting.",
          duration: "25 min",
          videoId: "3Kq1MIfTWCE",
          videoTitle: "Pen Testing Methodology",
          videoChannel: "NetworkChuck",
          hasTerminal: false,
        },
        {
          id: "cs-reconnaissance",
          title: "Reconnaissance & OSINT",
          description:
            "Passive and active reconnaissance — Google dorking, Shodan, theHarvester, Maltego, and OSINT techniques.",
          duration: "30 min",
          videoId: "3Kq1MIfTWCE",
          videoTitle: "Hacker Recon Techniques",
          videoChannel: "NetworkChuck",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice reconnaissance:\n1. `whois example.com` — domain registration info\n2. `dig example.com ANY` — DNS enumeration\n3. `curl -s https://crt.sh/?q=example.com\\&output=json | python3 -m json.tool | head -30` — certificate transparency\n4. `nslookup -type=mx example.com` — mail servers\n5. `curl -sI example.com | grep -i server` — identify web server",
            validation: "whois",
          },
        },
        {
          id: "cs-scanning-enumeration",
          title: "Scanning & Enumeration with Nmap",
          description:
            "Port scanning, service detection, OS fingerprinting, and vulnerability scanning with Nmap.",
          duration: "30 min",
          videoId: "4t4kBkMsDbQ",
          videoTitle: "Nmap Tutorial",
          videoChannel: "NetworkChuck",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice Nmap scanning (scan your own systems only!):\n1. `nmap -sn 192.168.1.0/24` — host discovery\n2. `nmap -sT localhost` — TCP connect scan\n3. `nmap -sV localhost` — service version detection\n4. `nmap -O localhost` — OS detection\n5. `nmap -sC -sV -oN scan_results.txt localhost` — default scripts + output to file\n6. `cat scan_results.txt` — review results",
            validation: "nmap",
          },
        },
        {
          id: "cs-exploitation-basics",
          title: "Exploitation Basics with Metasploit",
          description:
            "Introduction to Metasploit Framework — modules, payloads, exploits, and using msfconsole in a controlled lab.",
          duration: "35 min",
          videoId: "8lR27r8Y_ik",
          videoTitle: "Metasploit for Beginners",
          videoChannel: "NetworkChuck",
          hasTerminal: false,
        },
        {
          id: "cs-pentest-reporting",
          title: "Penetration Test Reporting",
          description:
            "Write professional pentest reports — executive summary, technical findings, risk ratings, and remediation recommendations.",
          duration: "20 min",
          videoId: "3Kq1MIfTWCE",
          videoTitle: "Writing Pentest Reports",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Penetration Test Lab",
        description:
          "Conduct a full penetration test against a deliberately vulnerable machine (DVWA or Metasploitable) in your home lab, documenting reconnaissance, scanning, exploitation, and producing a professional pentest report.",
        difficulty: "advanced",
        estimatedHours: 8,
        skills: ["Nmap", "Metasploit", "OSINT", "Exploitation", "Report Writing"],
      },
    },
    {
      id: "cs-ctf-practice",
      title: "CTF & Practice",
      description:
        "Sharpen your skills with Capture The Flag challenges, vulnerable labs, and hands-on practice platforms.",
      icon: "Flag",
      trackId: "cyber-security",
      order: 10,
      lessons: [
        {
          id: "cs-ctf-intro",
          title: "Introduction to CTFs",
          description:
            "What are CTFs, types of challenges (web, crypto, forensics, reverse engineering), and how to get started.",
          duration: "20 min",
          videoId: "3Kq1MIfTWCE",
          videoTitle: "Getting Started with CTFs",
          videoChannel: "NetworkChuck",
          hasTerminal: false,
        },
        {
          id: "cs-practice-platforms",
          title: "Practice Platforms & Labs",
          description:
            "Overview of hands-on platforms — TryHackMe, HackTheBox, OverTheWire, PicoCTF, and DVWA for building skills.",
          duration: "20 min",
          videoId: "8lR27r8Y_ik",
          videoTitle: "Best Hacking Practice Platforms",
          videoChannel: "NetworkChuck",
          hasTerminal: false,
        },
        {
          id: "cs-ctf-challenge-walkthrough",
          title: "CTF Challenge Walkthrough",
          description:
            "Walk through solving a real CTF challenge — from reading the prompt to capturing the flag, demonstrating methodology.",
          duration: "30 min",
          videoId: "4t4kBkMsDbQ",
          videoTitle: "CTF Walkthrough",
          videoChannel: "NetworkChuck",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Practice CTF-style challenges:\n1. Decode base64: `echo 'Q3liZXJTZWN1cml0eVJvY2tz' | base64 -d`\n2. Find hidden data: `echo 'Normal text' > file.txt && echo 'FLAG{hidden_data}' >> file.txt && strings file.txt`\n3. ROT13 cipher: `echo 'Uryyb Jbeyq' | tr 'A-Za-z' 'N-ZA-Mn-za-m'`\n4. Hex decode: `echo '48656c6c6f' | xxd -r -p`\n5. Hash cracking concept: compare `echo -n 'password' | md5sum` with known hashes",
            validation: "base64",
          },
        },
      ],
      project: {
        title: "CTF Challenge Set",
        description:
          "Create a set of 5 CTF challenges covering different categories (web exploitation, cryptography, steganography, forensics, and reverse engineering) with solutions and writeups.",
        difficulty: "intermediate",
        estimatedHours: 5,
        skills: ["CTF", "Problem Solving", "Cryptography", "Web Exploitation", "Forensics"],
      },
    },
    {
      id: "cs-cloud-security",
      title: "Cloud Security",
      description:
        "Secure cloud environments — AWS/Azure/GCP security, identity management, and cloud-native security tools.",
      icon: "Cloud",
      trackId: "cyber-security",
      order: 11,
      lessons: [
        {
          id: "cs-cloud-security-fundamentals",
          title: "Cloud Security Fundamentals",
          description:
            "Shared responsibility model, cloud threat landscape, and security considerations for IaaS, PaaS, and SaaS.",
          duration: "25 min",
          videoId: "M988_fsOSWo",
          videoTitle: "Cloud Security Basics",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "cs-aws-security",
          title: "AWS Security Services",
          description:
            "AWS security tools — IAM, GuardDuty, Security Hub, CloudTrail, KMS, and AWS Config for compliance.",
          duration: "30 min",
          videoId: "ulprqHHWlng",
          videoTitle: "AWS Security Deep Dive",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "cs-container-security",
          title: "Container & Kubernetes Security",
          description:
            "Container security best practices — image scanning, runtime security, Kubernetes RBAC, and pod security policies.",
          duration: "30 min",
          videoId: "oBf5lrmquYI",
          videoTitle: "Container Security",
          videoChannel: "freeCodeCamp",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Container security scanning:\n1. `docker pull python:3.11`\n2. `docker run --rm aquasec/trivy image python:3.11` — scan for vulnerabilities\n3. `docker history python:3.11` — inspect image layers\n4. Check container as non-root:\n   `docker run --rm python:3.11 whoami` — check running user\n5. Best practice: `docker run --rm --read-only --user 1000 python:3.11 python3 -c 'print(\"Secure container!\")'`",
            validation: "trivy",
          },
        },
        {
          id: "cs-cloud-misconfigurations",
          title: "Cloud Misconfigurations",
          description:
            "Common cloud misconfigurations — public S3 buckets, overly permissive IAM, exposed databases, and how to prevent them.",
          duration: "25 min",
          videoId: "ulprqHHWlng",
          videoTitle: "Top Cloud Misconfigurations",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Cloud Security Audit",
        description:
          "Perform a cloud security audit using automated tools — check IAM policies, network configurations, encryption settings, and logging, producing a compliance report with remediation priority.",
        difficulty: "advanced",
        estimatedHours: 6,
        skills: ["AWS Security", "Container Security", "IAM", "Cloud Compliance", "Audit"],
      },
    },
    {
      id: "cs-incident-response",
      title: "Incident Response",
      description:
        "Handle security incidents — detection, analysis, containment, eradication, recovery, and digital forensics.",
      icon: "AlertTriangle",
      trackId: "cyber-security",
      order: 12,
      lessons: [
        {
          id: "cs-ir-process",
          title: "Incident Response Process",
          description:
            "The NIST incident response lifecycle — preparation, detection & analysis, containment, eradication, recovery, and post-incident activity.",
          duration: "25 min",
          videoId: "2XLzMb9oZBI",
          videoTitle: "Incident Response Lifecycle",
          videoChannel: "NetworkChuck",
          hasTerminal: false,
        },
        {
          id: "cs-digital-forensics",
          title: "Digital Forensics Basics",
          description:
            "Evidence collection, chain of custody, disk imaging, memory analysis, and forensic tools (Autopsy, Volatility).",
          duration: "30 min",
          videoId: "3Kq1MIfTWCE",
          videoTitle: "Digital Forensics for Beginners",
          videoChannel: "NetworkChuck",
          hasTerminal: true,
          terminalExercise: {
            instructions:
              "Basic forensics commands:\n1. `file suspicious_file` — identify file type\n2. `strings suspicious_file | head -20` — extract readable strings\n3. `md5sum suspicious_file` — hash for integrity\n4. `exiftool image.jpg 2>/dev/null` — extract metadata\n5. Create a timeline:\n   `find /tmp -type f -printf '%T+ %p\\n' 2>/dev/null | sort | tail -10`\n6. Check recently modified files:\n   `find /home -mtime -1 -type f 2>/dev/null | head -10`",
            validation: "strings",
          },
        },
        {
          id: "cs-malware-analysis-intro",
          title: "Malware Analysis Introduction",
          description:
            "Static and dynamic malware analysis basics — safe analysis environments, indicators of compromise, and common malware behaviors.",
          duration: "25 min",
          videoId: "8lR27r8Y_ik",
          videoTitle: "Malware Analysis Basics",
          videoChannel: "NetworkChuck",
          hasTerminal: false,
        },
        {
          id: "cs-ir-communication",
          title: "Incident Communication & Reporting",
          description:
            "Effective incident communication — stakeholder notifications, status updates, regulatory reporting, and lessons learned.",
          duration: "20 min",
          videoId: "2XLzMb9oZBI",
          videoTitle: "Incident Communication",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Incident Response Simulation",
        description:
          "Simulate a security incident (ransomware or data breach), practice the full IR lifecycle — detection, containment, evidence collection, forensic analysis, and write a complete incident report with timeline and lessons learned.",
        difficulty: "advanced",
        estimatedHours: 7,
        skills: ["Incident Response", "Digital Forensics", "Malware Analysis", "Reporting", "Communication"],
      },
    },
    {
      id: "cs-governance-compliance",
      title: "Governance & Compliance",
      description:
        "Security governance, risk management, and compliance — regulations, frameworks, auditing, and policies.",
      icon: "Scale",
      trackId: "cyber-security",
      order: 13,
      lessons: [
        {
          id: "cs-grc-overview",
          title: "GRC Overview",
          description:
            "Governance, Risk, and Compliance — how they work together to manage organizational security posture.",
          duration: "25 min",
          videoId: "UMHqFmEFb4g",
          videoTitle: "GRC Explained for Beginners",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "cs-regulations",
          title: "Key Regulations (GDPR, HIPAA, PCI DSS)",
          description:
            "Major compliance regulations — what they require, who they apply to, and penalties for non-compliance.",
          duration: "25 min",
          videoId: "UMHqFmEFb4g",
          videoTitle: "Cybersecurity Regulations",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
        {
          id: "cs-security-auditing",
          title: "Security Auditing & Assessment",
          description:
            "Internal and external audits, vulnerability assessments, compliance auditing, and audit reporting.",
          duration: "25 min",
          videoId: "UMHqFmEFb4g",
          videoTitle: "Security Auditing Guide",
          videoChannel: "freeCodeCamp",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Compliance Framework Implementation",
        description:
          "Develop a compliance implementation plan for a fictional healthcare company needing HIPAA compliance — gap analysis, policy creation, technical controls mapping, and audit preparation checklist.",
        difficulty: "intermediate",
        estimatedHours: 5,
        skills: ["GRC", "GDPR", "HIPAA", "PCI DSS", "Security Auditing", "Policy"],
      },
    },
    {
      id: "cs-career-certifications",
      title: "Career & Certifications",
      description:
        "Plan your cybersecurity career — career paths, certifications, resume building, and interview preparation.",
      icon: "Award",
      trackId: "cyber-security",
      order: 14,
      lessons: [
        {
          id: "cs-career-paths",
          title: "Cybersecurity Career Paths",
          description:
            "Explore career paths — SOC analyst, penetration tester, security engineer, GRC analyst, incident responder, and CISO.",
          duration: "20 min",
          videoId: "3Kq1MIfTWCE",
          videoTitle: "Cybersecurity Career Roadmap",
          videoChannel: "NetworkChuck",
          hasTerminal: false,
        },
        {
          id: "cs-certifications-guide",
          title: "Certification Guide",
          description:
            "Certification roadmap — CompTIA Security+, CEH, OSCP, CISSP, AWS Security Specialty, and when to pursue each.",
          duration: "25 min",
          videoId: "3Kq1MIfTWCE",
          videoTitle: "Top Cybersecurity Certifications",
          videoChannel: "NetworkChuck",
          hasTerminal: false,
        },
        {
          id: "cs-portfolio-building",
          title: "Building Your Security Portfolio",
          description:
            "Create a compelling cybersecurity portfolio — home labs, CTF writeups, blog posts, open-source contributions, and GitHub projects.",
          duration: "20 min",
          videoId: "3Kq1MIfTWCE",
          videoTitle: "Build Your Hacker Portfolio",
          videoChannel: "NetworkChuck",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Career Development Plan",
        description:
          "Create a 12-month cybersecurity career development plan including target certifications, skill milestones, lab projects, CTF participation goals, networking strategy, and a professional portfolio outline.",
        difficulty: "beginner",
        estimatedHours: 3,
        skills: ["Career Planning", "Certifications", "Portfolio", "Networking", "Professional Development"],
      },
    },
    {
      id: "cs-advanced-topics",
      title: "Advanced Topics",
      description:
        "Cutting-edge cybersecurity — AI in security, IoT security, blockchain security, and emerging threats.",
      icon: "Zap",
      trackId: "cyber-security",
      order: 15,
      lessons: [
        {
          id: "cs-ai-ml-security",
          title: "AI & Machine Learning in Security",
          description:
            "How AI/ML is used for threat detection, anomaly analysis, automated response, and the emerging threat of adversarial AI.",
          duration: "25 min",
          videoId: "nrhxNNH5lt0",
          videoTitle: "AI in Cybersecurity",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
        {
          id: "cs-iot-security",
          title: "IoT Security",
          description:
            "Securing Internet of Things devices — common vulnerabilities, attack surfaces, firmware analysis, and IoT security frameworks.",
          duration: "25 min",
          videoId: "SLs0UtCObs4",
          videoTitle: "IoT Security Challenges",
          videoChannel: "NetworkChuck",
          hasTerminal: false,
        },
        {
          id: "cs-emerging-threats",
          title: "Emerging Threats & Future of Security",
          description:
            "Quantum computing threats, deepfakes, autonomous weapons, space cybersecurity, and preparing for the future of security.",
          duration: "25 min",
          videoId: "nrhxNNH5lt0",
          videoTitle: "Future of Cybersecurity",
          videoChannel: "Fireship",
          hasTerminal: false,
        },
      ],
      project: {
        title: "Security Research Paper",
        description:
          "Research and write a technical paper on an emerging cybersecurity topic (AI-powered attacks, quantum cryptography, or IoT botnets) with current threat analysis, defense strategies, and predictions.",
        difficulty: "advanced",
        estimatedHours: 6,
        skills: ["Research", "AI Security", "IoT Security", "Technical Writing", "Emerging Threats"],
      },
    },
  ],
};
