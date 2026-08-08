import{a as f,j as t,r as m}from"./react-8bb107de.js";import{c as A}from"./react-dom-4e24a3e8.js";import{s as i,X as E,L as O}from"./styled-components-ebb5d373.js";import{L as y,B}from"./react-router-dom-1657c51e.js";import{F as H,a as N,B as P,M as G,A as w}from"./react-icons-817d4e7e.js";import{T as U}from"./typewriter-effect-bcfdd3b9.js";import{e as J}from"./@emailjs-a704afdc.js";import{S as W,d as q,a as Y,b as K,c as Q,T as S,e as z,f as _,g as M,h as T,i as D,M as V,C as X,G as Z,L as ee}from"./@mui-aa9bc42b.js";import"./@babel-6769ef73.js";import"./scheduler-765c72db.js";import"./react-is-e8e5dbb3.js";import"./@emotion-87a34207.js";import"./hoist-non-react-statics-969199a5.js";import"./react-router-a959c66a.js";import"./@remix-run-ac65ad3c.js";import"./clsx-1229b3e0.js";import"./react-transition-group-e23114ce.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const h of s.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();const te={bg:"#2C3333",bgLight:"#1C1E27",primary:"#2192FF",text_primary:"#F2F3F4",text_secondary:"#b1b2b3",card:"#171721",card_light:"#191924",button:"#854CE6",white:"#FFFFFF",black:"#000000",border:"#FFED00"},ie={bg:"#FFFFFF",bgLight:"#f0f0f0",primary:"#0E8388",text_primary:"#111111",text_secondary:"#48494a",card:"#FFFFFF",button:"#5c5b5b",white:"#FFFFFF"},ne=i.div`
    background-color: ${({theme:e})=>e.card_light};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
        transition: 0.8s all ease;
    }
`,ae=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`,oe=i(y)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`,re=i.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`,se=i.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`,p=i.a`
    color: ${({theme:e})=>e.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${({theme:e})=>e.primary};
    }

    &.active {
      border-bottom: 2px solid ${({theme:e})=>e.primary};
    }
`,de=i.a`
    color: ${({theme:e})=>e.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    // :hover {
    //   color: ${({theme:e})=>e.primary};
    // }

    &.active {
      border-bottom: 2px solid ${({theme:e})=>e.primary};
    }
`,j=i.a`
  border: 1.8px solid ${({theme:e})=>e.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({theme:e})=>e.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({theme:e})=>e.primary};
      color: ${({theme:e})=>e.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`,pe=i.a`
  border: 1.8px solid ${({theme:e})=>e.text_primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({theme:e})=>e.text_primary};
  background: ${({theme:e})=>e.white}
  cursor: pointer;
  padding: 3px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      // background: ${({theme:e})=>e.primary};
      // color: ${({theme:e})=>e.primary};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`,b=i.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`,le=i.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({theme:e})=>e.text_primary};
  }
`,ce=i.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({theme:e})=>e.card_light+99};
    transition: all 0.6s ease-in-out;
    transform: ${({isOpen:e})=>e?"translateY(0)":"translateY(-100%)"};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({isOpen:e})=>e?"100%":"0"};
    z-index: ${({isOpen:e})=>e?"1000":"-1000"};

`;i.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`;i(y)`
  color: ${({theme:e})=>e.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({theme:e})=>e.primary};
  }

  &.active {
    border-bottom: 2px solid ${({theme:e})=>e.primary};
  }
`;i.a`
  border: 1.8px solid ${({theme:e})=>e.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({theme:e})=>e.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({theme:e})=>e.primary};
    color: ${({theme:e})=>e.white};
  }
`;const l=i.a`
  color: ${({theme:e})=>e.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({theme:e})=>e.primary};
  }

  &.active {
    border-bottom: 2px solid ${({theme:e})=>e.primary};
  }
`;i(y)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;const F=()=>({getYearOfExperience:(e="2022-11-01")=>{let o=new Date(e),n=new Date,r=n.getFullYear()-o.getFullYear(),a=n.getMonth()+1-(o.getMonth()+1);return a<0&&(r--,a=12+a),r+"."+a+" years"}}),{getYearOfExperience:xe}=F(),d={name:"Mohasin Attar",roles:["React.js Developer","Node.js Developer","Full Stack Developer"],description:"Software Engineer with "+xe()+" years of experience building scalable full-stack applications using React.js, Node.js, TypeScript, and SQL. Experienced in developing multi-tenant enterprise platforms, AI-powered applications, REST APIs, and cloud-native solutions, with a strong foundation in Agile development, authentication, microservices, and DevOps practices.",github:"https://github.com/msdian0007",resume:"https://drive.google.com/file/d/1r4RcKk2azI7RqRu11tBFb7kgY1MWIgVN/view?usp=sharing",linkedin:"https://www.linkedin.com/in/mohasin-attar-7b6471121",twitter:"/",insta:"/",facebook:"/"},me=[{title:"Frontend",skills:[{name:"React.js",image:"/images/skills/react.jpg"},{name:"Redux Toolkit",image:"/images/skills/redux.svg"},{name:"Next.js",image:"/images/skills/nextjs.jpg"},{name:"HTML5",image:"/images/skills/html5.png"},{name:"CSS",image:"/images/skills/css.png"},{name:"Tailwind CSS",image:"/images/skills/tailwind.jpeg"},{name:"Material UI",image:"/images/skills/material-ui.jpg"},{name:"JavaScript",image:"/images/skills/javascript.jpg"},{name:"TypeScript",image:"/images/skills/typescript.jpg"}]},{title:"Backend",skills:[{name:"Node.js",image:"/images/skills/node-js.svg"},{name:"Express.js",image:"/images/skills/express.png"},{name:"MongoDB",image:"/images/skills/mongodb.svg"},{name:"MySQL",image:"/images/skills/mysql.svg"},{name:"JWT",image:"/images/skills/jwt.png"},{name:"Socket.io",image:"/images/skills/socket-io.png"},{name:"Java",image:"/images/skills/java.png"},{name:"Firebase",image:"/images/skills/firebase.svg"}]},{title:"Others",skills:[{name:"Git",image:"/images/skills/git.png"},{name:"GitHub",image:"/images/skills/github.png"},{name:"Postman",image:"/images/skills/postman.png"},{name:"Jira",image:"/images/skills/jira.jpg"},{name:"Atlassian",image:"/images/skills/atlassian.png"},{name:"VS Code",image:"/images/skills/vs-code.jpg"},{name:"Eclipse",image:"/images/skills/eclipse.png"},{name:"Render",image:"/images/skills/render.png"}]}],u=[{id:6,img:"images/experience/octopus.jpg",role:"MERN Stack Developer",company:"Octopus Technologies",date:"Oct 2024 - Present",desc:`Developing a multi-tenant, configuration-driven UI rendering platform powering Customer Data Platform (CDP) and AI Experiment Studio, enabling dynamic UI generation without hardcoded components.

