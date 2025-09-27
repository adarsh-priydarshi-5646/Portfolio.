import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
} from "../assets";

import todo from "../assets/tech/todo.png"
import food from "../assets/tech/food.png"
import github from "../assets/tech/github.png"
import prisma from "../assets/tech/prisma.png"
import sql from "../assets/tech/sql.png"
import python from "../assets/tech/python-logo-removebg-preview.png"
import express from "../assets/tech/express.png"
import reactnative from "../assets/tech/reactnative.png"
import school from "../assets/tech/school.png";
import collage from "../assets/tech/collage.png"

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
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
    name:"Python",
    icon:python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name:"React Native",
    icon:reactnative,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name:"sql",
    icon:sql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name:"Prisma",
    icon:prisma,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },

];

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering (AI & ML)",
    college_name: "Newton School of Technology, ADYPU Pune",
    icon: collage,
    iconBg: "#E6DEDD",
    date: "2024 - 2028",
    points: [
      "Currently pursuing B.Tech in CSE with specialization in AI & ML.",
      "Focused on Data Structures, Algorithms, and Full-Stack Development.",
      "Actively building projects in React.js, Node.js, and AI/ML applications.",
      "Participated in workshops and hackathons to enhance practical knowledge.",
    ],
  },
  {
    degree: "Intermediate (Class 12th)",
    college_name: "Government Inter College, Raebareli, UP",
    icon: school,
    iconBg: "#E6DEDD",
    date: "2022 - 2024",
    points: [
      "Completed Class 11th & 12th with a focus on Science stream.",
      "Actively engaged in technology-related activities and learning.",
    ],
  },
  {
    degree: "High School (Class 10th)",
    college_name: "Government Inter College, Raebareli, UP",
    icon: school,
    iconBg: "#E6DEDD",
    date: "2021 - 2022",
    points: [
      "Completed Class 10th with a focus on Science stream.",
      "Actively engaged in technology-related activities and learning.",
    ],
  },
];



// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "MERN Stack Food Delivery Platform",
    description:
      `Developed a full-stack food delivery application using the MERN stack (MongoDB, Express.js, React.js, and Node.js`,
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
        name:"Express",
        color:"white-text-gradient"
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://github.com/adarsh-priydarshi-5646/Food-Delivery-Full-Stack-App",
  },
  {
    name: "Personal-Task-Manager (Full-Stack)",
    description:
      `Developed a full-stack web application for eﬃcient task organization and management.
       Implemented CRUD operations.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma ORM",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name:"tailwind",
        color:"white-text-gradient"
      },
    ],
    image: todo,
    source_code_link: "https://github.com/adarsh-priydarshi-5646/Personal-Task--Manager",
  },
  // {
  //   name: "Campus Hub",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "React Native",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Prisma ORM",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Express",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, education, testimonials, projects };
