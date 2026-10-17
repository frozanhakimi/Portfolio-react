export const skills = {
  "Programming Languages": [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 65 },
  ],
  Languages: [
    { name: "English", level: 80 },
    { name: "Dari", level: 100 },
    { name: "Pashto", level: 100 },
  ],
  "Computer Skills": [
    { name: "Microsoft Word", level: 90 },
    { name: "PowerPoint", level: 85 },
    { name: "Excel", level: 80 },
  ],
};

// 👇 Your GitHub profile
export const githubUser = "frozanhakimi";

export const projects = [
  {
    title: "SkyWings",
    description:
      "A modern flight booking web application built with React, featuring search, filtering, and a clean responsive UI.",
    tags: ["React", "JavaScript", "CSS"],
    icon: "✈️",
    repo: "https://github.com/frozanhakimi/SkyWings", 
    demo: "https://skywingsapp.netlify.app/",
    featured: true, // Adds the ⭐ Featured badge
  },
  {
    title: "Calculator",
    description:
      "A responsive calculator built with HTML, CSS and JavaScript featuring clean UI and keyboard support.",
    tags: ["HTML", "CSS", "JavaScript"],
    icon: "🧮",
    repo: "https://github.com/frozanhakimi/Calculator.git",
    demo: "",
  },
  {
    title: "Food Order",
    description:
      "A simple food ordering website with a clean menu layout, responsive design and smooth interactions.",
    tags: ["HTML", "CSS"],
    icon: "🍔",
    repo: "https://github.com/frozanhakimi/Food-Order.git",
    demo: "",
  },
  {
    title: "PathFinder",
    description:
      "An educational opportunities platform helping students discover scholarships, programs, and resources.",
    tags: ["HTML", "CSS", "JavaScript"],
    icon: "🎓",
    repo: "", // Add your PathFinder repository link here later
    demo: "",
  },
];

export const certificates = [
  {
    title: "Web Development Internship",
    issuer: "World Food Programme (WFP)",
    date: "2024", 
    image: "/images/certificates/certificate-1.jpeg", // Fixed to .jpeg
    description: "Completed a comprehensive web development internship program.",
  },
  {
    title: "Responsive Web Design",
    issuer: "Coursera",
    date: "2024", 
    image: "/images/certificates/certificate-2.jpeg", // Fixed to .jpeg
    description: "Learned to build responsive, mobile-first web layouts.",
  },
  {
    title: "Hackathon Project",
    issuer: "World Food Programme (WFP)",
    date: "2024", 
    image: "/images/certificates/certificate-3.jpeg", // Fixed to .jpeg
    description: "Collaborated in a team to build a tech solution during the WFP Hackathon.",
  },
];