• Building scalable frontend applications using React 18, Vite, Redux Toolkit, PrimeReact, Bootstrap, React Router v6, and ECharts, delivering configurable and reusable user interfaces.
• Developing secure REST APIs using Node.js, Express.js, Prisma ORM, and PostgreSQL, supporting scalable backend services and multi-tenant architecture.
• Integrating OpenAI, Google Gemini, and Anthropic Claude into enterprise AI workflows, while implementing secure authentication using Keycloak, OAuth 2.0, JWT/JWKS, and SSO.
• Improving application performance and observability using Redis, ClickHouse, and OpenTelemetry for caching, analytics, distributed tracing, and centralized logging.
• Containerized applications using Docker and contributed to CI/CD pipelines for scalable enterprise deployments.`,doc:"",skills:["React 18","Node.js","Express.js","Prisma ORM","PostgreSQL","OpenAI","Google Gemini","Anthropic Claude","Keycloak","OAuth 2.0","JWT","JWKS","SSO","Redis","ClickHouse","OpenTelemetry","Docker","CI/CD"]},{id:5,img:"images/experience/techo2.jpg",role:"Software Engineer",company:"TechO2 India Pvt Ltd",date:"Jan 2024 - Present",desc:"Experienced in developing and maintaining a comprehensive educational platform for medical students using the MERN stack. Proficient in creating and enhancing features like quizzes, courses, LMS, surveys, and e-syllabus. Designed and developed personalized course/school courses UI, performed extensive backend work. Skilled in implementing interactive functionalities such as strikethrough, highlights, and note-taking during quizzes. Consistently updated features to meet client requirements.",doc:"",skills:["React.js","Redux","Node.js","MySQL","Express.js","JWT","HTML5","Bootstrap","Ant Design","Socket.io","Sass"]},{id:4,img:"images/experience/globalion.jpg",role:"Programmer Analyst",company:"Globalion Technology Solutions LLP",date:"Feb 2022 - Present",desc:"Our dedicated team designed an ecommerce web app using a robust tech stack, including React.js, Next.js, Express, Node.js, and MongoDB. Following agile methodology and utilizing Jira boards, we ensured efficient project management, enabling rapid development and adaptability. Our solution empowers businesses with seamless online shopping experiences, intuitive navigation, and secure transactions, all backed by a scalable and efficient backend infrastructure.The use of Next.js allowed for lightning-fast page loading and optimal SEO performance, ensuring maximum visibility and engagement. With MongoDB, we achieved data flexibility and scalability, accommodating future growth seamlessly.In the backend, we leveraged the power of Node.js and Express to create a robust and highly efficient server environment. Node.js, known for its event-driven, non-blocking I/O model, enabled us to handle concurrent connections and perform tasks with minimal latency. This allowed for quick response times, essential for an ecommerce platform.The backend stack, comprising Node.js, Express.js, and MongoDB, forms a powerful foundation for our ecommerce web app, offering scalability, speed, and flexibility to support business's growth and adapt to evolving demands",doc:"",skills:["React.js","Next.js","Redux","Node.js","Express.js","JWT","MongoDB","HTML5","TailwindCSS","Sass"]},{id:3,img:"images/experience/globalion.jpg",role:"Programmer Analyst Trainee",company:"Globalion Technology Solutions LLP",date:"Nov 2022 - Feb 2023",desc:"I worked as a Programmer Analyst Trainee at Globalion Technology Solutions from November 2021 to February 2022. During my tenure at this startup company, I contributed to an in-house project that encompassed various functionalities, including leave management, salary slip generation, and invoice and quotation management. For the project, I utilized frontend technologies such as React.js, Redux, CSS, TailwindCSS, and Bootstrap, while the backend was powered by Node.js, PHP, and databases like MongoDB and MySQL.",doc:"",skills:["React.js","Redux","Node.js","Express.js","PHP","MongoDB","MySQL","HTML","TailwindCSS"]},{id:2,img:"images/experience/zoganu.jpg",role:"Frontend Developer (intern)",company:"Zognu Technologies",date:"Feb 2022 - Oct 2022",desc:"As a Front-End Developer specializing in React.js, I played a significant role in the development and enhancement of a dynamic e-commerce web application. Collaborated with the design team to translate UI/UX mockups into responsive and interactive web pages, maintaining consistency across the application.Implemented state management solutions, utilizing tools such as Redux, to efficiently manage the application's state and ensure a smooth flow of data throughout the user interface.Ensured a seamless experience across various devices by implementing responsive design principles, making the e-commerce platform accessible to users on desktops, tablets, and mobile devices. Collaborated with the back-end development team to integrate front-end components with server-side logic, ensuring real-time data synchronization and a cohesive end-to-end solution.",skills:["HTML5","CSS","Bootstrap","TailwindCSS","Javascript","React.js","Node.js"]}],he=[{id:0,img:"images/education/mmit.jpg",school:"Marathwada Mitramandal's Institute of Technology, Lohegaon",date:"Sep 2016 - May 2019",grade:"7.83 CGPA",desc:"I have successfully completed my Bachelor's in Mechanical Engineering with a commendable CGPA of 7.83. During my course, I delved into various core subjects such as thermodynamics, fluid mechanics, materials science, and mechanical design, gaining a comprehensive understanding of the field. In addition to my Mechanical Engineering studies, I dedicated time to learning programming languages, specifically C and C++, which has further enriched my skill set and versatility in problem-solving and software development.",degree:"Bachelor of Engineering - BE, Mechanical Engineering"},{id:1,img:"images/education/svsmd.png",school:"S.V.S.M.D's Polytechnic, Akkalkot",date:"July 2013 - Apr 2016",grade:"81.47%",desc:"I successfully earned my Mechanical Engineering diploma with an impressive 81.47% GPA. Throughout my coursework, I engaged with core subjects and gaining a profound grasp of fundamental mechanical engineering concepts.",degree:"Diploma, Mechanical Engineering"},{id:2,img:"images/education/kkp.jpg",school:"Kashiraya Kaka Patil Prashala, Akkalkot",date:"June 2012 - March 2013",grade:"74.80%",desc:"I completed my SSC education at KKP Prashala, Akkalkot.",degree:"SSC"}],v=[{id:7,title:"RS Motors",date:"Sep 2024",description:"This is a personal project built with Next.js and TypeScript for selling second-hand vehicles. It features a user interface with a vehicle gallery, a feed section with pagination, and an 'Interested' button that notifies the admin via email. The admin panel allows for adding new vehicles and managing inventory by marking vehicles as sold or unsold.",image:"images/projects/rs-motors.png",tags:["Next.js","TypeScript","MongoDB","AWS S3","NodeMailer","Axios","TailwindCSS","CSS","Vercel"],category:"web app",github:"https://github.com/msdian0007/rs_motors",webapp:"https://rs-motors.vercel.app/"},{id:6,title:"Simon Game",date:"Aug 2024",description:"Simon is a memory and pattern-recognition game that consists of four colored buttons. The game generates a sequence of button presses, and the player must replicate the sequence by pressing the buttons in the same order. As the game progresses, the sequences become longer and more complex, testing the player's memory and concentration. The goal is to see how many rounds of the sequence the player can successfully complete.",image:"images/projects/simon-game.png",tags:["React.js","HTML","CSS","TailwindCSS","react-context","gh-pages"],category:"web app",github:"https://github.com/msdian0007/simon-react",webapp:"https://msdian0007.github.io/simon-react/"},{id:5,title:"Dahboard",date:"Aug 2024",description:"This is a dashboard application that provides insightful data visualizations and user-friendly interfaces for managing various tasks.",image:"images/projects/dashboard.png",tags:["React.js","react-chartjs-2","Ant Design","HTML","CSS","TailwindCSS"],category:"web app",github:"https://github.com/msdian0007/Dashboard_UI/",webapp:"https://msdian0007.github.io/Dashboard_UI/"},{id:4,title:"Chat App",date:"July 2024",description:"Created a chat app with features including real-time messaging, friend search by phone number, friend requests with accept/reject options, real-time notifications, and unread message alerts.",image:"images/projects/chat-app.png",tags:["React.js","Node.js","MongoDB","Express.js","Socket.io","Ant Design","Axios","HTML","CSS","TailwindCSS"],category:"web app",github:"https://github.com/msdian0007/chatApp/",webapp:"https://msdian0007.github.io/chatApp/"},{id:3,title:"Barnd Factory",date:"Oct 2023",description:"Meet Brand Factory – the React.js-powered ecommerce app that offers a responsive shopping experience. Combining user-friendly design with efficient state management.",image:"images/projects/brand-factory.png",tags:["React.js","Reduxjs/Tookit","HTML","CSS","fakestoreapi"],category:"web app",github:"https://github.com/msdian0007/ecom-redux/",webapp:"https://msdian0007.github.io/ecom-redux/"},{id:2,title:"Doc.js",date:"Jan 2023",description:"Made with React.js and Redux Toolkit, this app easily creates invoices and quotes, making business paperless.",image:"images/projects/doc-js.png",tags:["React.js","Redux/Toolkit","HTML","CSS","TailwindCSS","Material UI"],category:"web app",github:"https://github.com/msdian0007/doc.js",webapp:"https://msdian0007.github.io/doc.js/"},{id:1,title:"Keeper",date:"Jan 2022",description:"Meet Keeper – the React.js-powered to-do app that simplifies your task management.",image:"images/projects/keeper.png",tags:["React.js","Reduxjs/Tookit","HTML","CSS","uuid","font-awesome","Context"],category:"web app",github:"https://github.com/msdian0007/keeper/",webapp:"https://msdian0007.github.io/keeper/"}],ge=({setDarkMode:e,darkMode:o})=>{const[n,r]=f.useState(!1),a=E();return t.jsx(ne,{children:t.jsxs(ae,{children:[t.jsx(oe,{to:"/",children:t.jsxs(de,{style:{display:"flex",alignItems:"center",marginBottom:"20",cursor:"pointer"},children:[t.jsx(H,{size:"3rem"})," ",t.jsx(re,{children:"Portfolio"})]})}),t.jsx(le,{children:t.jsx(N,{onClick:()=>{r(!n)}})}),t.jsxs(se,{children:[t.jsx(p,{href:"#about",children:"About"}),t.jsx(p,{href:"#skills",children:"Skills"}),t.jsx(p,{href:"#experience",children:"Experience"}),t.jsx(p,{href:"#projects",children:"Projects"}),t.jsx(p,{href:"#education",children:"Education"}),t.jsx(b,{children:t.jsx(pe,{onClick:()=>e(!o),children:o?t.jsx(P,{size:"1rem"}):t.jsx(G,{size:"1rem"})})})]}),t.jsx(b,{children:t.jsx(j,{href:d.github,target:"_blank",children:t.jsx(w,{size:"2rem"})})}),n&&t.jsxs(ce,{isOpen:n,children:[t.jsx(l,{href:"#about",onClick:()=>{r(!n)},children:"About"}),t.jsx(l,{href:"#skills",onClick:()=>{r(!n)},children:"Skills"}),t.jsx(l,{href:"#experience",onClick:()=>{r(!n)},children:"Experience"}),t.jsx(l,{href:"#projects",onClick:()=>{r(!n)},children:"Projects"}),t.jsx(l,{href:"#education",onClick:()=>{r(!n)},children:"Education"}),t.jsx(j,{style:{padding:"10px 16px",background:`${a.primary}`,color:"white",width:"max-content"},href:d.github,target:"_blank",children:t.jsx(w,{})})]})]})})};const ue=i.div`
    width:600px;
    height: 500px;
