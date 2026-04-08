# Portfolio Master Document

## Purpose
This document captures all current portfolio information so it can be reused in another prompt, terminal workflow, or code generator to build a different portfolio design while preserving the same content.

## Owner Profile
- Name: Shreyas Reddy Gaddampally
- Headline: Software Engineer and Distributed Systems Enthusiast
- Subheadline: Building scalable cloud platforms, intelligent automation, and fault-tolerant systems.
- Location: Stony Brook, NY
- Email: shreyasreddy.gaddampally@gmail.com
- LinkedIn: https://www.linkedin.com/in/shreyasreddy-gaddampally

## About Copy
### Short About
I am a Computer Science graduate student at Stony Brook University with hands-on experience building cloud-native automation, AI-powered workflows, and distributed systems.

### Long About
I am currently pursuing a Master of Science in Computer Science at Stony Brook University, where I focus on distributed systems, machine learning, and cloud-scale engineering. During my internship at EchoStar, I built automation systems and governance controls that helped prevent over 4 million dollars in projected AWS spend, while also shipping AI-assisted internal workflows that reduced manual effort across teams. I have also worked as a Research Project Assistant at PoliTech Labs, where I improved query performance and deployment velocity by modernizing data architecture and CI/CD pipelines. My project work includes consensus-based distributed banking platforms using Linear PBFT and Multi-Paxos with 2PC, as well as LLM-powered retrieval systems for semantic search across large document collections.

## Education
### Stony Brook University
- Degree: Master of Science in Computer Science
- Duration: Aug 2024 - May 2026
- Location: Stony Brook, NY
- Coursework: Distributed Systems, Computer Vision, Visualization, Machine Learning, Generative AI

### Jawaharlal Nehru Technological University
- Degree: Bachelor of Technology in Computer Science and Engineering
- Duration: Dec 2020 - May 2024
- Location: Hyderabad, India

## Work Experience
### EchoStar Corporation
- Role: Software Engineer Intern
- Team: Boost Mobile - 5G Public Cloud Team
- Duration: May 2025 - Aug 2025
- Location: Denver, Colorado
- Highlights:
- Built Python and TypeScript automations and 150+ cloud governance policies across multi-account AWS, preventing 4M+ USD in projected spend.
- Developed production AI agents with IBM watsonx Orchestrate, AWS Bedrock, and LangChain, saving about 40K USD per use case.
- Built RBAC-secured React applications for 20K+ compliance and network reports, reducing operational overhead by 70%+.
- Tech: Python, TypeScript, React, Node.js, AWS, Docker, Kubernetes, PostgreSQL, Redis, Kafka

### PoliTech Labs
- Role: Research Project Assistant
- Duration: Jan 2025 - Dec 2025
- Location: Stony Brook, NY
- Highlights:
- Migrated data architecture from PostgreSQL to MongoDB, improving query performance by 45% on 20K+ records.
- Improved UI discoverability with React and D3 interactive filtering, increasing user satisfaction by 30%.
- Automated CI/CD using GitHub Actions, Docker, and Kubernetes, reducing manual deployment effort by 75%.
- Tech: Python, Spring Boot, React, D3.js, MongoDB, PostgreSQL, Docker, Kubernetes

## Projects
### Distributed Banking Application with Linear PBFT
- Stack: Go, gRPC, SQLite3, Distributed Systems
- Summary: Built a 7-node fault-tolerant banking platform using PBFT with under 80 ms latency and support for 500+ concurrent transactions.
- Bullets:
- Designed a Linear-PBFT protocol for secure validation at scale.
- Implemented full PBFT lifecycle including view-change and signed message validation.

### Distributed Banking System (Multi-Paxos + 2PC)
- Stack: Go, gRPC, PostgreSQL, Distributed Systems
- Summary: Architected a 9-node distributed banking system with strong consistency and fault-tolerant failover.
- Bullets:
- Implemented cross-shard atomic transactions via 2PC over Paxos-replicated phases.
- Added WAL durability and sub-2 second recovery goals.
- Improved scalability by 35% using shard redistribution and benchmark-driven tuning.

