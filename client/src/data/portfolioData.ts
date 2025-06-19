import { UserData } from "@/lib/types";

export const userData: UserData = {
  name: "Vraj Patel",
  title: "Software Engineer",
  introduction: "I'm a passionate software developer with expertise in building elegant, user-friendly web applications. With a strong foundation in both frontend and backend technologies, I create seamless digital experiences that solve real-world problems.",
  location: "San Francisco, CA",
  email: "hello@vrajpatel.com",
  phone: "(123) 456-7890",
  skills: [
    "JavaScript/TypeScript",
    "React.js & React Native",
    "Node.js & Express",
    "HTML5 & CSS3/SCSS",
    "MongoDB & SQL Databases",
    "AWS & Cloud Services"
  ],
  education: [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      years: "2018-2020"
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "MIT",
      years: "2014-2018"
    },
    {
      degree: "Full Stack Web Development Certification",
      institution: "FreeCodeCamp",
      years: "2017"
    }
  ],
  achievements: [
    "1st Place, National Hackathon 2022",
    "Google Developer Expert",
    "Published Research Paper on AI Integration",
    "Speaker at ReactConf 2021",
    "Open Source Contributor"
  ],
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Google",
      period: "2022 - Present",
      description: "Leading frontend development for key projects, mentoring junior developers, and implementing best practices for code quality and performance optimization."
    },
    {
      role: "Full Stack Developer",
      company: "Facebook",
      period: "2020 - 2022",
      description: "Developed and maintained critical features for the platform, collaborated with cross-functional teams, and contributed to architectural decisions."
    },
    {
      role: "Frontend Engineer",
      company: "Airbnb",
      period: "2018 - 2020",
      description: "Built responsive user interfaces, implemented complex interactive features, and optimized application performance for millions of users."
    },
    {
      role: "Web Developer Intern",
      company: "Microsoft",
      period: "2016 - 2018",
      description: "Assisted in building web applications, gained experience with enterprise-level development practices, and contributed to open source projects."
    }
  ],
  projects: [
    {
      title: "PyHYSYS API",
      description: "An innovative engineering framework designed to simplify and optimize complex process designs involving multistage unit operations.",
      technologies: ["Python", "Win32", "GitLab", "PyTesting", "MatPlotLib", "Plotly"],
      link: "/projects/pyhysys.html",
      iconPath: "M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-2h-2v2h-2v-2H9v-2h2v-2h2v2h2v2z"
    },
    {
      title: "AI Disaster Tweet Classification",
      description: "Advanced AI model designed to classify tweets effectively into disaster-related and non-disaster-related categories.",
      technologies: ["Python", "NLP", "BERT", "LSTM", "Optuna", "Wandb"],
      link: "/projects/ai_disaster_tweet.html",
      iconPath: "M18 2H6a2 2 0 00-2 2v16c0 1.1.9 2 2 2h12a2 2 0 002-2V4a2 2 0 00-2-2zm-2 10H8v2h8v-2zm0-4H8v2h8V8z"
    },
    {
      title: "Combinatorial Optimization HRU",
      description: "Advanced optimization techniques for complex engineering problems using combinatorial algorithms.",
      technologies: ["Python", "Optimization", "Algorithms", "Mathematical Modeling"],
      link: "/projects/combinatorial_optimization_HRU.html",
      iconPath: "M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm2 4h10v2H7V7zm0 4h5v2H7v-2z"
    },
    {
      title: "Computational Methods 1",
      description: "Implementation of advanced computational methods for solving complex mathematical problems.",
      technologies: ["Python", "Numerical Methods", "Scientific Computing"],
      link: "/projects/computational_methods_1.html",
      iconPath: "M16 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-7h2v5h-2zm0-2h2v2h-2z"
    },
    {
      title: "Computational Methods 2",
      description: "Advanced computational techniques and algorithms for engineering applications.",
      technologies: ["Python", "Algorithms", "Engineering", "Simulation"],
      link: "/projects/computational_methods_2.html",
      iconPath: "M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"
    },
    {
      title: "DQN Reinforcement Learning",
      description: "Deep Q-Network implementation for reinforcement learning applications and autonomous systems.",
      technologies: ["Python", "Deep Learning", "Reinforcement Learning", "PyTorch"],
      link: "/projects/dqn_rl.html",
      iconPath: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
    }
  ],
  social: {
    linkedin: "https://linkedin.com/in/vrajpatel",
    github: "https://github.com/thevp698",
    twitter: "https://twitter.com/vrajpatel",
    dribbble: "https://dribbble.com/vrajpatel"
  }
};
