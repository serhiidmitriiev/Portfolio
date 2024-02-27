import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  redux,
  material,
  tailwind,
  nodejs,
  mongodb,
  git,
  jest,
  // playwright,
  andersenLab,
  nerdySoft,
  nasa,
  portfolio,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Material UI",
    icon: material,
  },
  {
    name: "jest",
    icon: jest,
  },
  // {
  //   name: "playwright",
  //   icon: playwright,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "NerdySoft/Fintech",
    icon: nerdySoft,
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: [
      "Optimized the application from 8 sec to 3 sec (first content load)",
      "Solved caching issues",
      "Provided internationalization",
    ],
  },
  {
    title: "Web Developer",
    company_name: "AndersenLab/Internal Project",
    icon: andersenLab,
    iconBg: "#383E56",
    date: "June 2022 - July 2023",
    points: [
      "Designed and implemented a new micro frontend application from scratch ",
      "Proposed and implemented ideas to improve the search in the application",
      "Speeded up the slowest query 5 times",
    ],
  },
  {
    title: "Web Developer",
    company_name: "AndersenLab/eBanking",
    icon: andersenLab,
    iconBg: "#E6DEDD",
    date: "January 2021 - June 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Maintaining graphic standards and branding",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I've never seen such an enthusiastic and passionate developer as Serhii.",
    name: "Liza Mikhailava",
    designation: "TechLead",
    company: "AndersenLab",
    image: "src/assets/testimonials/liza.jpeg",
  },
  {
    testimonial:
      "Serhii proved to be a true professional in our company: he solved his tasks quickly and competently, and helped the other members of the team.",
    name: "Alexandr Khomich",
    designation: "CEO",
    company: "AndersenLab",
    image: "src/assets/testimonials/khomich.jpg",
  },
  {
    testimonial:
      "After Serhii optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Anton Kotov",
    designation: "TeamLead",
    company: "AndersenLab",
    image: "src/assets/testimonials/kotov.jpg",
  },
];

const projects = [
  {
    name: "Nasa Project",
    description:
      "Web-based platform that allows users to explore the exoplanets found by Kepler telescope. It allows to schedule new missions to launch exploration rockets.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: nasa,
    source_code_link: "https://github.com/serhiidmitriiev/NASA-Project",
  },
  {
    name: "Portfolio",
    description:
      "Landing page describing my working experience, testimonials, and technologies I've used as a developer.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/serhiidmitriiev/Portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
