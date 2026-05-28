export type Profile = {
  name: string
  handle: string
  githubUrl: string
  avatarUrl: string
  headline: string
  summary: string
}

export type SkillGroup = {
  title: string
  description: string
  skills: string[]
}

export type Project = {
  title: string
  repo: string
  category: string
  summary: string
  stack: string[]
  highlights: string[]
  tabs: ProjectTabId[]
}

export type ProjectTabId =
  | "all"
  | "ai-media"
  | "secure-tools"
  | "realtime"
  | "systems"

export type ProjectTab = {
  id: ProjectTabId
  label: string
}

export type ArchiveProject = {
  title: string
  repo: string
  summary: string
  tags: string[]
}

export type ArchiveGroup = {
  title: string
  description: string
  projects: ArchiveProject[]
}

export const profile: Profile = {
  name: "Robert Yu",
  handle: "MayoPickle",
  githubUrl: "https://github.com/MayoPickle",
  avatarUrl: "https://avatars.githubusercontent.com/u/29362008?v=4",
  headline:
    "I build AI-assisted systems, realtime products, secure personal tools, and media workflows.",
  summary:
    "My projects tend to start from everyday friction: documents that should organize themselves, livestream tooling that needs to react instantly, media that deserves better automation, and private data that should stay private.",
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Interface systems that stay fast, legible, and shippable.",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Astro",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Ant Design",
    ],
  },
  {
    title: "Backend",
    description: "APIs, services, and product backends with practical boundaries.",
    skills: [
      "FastAPI",
      "Flask",
      "Node.js",
      "Express",
      "SQLAlchemy",
      "REST APIs",
      "JWT",
      "Celery",
    ],
  },
  {
    title: "AI & Media",
    description: "Applied AI for documents, speech, video, and creator tooling.",
    skills: [
      "OpenAI",
      "OCR",
      "Whisper",
      "PyTorch",
      "Transformers",
      "FFmpeg",
      "PaddleOCR",
      "Emotion analysis",
    ],
  },
  {
    title: "Realtime",
    description: "Low-latency product loops for people in the same moment.",
    skills: [
      "WebRTC",
      "Socket.io",
      "WebSocket",
      "Live2D",
      "Livestream APIs",
      "Presence",
      "Room systems",
    ],
  },
  {
    title: "Data & Security",
    description: "Storage choices and privacy models that match the product.",
    skills: [
      "PostgreSQL",
      "SQLite",
      "Redis",
      "AES-GCM",
      "libsodium",
      "Local-first",
      "MinIO",
    ],
  },
  {
    title: "Tooling",
    description: "The glue that keeps prototypes operational after day one.",
    skills: [
      "Docker",
      "GitHub Actions",
      "GHCR",
      "Go",
      "Nginx",
      "CI/CD",
      "Load testing",
    ],
  },
]

export const projectTabs: ProjectTab[] = [
  { id: "all", label: "All" },
  { id: "ai-media", label: "AI & Media" },
  { id: "secure-tools", label: "Secure Tools" },
  { id: "realtime", label: "Realtime" },
  { id: "systems", label: "Systems" },
]