### Domain-Specific LLM Document Retrieval System
- Stack: Python, LangChain, OpenAI API, FAISS, Flask, Docker
- Summary: Built semantic QA across 100K+ documents with sub-1 second retrieval and improved factual accuracy through RAG.
- Bullets:
- Implemented embedding and retrieval pipeline with FAISS.
- Deployed scalable RAG service on Google Cloud Run.

## Skills
- Languages: Python, Go, Java, C++, JavaScript, TypeScript, SQL
- Frontend: React, Next.js, Angular, Vue, HTML, CSS, Redux
- Backend: Node.js, Spring Boot, Django, REST, GraphQL
- Databases: PostgreSQL, MySQL, MongoDB, DynamoDB, Redis
- Cloud and DevOps: AWS, Docker, Kubernetes, Jenkins, CI/CD
- AI and Data: LangChain, FAISS, TensorFlow, PyTorch, Pandas, NumPy, PySpark

## Contact Section Copy
I am actively seeking software engineering opportunities focused on backend, cloud, distributed systems, and AI-enabled products. If you are hiring or would like to collaborate, feel free to reach out.

## SEO
- Title: Shreyas Reddy Gaddampally | Software Engineer Portfolio
- Description: Portfolio featuring distributed systems projects, cloud engineering experience, and AI-driven solutions.
- Keywords: software engineer, distributed systems, cloud automation, AWS, Go, Python, AI, portfolio

## Current Site Structure
- Home Hero
- About
- Experience
- Projects
- Skills
- Contact

## Current Visual System
- Background: soft beige-blue atmospheric gradient with subtle grid overlay
- Primary Accent: warm rust tone
- Mood: clean editorial with soft cards and pill chips
- Card Style: rounded, light gradient fill, gentle shadow
- Typography: strong heading scale with readable body rhythm
- Motion: staggered entrance on hero

## Color Tokens
- --bg: #f6f0e8
- --surface: #fffaf4
- --ink: #17212b
- --muted: #485b6b
- --accent: #bd4b2f
- --accent-soft: #f2d6c8

## Current Tech and Deployment
- Framework: Next.js (App Router, TypeScript)
- Styling: Tailwind + custom CSS
- Hosting: GitHub Pages via GitHub Actions static export
- Repository: https://github.com/ShreyasReddy2401/portfolio-site

## Source of Truth Files
- Primary content JSON: src/data/portfolio-data.json
- Main page implementation: src/app/page.tsx
- Global styles and design tokens: src/app/globals.css
- Additional human-readable content pack: ../portfolio-content.md

## Prompt-Ready Block
Use this block in another AI prompt to generate a different portfolio design while keeping same content:

Build a personal portfolio website using the following profile and content. Keep all facts exactly the same, but redesign the UI with a different visual style and layout. Include About, Experience, Projects, Skills, and Contact sections.

Profile:
- Name: Shreyas Reddy Gaddampally
- Headline: Software Engineer and Distributed Systems Enthusiast
- Subheadline: Building scalable cloud platforms, intelligent automation, and fault-tolerant systems.
- Location: Stony Brook, NY
- Email: shreyasreddy.gaddampally@gmail.com
- LinkedIn: https://www.linkedin.com/in/shreyasreddy-gaddampally

About Short:
I am a Computer Science graduate student at Stony Brook University with hands-on experience building cloud-native automation, AI-powered workflows, and distributed systems.

