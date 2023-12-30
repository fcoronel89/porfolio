import {
    carrent,
    jobit,
    tripguide,
    makingSense,
    ourmark,
    doppler,
    freelance,
    travel
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const tabs_about = {
    skills: [
      "React",
      "Javascript",
      "HTML5",
      "CSS3",
      "TypeScript",
      "ExpressJS",
      "NodeJS",
      "MongoDB",
    ],
    education: [
      "Bachelor's Degree in Software Engineering",
    ]
  };
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Doppler",
      icon: doppler,
      iconBg: "#dc4743",
      date: "March 2009 - March 2011",
      points: [
        "HTML for Emails and Templates",
        "Develop Landing pages for the events",
        "Websites for the events",
        "Work in the frontend team for the application", 
      ],
      technologies: ["HTML5", "CSS3", "Javascript", "PHP", "C#", "MVC3", "Jquery"],
    },
    {
      title: "Frontend Developer | Freelance",
      company_name: "OurMark",
      icon: ourmark,
      iconBg: "#fff",
      date: "Feb 2014 - Oct 2014",
      points: [
        "Working in the frontend application for the product, developing some features",
      ],
      technologies: ["HTML5", "CSS3", "Javascript", "Jquery", "Java"],
    },
    {
      title: "Frontend Developer",
      company_name: "Making Sense",
      icon: makingSense,
      iconBg: "#fff",
      date: "Mar 2011 - Nov 2014",
      points: [
        "Working in different projects and teams with clients outside of the company from the US",
        "Implementing the frontend application for the products using different technologies",
        "Implemented the Website for the company.",
      ],
      technologies: ["AngularJs", "HTML5", "CSS3", "Javascript", "Jquery", "C#", "MVC4"],
    },
    {
      title: "Frontend Developer",
      company_name: "Doppler",
      icon: doppler,
      iconBg: "#dc4743",
      date: "Nov 2014 - Jul 2021",
      points: [
        "Developing the website for the main product, blog, and events",
        "Working in the refactor of the reports section for the product using ReactJS and Redux",
      ],
      technologies: ["ReactJS", "Typescript", "Redux", "AngularJS", "HTML5", "CSS3", "Javascript", "PHP", "C#"],
    },
    {
      title: "Out of Work | Travel",
      company_name: "",
      icon: travel,
      iconBg: "#aaa6c3",
      date: "July 2021 - Aug 2023",
      points: [
        "Learning about investments and cryptocurrencies",
        "Travel 7 months in southeast Asia",
        "Travel 6 months in Africa and Europe"
      ],
      technologies: [],
    },
    {
      title: "FullStack Developer | Freelance",
      company_name: "Freelance",
      icon: freelance,
      iconBg: "#aaa6c3",
      date: "Sep 2023 - Nov 2023",
      points: [
        "Developing the web application for a HairSalon from scratch using ReactJS, ExpressJS and MongoDB",
        "Using Google authentication for the web application with passportJS and cookies",
      ],
      technologies: ["ReactJS", "Typescript", "NodeJS", "ExpressJS", "MongoDB", "Javascript", "HTML5", "CSS3", "Vercel"],
    },
  ];
  

  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { tabs_about, experiences, projects };