export const projects: Project[] = [
  {
    title: "Docura",
    repo: "https://github.com/MayoPickle/docura",
    category: "AI document management",
    summary:
      "A mobile-first personal document manager with authentication, structured document records, secure attachments, and AI-powered Smart Scan for classification and field extraction.",
    stack: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "OpenAI",
      "PaddleOCR",
    ],
    highlights: [
      "Smart Scan recognizes passports, visas, IDs, diplomas, and uncommon documents.",
      "Docker deployment, CI image publishing, and optional AES-GCM file encryption.",
    ],
    tabs: ["all", "ai-media", "secure-tools"],
  },
  {
    title: "Noir Photos",
    repo: "https://github.com/MayoPickle/noir-photos",
    category: "Encrypted photo library",
    summary:
      "A local-first, end-to-end encrypted photo library where the client encrypts photos, thumbnails, album names, metadata, and shared collection keys before sync.",
    stack: ["Flutter", "FastAPI", "PostgreSQL", "MinIO", "libsodium"],
    highlights: [
      "Password never leaves the client; keys are derived and wrapped client-side.",
      "Server stores encrypted blobs and opaque sync metadata only.",
    ],
    tabs: ["all", "secure-tools"],
  },
  {
    title: "TofuTranscribe",
    repo: "https://github.com/MayoPickle/tofu-transcribe",
    category: "AI media pipeline",
    summary:
      "An AI tool that transcribes video, scores emotional intensity across speech and text, visualizes trends, and extracts high-value clips.",
    stack: ["Python", "Whisper", "PyTorch", "Transformers", "FFmpeg"],
    highlights: [
      "Combines text and acoustic analysis for multi-dimensional emotion scoring.",
      "Supports manual processing and BililiveRecorder webhook automation.",
    ],
    tabs: ["all", "ai-media", "systems"],
  },
  {
    title: "PickPod",
    repo: "https://github.com/MayoPickle/PickPod",
    category: "Lightweight file drop",
    summary:
      "A small file drop service where people upload and retrieve files with a six-digit code, without forcing account creation.",
    stack: ["React", "Ant Design", "FastAPI"],
    highlights: [
      "Simple code-based handoff flow for temporary file sharing.",
      "Configurable upload expiration from one to thirty days.",
    ],
    tabs: ["all", "secure-tools"],
  },
  {
    title: "Tofu Mission Control",
    repo: "https://github.com/MayoPickle/tofu-mission-control",
    category: "Livestream automation",
    summary:
      "A Flask service for livestream interactions: gift tracking, danmaku command processing, automated responses, and AI chatbot integration.",
    stack: ["Flask", "PostgreSQL", "OpenAI", "Docker"],
    highlights: [
      "Processes gifts, room-specific commands, PK battle logic, and chatbot requests.",
      "Includes rate limiting, cooldowns, and configurable conversation memory.",
    ],
    tabs: ["all", "ai-media", "realtime", "systems"],
  },
  {
    title: "VUP Utopia",
    repo: "https://github.com/MayoPickle/tofu-vtubia",
    category: "VTuber interaction platform",
    summary:
      "A VTuber/VUP platform for music list management, fan interaction, livestream tools, and Live2D model presentation.",
    stack: ["React", "Flask", "Pixi.js", "Live2D", "WebSocket"],
    highlights: [
      "Combines playlists, raffles, message boards, analytics, and admin workflows.",
      "Explores Live2D rendering and viewer interaction for creator communities.",
    ],
    tabs: ["all", "ai-media", "realtime"],
  },
  {
    title: "Sweet Dream Tavern",
    repo: "https://github.com/MayoPickle/tofu-pokergame",
    category: "Realtime party games",
    summary:
      "A web-based social party game platform with private rooms, host controls, chat, and synchronized multiplayer state.",
    stack: ["Node.js", "Express", "Socket.io", "HTML", "CSS"],
    highlights: [
      "Implements room creation, invite codes, host permissions, and realtime chat.",
      "Ships the classic number-bomb game as the first playable room mode.",
    ],
    tabs: ["all", "realtime"],
  },
  {
    title: "Tofu Douhua",
    repo: "https://github.com/MayoPickle/tofu-douhua",
    category: "WebRTC voice chat",
    summary:
      "A Discord-like voice chat app with email authentication, channel management, realtime text chat, and WebRTC voice calls.",
    stack: ["React", "TypeScript", "WebRTC", "Socket.io", "SQLite"],
    highlights: [
      "Separates channel, message, socket, and WebRTC concerns in the client.",
      "Uses JWT, bcrypt, and SQLite for a lightweight full-stack prototype.",
    ],
    tabs: ["all", "realtime", "secure-tools"],
  },
  {
    title: "ChillSync",
    repo: "https://github.com/MayoPickle/tofu-chillsync",
    category: "Synchronized media rooms",
    summary:
      "A watch-together app for creating rooms, uploading videos, synchronizing playback, and chatting in realtime.",
    stack: ["React", "Vite", "Node.js", "Express", "Socket.io"],
    highlights: [
      "Synchronizes play, pause, and seek actions across viewers.",
      "Includes room links, user presence, chat, and responsive layout.",
    ],
    tabs: ["all", "realtime"],
  },
  {
    title: "Hive Run",
    repo: "https://github.com/MayoPickle/hive-run",
    category: "Performance tooling",
    summary:
      "A controlled HTTP load tester in Go for authorized performance testing with host allowlists, ramp-up, QPS caps, and safety stops.",
    stack: ["Go", "CLI", "CSV", "JSON"],
    highlights: [
      "Enforces allowlists before sending any traffic to a target.",
      "Generates summary reports and stops early on error or timeout thresholds.",
    ],
    tabs: ["all", "systems"],
  },
]