`,fe=()=>t.jsx(ue,{children:t.jsxs("svg",{className:"BgAnimation__svg",viewBox:"0 0 602 602",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsxs("g",{opacity:"0.15",children:[t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z",stroke:"url(#paint0_radial)",id:"path_0"}),t.jsx("path",{d:"M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z",stroke:"url(#paint1_radial)",id:"path_1"}),t.jsx("path",{d:"M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z",stroke:"url(#paint2_radial)",id:"path_2"})]}),t.jsx("ellipse",{cx:"295.027",cy:"193.118",transform:"translate(-295.027 -193.118)",rx:"1.07306",ry:"1.07433",fill:"#945DD6",children:t.jsx("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:t.jsx("mpath",{xlinkHref:"#path_2"})})}),t.jsx("path",{d:"M294.685 193.474L268.932 219.258",transform:"translate(-294.685 -193.474) rotate(45 294.685 193.474)",stroke:"url(#paint3_linear)",children:t.jsx("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:t.jsx("mpath",{xlinkHref:"#path_2"})})}),t.jsx("ellipse",{cx:"295.027",cy:"193.118",transform:"translate(-295.027 -193.118)",rx:"1.07306",ry:"1.07433",fill:"#46737",children:t.jsx("animateMotion",{dur:"5s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:t.jsx("mpath",{xlinkHref:"#path_2"})})}),t.jsx("path",{d:"M294.685 193.474L268.932 219.258",transform:"translate(-294.685 -193.474) rotate(45 294.685 193.474)",stroke:"url(#paint7_linear)",children:t.jsx("animateMotion",{dur:"5s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:t.jsx("mpath",{xlinkHref:"#path_2"})})}),t.jsx("ellipse",{cx:"476.525",cy:"363.313",rx:"1.07433",ry:"1.07306",transform:"translate(-476.525 -363.313) rotate(90 476.525 363.313)",fill:"#945DD6",children:t.jsx("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:t.jsx("mpath",{xlinkHref:"#path_0"})})}),t.jsx("path",{d:"M476.171 362.952L450.417 337.168",transform:"translate(-476.525 -363.313) rotate(-45 476.171 362.952)",stroke:"url(#paint4_linear)",children:t.jsx("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:t.jsx("mpath",{xlinkHref:"#path_0"})})}),t.jsx("ellipse",{cx:"382.164",cy:"155.029",rx:"1.07433",ry:"1.07306",transform:"translate(-382.164 -155.029) rotate(90 382.164 155.029)",fill:"#F46737",children:t.jsx("animateMotion",{dur:"10s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:t.jsx("mpath",{xlinkHref:"#path_0"})})}),t.jsx("path",{d:"M381.81 154.669L356.057 128.885",transform:"translate(-381.81 -154.669) rotate(-45 381.81 154.669)",stroke:"url(#paint5_linear)",children:t.jsx("animateMotion",{dur:"10s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:t.jsx("mpath",{xlinkHref:"#path_0"})})}),t.jsx("ellipse",{cx:"333.324",cy:"382.691",rx:"1.07306",ry:"1.07433",transform:"translate(-333.324 -382.691) rotate(-180 333.324 382.691)",fill:"#F46737",children:t.jsx("animateMotion",{dur:"5s",begin:"0",repeatCount:"indefinite",rotate:"auto",children:t.jsx("mpath",{xlinkHref:"#path_1"})})}),t.jsx("path",{d:"M333.667 382.335L359.42 356.551",transform:"scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)",stroke:"url(#paint6_linear)",children:t.jsx("animateMotion",{dur:"5s",begin:"0",repeatCount:"indefinite",rotate:"auto",children:t.jsx("mpath",{xlinkHref:"#path_1"})})}),t.jsx("ellipse",{cx:"165.524",cy:"93.9596",rx:"1.07306",ry:"1.07433",transform:"translate(-165.524 -93.9596)",fill:"#F46737",children:t.jsx("animateMotion",{dur:"10s",begin:"3",repeatCount:"indefinite",rotate:"auto",children:t.jsx("mpath",{xlinkHref:"#path_0"})})}),t.jsx("path",{d:"M165.182 94.3159L139.429 120.1",transform:"translate(-165.182 -94.3159) rotate(45 165.182 94.3159)",stroke:"url(#paint7_linear)",children:t.jsx("animateMotion",{dur:"10s",begin:"3",repeatCount:"indefinite",rotate:"auto",children:t.jsx("mpath",{xlinkHref:"#path_0"})})}),t.jsx("ellipse",{cx:"476.525",cy:"363.313",rx:"1.07433",ry:"1.07306",transform:"translate(-476.525 -363.313) rotate(90 476.525 363.313)",fill:"#13ADC7",children:t.jsx("animateMotion",{dur:"12s",begin:"4",repeatCount:"indefinite",rotate:"auto",children:t.jsx("mpath",{xlinkHref:"#path_0"})})}),t.jsx("path",{d:"M476.171 362.952L450.417 337.168",transform:"translate(-476.525 -363.313) rotate(-45 476.171 362.952)",stroke:"url(#paint11_linear)",children:t.jsx("animateMotion",{dur:"12s",begin:"4",repeatCount:"indefinite",rotate:"auto",children:t.jsx("mpath",{xlinkHref:"#path_0"})})}),t.jsxs("defs",{children:[t.jsxs("radialGradient",{id:"paint0_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)",children:[t.jsx("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),t.jsx("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),t.jsxs("radialGradient",{id:"paint1_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)",children:[t.jsx("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),t.jsx("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),t.jsxs("radialGradient",{id:"paint2_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)",children:[t.jsx("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),t.jsx("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),t.jsxs("linearGradient",{id:"paint3_linear",x1:"295.043",y1:"193.116",x2:"269.975",y2:"218.154",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{stopColor:"#945DD6"}),t.jsx("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})]}),t.jsxs("linearGradient",{id:"paint4_linear",x1:"476.529",y1:"363.31",x2:"451.461",y2:"338.272",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{stopColor:"#945DD6"}),t.jsx("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})]}),t.jsxs("linearGradient",{id:"paint5_linear",x1:"382.168",y1:"155.027",x2:"357.1",y2:"129.989",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{stopColor:"#F46737"}),t.jsx("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})]}),t.jsxs("linearGradient",{id:"paint6_linear",x1:"333.309",y1:"382.693",x2:"358.376",y2:"357.655",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{stopColor:"#F46737"}),t.jsx("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})]}),t.jsxs("linearGradient",{id:"paint7_linear",x1:"165.54",y1:"93.9578",x2:"140.472",y2:"118.996",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{stopColor:"#F46737"}),t.jsx("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})]}),t.jsxs("linearGradient",{id:"paint8_linear",x1:"414.367",y1:"301.156",x2:"439.435",y2:"276.118",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{stopColor:"#13ADC7"}),t.jsx("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})]}),t.jsxs("linearGradient",{id:"paint9_linear",x1:"515.943",y1:"288.238",x2:"541.339",y2:"291.454",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{stopColor:"#13ADC7"}),t.jsx("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})]}),t.jsxs("linearGradient",{id:"paint10_linear",x1:"117.001",y1:"230.619",x2:"117.36",y2:"258.193",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{stopColor:"#945DD6"}),t.jsx("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})]}),t.jsxs("linearGradient",{id:"paint11_linear",x1:"476.529",y1:"363.31",x2:"451.461",y2:"338.272",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{stopColor:"#13ADC7"}),t.jsx("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})]})]})]})}),ye=i.div`
  background: ${({theme:e})=>e.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`,we=i.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`,je=i.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`,be=i.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,ve=i.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`,ke=i.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({theme:e})=>e.primary};
  // box-shadow: ${({theme:e})=>e.primary+30} 0px 4px 24px;
  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`,$e=i.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({theme:e})=>e.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`,Ce=i.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({theme:e})=>e.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`,Se=i.span`
  color: ${({theme:e})=>e.primary};
  cursor: pointer;
