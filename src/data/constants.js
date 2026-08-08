import { useHelper } from "../utils/useHelper";

const { getYearOfExperience } = useHelper();

export const Bio = {
  name: "Mohasin Attar",
  roles: ["React.js Developer", "Node.js Developer", "Full Stack Developer"],
  description:
    "Software Engineer with " +
    getYearOfExperience() +
    " years of experience building scalable full-stack applications using React.js, Node.js, TypeScript, and SQL. Experienced in developing multi-tenant enterprise platforms, AI-powered applications, REST APIs, and cloud-native solutions, with a strong foundation in Agile development, authentication, microservices, and DevOps practices.",
  github: "https://github.com/msdian0007",
  resume:
    "https://drive.google.com/file/d/1r4RcKk2azI7RqRu11tBFb7kgY1MWIgVN/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/mohasin-attar-7b6471121",
  twitter: "/",
  insta: "/",
  facebook: "/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React.js",
        image: "images/skills/react.jpg",
      },
      {
        name: "Redux Toolkit",
        image: "images/skills/redux.svg",
      },
      {
        name: "Next.js",
        image: "images/skills/nextjs.jpg",
      },
      {
        name: "HTML5",
        image: "images/skills/html5.png",
      },
      {
        name: "CSS",
        image: "images/skills/css.png",
      },
      {
        name: "Tailwind CSS",
        image: "images/skills/tailwind.jpeg",
      },
      {
        name: "Material UI",
        image: "images/skills/material-ui.jpg",
      },
      {
        name: "JavaScript",
        image: "images/skills/javascript.jpg",
      },
      {
        name: "TypeScript",
        image: "images/skills/typescript.jpg",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        image: "images/skills/node-js.svg",
      },
      {
        name: "Express.js",
        image: "images/skills/express.png",
      },
      {
        name: "MongoDB",
        image: "images/skills/mongodb.svg",
      },
      {
        name: "MySQL",
        image: "images/skills/mysql.svg",
      },
      {
        name: "JWT",
        image: "images/skills/jwt.png",
      },
      {
        name: "Socket.io",
        image: "images/skills/socket-io.png",
      },
      {
        name: "Java",
        image: "images/skills/java.png",
      },
      {
        name: "Firebase",
        image: "images/skills/firebase.svg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image: "images/skills/git.png",
      },
      {
        name: "GitHub",
        image: "images/skills/github.png",
      },
      {
        name: "Postman",
        image: "images/skills/postman.png",
      },
      {
        name: "Jira",
        image: "images/skills/jira.jpg",
      },
      {
        name: "Atlassian",
        image: "images/skills/atlassian.png",
      },
      {
        name: "VS Code",
        image: "images/skills/vs-code.jpg",
      },
      {
        name: "Eclipse",
        image: "images/skills/eclipse.png",
      },
      {
        name: "Render",
        image: "images/skills/render.png",
      },
    ],
  },
];

