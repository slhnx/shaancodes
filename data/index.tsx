import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

export const featuredPosts = [
  {
    title: "How to learn React - The Effective way",
    slug: "how-to-learn-react-the-effective-way",
    publishDate: new Date("09/07/2021"),
    lastModified: new Date("09/07/2021"),
    author: "Shaan Alam",
    coverImage:
      "https://y4cpsre1ob.ufs.sh/f/4HrWTRZRvKfTFuFDO2KApCnXtIElVZrdxTUO09PvDJcyW7Kz",
    tags: ["react", "reactnative", "javascript", "webdev"],
    category: "Guides",
    featured: true,
    published: true,
    excerpt:
      "🚀 A simple roadmap to learn React — from HTML/CSS/JS basics to advanced React concepts, with projects, resources, and tips to avoid tutorial hell.",
    originalUrl:
      "https://dev.to/shaancodes/why-you-should-always-add-type-safety-to-your-environment-variables-24lk",
  },
  {
    title:
      "Introducing Zettel: A Markdown based note taking application for developers",
    slug: "introducing-zettel-a-markdown-based-note-taking-application-for-developers",
    publishDate: new Date("09/14/2023"),
    lastModified: new Date("09/14/2023"),
    author: "Shaan Alam",
    coverImage:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fovzuhgjr872cnslume6a.gif",
    tags: [],
    category: "Projects",
    featured: true,
    published: true,
    excerpt:
      "Learn about Zettel, a markdown-based note-taking application built with Next.js, featuring collections, dark mode, and syntax highlighting.",
    originalUrl: "https://zettel-eight.vercel.app/",
  },
];

export const projects = [
  {
    icon: "https://utfs.io/f/4HrWTRZRvKfTHyhFHKeQGdmTR6nIXC3iFxLJy7ul1zrEPpoq",
    title: "LogoCraft",
    description: "An AI Logo Gpenerator SaaS App built using Next.js",
    tags: [
      "Next.js",
      "TypeScript",
      "LemmeBuild",
      "Tailwind CSS",
      "PostgreSQL",
      "Lemon Squeezy",
    ],
    live_link: "https://logocraft-five.vercel.app/",
    github_repo_link: "https://github.com/shaan-alam/logocraft",
  },
  {
    icon: "https://utfs.io/f/4HrWTRZRvKfTfPUL7mdGfnVUXHCeo9axMlqK8R4sQgBtDrZE",
    title: "Nova Image",
    description: "An AI Image transformer app built using Next.js",
    tags: [
      "Next.js",
      "TypeScript",
      "Cloudinary AI",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    live_link: "https://artsy-chi.vercel.app/",
    github_repo_link: "https://github.com/shaan-alam/novaimage",
  },
  {
    icon: "https://utfs.io/f/4HrWTRZRvKfTazbC058zPu8AYVEHsKtWMT4C5U3N2GhjxrIF",
    title: "Zettel",
    description: "A Markdown based Note-Taking application.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Express"],
    live_link: "https://zettel-eight.vercel.app/",
    github_repo_link: "https://github.com/shaan-alam/zettel",
  },
];

export const skills = [
  {
    icon: "/images/react.svg",
    label: "React",
    id: "react",
  },
  {
    icon: "/images/nextjs.svg",
    label: "Next.js",
    id: "nextjs",
  },
  {
    icon: "/images/typescript.svg",
    label: "TypeScript",
    id: "typescript",
  },
  {
    icon: "/images/nodejs.svg",
    label: "Node.js",
    id: "nodejs",
  },
  {
    icon: "/images/postgres.svg",
    label: "Postgres",
    id: "postgres",
  },
  {
    icon: "/images/trpc.svg",
    label: "tRPC",
    id: "trpc",
  },
  {
    icon: "/images/tailwind.svg",
    label: "Tailwind CSS",
    id: "tailwind",
  },
  {
    icon: "/images/figma.svg",
    label: "Figma",
    id: "figma",
  },
];

export const socials = [
  {
    icon: IconBrandTwitter,
    link: "https://twitter.com/shaancodes_",
    label: "Twitter",
  },
  {
    icon: IconBrandGithub,
    link: "https://github.com/slhxn",
    label: "Github",
  },
  {
    icon: IconBrandLinkedin,
    link: "https://linkedin.com/in/shaan-alam",
    label: "Linkedin",
  },
  {
    icon: IconBrandInstagram,
    link: "https://instagram.com/shaancodes",
    label: "Instagram",
  },
];