`,ze=i.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({theme:e})=>e.text_primary+95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`,_e=i.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({theme:e})=>e.white};
    background:${({theme:e})=>e.primary};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    // background: hsla(271, 100%, 50%, 1);
    // background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    // background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    // background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    // box-shadow:  -5px -5px 40px -1px #1F2634, 0px 0px 30px -1px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`,Me="/portfolio/assets/HeroImage3-5de623c5.jpg",Te=()=>t.jsx("div",{id:"about",children:t.jsxs(ye,{children:[t.jsx(we,{children:t.jsx(fe,{})}),t.jsxs(je,{children:[t.jsxs(be,{id:"Left",children:[t.jsxs($e,{children:["Hi, I am ",t.jsx("br",{})," ",d.name]}),t.jsxs(Ce,{children:["I am a",t.jsx(Se,{children:t.jsx(U,{options:{strings:d.roles,autoStart:!0,loop:!0}})})]}),t.jsx(ze,{children:d.description}),t.jsx(_e,{href:d.resume,target:"display",children:"Check Resume"})]}),t.jsx(ve,{id:"Right",children:t.jsx(ke,{src:Me,alt:"hero-image"})})]})]})}),De=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`,Fe=i.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,Le=i.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme:e})=>e.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,Ie=i.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({theme:e})=>e.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,Re=i.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`,Ae=i.div`
  width: 100%;
  max-width: 500px;
  background: ${({theme:e})=>e.card};
  border: 0.1px solid ${({theme:e})=>e.primary};
  box-shadow: ${({theme:e})=>e.primary+30} 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`,Ee=i.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({theme:e})=>e.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`,Oe=i.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`,Be=i.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_primary+80};
  border: 1px solid ${({theme:e})=>e.text_primary+80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`,He=i.img`
  width: 24px;
  height: 24px;
`,Ne=()=>{const{getYearOfExperience:e}=F();return t.jsx(De,{id:"skills",children:t.jsxs(Fe,{children:[t.jsx(Le,{children:"Skills"}),t.jsxs(Ie,{children:["Here are some of my skills on which I have been working on for the past ",e(),"."]}),t.jsx(Re,{children:me.map((o,n)=>t.jsxs(Ae,{children:[t.jsx(Ee,{children:o.title}),t.jsx(Oe,{children:o.skills.map((r,a)=>t.jsxs(Be,{children:[t.jsx(He,{src:r.image}),r.name]},a))})]},n))})]})})},Pe=i.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
    