export const experiences = [
  {
    id: 6,
    img: "images/experience/octopus.jpg",
    role: "MERN Stack Developer",
    company: "Octopus Technologies",
    date: "Oct 2024 - Present",
    desc: "Developing a multi-tenant, configuration-driven UI rendering platform powering Customer Data Platform (CDP) and AI Experiment Studio, enabling dynamic UI generation without hardcoded components.\n\n• Building scalable frontend applications using React 18, Vite, Redux Toolkit, PrimeReact, Bootstrap, React Router v6, and ECharts, delivering configurable and reusable user interfaces.\n• Developing secure REST APIs using Node.js, Express.js, Prisma ORM, and PostgreSQL, supporting scalable backend services and multi-tenant architecture.\n• Integrating OpenAI, Google Gemini, and Anthropic Claude into enterprise AI workflows, while implementing secure authentication using Keycloak, OAuth 2.0, JWT/JWKS, and SSO.\n• Improving application performance and observability using Redis, ClickHouse, and OpenTelemetry for caching, analytics, distributed tracing, and centralized logging.\n• Containerized applications using Docker and contributed to CI/CD pipelines for scalable enterprise deployments.",
    doc: "",
    skills: [
      "React 18",
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
      "OpenAI",
      "Google Gemini",
      "Anthropic Claude",
      "Keycloak",
      "OAuth 2.0",
      "JWT",
      "JWKS",
      "SSO",
      "Redis",
      "ClickHouse",
      "OpenTelemetry",
      "Docker",
      "CI/CD",
    ],
  },
  {
    id: 5,
    img: "images/experience/techo2.jpg",
    role: "Software Engineer",
    company: "TechO2 India Pvt Ltd",
    date: "Jan 2024 - Present",
    desc: "Experienced in developing and maintaining a comprehensive educational platform for medical students using the MERN stack. Proficient in creating and enhancing features like quizzes, courses, LMS, surveys, and e-syllabus. Designed and developed personalized course/school courses UI, performed extensive backend work. Skilled in implementing interactive functionalities such as strikethrough, highlights, and note-taking during quizzes. Consistently updated features to meet client requirements.",
    doc: "",
    skills: [
      "React.js",
      "Redux",
      "Node.js",
      "MySQL",
      "Express.js",
      "JWT",
      "HTML5",
      "Bootstrap",
      "Ant Design",
      "Socket.io",
      "Sass",
    ],
  },
  {
    id: 4,
    img: "images/experience/globalion.jpg",
    role: "Programmer Analyst",
    company: "Globalion Technology Solutions LLP",
    date: "Feb 2022 - Present",
    desc: "Our dedicated team designed an ecommerce web app using a robust tech stack, including React.js, Next.js, Express, Node.js, and MongoDB. Following agile methodology and utilizing Jira boards, we ensured efficient project management, enabling rapid development and adaptability. Our solution empowers businesses with seamless online shopping experiences, intuitive navigation, and secure transactions, all backed by a scalable and efficient backend infrastructure.The use of Next.js allowed for lightning-fast page loading and optimal SEO performance, ensuring maximum visibility and engagement. With MongoDB, we achieved data flexibility and scalability, accommodating future growth seamlessly.In the backend, we leveraged the power of Node.js and Express to create a robust and highly efficient server environment. Node.js, known for its event-driven, non-blocking I/O model, enabled us to handle concurrent connections and perform tasks with minimal latency. This allowed for quick response times, essential for an ecommerce platform.The backend stack, comprising Node.js, Express.js, and MongoDB, forms a powerful foundation for our ecommerce web app, offering scalability, speed, and flexibility to support business's growth and adapt to evolving demands",
    doc: "",
    skills: [
      "React.js",
      "Next.js",
      "Redux",
      "Node.js",
      "Express.js",
      "JWT",
      "MongoDB",
      "HTML5",
      "TailwindCSS",
      "Sass",
    ],
  },
  {
    id: 3,
    img: "images/experience/globalion.jpg",
    role: "Programmer Analyst Trainee",
    company: "Globalion Technology Solutions LLP",
    date: "Nov 2022 - Feb 2023",
    desc: "I worked as a Programmer Analyst Trainee at Globalion Technology Solutions from November 2021 to February 2022. During my tenure at this startup company, I contributed to an in-house project that encompassed various functionalities, including leave management, salary slip generation, and invoice and quotation management. For the project, I utilized frontend technologies such as React.js, Redux, CSS, TailwindCSS, and Bootstrap, while the backend was powered by Node.js, PHP, and databases like MongoDB and MySQL.",
    doc: "",
    skills: [
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "PHP",
      "MongoDB",
      "MySQL",
      "HTML",
      "TailwindCSS",
    ],
  },
  {
    id: 2,
    img: "images/experience/zoganu.jpg",
    role: "Frontend Developer (intern)",
    company: "Zognu Technologies",
    date: "Feb 2022 - Oct 2022",
    desc: "As a Front-End Developer specializing in React.js, I played a significant role in the development and enhancement of a dynamic e-commerce web application. Collaborated with the design team to translate UI/UX mockups into responsive and interactive web pages, maintaining consistency across the application.Implemented state management solutions, utilizing tools such as Redux, to efficiently manage the application's state and ensure a smooth flow of data throughout the user interface.Ensured a seamless experience across various devices by implementing responsive design principles, making the e-commerce platform accessible to users on desktops, tablets, and mobile devices. Collaborated with the back-end development team to integrate front-end components with server-side logic, ensuring real-time data synchronization and a cohesive end-to-end solution.",
    skills: [
      "HTML5",
      "CSS",
      "Bootstrap",
      "TailwindCSS",
      "Javascript",
      "React.js",
      "Node.js",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: "images/education/mmit.jpg",
    school: "Marathwada Mitramandal's Institute of Technology, Lohegaon",
    date: "Sep 2016 - May 2019",
    grade: "7.83 CGPA",
    desc: "I have successfully completed my Bachelor's in Mechanical Engineering with a commendable CGPA of 7.83. During my course, I delved into various core subjects such as thermodynamics, fluid mechanics, materials science, and mechanical design, gaining a comprehensive understanding of the field. In addition to my Mechanical Engineering studies, I dedicated time to learning programming languages, specifically C and C++, which has further enriched my skill set and versatility in problem-solving and software development.",
    degree: "Bachelor of Engineering - BE, Mechanical Engineering",
  },
  {
    id: 1,
    img: "images/education/svsmd.png",
    school: "S.V.S.M.D's Polytechnic, Akkalkot",
    date: "July 2013 - Apr 2016",
    grade: "81.47%",
    desc: "I successfully earned my Mechanical Engineering diploma with an impressive 81.47% GPA. Throughout my coursework, I engaged with core subjects and gaining a profound grasp of fundamental mechanical engineering concepts.",
    degree: "Diploma, Mechanical Engineering",
  },
  {
    id: 2,
    img: "images/education/kkp.jpg",
    school: "Kashiraya Kaka Patil Prashala, Akkalkot",
    date: "June 2012 - March 2013",
    grade: "74.80%",
    desc: "I completed my SSC education at KKP Prashala, Akkalkot.",
    degree: "SSC",
  },
];

export const projects = [
  {
    id: 7,
    title: "RS Motors",
    date: "Sep 2024",
    description:
      "This is a personal project built with Next.js and TypeScript for selling second-hand vehicles. It features a user interface with a vehicle gallery, a feed section with pagination, and an 'Interested' button that notifies the admin via email. The admin panel allows for adding new vehicles and managing inventory by marking vehicles as sold or unsold.",
    image: "images/projects/rs-motors.png",
    tags: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "AWS S3",
      "NodeMailer",
      "Axios",
      "TailwindCSS",
      "CSS",
      "Vercel",
    ],
    category: "web app",
    github: "https://github.com/msdian0007/rs_motors",
    webapp: "https://rs-motors.vercel.app/",
  },
  {
    id: 6,
    title: "Simon Game",
    date: "Aug 2024",
    description:
      "Simon is a memory and pattern-recognition game that consists of four colored buttons. The game generates a sequence of button presses, and the player must replicate the sequence by pressing the buttons in the same order. As the game progresses, the sequences become longer and more complex, testing the player's memory and concentration. The goal is to see how many rounds of the sequence the player can successfully complete.",
    image: "images/projects/simon-game.png",
    tags: [
      "React.js",
      "HTML",
      "CSS",
      "TailwindCSS",
      "react-context",
      "gh-pages",
    ],
    category: "web app",
    github: "https://github.com/msdian0007/simon-react",
    webapp: "https://msdian0007.github.io/simon-react/",
  },
  {
    id: 5,
    title: "Dahboard",
    date: "Aug 2024",
    description:
      "This is a dashboard application that provides insightful data visualizations and user-friendly interfaces for managing various tasks.",
    image: "images/projects/dashboard.png",
    tags: [
      "React.js",
      "react-chartjs-2",
      "Ant Design",
      "HTML",
      "CSS",
      "TailwindCSS",
    ],
    category: "web app",
    github: "https://github.com/msdian0007/Dashboard_UI/",
    webapp: "https://msdian0007.github.io/Dashboard_UI/",
  },
  {
    id: 4,
    title: "Chat App",
    date: "July 2024",
    description:
      "Created a chat app with features including real-time messaging, friend search by phone number, friend requests with accept/reject options, real-time notifications, and unread message alerts.",
    image: "images/projects/chat-app.png",
    tags: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Socket.io",
      "Ant Design",
      "Axios",
      "HTML",
      "CSS",
      "TailwindCSS",
    ],
    category: "web app",
    github: "https://github.com/msdian0007/chatApp/",
    webapp: "https://msdian0007.github.io/chatApp/",
  },
  {
    id: 3,
    title: "Barnd Factory",
    date: "Oct 2023",
    description:
      "Meet Brand Factory – the React.js-powered ecommerce app that offers a responsive shopping experience. Combining user-friendly design with efficient state management.",
    image: "images/projects/brand-factory.png",
    tags: ["React.js", "Reduxjs/Tookit", "HTML", "CSS", "fakestoreapi"],
    category: "web app",
    github: "https://github.com/msdian0007/ecom-redux/",
    webapp: "https://msdian0007.github.io/ecom-redux/",
  },
  {
    id: 2,
    title: "Doc.js",
    date: "Jan 2023",
    description:
      "Made with React.js and Redux Toolkit, this app easily creates invoices and quotes, making business paperless.",
    image: "images/projects/doc-js.png",
    tags: [
      "React.js",
      "Redux/Toolkit",
      "HTML",
      "CSS",
      "TailwindCSS",
      "Material UI",
    ],
    category: "web app",
    github: "https://github.com/msdian0007/doc.js",
    webapp: "https://msdian0007.github.io/doc.js/",
  },
  {
    id: 1,
    title: "Keeper",
    date: "Jan 2022",
    description:
      "Meet Keeper – the React.js-powered to-do app that simplifies your task management.",
    image: "images/projects/keeper.png",
    tags: [
      "React.js",
      "Reduxjs/Tookit",
      "HTML",
      "CSS",
      "uuid",
      "font-awesome",
      "Context",
    ],
    category: "web app",
    github: "https://github.com/msdian0007/keeper/",
    webapp: "https://msdian0007.github.io/keeper/",
  },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
