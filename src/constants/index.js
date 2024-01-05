import {
  makingSense,
  ourmark,
  doppler,
  freelance,
  travel,
  hairSalon,
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
    id: "proyects",
    title: "Proyects",
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
  education: ["Bachelor's Degree in Software Engineering"],
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
    technologies: [
      "HTML5",
      "CSS3",
      "Javascript",
      "PHP",
      "C#",
      "MVC3",
      "Jquery",
    ],
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
    technologies: [
      "AngularJs",
      "HTML5",
      "CSS3",
      "Javascript",
      "Jquery",
      "C#",
      "MVC4",
    ],
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
    technologies: [
      "ReactJS",
      "Typescript",
      "Redux",
      "AngularJS",
      "HTML5",
      "CSS3",
      "Javascript",
      "PHP",
      "C#",
    ],
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
      "Travel 6 months in Africa and Europe",
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
    technologies: [
      "ReactJS",
      "Typescript",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Javascript",
      "HTML5",
      "CSS3",
      "Vercel",
    ],
  },
];

const projects = [
  {
    name: "Hair Salon",
    description:
      "A dynamic web platform designed to streamline the management of salon appointments.",
    tags: [
      "React",
      "TypeScript",
      "NodeJS",
      "ExpressJS",
      "MongoDb",
      "Javascript",
      "HTML5",
      "CSS3",
      "Vercel",
      "MaterialUi"
    ],
    image: hairSalon,
    source_code_link: "https://github.com/fcoronel89/hair-salon",
  },
];

export { tabs_about, experiences, projects };
