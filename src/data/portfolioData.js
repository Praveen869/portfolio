export const personalInfo = {
  name: "Praveen Dwivedi",
  role: "Full Stack Developer | AI & Real-Time Systems (WebSockets)",
  tagline: "Building scalable, high-performance applications with AI and real-time technologies.",
  subheading: "Focused on transforming complex ideas into clean, efficient, and user-friendly digital solutions.",
  techStack: "I build modern web applications using Python, React, backend frameworks (Django, FastAPI, Flask), and databases like MongoDB and PostgreSQL.",
  about:
    "I am a Full Stack Developer focused on building scalable web applications, real-time systems, and AI-powered solutions. I enjoy solving complex problems through clean code and modern technologies, while continuously improving my skills.",
  highlights: [
    "Build high-performance real-time web applications",
    "Develop and integrate AI-powered solutions",
    "Work with REST APIs and backend architectures",
    "Write clean, maintainable, and scalable code"
  ],
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      school: "Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
      year: "2022 – 2026"
    },
  ],
  email: "praveenkrdwivedi.3249@gmail.com",
  github: "https://github.com/Praveen869",
  linkedin: "https://www.linkedin.com/in/praveen-dwivedi-5b6219269?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  twitter: "https://twitter.com/praveen_dwivedi",
};

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: "logos:react" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "HTML", icon: "logos:html-5" },
      { name: "CSS", icon: "logos:css-3" },
      { name: "Tailwind", icon: "logos:tailwindcss-icon" }
    ],
    emoji: "🌐"
  },
  {
    title: "Backend",
    skills: [
      { name: "Django", icon: "logos:django-icon" },
      { name: "FastAPI", icon: "logos:fastapi-icon" },
      { name: "Flask", icon: "logos:flask" },
      { name: "REST APIs", icon: "logos:postman-icon" },
      { name: "WebSockets", icon: "logos:websocket" }
    ],
    emoji: "⚙️"
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "SQLite", icon: "logos:sqlite" }
    ],
    emoji: "🗄️"
  },
  {
    title: "AI / ML",
    skills: [
      { name: "Scikit-Learn", icon: "simple-icons:scikitlearn" },
      { name: "Pandas", icon: "logos:pandas-icon" },
      { name: "NumPy", icon: "logos:numpy" },
      { name: "Python", icon: "logos:python" }
    ],
    emoji: "🧠"
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "logos:github-icon" },
      { name: "VS Code", icon: "logos:visual-studio-code" },
      { name: "Postman", icon: "logos:postman-icon" },
      { name: "Vercel", icon: "logos:vercel-icon" },
      { name: "GitLab", icon: "logos:gitlab" }
    ],
    emoji: "🛠️"
  }
];

export const projects = [
  {
    title: "ConvoMind AI",
    description:
      "An intelligent AI chatbot platform with customizable personas and dynamic conversation control using secure API integration.",
    tech: ["Python", "Django", "JavaScript", "HTML", "CSS", "OpenRouter API", "PostgreSQL", "Render"],
    github: "https://github.com/Praveen869/convoMind.git",
    live: "https://convomind.onrender.com/",
    image: "/Convo.png",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "A scalable real-time chat app with multi-room WebSocket architecture, live user tracking, and dark-mode UI.",
    tech: ["FastAPI", "React", "WebSocket", "Tailwind CSS", "Render", "Vercel", "GitLab CI/CD"],
    github: "https://github.com/Praveen869/Realtime_chat_app.git",
    live: "https://live-chat-app-rho.vercel.app/",
    image: "/Realtim.png",
  },
  {
    title: "Diabetes Prediction System",
    description:
      "A machine learning-based web app that predicts diabetes risk using optimized clinical data pipelines.",
    tech: ["Python", "Flask", "scikit-learn", "MongoDB", "HTML", "CSS", "JavaScript", "Gmail SMTP"],
    github: "https://github.com/Praveen869/type-2-diabetes-prediction-system.git",
    live: "",
    image: "/Diabetes.png",
  },
];