`,Ge=i.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
    
`,Ue=i.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({theme:e})=>e.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`,Je=i.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    margin-bottom:24px;
    color: ${({theme:e})=>e.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;i.div`
    display: flex;
    border: 1.5px solid ${({theme:e})=>e.primary};
    color: ${({theme:e})=>e.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;i.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${({active:e,theme:o})=>e&&`
    background: ${o.primary+20};
    `}
    &:hover {
        background: ${({theme:e})=>e.primary+8};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`;i.div`
    width: 1.5px;
    background: ${({theme:e})=>e.primary};
    
`;const We=i.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-gap: 32px;
    // grid-auto-rows: minmax(100px, auto);
    // @media (max-width: 960px) {
    //     grid-template-columns: repeat(2, 1fr);
    // }
    // @media (max-width: 640px) {
    //     grid-template-columns: repeat(1, 1fr);
    // }
`,qe=i.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${({theme:e})=>e.white};
    color: ${({theme:e})=>e.text_black};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`,Ye=i.div`
    width: 330px;
    height: 490px;
    background-color: ${({theme:e})=>e.card};
    cursor: pointer;
    border-radius: 10px;
    border: 0.1px solid ${({theme:e})=>e.primary};
    box-shadow: ${({theme:e})=>e.primary+30} 0px 4px 24px;
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0px 0px 20px ${({theme:e})=>e.primary};
        filter: brightness(1.1);
    }
    &:hover ${qe} {
        display: block;
    }
`,Ke=i.img`
    width: 100%;
    height: 180px;
    background-color: ${({theme:e})=>e.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`,Qe=i.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`,Ve=i.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme:e})=>e.primary};
    background-color: ${({theme:e})=>e.primary+15};
    padding: 2px 8px;
    border-radius: 10px;