About Long:
I am currently pursuing a Master of Science in Computer Science at Stony Brook University, where I focus on distributed systems, machine learning, and cloud-scale engineering. During my internship at EchoStar, I built automation systems and governance controls that helped prevent over 4 million dollars in projected AWS spend, while also shipping AI-assisted internal workflows that reduced manual effort across teams. I have also worked as a Research Project Assistant at PoliTech Labs, where I improved query performance and deployment velocity by modernizing data architecture and CI/CD pipelines. My project work includes consensus-based distributed banking platforms using Linear PBFT and Multi-Paxos with 2PC, as well as LLM-powered retrieval systems for semantic search across large document collections.

Experience:
1) EchoStar Corporation, Software Engineer Intern, Boost Mobile - 5G Public Cloud Team, May 2025 - Aug 2025, Denver, Colorado
- Built Python and TypeScript automations and 150+ cloud governance policies across multi-account AWS, preventing 4M+ USD in projected spend.
- Developed production AI agents with IBM watsonx Orchestrate, AWS Bedrock, and LangChain, saving about 40K USD per use case.
- Built RBAC-secured React applications for 20K+ compliance and network reports, reducing operational overhead by 70%+.
- Tech: Python, TypeScript, React, Node.js, AWS, Docker, Kubernetes, PostgreSQL, Redis, Kafka

2) PoliTech Labs, Research Project Assistant, Jan 2025 - Dec 2025, Stony Brook, NY
- Migrated data architecture from PostgreSQL to MongoDB, improving query performance by 45% on 20K+ records.
- Improved UI discoverability with React and D3 interactive filtering, increasing user satisfaction by 30%.
- Automated CI/CD using GitHub Actions, Docker, and Kubernetes, reducing manual deployment effort by 75%.
- Tech: Python, Spring Boot, React, D3.js, MongoDB, PostgreSQL, Docker, Kubernetes

Projects:
1) Distributed Banking Application with Linear PBFT
- Stack: Go, gRPC, SQLite3, Distributed Systems
- Summary: Built a 7-node fault-tolerant banking platform using PBFT with under 80 ms latency and support for 500+ concurrent transactions.
- Bullets:
- Designed a Linear-PBFT protocol for secure validation at scale.
- Implemented full PBFT lifecycle including view-change and signed message validation.

2) Distributed Banking System (Multi-Paxos + 2PC)
- Stack: Go, gRPC, PostgreSQL, Distributed Systems
- Summary: Architected a 9-node distributed banking system with strong consistency and fault-tolerant failover.
- Bullets:
- Implemented cross-shard atomic transactions via 2PC over Paxos-replicated phases.
- Added WAL durability and sub-2 second recovery goals.
- Improved scalability by 35% using shard redistribution and benchmark-driven tuning.

3) Domain-Specific LLM Document Retrieval System
- Stack: Python, LangChain, OpenAI API, FAISS, Flask, Docker
- Summary: Built semantic QA across 100K+ documents with sub-1 second retrieval and improved factual accuracy through RAG.
- Bullets:
- Implemented embedding and retrieval pipeline with FAISS.
- Deployed scalable RAG service on Google Cloud Run.

Skills:
- Languages: Python, Go, Java, C++, JavaScript, TypeScript, SQL
- Frontend: React, Next.js, Angular, Vue, HTML, CSS, Redux
- Backend: Node.js, Spring Boot, Django, REST, GraphQL
- Databases: PostgreSQL, MySQL, MongoDB, DynamoDB, Redis
- Cloud and DevOps: AWS, Docker, Kubernetes, Jenkins, CI/CD
- AI and Data: LangChain, FAISS, TensorFlow, PyTorch, Pandas, NumPy, PySpark

Contact Message:
I am actively seeking software engineering opportunities focused on backend, cloud, distributed systems, and AI-enabled products. If you are hiring or would like to collaborate, feel free to reach out.

SEO:
- Title: Shreyas Reddy Gaddampally | Software Engineer Portfolio
- Description: Portfolio featuring distributed systems projects, cloud engineering experience, and AI-driven solutions.
- Keywords: software engineer, distributed systems, cloud automation, AWS, Go, Python, AI, portfolio