export const lifeChangelog = [
  {
    year: "2002",
    events: [
      {
        date: "Oct, 2002",
        title: "Hello World 🌍",
        description: "I was born and began my journey.",
      },
    ],
  },
  {
    year: "2016",
    events: [
      {
        title: "First Line of Code 💻",
        description:
          "In 8th grade, I wrote my very first HTML page—marking the start of my web development journey.",
      },
    ],
  },
  {
    year: "2016 – 2018",
    events: [
      {
        title: "Early Struggles ⚡",
        description:
          "From 8th to 10th grade, I kept experimenting with web dev but often got stuck and struggled to make real progress.",
      },
    ],
  },
  {
    year: "2018",
    events: [
      {
        title: "Milestone Achieved 🎓",
        description: "Successfully completed my 10th grade.",
      },
    ],
  },
  {
    year: "2019",
    events: [
      {
        title: "React Enters the Chat ⚛️",
        description:
          "In 11th grade, I discovered React and started building small projects with it.",
      },
    ],
  },
  {
    year: "2020",
    events: [
      {
        title: "Breaking Free 🚀",
        description:
          "During COVID, I dedicated serious time to web dev, got out of tutorial hell, and started building real projects.",
      },
      {
        title: "Level Up 📖",
        description: "Successfully completed my 12th grade.",
      },
      {
        title: "A New Chapter 🎓",
        description:
          "Admitted to Shivaji College, University of Delhi to pursue graduation.",
      },
    ],
  },
  {
    year: "2023",
    events: [
      {
        title: "Graduated 🎉",
        description: "Successfully completed my graduation journey.",
      },
      {
        date: "Aug 2023 – Feb 2024",
        title: "First Professional Gig 💻",
        description:
          "Worked as a Full Stack Developer at Metaverse Ventures, building and shipping real-world projects.",
      },
    ],
  },
  {
    year: "2024",
    events: [
      {
        date: "Apr 2024 – Sept 2024",
        title: "Next Adventure ⚡",
        description:
          "Joined ITechMentor as a Full Stack Developer and honed my skills through impactful projects.",
      },
      {
        date: "Nov 2024 – Jun 2025",
        title: "Focused Grind 📚",
        description:
          "Dedicated myself to preparing for the NIMCET entrance exam.",
      },
    ],
  },
  {
    year: "2025",
    events: [
      {
        date: "Jun 2025 – Jul 2025",
        title: "Victory Unlocked 🏆",
        description:
          "Cracked NIMCET and secured admission to pursue MCA at NIT Raipur.",
      },
    ],
  },
  {
    year: "Future",
    events: [
      {
        title: "Dream SaaS Launch 🚀",
        description:
          "Building and launching my own SaaS product to solve real-world problems.",
      },
      {
        title: "Dream Role 🌟",
        description:
          "Joining a leading tech company as a Senior Engineer and contributing to impactful projects.",
      },
    ],
  },
];

export const experiences = {
  workExperiences: [
    {
      company: "ITechMentor",
      companyLogo:
        "https://y4cpsre1ob.ufs.sh/f/4HrWTRZRvKfT5y4A0zPISZGOWz0R1UaXk3pHcEJVumQsTqNn",
      location: "Navi Mumbai, Maharashtra",
      type: "Remote",
      role: "Full Stack Developer Intern",
      startDate: "April 2024",
      endDate: "Present",
      responsibilities: [
        "Developed a comprehensive ERP application tailored for small and medium-sized businesses, utilizing the MERN stack (MongoDB, Express, React, Node.js).",
        "Implemented Lead Management feature which tracks and manages potential customers, helping to capture information and move leads through the sales pipeline.",
        "Implemented HR Tasks feature which handles employee onboarding, attendance, leave management, and performance evaluations to streamline HR processes.",
        "Implemented Organization Management: Manages company structure, roles, and responsibilities to maintain organizational clarity.",
      ],
    },
    {
      company: "Metaverse Ventures",
      companyLogo:
        "https://y4cpsre1ob.ufs.sh/f/4HrWTRZRvKfTduykZkOQxiyuI6KZR7Wv8ESzp3Cc1grd2akX",
      location: "Hyderabad, Telangana",
      type: "Remote",
      role: "Full Stack Developer Intern",
      startDate: "October 2023",
      endDate: "February 2024",
      responsibilities: [
        "Worked on a SaaS product using Next.js, TypeScript, and Postgres, deployed on Vercel.",
        "Developed live collaborative document editing features using Tiptap and Liveblocks.",
        "Built a collaborative whiteboard with React-Konva and added real-time collaboration using Liveblocks.",
        "Implemented workspace sharing and invite options to facilitate team collaboration.",
        "Designed and managed the folder and file management system within the SaaS product for efficient content organization.",
      ],
    },
  ],
};