`,Xe=i.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`,Ze=i.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({theme:e})=>e.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`,et=i.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({theme:e})=>e.text_secondary+80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`,tt=i.div`
    font-weight: 400;
    color: ${({theme:e})=>e.text_secondary+99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`,it=i.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`,nt=i.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({theme:e})=>e.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid ${({theme:e})=>e.card};
`,k=({project:e,setOpenModal:o})=>{var n,r;return t.jsxs(Ye,{onClick:()=>o({state:!0,project:e}),children:[t.jsx(Ke,{src:e.image}),t.jsx(Qe,{children:(n=e.tags)==null?void 0:n.map((a,s)=>t.jsx(Ve,{children:a},s))}),t.jsxs(Xe,{children:[t.jsx(Ze,{children:e.title}),t.jsx(et,{children:e.date}),t.jsx(tt,{children:e.description})]}),t.jsx(it,{children:(r=e.member)==null?void 0:r.map((a,s)=>t.jsx(nt,{src:a.img},s))})]})},at=({openModal:e,setOpenModal:o})=>{const[n,r]=m.useState("all");return t.jsx(Pe,{id:"projects",children:t.jsxs(Ge,{children:[t.jsx(Ue,{children:"Projects"}),t.jsx(Je,{children:"Here are some of my projects."}),t.jsxs(We,{children:[n==="all"&&v.map((a,s)=>t.jsx(k,{project:a,openModal:e,setOpenModal:o},s)),v.filter(a=>a.category===n).map((a,s)=>t.jsx(k,{project:a,openModal:e,setOpenModal:o},s))]})]})})},ot=i.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`,rt=i.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`,st=i.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({theme:e})=>e.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;i.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({theme:e})=>e.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;const dt=i.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`,pt=i.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({theme:e})=>e.text_primary};
`,g=i.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({theme:e})=>e.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({theme:e})=>e.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({theme:e})=>e.primary};
  }
`,lt=i.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({theme:e})=>e.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({theme:e})=>e.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({theme:e})=>e.primary};
  }
`,ct=i.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  cursor:pointer;
  color: ${({theme:e})=>e.text_primary};
  background: ${({theme:e})=>e.primary};
  &:hover{
    transform:scale(1.03)
  }
  transition: all 0.2s ease-in-out;
  font-size: 18px;
  font-weight: 600;
`,xt=()=>{const[e,o]=f.useState(!1),n=m.useRef(),r=a=>{a.preventDefault(),J.sendForm("service_5sj7prw","template_z8nuvrw",n.current,"o71HaDsgKfdgOknGi").then(s=>{o(!0),n.current.reset()},s=>{console.log(s.text)})};return t.jsx(ot,{children:t.jsxs(rt,{children:[t.jsx(st,{children:"Contact"}),t.jsxs(dt,{ref:n,onSubmit:r,children:[t.jsx(pt,{children:"Email Me"}),t.jsx(g,{placeholder:"Your Email",name:"from_email",required:!0}),t.jsx(g,{placeholder:"Your Name",name:"from_name",required:!0}),t.jsx(g,{placeholder:"Subject",name:"subject"}),t.jsx(lt,{placeholder:"Message",rows:"4",name:"message",required:!0}),t.jsx(ct,{type:"submit",value:"Send"})]}),t.jsx(W,{open:e,autoHideDuration:6e3,onClose:()=>o(!1),message:"Email sent successfully!",severity:"success"})]})})},mt=i.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  //background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
`,ht=i.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({theme:e})=>e.text_primary};
`,gt=i.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({theme:e})=>e.primary};
`,ut=i.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`,c=i.a`
color: ${({theme:e})=>e.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({theme:e})=>e.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,ft=i.div`
  display: flex;
  margin-top: 1rem;
`,x=i.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({theme:e})=>e.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({theme:e})=>e.primary};
  }