export const archiveGroups: ArchiveGroup[] = [
  {
    title: "Product Prototypes",
    description: "Smaller original builds and experiments beyond the featured set.",
    projects: [
      {
        title: "Noir Run",
        repo: "https://github.com/MayoPickle/noir-run",
        summary:
          "TypeScript experiment in the Noir line, kept as a compact product prototype.",
        tags: ["TypeScript", "Prototype"],
      },
      {
        title: "Flippy Duck",
        repo: "https://github.com/MayoPickle/flippy-duck",
        summary:
          "A small TypeScript browser-game prototype focused on fast interaction loops.",
        tags: ["TypeScript", "Game"],
      },
      {
        title: "Dime Diary",
        repo: "https://github.com/MayoPickle/dime-diary",
        summary:
          "A compact personal app experiment for logging small daily records.",
        tags: ["Product", "Personal tool"],
      },
      {
        title: "Tofu Tinyjoys",
        repo: "https://github.com/MayoPickle/tofu-tinyjoys",
        summary:
          "A TypeScript prototype for lightweight moments, notes, and tiny joys.",
        tags: ["TypeScript", "Personal app"],
      },
      {
        title: "Cute Rabbit App",
        repo: "https://github.com/MayoPickle/cute-rabbit-app",
        summary:
          "A playful JavaScript app prototype from the earlier experiment stack.",
        tags: ["JavaScript", "Prototype"],
      },
    ],
  },
  {
    title: "Creator & Bilibili Tools",
    description: "Utilities around livestreams, danmaku, Bilibili, and creator ops.",
    projects: [
      {
        title: "Tofu Danmuji Script",
        repo: "https://github.com/MayoPickle/tofu-danmuji-script",
        summary:
          "Python scripting around danmaku and livestream-control workflows.",
        tags: ["Python", "Livestream"],
      },
      {
        title: "Tofu Danmaku",
        repo: "https://github.com/MayoPickle/tofu-danmaku",
        summary:
          "Python danmaku interaction tooling for the broader Tofu creator suite.",
        tags: ["Python", "Danmaku"],
      },
      {
        title: "Tofu Vtubia Tianjiu",
        repo: "https://github.com/MayoPickle/tofu-vtubia-tianjiu",
        summary:
          "A JavaScript interaction extension connected to the VUP Utopia line.",
        tags: ["JavaScript", "Creator tools"],
      },
      {
        title: "Tofu Bili Spider",
        repo: "https://github.com/MayoPickle/tofu-bili-spider",
        summary:
          "Python data-collection utility for Bilibili-oriented workflows.",
        tags: ["Python", "Bilibili"],
      },
      {
        title: "Tofu Status Monitor",
        repo: "https://github.com/MayoPickle/tofu-status-monitor",
        summary:
          "Vue status-monitoring dashboard for small services and creator ops.",
        tags: ["Vue", "Monitoring"],
      },
    ],
  },
  {
    title: "Sites, Games & Identity",
    description: "Public-facing surfaces and game experiments that round out the portfolio.",
    projects: [
      {
        title: "Tech Blog",
        repo: "https://github.com/MayoPickle/tech-blog",
        summary:
          "Astro-powered technical blog for writing and publishing project notes.",
        tags: ["Astro", "Writing"],
      },
      {
        title: "Board Game",
        repo: "https://github.com/MayoPickle/board-game",
        summary:
          "TypeScript board-game experiment with a web-first implementation.",
        tags: ["TypeScript", "Game"],
      },
      {
        title: "MayoPickle",
        repo: "https://github.com/MayoPickle/MayoPickle",
        summary:
          "GitHub profile README repository for the MayoPickle account.",
        tags: ["Profile", "README"],
      },
    ],
  },
  {
    title: "Data & Learning",
    description: "Coursework, notebooks, and small learning repositories.",
    projects: [
      {
        title: "COMP590 Gompertz Function",
        repo: "https://github.com/MayoPickle/COMP590Gompertz_Function",
        summary:
          "Jupyter Notebook exploration around Gompertz function modeling.",
        tags: ["Jupyter", "Modeling"],
      },
      {
        title: "Popular Pet Prediction",
        repo: "https://github.com/MayoPickle/PopularPetPrediction",
        summary:
          "Notebook project for exploring prediction around pet popularity data.",
        tags: ["Jupyter", "Prediction"],
      },
      {
        title: "NumPy Matplotlib",
        repo: "https://github.com/MayoPickle/numpy_matplotlib",
        summary:
          "Python learning repository for NumPy and Matplotlib basics.",
        tags: ["Python", "Learning"],
      },
    ],
  },
  {
    title: "Forks & References",
    description: "Useful forks kept as references, experiments, or integration starting points.",
    projects: [
      {
        title: "Bilibili Get Received Gift Stream",
        repo: "https://github.com/MayoPickle/Bilibili_GetReceivedGiftStream",
        summary:
          "Forked Bilibili gift-statistics stream utility for livestream analysis.",
        tags: ["Fork", "Python"],
      },
      {
        title: "FileCodeBox",
        repo: "https://github.com/MayoPickle/FileCodeBox",
        summary:
          "Forked anonymous passcode file-sharing service reference.",
        tags: ["Fork", "File sharing"],
      },
      {
        title: "chatgpt-on-wechat",
        repo: "https://github.com/MayoPickle/chatgpt-on-wechat",
        summary:
          "Forked multi-platform chatbot framework reference.",
        tags: ["Fork", "Chatbot"],
      },
      {
        title: "fansMedalHelper",
        repo: "https://github.com/MayoPickle/fansMedalHelper",
        summary:
          "Forked Bilibili fans-medal automation helper.",
        tags: ["Fork", "Bilibili"],
      },
      {
        title: "MBTI",
        repo: "https://github.com/MayoPickle/MBTI",
        summary:
          "Forked MBTI questionnaire implementation.",
        tags: ["Fork", "Quiz"],
      },
      {
        title: "hw_weather_plugin",
        repo: "https://github.com/MayoPickle/hw_weather_plugin",
        summary:
          "Forked Go weather plugin reference.",
        tags: ["Fork", "Go"],
      },
      {
        title: "WeixinBot",
        repo: "https://github.com/MayoPickle/WeixinBot",
        summary:
          "Forked web WeChat API and bot reference.",
        tags: ["Fork", "Bot"],
      },
      {
        title: "Graduation",
        repo: "https://github.com/MayoPickle/graduation",
        summary:
          "Forked GitHub Graduation yearbook repository.",
        tags: ["Fork", "GitHub"],
      },
      {
        title: "FloatWindow",
        repo: "https://github.com/MayoPickle/FloatWindow",
        summary:
          "Forked Android floating-window implementation reference.",
        tags: ["Fork", "Android"],
      },
    ],
  },
]

export const archiveProjectCount = archiveGroups.reduce(
  (count, group) => count + group.projects.length,
  0
)

export const publicRepositoryCount = projects.length + archiveProjectCount