`,yt=i.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({theme:e})=>e.soft2};
  text-align: center;
`;function wt(){const e=new Date().getFullYear();return t.jsx(mt,{children:t.jsxs(ht,{children:[t.jsx(gt,{children:"Mohasin Attar"}),t.jsxs(ut,{children:[t.jsx(c,{href:"#about",children:"About"}),t.jsx(c,{href:"#skills",children:"Skills"}),t.jsx(c,{href:"#experience",children:"Experience"}),t.jsx(c,{href:"#projects",children:"Projects"}),t.jsx(c,{href:"#education",children:"Education"})]}),t.jsxs(ft,{children:[t.jsx(x,{href:d.linkedin,target:"display",children:t.jsx(q,{})}),t.jsx(x,{href:d.facebook,target:"display",children:t.jsx(Y,{})}),t.jsx(x,{href:d.twitter,target:"display",children:t.jsx(K,{})}),t.jsx(x,{href:d.insta,target:"display",children:t.jsx(Q,{})})]}),t.jsxs(yt,{children:["© ",e," Mohasin Attar. All rights reserved."]})]})})}const L=i.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`,jt=i.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({theme:e})=>e.text_primary+99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,I=i.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`,bt=i.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px ${({theme:e})=>e.primary};
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px ${({theme:e})=>e.primary};
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${L}{
        display: flex;
    }

    &:hover ${I}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }

    border: 0.1px solid ${({theme:e})=>e.primary};
    box-shadow: ${({theme:e})=>e.primary+30} 0px 4px 24px;
`,vt=i.div`
    width: 100%;
    display: flex;
    gap: 12px
`,kt=i.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`,$t=i.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`,Ct=i.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({theme:e})=>e.text_primary+99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`,St=i.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({theme:e})=>e.text_secondary+99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,zt=i.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme:e})=>e.text_secondary+80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`,_t=i.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -10px;
`,Mt=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,Tt=i.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({theme:e})=>e.text_primary+99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,Dt=({experience:e})=>{var o;return t.jsxs(bt,{children:[t.jsxs(vt,{children:[t.jsx(kt,{src:e.img}),t.jsxs($t,{children:[t.jsx(Ct,{children:e.role}),t.jsx(St,{children:e.company}),t.jsx(zt,{children:e.date})]})]}),t.jsxs(jt,{children:[(e==null?void 0:e.desc)&&t.jsx(I,{children:e==null?void 0:e.desc}),(e==null?void 0:e.skills)&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs(_t,{children:[t.jsx("b",{children:"Skills:"}),t.jsx(Mt,{children:(o=e==null?void 0:e.skills)==null?void 0:o.map((n,r)=>t.jsxs(Tt,{children:["• ",n]},r))})]})]})]}),e.doc&&t.jsx("a",{href:e.doc,target:"new",children:t.jsx(L,{src:e.doc})})]})},Ft=i.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`,Lt=i.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`,It=i.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({theme:e})=>e.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`,Rt=i.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({theme:e})=>e.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`,At=i.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`,Et=()=>t.jsx(Ft,{id:"experience",children:t.jsxs(Lt,{children:[t.jsx(It,{children:"Experience"}),t.jsx(Rt,{children:"My work experience as a MERN Stack Developer and working on different companies and projects."}),t.jsx(At,{children:t.jsx(S,{children:u.map((e,o)=>t.jsxs(z,{children:[t.jsxs(_,{children:[t.jsx(M,{variant:"outlined",color:"secondary"}),o!==u.length-1&&t.jsx(T,{style:{background:"#854CE6"}})]}),t.jsx(D,{sx:{py:"12px",px:2},children:t.jsx(Dt,{experience:e})})]},o))})})]})}),Ot=i.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`,Bt=i.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({theme:e})=>e.text_primary+99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,R=i.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`,Ht=i.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px ${({theme:e})=>e.primary};
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${Ot}{
        display: flex;
    }

    &:hover ${R}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }
    border: 0.1px solid ${({theme:e})=>e.primary};
`,Nt=i.div`
    width: 100%;
    display: flex;
    gap: 12px
`,Pt=i.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`,Gt=i.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`,Ut=i.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({theme:e})=>e.text_primary+99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`,Jt=i.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({theme:e})=>e.text_secondary+99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,Wt=i.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme:e})=>e.text_secondary+80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`,qt=i.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({theme:e})=>e.text_secondary+99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,Yt=({education:e})=>t.jsxs(Ht,{children:[t.jsxs(Nt,{children:[t.jsx(Pt,{src:e.img}),t.jsxs(Gt,{children:[t.jsx(Ut,{children:e.school}),t.jsx(Jt,{children:e.degree}),t.jsx(Wt,{children:e.date})]})]}),t.jsxs(qt,{children:[t.jsx("b",{children:"Grade: "}),e.grade]}),t.jsx(Bt,{children:t.jsx(R,{children:e.desc})})]}),Kt=i.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 60px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`,Qt=i.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`,Vt=i.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({theme:e})=>e.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`,Xt=i.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({theme:e})=>e.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`,Zt=i.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    @media (max-width: 660px) {
        align-items: end;
    }
`,ei=()=>t.jsx(Kt,{id:"education",children:t.jsxs(Qt,{children:[t.jsx(Vt,{children:"Education"}),t.jsx(Xt,{children:"Journey Through the Halls of Knowledge: From Aspiring Learner to Accomplished Graduate"}),t.jsx(Zt,{children:t.jsx(S,{children:he.map((e,o)=>t.jsxs(z,{children:[t.jsx(D,{sx:{py:"12px",px:2},children:t.jsx(Yt,{education:e})}),t.jsxs(_,{children:[t.jsx(M,{variant:"outlined",color:"secondary"}),o!==u.length&&t.jsx(T,{style:{background:"#854CE6"}})]})]}))})})]})}),ti=i.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: #000000a7;
display: flex;
align-items: top;
justify-content: center;
overflow-y: scroll;
transition: all 0.5s ease;
`,ii=i.div`
max-width: 800px;
width: 100%;
border-radius: 16px;
margin: 50px 12px;
height: min-content;
background-color: ${({theme:e})=>e.card};
color: ${({theme:e})=>e.text_primary};
padding: 20px;
display: flex;
flex-direction: column;
position: relative;
`,ni=i.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({theme:e})=>e.text_primary};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
      font-size: 24px;
      margin: 6px 6px 0px 6px;
  }
`,ai=i.div`
    font-size: 16px;
    margin: 2px 6px;
    font-weight: 400;
    color: ${({theme:e})=>e.text_secondary};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,oi=i.div`
    font-size: 16px;
    font-weight: 400;
    color: ${({theme:e})=>e.text_primary};
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        margin: 6px 6px;
    }
`,ri=i.img`
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
    margin-top: 30px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
`,si=i.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({theme:e})=>e.text_primary};
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 16px;
        margin: 8px 6px;
    }
`,di=i.div`
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0px;
    @media only screen and (max-width: 600px) {
        margin: 4px 0px;
    }
`,pi=i.div`
    font-size: 14px;
    font-weight: 400;
    color: ${({theme:e})=>e.primary};
    margin: 4px;
    padding: 4px 8px;
    border-radius: 8px;
    background-color: ${({theme:e})=>e.primary+20};
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`,li=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex-wrap: wrap;
    margin: 12px 6px;
    @media only screen and (max-width: 600px) {
        margin: 4px 6px;
    }
`,ci=i.div`
    display: flex;
    align-items: center;
    gap: 12px;
`,xi=i.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 4px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
    @media only screen and (max-width: 600px) {
        width: 32px;
        height: 32px;
    }
`,mi=i.div`
    font-size: 16px;
    font-weight: 500;
    width: 200px;
    color: ${({theme:e})=>e.text_primary};
    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
`,hi=i.div`
    display: flex;
    justify-content: flex-end;
    margin: 12px 0px;
    gap: 12px;
`,$=i.a`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: ${({theme:e})=>e.text_primary};
    padding: 12px 16px;
    border-radius: 8px;
    background-color: ${({theme:e})=>e.primary};
    ${({dull:e,theme:o})=>e&&`
        background-color: ${o.bgLight};
        color: ${o.text_secondary};
        &:hover {
            background-color: ${({theme:n})=>n.bg+99};
        }
    `}
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
        background-color: ${({theme:e})=>e.primary+99};
    }
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`,gi=({openModal:e,setOpenModal:o})=>{const n=e==null?void 0:e.project;return t.jsx(V,{open:!0,onClose:()=>o({state:!1,project:null}),children:t.jsx(ti,{children:t.jsxs(ii,{children:[t.jsx(X,{style:{position:"absolute",top:"10px",right:"20px",cursor:"pointer"},onClick:()=>o({state:!1,project:null})}),t.jsx(ri,{src:n==null?void 0:n.image}),t.jsx(ni,{children:n==null?void 0:n.title}),t.jsx(ai,{children:n.date}),t.jsx(di,{children:n==null?void 0:n.tags.map((r,a)=>t.jsx(pi,{children:r},a))}),t.jsx(oi,{children:n==null?void 0:n.description}),n.member&&t.jsxs(t.Fragment,{children:[t.jsx(si,{children:"Members"}),t.jsx(li,{children:n==null?void 0:n.member.map((r,a)=>t.jsxs(ci,{children:[t.jsx(xi,{src:r.img}),t.jsx(mi,{children:r.name}),t.jsx("a",{href:r.github,target:"new",style:{textDecoration:"none",color:"inherit"},children:t.jsx(Z,{})}),t.jsx("a",{href:r.linkedin,target:"new",style:{textDecoration:"none",color:"inherit"},children:t.jsx(ee,{})})]},a))})]}),t.jsxs(hi,{children:[t.jsx($,{dull:!0,href:n==null?void 0:n.github,target:"new",children:"View Code"}),t.jsx($,{href:n==null?void 0:n.webapp,target:"new",children:"View Live App"})]})]})})})},ui=i.div`
  background-color: ${({theme:e})=>e.bg};
  width: 100%;
  overflow-x: hidden;
`,C=i.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;function fi(){const[e,o]=m.useState(!0),[n,r]=m.useState({state:!1,project:null});return t.jsx(O,{theme:e?te:ie,children:t.jsxs(B,{basename:"/portfolio",children:[t.jsx(ge,{setDarkMode:o,darkMode:e}),t.jsxs(ui,{children:[t.jsx(Te,{}),t.jsxs(C,{children:[t.jsx(Ne,{}),t.jsx(Et,{})]}),t.jsx(at,{openModal:n,setOpenModal:r}),t.jsxs(C,{children:[t.jsx(ei,{}),t.jsx(xt,{})]}),t.jsx(wt,{}),n.state&&t.jsx(gi,{openModal:n,setOpenModal:r})]})]})})}A.createRoot(document.getElementById("root")).render(t.jsx(f.StrictMode,{children:t.jsx(fi,{})}));
