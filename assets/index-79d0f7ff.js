import{a as u,j as t,r as c}from"./react-8bb107de.js";import{c as z}from"./react-dom-4e24a3e8.js";import{s as i,X as M,L as O}from"./styled-components-ebb5d373.js";import{L as f,B as H}from"./react-router-dom-1657c51e.js";import{F as G,a as J,B as C,M as B,A as b}from"./react-icons-817d4e7e.js";import{T}from"./typewriter-effect-bcfdd3b9.js";import{e as F}from"./@emailjs-a704afdc.js";import{S as D,d as W,a as Y,b as K,c as Q,T as V,e as k,f as E,g as U,h as R,i as L,M as X,C as Z,G as $,L as _}from"./@mui-aa9bc42b.js";import"./@babel-6769ef73.js";import"./scheduler-765c72db.js";import"./react-is-e8e5dbb3.js";import"./@emotion-87a34207.js";import"./hoist-non-react-statics-969199a5.js";import"./react-router-a959c66a.js";import"./@remix-run-ac65ad3c.js";import"./clsx-1229b3e0.js";import"./react-transition-group-e23114ce.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const A of o)if(A.type==="childList")for(const m of A.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function a(o){const A={};return o.integrity&&(A.integrity=o.integrity),o.referrerPolicy&&(A.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?A.credentials="include":o.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function r(o){if(o.ep)return;o.ep=!0;const A=a(o);fetch(o.href,A)}})();const ee={bg:"#2C3333",bgLight:"#1C1E27",primary:"#2192FF",text_primary:"#F2F3F4",text_secondary:"#b1b2b3",card:"#171721",card_light:"#191924",button:"#854CE6",white:"#FFFFFF",black:"#000000",border:"#FFED00"},te={bg:"#FFFFFF",bgLight:"#f0f0f0",primary:"#0E8388",text_primary:"#111111",text_secondary:"#48494a",card:"#FFFFFF",button:"#5c5b5b",white:"#FFFFFF"},ie=i.div`
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
`,ne=i(f)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`,oe=i.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`,re=i.ul`
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
`,d=i.a`
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
`,Ae=i.a`
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
`,y=i.a`
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
`,se=i.a`
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
`,j=i.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`,de=i.div`
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
`,pe=i.div`
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
`;i(f)`
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
`;const p=i.a`
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
`;i(f)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;const s={name:"Mohasin Attar",roles:["Full Stack Developer","Web Developer","MERN Stack Developer"],description:"I'm a seasoned MERN Stack Developer with expertise in MongoDB, Express.js, React.js, and Node.js. With 2-years of hands-on experience, I specialize in creating high-performance web applications and user-friendly interfaces. Let's connect to explore new opportunities in web development and tech innovation.",github:"https://github.com/msdian0007",resume:"https://drive.google.com/file/d/11S8CNdDY5kELRG-fYbhFumVNuPZreh2d/view?usp=drive_link",linkedin:"https://www.linkedin.com/in/mohasin-attar-7b6471121",twitter:"/",insta:"/",facebook:"/"},le=[{title:"Frontend",skills:[{name:"React.js",image:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"},{name:"Redux/toolkit",image:"https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"},{name:"Next.js",image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII="},{name:"Material UI",image:"data:image/png;base64,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"},{name:"JavaScript",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"},{name:"TypeScript",image:"data:image/png;base64,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"},{name:"HTML5",image:"https://www.w3.org/html/logo/badge/html5-badge-h-solo.png"},{name:"TailwindCSS-3.0",image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8WvcoAusj2/f0TvMrv+vsAuMan3+WG1d3s+vv7/v6P2uJp0dpPx9LD7PBJyNO66e1ZzNbk9/kzw8/O7/Kf4OaI1t+i4ui55+t11d3H7PDe9ffW8vSt5eo/xNB+1t43AD7MAAAFsUlEQVR4nO2c63KyOhSGZQFuQeRgQFQI3P9dbkBtwSIkAQN88z5/OmM7NS9JVtYp7HYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+URyfp8fj5XA4XI5JymNn6QHNiB1fvYD21GVP7PZP6HTDMjCIjD6qj4Nb6C49xEnE5Sd1LZXefasizfBkDMt7ijQCbi89WBX8QETeUyRLzaXHK8vZE5b30Bj4Sw9ZjpCJT+BL42VDhtX0pPXVEq3NTOM5UhFYU27DquZCFrR/GqNs6dELkDNVfbXEIl96/KNkUwTWhEsrGMGeKtAw0qU1DKJmRTtYdF1axRDHyQJrjkvL+Mx9FoEG8aWFfGKylfmRKDmL2ryh2zxTWCM1i5muOc87Aq1JCmUWql3E3xPVxmw7a2SwojidTgUbi4H7scQPDddj35TVwv9RQkbE/byJ+MxzfC3ZXl6kJTqL7m1fflNWi+A1uCh5D2fzg3w0JWhuXI9I0yL1HxuP2LUvXD+X8ouVkvFvdSvrFujJgbhN0oLYx7XlyLs7FI1FU3a192WPFlXOjcCh6MdNFSSeB780qx8raQpHynr4I08zlt6NxIZCjaSORCmYVcdHnMIQCHzOEvm3F+UnhyV+LntNuY+wetwCq0Uh9iAj7dOYv0yXJjuz84gJJSBUwitiZdaR4Tp+9EqVaPPSyRDc76ZCmsoiCsrEb2SauZ/cWOvo+aqsX0K6i/6pqeafdwpXrc91JT1KgcP5hcosftQdfU9TB1tC4MMPmQdLdG9MxpSrq7hzzaIud0aeGRJWjcBovRWrmSQO+3TLModEWnclx52eeFztJnyR0KRUzn71Ane766QZ1JW6mISvkNt4YK33nOjiRKordbVZ8XfcRKWcSkxT7mkWMnn/hm4b6mnY1X1hhcxStahY9zHYh52KL1Uykk32T7lcqEGsCoSTbXRr9GDH3kiBowp8o3BbG/AdO7wEVq3y766s1BUl37a8B/Y5LKOCNZmZ33wFC0qeLbX7stgPOf+vgvPQz+eJZs5565+G8VJNRHbGy4A9l1BDtbhYEZXheZPG7g2H3wrqMQxWrdcKLuG2RTph1KeuYxgM775ZkW4SiFQCyTrxTR5dtoSnTEa6vXn0ZV3Ijd01cOQzudtoGH0hX980Gk95M9PI5eXVWBRtxNs6KmfGiG0ioCsV5T1Ydcfog+N+ksL1Z8aOk/TVEi/rtjf+DDWGFZeJqmhmsr5aordeiTNVpVcscZ7udJEutS6ShWV18ondvi2JNymJutKGs9XcDUlzk+gqLoXtEX7oaRGXKL4X79oqvC157JY8epvtzE8OASn4ccKzmFv0VVm/8Ff7mBH5Tmcb2Vmp0tosNosZI+87gt6xg+f8HfpacxyJgoOUxLx6dprauZrmbYu8T/U6R94jp2A0q1rv/UJTzNV0GRtDPV3yd5pH65u1F0yaLGnWdBkPJyIUbv1SOnAwPkqmpKkZqHJnKBo7eBVOTPI+CuDNmqBATyxS2RkhPySRl0hln0bz+lzzui6uxyToSyq4rsT+mGcz+VkNmvrvd+Ve1JPkKqf/npXXOGtsppn7PPo9erT5M0w8GkiV/HOqr7jVN9zqK26tz3WFy3Eh4d1zRQfd6vx4CtfV+cul8tWK+dQe6PYtRe9IehVzRcqG2M2NJVBdqG+IX2zQz+SkYyNw1bnV67Sm2EbgehNWDenkKWRrr6qG4xqGBa7WyvyQF1PsjcgNv8VRaBh9IXwBbmFc1Urc2K3fFeErvSlq7Va0g3OQjxgH7zSvEJl3CjZ8jvrXiplKpKg2907BBzYPBN99eQo3tAM7uPex1ub61+WWLk/8xQ1vg++gLTfWF9aLE/Mb63uPsHeN1+6EylDpTJPjoeZ4TPl9I41SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5Pkf9+lFwjTliMkAAAAASUVORK5CYII="},{name:"CSS",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"}]},{title:"Backend",skills:[{name:"Node.js",image:"https://nodejs.org/static/images/logo.svg"},{name:"Express.js",image:"data:image/png;base64,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"},{name:"Java",image:"data:image/png;base64,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"},{name:"MySQL",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"},{name:"MongoDB",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"},{name:"Firebase",image:"https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"},{name:"JWT",image:"data:image/png;base64,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"}]},{title:"Others",skills:[{name:"Git",image:"https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667"},{name:"GitHub",image:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"},{name:"VS Code",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519"},{name:"Eclipse",image:"data:image/png;base64,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"},{name:"Postman",image:"https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667"},{name:"Netlify",image:"https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png"},{name:"Jira",image:"data:image/jpeg;base64,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"},{name:"Atlassian",image:"data:image/png;base64,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"}]}],g=[{id:1,img:"data:image/jpeg;base64,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",role:"Web Application Developer",company:"Globalion Technology Solutions LLP",date:"Feb 2022 - Present",desc:"Our dedicated team crafted an ecommerce web app using a robust tech stack, including React.js, Next.js, Express, Node.js, and MongoDB. Following agile methodology and utilizing Jira boards, we ensured efficient project management, enabling rapid development and adaptability. Our solution empowers businesses with seamless online shopping experiences, intuitive navigation, and secure transactions, all backed by a scalable and efficient backend infrastructure.The use of Next.js allowed for lightning-fast page loading and optimal SEO performance, ensuring maximum visibility and engagement. With MongoDB, we achieved data flexibility and scalability, accommodating future growth seamlessly.In the backend, we leveraged the power of Node.js and Express to create a robust and highly efficient server environment. Node.js, known for its event-driven, non-blocking I/O model, enabled us to handle concurrent connections and perform tasks with minimal latency. This allowed for quick response times, essential for an ecommerce platform.The backend stack, comprising Node.js, Express.js, and MongoDB, forms a powerful foundation for our ecommerce web app, offering scalability, speed, and flexibility to support business's growth and adapt to evolving demands",doc:""},{id:2,img:"data:image/jpeg;base64,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",role:"Web Developer",company:"Globalion Technology Solutions LLP",date:"Nov 2022 - Feb 2023",desc:"I worked as a web developer at Globalion Technology Solutions from November 2021 to February 2022. During my tenure at this startup company, I contributed to an in-house project that encompassed various functionalities, including leave management, salary slip generation, and invoice and quotation management. For the project, I utilized frontend technologies such as React.js, Redux, CSS, TailwindCSS, and Bootstrap, while the backend was powered by Node.js, PHP, and databases like MongoDB and MySQL.",doc:""},{id:3,img:"data:image/jpeg;base64,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",role:"Frontend Developer",company:"Zognu Technologies",date:"Feb 2022 - Oct 2022",desc:"I successfully completed a Frontend Developer internship from July 2021 to October 2022, where I honed my skills in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React JS. During this period, I leveraged these technologies to create compelling static websites, including e-commerce landing pages, showcasing my proficiency in web development.",skills:["HTML","CSS","Bootstrap","TailwindCSS","Javascript","React.js"]},{id:4,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6dVayMXSVzso544cu3Mf-HUkmVhYYusWtgQ&usqp=CAU",role:"Java Full Stack Developer Intern",company:"TAP Academy, Bengaluru",date:"Nov 2021 - Jan 2022",desc:"I successfully completed my internship in Java Full Stack Web Development from November 2021 to June 2022, where I immersed myself in a wide array of technologies and concepts. Over the course of my internship, I explored into the core elements of Java, honed my skills in JDBC (Java Database Connectivity), explored the intricacies of JEE (Java Enterprise Edition), and became proficient in the Spring Framework. I also gained practical experience in database management using MySQL and developed a strong foundation in front-end technologies like HTML and CSS. During this period, I had the opportunity to apply my knowledge by creating static websites that showcased my abilities in these technologies.More importantly, this internship was a pivotal moment in my educational journey. It not only enhanced my technical skills but also boosted my confidence in my abilities as a developer. ",skills:["Java","JDBC","JEE","SPRING Framework","MySQL","HTML&CSS"],doc:"https://tap-academy-fswd-img.s3.ap-south-1.amazonaws.com/Tap-Academy-FSWD.png"}],xe=[{id:0,img:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAOEhUSEhIVFRUWFRUVEBcXGBcVFxUbFRYYFhoZGxgYHSggGhslIhgWIzEhJSkrLi4uGR8zRDMtNyktLisBCgoKDg0OGxAQGy0lICUtLS0vLS0tLS0tLS4tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAwADAQEAAAAAAAAAAAAABQYHAQQIAgP/xABFEAACAQMBBAcDCAcHBAMAAAABAgMABBESBQYhMQcTIkFRYXEUI4EyQlJyc5GhsjM0YoKxwcIIQ1SSorPRFRYkk1OD0v/EABsBAQACAwEBAAAAAAAAAAAAAAAEBQEDBgIH/8QAOBEAAQMCAgYJAwMDBQAAAAAAAQACAwQRBSESMUFRYXEGEyIygZGxwfAUodFCUuEzNEMjYnKSsv/aAAwDAQACEQMRAD8A3GlKURKUpREpSlESlKURKUpREpXFda9v4bddc0iRqOZdgo+8mmvJF+e2pjHbzODgrFIwPgVQnNeedk70bw3pYW89xKVwXCKpwDyz2fKr10l9JVo1tJa2knWySqY3dQdCK3Bu0caiRkDGRxrtdBewHtrWS5kXBuCmgH/44wdLfEs3wAq8pWfSUj5pYwSSA0OHn9lqPadYFUPam3N5rNOsuJLmJMhdTKoGTyHLyNa/0X7XkvtnQyyuXkzIsjHGSVkYDOPLTXb392Gdo2M0A+WV1RfXQ6lHxxj41knRLvtHssy2l4WSNnLKxBPVuOywYDiAcDu4EedZfaupHOjjAe03s0bPf+PMOy7Nb7So/Zm2La6GqCaOUfsOrY9QDwrv1REEGxW1c0pSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpXGaIuahd495bTZsfWXEoTPyF5u/1VHE+vIVU+kXpKi2bm3t9Mtz87vSHP0sc2/Z+/zz/dncfaG3pParyR1ibj1j8XkHhGvIL58vAGrOmw8GPr6h2iz7nkPnkvBfnYLu7wdLl9eP1Oz4jGGOEIXrJn9Bghe/gAT511rDox2xtJutvJDFn50zl5OPggJI9CRyrZd291bPZqabeIKcdpz2pH+sx4/AYHlU3Ww4o2Hs0jA3/cRd3zzWNC/eKzjYPQ/s+2YPOz3DDBw2FjyP2F4n0JI8q0aNQBgDAHAAchUPf7z2VvnrLiPI5qp1t9y5NQs3SXs9eXWt6IB+ZhVTUVpldeZ9zxPyynQ4dUyC8cTiOSuhqk72dGdjtJzMdUMx+U8eMP5spGCfMYPnXynSfYnmkw+CH+upGy372fMdIl0H9tWUffjH415hrRG7SjfY8CtkmFVjRd0Trclle1eh/aNqess5llK8V0kwyD0ycZ/eFflsvpJ2tsuTqb2NpQOBSYFJAOWVkx2vU6s+NbxbXUcy6o3V18VIYfeK622djW99H1dxEsi92ocR5gjip8xVw3FetGjVMDxv1EciP4VaY7HLJRe6m+1ltQe5kxJjLRPhZB48PnDzXIqy1hG+HRZcWB9p2e8kiIdWkH38eOOVK41j04+tTXR30qiYrbX7BX4LFP8AJVz4Sdyt+1yPl3+JsPa+MzUrtJo1j9Tfz81oH52ctepXGa5qrWxKUpREpSlESlKURKUpREpSlESlKURKUpRErNelbf8A/wCnr7LbMPaXXtMP7hT3/XPcO7n4Zs+/W8ybKtHnOC57ECfTc8vgOJPkDWRdGW6r7YuXvrzLxLJqOr++k+Vp+ovDI5ch41aUFNHompn7jdn7juXhxOoKS6Mejf2nF9fqWVjrhjbiZM8eskzzB5gd/M+e1qABgcu7urkcKzff7frqtVtbN2uUsg+b4qnn4nu/hAr690rutlPIbuA91MoaGSqkEUQz2nYBvKnt6t9oLDKD3kv0AeC/Xbu9OdZZt3e+8vSdchVO6NOynxA4t8SagXYtxJznnXzVBLUvk4DcvoeH4JTUgBtpO/cfYbPXivpmJ5k180rkDyqOrld3ZWzJbuVYYl1O2eB4KAObMe5Rw4+YHM1dbXc6ySMtK1zMo4S3MemGCLuLICcuqnm3bUAE9xFRPR/pY3LEFo1SITFecikkLbKc85XK58kx86r6s0bDSZ7iSbBEi2wZ4YgODIIyvVsi/J5Fjg9/AW1NA0MDiMyvnuN4tUOqXRRvLWtNsja52kka+WqyzG/S62TcvGJWV0I0spKiRTxVgPAjmDniCO6rju30mnIjvF8usQcR9Ze/1H3VV973DraPqDkQzQFxka1trho0ODxGRq4HkSR3VWqiSOdBKQw5K/o6aHFaJj6ht3ZjS1HIkXv8HBelrS6SZQ8bB0YZVlOQfjWa9J/Rst4GurNQtwMtLGOAn7yR4Sfx/GqtulvXNs5+BLRMfeITwPmPBvPv/htuytpR3cSzRNqVhw8Qe8EdxHhVtQYg5jxJGbOGzf8AwuRxXCJKJ2ebDqd7Hcfsdiyfom3/AGDLs+8Y5zotpG4EEcBE+e/uUn08K2esY6Z9ydOdo2y44j2pV9cCUY5d2r7/ABq09E2+H/U7bq5WzcQ4WQ98ingsnrwwfMZ76t62COWP6uAWB7w3H8fNqp2EjslX6lKVUrYlKUoiUpSiJSlKIlKUoiUpSiJXBrmoLfTbHsFlPcZ7SoRH9duyv4kV6Y0vcGjWTZFi/SLtKTbW1Vs4DlI36mLw1Z9458hg/BK3PYOyYrC3jt4hhI1wPEnmWPmSST61kHQJsTrZZr1+PVjq4iePacZY+unA/fNbVczLEjOxwqqWY+AUZNWmKyBhbTMPZYPvtPzitcYJz2lVHpG3m9ih6qNsTSA4I5onIt6nkPie6sWY5Oak949qte3Ekzd7dkfRA4Afd/OoyuOnl6x99mxfVMIw5tHThv6jm48d3Iah57VxXNK4rQrVc1LbvWUjzI3sUl3GNcjINIVtPZGoNzQN3Y7RUgA4bEZCrMyqoyzHhy7IHFnOSBgDjzHcO+pifak8MKlLp1jgBtEkgie2kbUM+96wtkhldtGA2ASCpbSZ1HBpHTdq2LkukmJ9W36aM9o97gN3M+YHNWefeK8mjhulit47Z2lFoiOXw8Ecr9Y8YjQnhGxAY4UquVzxE1vLbR256ljKFjsQuzNJfJnUkZBXgZuEOM8cF+7VWam06qVotUiFLclm61InZDCriMlAYz2F+SoDPkAt2CW0TZMseLJQL5faYRIzrczukRCEnhIzDA09/LUvPNWi4dVHfuwmW5mmb9H1kcIxyjlNulxJwA5MZGbPHjq5cKq1T229pTTxri4d7d5pp4VlRdbhFZC/XJpD4zjToGksoy2kkQRGCaqa1lpL7wvoHReo06Qxk90/Y5+t1xVs3B3nNjMEc+5kIWQdyk8A49O/y9BVUoDUZjyw6QV7VUzKmIxSDI/L8xrC9LSxpMhVgGR1IYHiGVhgjzBBrzzMH3Y2xkZ6rUCO/XBIeI8yuCPrJWtdGW2/arURu2XhIXjzKH5J+HFf3agenfYQmtEu1HbgbD+aOQPwbSfia7DBqlpk0HdyQWI9Pvl43XyaupX08rona2n4fHWtNhkDqGU5BAKkciCMg1+tUPoa217Xs5EY5e3Ywt9UcU/0kD92r5UOeIwyOjOsGy1A3F0pSlallKUpREpSlESlKURKUpRErKf7QG0NFpDADgySlyPFY1x/F1+6tWrCf7QkxNzbJ3LCzf53x/SKssIYH1jL7LnyC8Sd1aH0SbN9m2Xb+MgaZvPrGJX/AE6a/TpN2h1FkwBwZGEfwPab8Bj41P7BtxFbQRgYCQxqB9VAKz/pmuDm3j7sSMfjpA/gaq6+Yu6yTaSfurXBYBLWxMOoG/kL+yzAmuaUrn19TSuK5rgvpBbwGfDl5nlWQLry9waLnUpiztIooUvndFkS6CRRsvWGVEClisOoGQCQjIBBwh45AzzY7uXcltI8aILcS461nDtqVsAhYpAgUagGfLMhMmMjlY9jWabMjiaImS/Ul7iN1URBX1BpDKVGmEAkrIXwePAkkV3LXY+0NoCVml0wTSdbMBmG2PAfJEitJMvZXJ0wq3E5bNX0bdBobuXySrn6+d8v7iT4bPtZde33BkS8FvJeBWe2eQPBHDF2UaNCghKMB2n19Zqz3ADGRJWEzR+x2i3l0DcQ4RcWrwhQrL2VMYkZMLnsk6Qyknjmuiu6tmR27zrzyzFDc3CjSGUAsZZDwDMMahwY8BmpLZ9jdRnTaXwlYYzFrlgdUHhDdGYH0xGD4ivajqsXuxhaQzSTKz26QPBZ3MYYJ1rO2GaJnZgjPgakGkmRzyYEVJ+Z9TV321tS5gtHtbokqIurt00LBMGIKI0ql2WVEJQh4WbiASBiqRJzPqarq+12+K7PokHaMxOrs+fav7LilKVXLs1b+i7aRgvVT5swaNvUjUD94A+Na3vHs8XdrPAf7yJ0HkSpwfgcGsE2BOY7mJx82RG/yuDXo4Va0DyG5bDf3XAdKYQ2oa/9zfQ/ghYV/Z+2gUubiA57cYkA84mx/CT8K3WvPu4X/jbwtHyBluox6dsj8or0HXR40B9Tpj9TWn7W9lykepKUpVStiUpSiJSlKIlKUoiUpSiJWBdP3C/hPd1Cf7j1vtYd/aGtsTWsn0o5E/yMp/rq1wU2rG8j6LXL3Vtdqcov1V/hWW9Mo99D9mfzGtD3YuhPZ20v04Im+9BmqR0yWuUgl8C6H7gw/gaoq1hEbhu/Kvej7gK+O+2//krLaVxSqVfTUqY2FZZKTMQFW4iUcIiC4Xru0ZmWNFwuATkkngMjNRkELSMqqASzBVyQoyTgZZiAB5mrxsPZklgjTRyiV3HVDgfYyzfJySNVyVyW1JhFCuSwwamUcRc/SIyC5npHXtjpzC11nu2Wvdu3lf8AgLkukV1mK0VYZJCUtZJF6t7lGt4xIvUB1ZQJo8KSVUxuQqkZq+X1lbxKJdoTLLxAUScIQ3MBIOIZuGQW1N51BbjWMEsyuVR/Z7aM2rAAL/5Etx1s6gcAZdCnPhy5nM1vvsa6vI4vZmi1RSa2hmDdTONJXS5Q6hjOR3Z5jlVsvn6l9mbWtrkEQyK2jGpeKsmeWUIDL8RX6bQ2bDcjTKgbByp5Mh+kjDtI37SkGs2W1urKeOa46m3IOqOOOWScJEh1XLkuMrCU0r1YyvWNCQAefcl34uZ5JXtmiWOFirwSjF0NBwztCzKwQ8wB2sfNJ7NEXxvravJDdR3EoeKzjEluSMSvNMrLCHYcDoJHIdosueR1Zc/M+pqy7z7de5XPyevZbyVQcgAosVugOAcaIxLggcZQeB5VmqqteC8AbF3vRemdHTOlOp5yHAbfH0AXNKUqEupX72Iy64+kK9KivO+7Ft111Cv0pYwfQuCfwBr0TmrKgGTvBcP0seOsibwJ8yPwvPuwuO85x/i7j+Eleg68+dGJ9r268w4jVczZ8mJA/OK9B10+M5SsbtDGj1XGx6kpSlVC2JSlKIlKUoiUpSiJSlKIlZn087O62wSYDjDMpb6sgKH8dFaZUbvBsxb22mt25SxsvoSOB+BwfhW+lm6mZkm4hYcLiyqnQxtT2jZkaE5aBnib0zqX/SwHwqX6Qdn+02MoAyYx1q9/yM5/0lqynoW2s1jfy2M3Z60smD82WEnh8QHHqBW9c63YtTBlQ9ux2Y5H+brZSzuieyRutpB8l5jIxXFWHfXYZsbl0x2G7UR8VP8Axy+A8ai9lbOmu5FihALvnTk4UYGSzHBwo9PDxrk9B2lobV9XFbCYPqC6zLXvw+ZL9t3YZTcwdVCs0gfKRuoKOABqLEjCgDJ1dxxz5HVrTde6umM+0ZUZ8ERW8eeojHMKxPFxwBI4AnnqAUL+mzrDZuxxGgVTdGMKdCGW5m5am0qC2ksAScBRw5cK43n2ttA2szw2vUKsbO0k06JIirxYqiBwTpDc3X1q5giMTdElfNsUrxWz9a1uiLW4+PFfluu4iu1jMckRNhBDpdCgL2jyawhIw+BMDlcgjlVs2lfxW0ZllcIi41MfMgAepJA+NUHc/Z8+0Y3ee7uFa3uH9lGDG8RaFCGdZg0h4SOAshIIbOMEYsVxczhGgvbUzowwZbcalccOLQ6usjbPHC68Yzq8NyrlHxxT3fUZSK5VZI3F1HJH1csaksBKoGrIOHCp2S6qcgAivjbGx7PbV1p6iF44HAurgqC8jpgi3RxxIBxrbiBjRzJ0/hs/d/VJLLGs9vE6hbieXhczRplurjUAGNTk5kf3hxgdzDPraU2sMl1AWgPWaY+qOnstFNdkFYywkRY+pUFhlQDlVwaIrJ0qbvGKZbiJOxKFR9KltMkahUOFHAFAB/8AWPGqCcZI5kcxggj1HMVvFns/aPVIRfguUUt1tvG4yQM/omTz5Go7b+wru7j0XFvaXHhIjyWsqeaalkwfItg99Q5qQPJcDYrocN6QSUkbYnt0mjztfyNvhWLUqT2xsW6smCzxMhJbQTpIkA8CpIDYxlc/hUaq5OKrHsLDZy7ylqo6mMSRm4Pyx3Hgrz0TbM626MxHCJSR9ZgVH4aq0nfPaYs7G4mzgrE2j6zDSn4kV1txNiew2qqwxI/vJfIkDC/AYHrmqH0+7fCpDYqeLHrpvJRkIPidR/dFdDhNIZJGRbzc+/2C+a43WipqnvaeyMhyH5Nyun/Z82bl7m5I4BUiQ/WOtvyp99bbVS6MNiGw2dCjDDuOtk8Q0gzg+g0j4Vbal4jOJ6p7xqvbyyVUwWalKUqEvSUpSiJSlKIlKUoiUpSiJSlKIsI6Zt3ZLK7TaMGVWRkLsPmSpgg+WrAPqD41qe4m8ybVtUnHBx2J1+i45/A8CPI1J7d2VFfQSW8oykilT5HmGHmDgjzFYj0S3suzdqvYyHhIZInHdrj1FWHrhh+9Vw0isoi09+IXHFu3yWvuu5rW9893V2jBpGBKmWhY8OPepP0T/wAHurLdx7a7W9EcACyaZVlZhnqEOkM+O9wQAF7yfAGt1qK2bsSG3muJ0HbuGVpPLSuMDyyWb1Y1QOhvIJBsVtDiTo6OSlOYda3DO5+b1+uydkQ2gIjU6mOqWRjqklb6TueLH8ByGBwrs3tsk0bxuAyurI4IBBDDBBB5jjXYpW9Vqy3dy/bY9zLDc6urKxid/fuAylY47p5JMgibUEIUnR1Kjxxdv+69nZx7XBy1fLXGMZ55xnB5c6+d5dm2cyiS50o0QMkcuQskfVES6lbvA0BiMEcOVZrs/d7XcxQrOOrMokEuJEnXDagsisgMUpMTnS2O2JG4ns0RWDe3ej25Vs7JGlE5dXkGQJER1jkWM6HGAXGp3AUKGwSSKidv7F6qTZey+ySzvNclVATW7B3ZF06U5T6caSo5HhpOi7E2HaWgZ4I11SEtLLwaSUsxcs8nNuJJ54HdgVUdm4ut4J5McLWARg45FgBw/wA0nLPyTkDskkWjCua4rmiKK3h2PFfwPBLyYdk96MPkuvgQf+O+s93A3NcTvJcqPcOU09zSLghuXyMEMPUVq9fOmtb4mvIJ2KZT109PG+OM2DxY/kbjbL4FH7d2tFYwSXEpwkaljyyTyCjPeSQB5msI3SsJt49qtczL7pXElwOahRwjiGeedIHoGNWHp/242YLJTgY66UePEqgPlwY/dWgdHm7q7Nso4se8YdZcHvLsBkeijCj0q8hP0dH1v65MhwbtPzgq89p1tys4Fc0pVOtiUpSiJSlKIlKUoiUpSiJSlKIlKVlXT7cPHbW+h2XMrA6SVyNHI451vpYOvlbHe11hxsLq/bc3itLBC9xMiYGQuQXbyVBxY+grENyNe1tu+1qhVBK87/sKMhASOGSdI++v03R6J5toRR3UtyqRyjUAoLuRkjjnAB4edbJuruva7Li6qBeJwZHbi8hHex/kOAqzc+noWPZG7Te4aN7WA3+Pn+fHadYnUp6lKVSrYofZ+1WaeS2mAWVdUkWMhZYS2Fdc8yuQrjuODyZamKh94tndfGHRxFNEest5SMhGAOQw742GVYd4J5EAiJXe8TWC3EK/+RKrJbwYZmacKcJjAOnOGLHA0do4FEUXtGe3Z5nuQJ9MkqPG00SNaqjh1YRuUOlgqsTqzpC4BBNfum2LOdHSe3613dXlFrDcSa+qClXkxGGU4AwjZyuMagai94bu+hhZriFpYiNNx7XDbtHGrDBYPbOXVR5o/qOdTG5lnFcwdXd2ie0KkTzmUidpOtTKuZGGrJwQQfklSBwAoikN3MQC70yl4I5W6oERhY+BlkVSqrwVnK4YnBQjhUJ0PwM8E96+dV3O8gz9EE49Rkvg8cDC5OkV39/rsW9m1pbxM0ksLiOOJNWiJCiyvpBAwodRgEElhipTcuwFvZW6Ag+6V2IOoFpPeMQ3zgSx7R4nmSTRF39sWjzxMkchifg0TjPZZSGXUARqTIGpe8ZHfX47B2t7UjagEmibq7mPOercAEgHvUghlPeCKlqxrc6a8bak8sIBDzS+0qx0q0YmKqc4PbUcV8eI5HI8OeGkA7TZb4ad0oeWkdlulnzA9/ZbLSlK9rQsI6etnyRXkF0ASjxhAccA8bM2CfMMDjyNafunvnZ7SiUxyosmB1kTEB1OOI0n5Qz3jhUvtrZEF9E0M6B425g9x7iCOII8RWQ7wdCzx6pLW5BUAsEkBVhgE/LXgfuFW8ctNUwMhmcWOZextcEHf6LWQQbhbfSsL6ArmR7qdWd2UQdkFiQO2vIE8K3OoVbS/TTGIm9rcNa9NdcXXNKUqKvSUpSiJSlKIlKUoiUpSiJWe9L270m0LeEI8MYjkJczOY17S6QM4PHNaFXU2jZpcRPE4yrqVYev862QzPheJGaxqusgNJGne222u3BVrcy9trKygt5bq21xppfTKhXOSeBOPGpv/uGx/wAVB/7E/wCawneLZb2U7wtngeyfEHk3xH86jNR8TVVJiEhcS4C98+a7SLotTPYHMlJBGWQXoqLblo5CrcQsScKA6kk+AGeNSlefNyifbrfj/ep+cV6DqTTzGUEkKhxjDW0EjWNcTcXz52XXvLZJkaNxlHUq44jIYYIyOPKsu3mNu95dRtbyPIZbe2t4wgeINJBHquDG3CRghK4w2FgBxjJGs1B7W2J1kq3UDCK5RDGHKhlkjJ1dXIOenPEFSCD5ZBkKoWeTxT7MMcdvYMp7bKqPJN1sMbskiTx4xlwYtJVcJ1g5BeM90aiVprtnGlIhDaRqWLSKIHndUkJA7apMinBIPDieZ+dqbfnW9t0NsyXZguYY0OWhZ5GtyrrKBhogEkY5wwCfJBIBtMEcWzLRmkdisSPLcSEZeRsF5HIHNmOeA8gKIqptxF2ttWO106obZS8rZfGokagMAKcjEZyxIzINPfWgxRhAFUAAAAAcAAOAAHcKpPRZZS9TNczjEs08usFgxUpIwlUBewqGYzsAueDAkseNXqiJVZ3M2D7EkxYe8kuJnJ4HKGRzHy7tJBx4k1ZqViwXoOIBAOvWlRTbes1JBuYQQSpBkUEEHBBGeBBqUNeet7WPttxx/v5v9x60VExiAICtsHwxlfI5rnEWF8ua3H/uCx/xUH/sT/mvxu9uWTo6i6gyysB7xO8EeNefdR8TUtuxsiS+uEiBI45dvBRjUf5DzIqKK55IAar2XoxTRMMj5SABc5BXLoi3MuNnyyTySQPHJEURoXL5IcHvUDHA1qldeytUhRY0AVUUKoHcBXZq4nqJKh/WSWud3BcVZoNm6uKUpStKJSlKIlKUoiUpSiJSlKIlcGuaURUfpL3dF1B16LmWIEnHNkwSfUjmPj41jJGK9O1hnSDu97DcFkHupMtH4Ke9fgeXkRVdWw/5B4rs+jGI5GkeeLfce/muhuV+vW/2qfnFeg68+blfr1v9qn5xXoOvdD3TzUXpX/cM/wCPuUrg1Xd5t7YNnMiyK7M4JAUDgAcZJJFS2zNoR3USzRnKOMqfwIPgQcgjyqYHtLi0HMLnH08rY2yuadF2o7Csl6RtuTi/ARtJtWVoPDUAGOrx1Z0nyqb3r3ij2hFs9IFR3uJVkWOUCRAF926yRkgPgueGeBTPdUN0rbIaG59oGSswBJ+iygKR+Cn76+uhy2hN1cFl96ESSI5OMPlJOzyyNK8f2zUSGRwmcx3P54K+xKkidh0FVFsAafm8Ov5rUN39m+x28cAbUEBAIGkcSThVydKjOAMnAA4mpOoa+3jtoXMWsySjnFCpmkGe9lTOgebYHnXV2BvC19K6qsKpH+lXrllmUtnSGSLKJyPzyeHIVNXNqx0robY2nHaRPNIcKgyfEk8AB5k8KjN2N64do6xGrqyYLBgOTZwQQT4GvBe0HRvmtzaeV0ZlDTojWdg+XVhNeeN7v125+3m/3Gr0Oa88b3frtx9vN/utUOv7refsul6Kf1pOQ9VEqMnFbZ0c7vexW4d1xLLhm8Qvcv8AM+vlVC6ON3PbJxK491EQzeDNzVf5nyHnW3CvNFD/AJD4Ld0mxG9qRh4u9h7+S5pSlWK45KUpREpSlESlKURKUpREpSlESlKURKg97NiLf27xEDWO1CfBwOHwPI+RqcpWHNDhYr3HI6N4ew2INwvP+6kDRbRgRgVZZkDA8wQ4BFegKou8e7+m/trtB2WmjWYDubVwf48j6Dxq9VGpYzHpNO9XWN1javqpm7W58DfMfjgsm6Z/00P2R/Ma+eireDqnNrJ8mQ5iJ7nwOz+8B9486++mP9Yg+zP5jXQ3s2C1vFa3sQIDRQ9YR81xGpz5Zx9486iOLmzOe3Z6K9p2wzYbDTS5dYCGnc4EkfPDatK3v2OL21kix2saoz4Oo4ffy+NYZsuUwXCZBwOsWbLSRIsRHa61olLCMMqkjv044DJG47n7dF/bLJ88diUeDAc/Q8D8ahd490WlmDwjTDIkq3cUfVo0hkGnUC6le0rMGPPguO+pvVh72ygrmRWS01PNRSN1n/qQc+eoEeaq20DIqxwiIGI9qRerEESRd8iWAYM4Jwg69ySzDCGtN2HsWKyQqmWZsGR2xqcgYGQoAUAcAqgAeFRe7W6i2qo0ztLNwdyxDDrMY1F9IaZ1HZDvk4HALnFfrvvt8WFszA+9bsQjzI4t8Bx9cDvrc5waC47FAhhfNI2NguSbBULpS3i6+X2aM9iI9vzk4g/AcvXNdvoY/SXH1E/M1R26mwDLa3V5KuQIplhz3tpOW+GceufCpPoa/S3P1U/M1VkZc6drnbc/BdpViGLDJqeL/Hogne4kE/PDYtTNeft4bV5tozRoMs1xKFHiTKwFegTVI3U3fxeXV44/v51gz9owZ/4qPU1LqYzIWtG9UeC1jaNs0rtjRYbzfIfnhdWDdrYyWNukK8SBmRvpMeZ/kPICpiuBXNSWgNFgqWR7pHl7jck3KUpSsrwlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoi+HUHmM9/3cRX3SlEWU9MH6eD7P8AqNXi02el1s+KGQZV7eIHy92MEeYOCPSqP0wfp4Ps/wCo1om736pb/YQ/7a1Ci/ryLoa4kYXSkZG7vUrKt3L19i3zQTHEZYJJ4YzlZPTj9xNbKKovShu/7RD7RGPeRDt45tGOJ/y8T6Zr9ejTeD2qDqJD72EADPMoMAepHI/DxrMJ6p5iOrWPwsYkBW0za5neFmyDjsPj+BsKucjAAknAHEnwxWN7XuZNu7QWOLPVqwVPAIpyz/Hn9wq19KO8HURC2jbEko7eOYj5f6jw9Aa/fo03f9kg691xLMAePMIcEDyzzPw8KTf6rxENQzP4WaACgpXVru+7sxj1d85bVL7btUt9nTRxjCpbuqjyCH8apXQ1+kufqp+Zqvu9P6lc/YyflNULoa/SXP1U/M1Yk/uGclmjJOE1JO9vqFqlfCoB3Y5n7+Jr7pU1c6lKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiynpg/TwfZ/1GtE3d/VLb7CH/bFU3pH3euryaJoI9YWMhjlRg6ie8irpsSJo7eBHGGWKNWHgVQAjhUSNpE7yQrytmjdhtOwOBI0rgG5GvXuXddQeBGQedY3tq2k2HtBZYgerYllHcyse0nw//JrZ6r++OwhtC3aMY6xe3CT3MO7PgeRrZURl7bjWMwo2FVgp5dGT+m/suGyx2+HpdZ1uvZPtq/e4mGY1OuQd37EYz3cPuB8a2QVC7qbEWwt1iGNXypCO9zz+A5DyFTdIItBues60xWtFTN/p5MaNFo4Db4+llEb1fqVz9jJ+U1Quhr9Lc/VT8zVoG8EDyWs6INTNE6qOAySpAHHhVS6M9gXNk85nj0BwgTipzgnPySfEVrkaTO02yspNHNG3C52Fw0iW2F8zmNQ2rQaUpUtUaUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiLg0WlKwEOtc18tSlZRFr6pSsBZOtcVwaUosL6pSlZRKUpREpSlESlKURKUpREpSlEX//Z",school:"Marathwada Mitramandal's Institute of Technology, Lohegaon",date:"Sep 2016 - May 2019",grade:"7.83 CGPA",desc:"I have successfully completed my Bachelor's in Mechanical Engineering with a commendable CGPA of 7.83. During my course, I delved into various core subjects such as thermodynamics, fluid mechanics, materials science, and mechanical design, gaining a comprehensive understanding of the field. In addition to my Mechanical Engineering studies, I dedicated time to learning programming languages, specifically C and C++, which has further enriched my skill set and versatility in problem-solving and software development.",degree:"Bachelor of Engineering - BE, Mechanical Engineering"},{id:1,img:"data:image/jpeg;base64,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",school:"S.V.S.M.D's Polytechnic, Akkalkot",date:"July 2013 - Apr 2016",grade:"81.47%",desc:"I successfully earned my Mechanical Engineering diploma with an impressive 81.47% GPA. Throughout my coursework, I engaged with core subjects and gaining a profound grasp of fundamental mechanical engineering concepts.",degree:"Diploma, Mechanical Engineering"},{id:2,img:"data:image/jpeg;base64,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",school:"Kashiraya Kaka Patil Prashala, Akkalkot",date:"June 2012 - March 2013",grade:"74.80%",desc:"I completed my SSC education at KKP Prashala, Akkalkot.",degree:"SSC"}],S=[{id:8,title:"Doc.js",date:"Jan 2023",description:"Streamline business with the powerful invoice and quotation generator app. Create professional invoices and quotes in minutes, with customizable templates and easy-to-use features. Simplify the billing process and improve productivity with this user-friendly app.",image:"https://s3.ap-south-1.amazonaws.com/msdian0007-doc.js-landing-image/Screenshot+(58).png",tags:["React.js","Redux/Toolkit","HTML","CSS","TailwindCSS","Material UI"],category:"web app",github:"https://msdian0007.github.io/doc.js/",webapp:"https://msdian0007.github.io/doc.js/"},{id:8,title:"Simon Game",date:"jan 2022",description:"Simon is a memory and pattern-recognition game that consists of four colored buttons. The game generates a sequence of button presses, and the player must replicate the sequence by pressing the buttons in the same order. As the game progresses, the sequences become longer and more complex, testing the player's memory and concentration. The goal is to see how many rounds of the sequence the player can successfully complete.",image:"https://simon-game-thumnail-file.s3.ap-south-1.amazonaws.com/Screenshot+(57).png",tags:["HTML","CSS","Javascript","jQuery"],category:"web app",github:"https://github.com/msdian0007/Simon-Game",webapp:"https://msdian0007.github.io/Simon-Game/"}],ce=({setDarkMode:e,darkMode:n})=>{const[a,r]=u.useState(!1),o=M();return t.jsx(ie,{children:t.jsxs(ae,{children:[t.jsx(ne,{to:"/",children:t.jsxs(Ae,{style:{display:"flex",alignItems:"center",marginBottom:"20",cursor:"pointer"},children:[t.jsx(G,{size:"3rem"})," ",t.jsx(oe,{children:"Portfolio"})]})}),t.jsx(de,{children:t.jsx(J,{onClick:()=>{r(!a)}})}),t.jsxs(re,{children:[t.jsx(d,{href:"#about",children:"About"}),t.jsx(d,{href:"#skills",children:"Skills"}),t.jsx(d,{href:"#experience",children:"Experience"}),t.jsx(d,{href:"#projects",children:"Projects"}),t.jsx(d,{href:"#education",children:"Education"}),t.jsx(j,{children:t.jsx(se,{onClick:()=>e(!n),children:n?t.jsx(C,{size:"1rem"}):t.jsx(B,{size:"1rem"})})})]}),t.jsx(j,{children:t.jsx(y,{href:s.github,target:"_blank",children:t.jsx(b,{size:"2rem"})})}),a&&t.jsxs(pe,{isOpen:a,children:[t.jsx(p,{href:"#about",onClick:()=>{r(!a)},children:"About"}),t.jsx(p,{href:"#skills",onClick:()=>{r(!a)},children:"Skills"}),t.jsx(p,{href:"#experience",onClick:()=>{r(!a)},children:"Experience"}),t.jsx(p,{href:"#projects",onClick:()=>{r(!a)},children:"Projects"}),t.jsx(p,{href:"#education",onClick:()=>{r(!a)},children:"Education"}),t.jsx(y,{style:{padding:"10px 16px",background:`${o.primary}`,color:"white",width:"max-content"},href:s.github,target:"_blank",children:t.jsx(b,{})})]})]})})};const me=i.div`
    width:600px;
    height: 500px;
`,he=()=>t.jsx(me,{children:t.jsxs("svg",{className:"BgAnimation__svg",viewBox:"0 0 602 602",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsxs("g",{opacity:"0.15",children:[t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z",stroke:"url(#paint0_radial)",id:"path_0"}),t.jsx("path",{d:"M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z",stroke:"url(#paint1_radial)",id:"path_1"}),t.jsx("path",{d:"M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z",stroke:"url(#paint2_radial)",id:"path_2"})]}),t.jsx("ellipse",{cx:"295.027",cy:"193.118",transform:"translate(-295.027 -193.118)",rx:"1.07306",ry:"1.07433",fill:"#945DD6",children:t.jsx("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:t.jsx("mpath",{xlinkHref:"#path_2"})})}),t.jsx("path",{d:"M294.685 193.474L268.932 219.258",transform:"translate(-294.685 -193.474) rotate(45 294.685 193.474)",stroke:"url(#paint3_linear)",children:t.jsx("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:t.jsx("mpath",{xlinkHref:"#path_2"})})}),t.jsx("ellipse",{cx:"295.027",cy:"193.118",transform:"translate(-295.027 -193.118)",rx:"1.07306",ry:"1.07433",fill:"#46737",children:t.jsx("animateMotion",{dur:"5s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:t.jsx("mpath",{xlinkHref:"#path_2"})})}),t.jsx("path",{d:"M294.685 193.474L268.932 219.258",transform:"translate(-294.685 -193.474) rotate(45 294.685 193.474)",stroke:"url(#paint7_linear)",children:t.jsx("animateMotion",{dur:"5s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:t.jsx("mpath",{xlinkHref:"#path_2"})})}),t.jsx("ellipse",{cx:"476.525",cy:"363.313",rx:"1.07433",ry:"1.07306",transform:"translate(-476.525 -363.313) rotate(90 476.525 363.313)",fill:"#945DD6",children:t.jsx("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:t.jsx("mpath",{xlinkHref:"#path_0"})})}),t.jsx("path",{d:"M476.171 362.952L450.417 337.168",transform:"translate(-476.525 -363.313) rotate(-45 476.171 362.952)",stroke:"url(#paint4_linear)",children:t.jsx("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:t.jsx("mpath",{xlinkHref:"#path_0"})})}),t.jsx("ellipse",{cx:"382.164",cy:"155.029",rx:"1.07433",ry:"1.07306",transform:"translate(-382.164 -155.029) rotate(90 382.164 155.029)",fill:"#F46737",children:t.jsx("animateMotion",{dur:"10s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:t.jsx("mpath",{xlinkHref:"#path_0"})})}),t.jsx("path",{d:"M381.81 154.669L356.057 128.885",transform:"translate(-381.81 -154.669) rotate(-45 381.81 154.669)",stroke:"url(#paint5_linear)",children:t.jsx("animateMotion",{dur:"10s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:t.jsx("mpath",{xlinkHref:"#path_0"})})}),t.jsx("ellipse",{cx:"333.324",cy:"382.691",rx:"1.07306",ry:"1.07433",transform:"translate(-333.324 -382.691) rotate(-180 333.324 382.691)",fill:"#F46737",children:t.jsx("animateMotion",{dur:"5s",begin:"0",repeatCount:"indefinite",rotate:"auto",children:t.jsx("mpath",{xlinkHref:"#path_1"})})}),t.jsx("path",{d:"M333.667 382.335L359.42 356.551",transform:"scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)",stroke:"url(#paint6_linear)",children:t.jsx("animateMotion",{dur:"5s",begin:"0",repeatCount:"indefinite",rotate:"auto",children:t.jsx("mpath",{xlinkHref:"#path_1"})})}),t.jsx("ellipse",{cx:"165.524",cy:"93.9596",rx:"1.07306",ry:"1.07433",transform:"translate(-165.524 -93.9596)",fill:"#F46737",children:t.jsx("animateMotion",{dur:"10s",begin:"3",repeatCount:"indefinite",rotate:"auto",children:t.jsx("mpath",{xlinkHref:"#path_0"})})}),t.jsx("path",{d:"M165.182 94.3159L139.429 120.1",transform:"translate(-165.182 -94.3159) rotate(45 165.182 94.3159)",stroke:"url(#paint7_linear)",children:t.jsx("animateMotion",{dur:"10s",begin:"3",repeatCount:"indefinite",rotate:"auto",children:t.jsx("mpath",{xlinkHref:"#path_0"})})}),t.jsx("ellipse",{cx:"476.525",cy:"363.313",rx:"1.07433",ry:"1.07306",transform:"translate(-476.525 -363.313) rotate(90 476.525 363.313)",fill:"#13ADC7",children:t.jsx("animateMotion",{dur:"12s",begin:"4",repeatCount:"indefinite",rotate:"auto",children:t.jsx("mpath",{xlinkHref:"#path_0"})})}),t.jsx("path",{d:"M476.171 362.952L450.417 337.168",transform:"translate(-476.525 -363.313) rotate(-45 476.171 362.952)",stroke:"url(#paint11_linear)",children:t.jsx("animateMotion",{dur:"12s",begin:"4",repeatCount:"indefinite",rotate:"auto",children:t.jsx("mpath",{xlinkHref:"#path_0"})})}),t.jsxs("defs",{children:[t.jsxs("radialGradient",{id:"paint0_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)",children:[t.jsx("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),t.jsx("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),t.jsxs("radialGradient",{id:"paint1_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)",children:[t.jsx("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),t.jsx("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),t.jsxs("radialGradient",{id:"paint2_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)",children:[t.jsx("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),t.jsx("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),t.jsxs("linearGradient",{id:"paint3_linear",x1:"295.043",y1:"193.116",x2:"269.975",y2:"218.154",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{stopColor:"#945DD6"}),t.jsx("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})]}),t.jsxs("linearGradient",{id:"paint4_linear",x1:"476.529",y1:"363.31",x2:"451.461",y2:"338.272",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{stopColor:"#945DD6"}),t.jsx("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})]}),t.jsxs("linearGradient",{id:"paint5_linear",x1:"382.168",y1:"155.027",x2:"357.1",y2:"129.989",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{stopColor:"#F46737"}),t.jsx("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})]}),t.jsxs("linearGradient",{id:"paint6_linear",x1:"333.309",y1:"382.693",x2:"358.376",y2:"357.655",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{stopColor:"#F46737"}),t.jsx("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})]}),t.jsxs("linearGradient",{id:"paint7_linear",x1:"165.54",y1:"93.9578",x2:"140.472",y2:"118.996",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{stopColor:"#F46737"}),t.jsx("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})]}),t.jsxs("linearGradient",{id:"paint8_linear",x1:"414.367",y1:"301.156",x2:"439.435",y2:"276.118",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{stopColor:"#13ADC7"}),t.jsx("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})]}),t.jsxs("linearGradient",{id:"paint9_linear",x1:"515.943",y1:"288.238",x2:"541.339",y2:"291.454",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{stopColor:"#13ADC7"}),t.jsx("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})]}),t.jsxs("linearGradient",{id:"paint10_linear",x1:"117.001",y1:"230.619",x2:"117.36",y2:"258.193",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{stopColor:"#945DD6"}),t.jsx("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})]}),t.jsxs("linearGradient",{id:"paint11_linear",x1:"476.529",y1:"363.31",x2:"451.461",y2:"338.272",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{stopColor:"#13ADC7"}),t.jsx("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})]})]})]})}),ge=i.div`
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
`,ue=i.div`
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
`,fe=i.div`
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
`,ye=i.div`
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
`,je=i.img`
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
`,Se=i.div`
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
`,we=i.div`
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
`,ve=i.span`
  color: ${({theme:e})=>e.primary};
  cursor: pointer;
`,Ie=i.div`
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
`,Ve=i.a`
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

`,ke="/portfolio/assets/HeroImage3-8838643a.jpeg",Ee=()=>t.jsx("div",{id:"about",children:t.jsxs(ge,{children:[t.jsx(ue,{children:t.jsx(he,{})}),t.jsxs(fe,{children:[t.jsxs(be,{id:"Left",children:[t.jsxs(Se,{children:["Hi, I am ",t.jsx("br",{})," ",s.name]}),t.jsxs(we,{children:["I am a",t.jsx(ve,{children:t.jsx(T,{options:{strings:s.roles,autoStart:!0,loop:!0}})})]}),t.jsx(Ie,{children:s.description}),t.jsx(Ve,{href:s.resume,target:"display",children:"Check Resume"})]}),t.jsx(ye,{id:"Right",children:t.jsx(je,{src:ke,alt:"hero-image"})})]})]})}),Ue=i.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`,Re=i.div`
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
`,Pe=i.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({theme:e})=>e.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`,qe=i.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`,Ne=i.div`
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


`,ze=i.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({theme:e})=>e.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`,Me=i.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`,Oe=i.div`
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
`,Ge=()=>t.jsx(Ue,{id:"skills",children:t.jsxs(Re,{children:[t.jsx(Le,{children:"Skills"}),t.jsx(Pe,{children:"Here are some of my skills on which I have been working on for the past 2 years."}),t.jsx(qe,{children:le.map((e,n)=>t.jsxs(Ne,{children:[t.jsx(ze,{children:e.title}),t.jsx(Me,{children:e.skills.map((a,r)=>t.jsxs(Oe,{children:[t.jsx(He,{src:a.image}),a.name]},r))})]},n))})]})}),Je=i.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
    
`,Ce=i.div`
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
    
`,Be=i.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({theme:e})=>e.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`,Te=i.div`
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
    ${({active:e,theme:n})=>e&&`
    background: ${n.primary+20};
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
    
`;const Fe=i.div`
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
`,De=i.button`
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
`,We=i.div`
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
    &:hover ${De} {
        display: block;
    }
`,Ye=i.img`
    width: 100%;
    height: 180px;
    background-color: ${({theme:e})=>e.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`,Ke=i.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`,Qe=i.span`
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
`,$e=i.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({theme:e})=>e.text_secondary+80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`,_e=i.div`
    font-weight: 400;
    color: ${({theme:e})=>e.text_secondary+99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`,et=i.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`,tt=i.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({theme:e})=>e.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid ${({theme:e})=>e.card};
`,w=({project:e,setOpenModal:n})=>{var a,r;return t.jsxs(We,{onClick:()=>n({state:!0,project:e}),children:[t.jsx(Ye,{src:e.image}),t.jsx(Ke,{children:(a=e.tags)==null?void 0:a.map((o,A)=>t.jsx(Qe,{children:o},A))}),t.jsxs(Xe,{children:[t.jsx(Ze,{children:e.title}),t.jsx($e,{children:e.date}),t.jsx(_e,{children:e.description})]}),t.jsx(et,{children:(r=e.member)==null?void 0:r.map((o,A)=>t.jsx(tt,{src:o.img},A))})]})},it=({openModal:e,setOpenModal:n})=>{const[a,r]=c.useState("all");return t.jsx(Je,{id:"projects",children:t.jsxs(Ce,{children:[t.jsx(Be,{children:"Projects"}),t.jsx(Te,{children:"Here are some of my projects."}),t.jsxs(Fe,{children:[a==="all"&&S.map((o,A)=>t.jsx(w,{project:o,openModal:e,setOpenModal:n},A)),S.filter(o=>o.category===a).map((o,A)=>t.jsx(w,{project:o,openModal:e,setOpenModal:n},A))]})]})})},at=i.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`,nt=i.div`
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
`,ot=i.div`
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
`;const rt=i.form`
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
`,At=i.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({theme:e})=>e.text_primary};
`,h=i.input`
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
`,st=i.textarea`
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
`,dt=i.input`
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
`,pt=()=>{const[e,n]=u.useState(!1),a=c.useRef(),r=o=>{console.log(a.current),o.preventDefault(),F.sendForm("service_5sj7prw","template_z8nuvrw",a.current,"o71HaDsgKfdgOknGi").then(A=>{n(!0),a.current.reset()},A=>{console.log(A.text)})};return t.jsx(at,{children:t.jsxs(nt,{children:[t.jsx(ot,{children:"Contact"}),t.jsxs(rt,{ref:a,onSubmit:r,children:[t.jsx(At,{children:"Email Me"}),t.jsx(h,{placeholder:"Your Email",name:"from_email",required:!0}),t.jsx(h,{placeholder:"Your Name",name:"from_name",required:!0}),t.jsx(h,{placeholder:"Subject",name:"subject"}),t.jsx(st,{placeholder:"Message",rows:"4",name:"message",required:!0}),t.jsx(dt,{type:"submit",value:"Send"})]}),t.jsx(D,{open:e,autoHideDuration:6e3,onClose:()=>n(!1),message:"Email sent successfully!",severity:"success"})]})})},lt=i.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  //background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
`,xt=i.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({theme:e})=>e.text_primary};
`,ct=i.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({theme:e})=>e.primary};
`,mt=i.nav`
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
`,l=i.a`
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
`,ht=i.div`
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
`,gt=i.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({theme:e})=>e.soft2};
  text-align: center;
`;function ut(){return t.jsx(lt,{children:t.jsxs(xt,{children:[t.jsx(ct,{children:"Mohasin Attar"}),t.jsxs(mt,{children:[t.jsx(l,{href:"#about",children:"About"}),t.jsx(l,{href:"#skills",children:"Skills"}),t.jsx(l,{href:"#experience",children:"Experience"}),t.jsx(l,{href:"#projects",children:"Projects"}),t.jsx(l,{href:"#education",children:"Education"})]}),t.jsxs(ht,{children:[t.jsx(x,{href:s.linkedin,target:"display",children:t.jsx(W,{})}),t.jsx(x,{href:s.facebook,target:"display",children:t.jsx(Y,{})}),t.jsx(x,{href:s.twitter,target:"display",children:t.jsx(K,{})}),t.jsx(x,{href:s.insta,target:"display",children:t.jsx(Q,{})})]}),t.jsx(gt,{children:"© 2023 Mohasin Attar. All rights reserved."})]})})}const P=i.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`,ft=i.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({theme:e})=>e.text_primary+99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,q=i.span`
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

    &:hover ${P}{
        display: flex;
    }

    &:hover ${q}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }

    border: 0.1px solid ${({theme:e})=>e.primary};
    box-shadow: ${({theme:e})=>e.primary+30} 0px 4px 24px;
`,yt=i.div`
    width: 100%;
    display: flex;
    gap: 12px
`,jt=i.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`,St=i.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`,wt=i.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({theme:e})=>e.text_primary+99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`,vt=i.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({theme:e})=>e.text_secondary+99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,It=i.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme:e})=>e.text_secondary+80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`,Vt=i.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -10px;
`,kt=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,Et=i.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({theme:e})=>e.text_primary+99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,Ut=({experience:e})=>{var n;return t.jsxs(bt,{children:[t.jsxs(yt,{children:[t.jsx(jt,{src:e.img}),t.jsxs(St,{children:[t.jsx(wt,{children:e.role}),t.jsx(vt,{children:e.company}),t.jsx(It,{children:e.date})]})]}),t.jsxs(ft,{children:[(e==null?void 0:e.desc)&&t.jsx(q,{children:e==null?void 0:e.desc}),(e==null?void 0:e.skills)&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs(Vt,{children:[t.jsx("b",{children:"Skills:"}),t.jsx(kt,{children:(n=e==null?void 0:e.skills)==null?void 0:n.map((a,r)=>t.jsxs(Et,{children:["• ",a]},r))})]})]})]}),e.doc&&t.jsx("a",{href:e.doc,target:"new",children:t.jsx(P,{src:e.doc})})]})},Rt=i.div`
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
`,Pt=i.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({theme:e})=>e.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`,qt=i.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({theme:e})=>e.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`,Nt=i.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`,zt=()=>t.jsx(Rt,{id:"experience",children:t.jsxs(Lt,{children:[t.jsx(Pt,{children:"Experience"}),t.jsx(qt,{children:"My work experience as a software engineer and working on different companies and projects."}),t.jsx(Nt,{children:t.jsx(V,{children:g.map((e,n)=>t.jsxs(k,{children:[t.jsxs(E,{children:[t.jsx(U,{variant:"outlined",color:"secondary"}),n!==g.length-1&&t.jsx(R,{style:{background:"#854CE6"}})]}),t.jsx(L,{sx:{py:"12px",px:2},children:t.jsx(Ut,{experience:e})})]},n))})})]})}),Mt=i.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`,Ot=i.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({theme:e})=>e.text_primary+99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,N=i.span`
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

    &:hover ${Mt}{
        display: flex;
    }

    &:hover ${N}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }
    border: 0.1px solid ${({theme:e})=>e.primary};
`,Gt=i.div`
    width: 100%;
    display: flex;
    gap: 12px
`,Jt=i.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`,Ct=i.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`,Bt=i.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({theme:e})=>e.text_primary+99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`,Tt=i.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({theme:e})=>e.text_secondary+99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,Ft=i.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme:e})=>e.text_secondary+80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`,Dt=i.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({theme:e})=>e.text_secondary+99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,Wt=({education:e})=>t.jsxs(Ht,{children:[t.jsxs(Gt,{children:[t.jsx(Jt,{src:e.img}),t.jsxs(Ct,{children:[t.jsx(Bt,{children:e.school}),t.jsx(Tt,{children:e.degree}),t.jsx(Ft,{children:e.date})]})]}),t.jsxs(Dt,{children:[t.jsx("b",{children:"Grade: "}),e.grade]}),t.jsx(Ot,{children:t.jsx(N,{children:e.desc})})]}),Yt=i.div`
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
`,Kt=i.div`
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
`,Qt=i.div`
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
`,$t=()=>t.jsx(Yt,{id:"education",children:t.jsxs(Kt,{children:[t.jsx(Qt,{children:"Education"}),t.jsx(Xt,{children:"Journey Through the Halls of Knowledge: From Aspiring Learner to Accomplished Graduate"}),t.jsx(Zt,{children:t.jsx(V,{children:xe.map((e,n)=>t.jsxs(k,{children:[t.jsx(L,{sx:{py:"12px",px:2},children:t.jsx(Wt,{education:e})}),t.jsxs(E,{children:[t.jsx(U,{variant:"outlined",color:"secondary"}),n!==g.length&&t.jsx(R,{style:{background:"#854CE6"}})]})]}))})})]})}),_t=i.div`
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
`,ei=i.div`
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
`,ti=i.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({theme:e})=>e.text_primary};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
      font-size: 24px;
      margin: 6px 6px 0px 6px;
  }
`,ii=i.div`
    font-size: 16px;
    margin: 2px 6px;
    font-weight: 400;
    color: ${({theme:e})=>e.text_secondary};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,ai=i.div`
    font-size: 16px;
    font-weight: 400;
    color: ${({theme:e})=>e.text_primary};
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        margin: 6px 6px;
    }
`,ni=i.img`
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
    margin-top: 30px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
`,oi=i.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({theme:e})=>e.text_primary};
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 16px;
        margin: 8px 6px;
    }
`,ri=i.div`
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0px;
    @media only screen and (max-width: 600px) {
        margin: 4px 0px;
    }
`,Ai=i.div`
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
`,si=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex-wrap: wrap;
    margin: 12px 6px;
    @media only screen and (max-width: 600px) {
        margin: 4px 6px;
    }
`,di=i.div`
    display: flex;
    align-items: center;
    gap: 12px;
`,pi=i.img`
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
`,li=i.div`
    font-size: 16px;
    font-weight: 500;
    width: 200px;
    color: ${({theme:e})=>e.text_primary};
    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
`,xi=i.div`
    display: flex;
    justify-content: flex-end;
    margin: 12px 0px;
    gap: 12px;
`,v=i.a`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: ${({theme:e})=>e.text_primary};
    padding: 12px 16px;
    border-radius: 8px;
    background-color: ${({theme:e})=>e.primary};
    ${({dull:e,theme:n})=>e&&`
        background-color: ${n.bgLight};
        color: ${n.text_secondary};
        &:hover {
            background-color: ${({theme:a})=>a.bg+99};
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
`,ci=({openModal:e,setOpenModal:n})=>{const a=e==null?void 0:e.project;return t.jsx(X,{open:!0,onClose:()=>n({state:!1,project:null}),children:t.jsx(_t,{children:t.jsxs(ei,{children:[t.jsx(Z,{style:{position:"absolute",top:"10px",right:"20px",cursor:"pointer"},onClick:()=>n({state:!1,project:null})}),t.jsx(ni,{src:a==null?void 0:a.image}),t.jsx(ti,{children:a==null?void 0:a.title}),t.jsx(ii,{children:a.date}),t.jsx(ri,{children:a==null?void 0:a.tags.map((r,o)=>t.jsx(Ai,{children:r},o))}),t.jsx(ai,{children:a==null?void 0:a.description}),a.member&&t.jsxs(t.Fragment,{children:[t.jsx(oi,{children:"Members"}),t.jsx(si,{children:a==null?void 0:a.member.map((r,o)=>t.jsxs(di,{children:[t.jsx(pi,{src:r.img}),t.jsx(li,{children:r.name}),t.jsx("a",{href:r.github,target:"new",style:{textDecoration:"none",color:"inherit"},children:t.jsx($,{})}),t.jsx("a",{href:r.linkedin,target:"new",style:{textDecoration:"none",color:"inherit"},children:t.jsx(_,{})})]},o))})]}),t.jsxs(xi,{children:[t.jsx(v,{dull:!0,href:a==null?void 0:a.github,target:"new",children:"View Code"}),t.jsx(v,{href:a==null?void 0:a.webapp,target:"new",children:"View Live App"})]})]})})})},mi=i.div`
  background-color: ${({theme:e})=>e.bg};
  width: 100%;
  overflow-x: hidden;
`,I=i.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;function hi(){const[e,n]=c.useState(!0),[a,r]=c.useState({state:!1,project:null});return t.jsx(O,{theme:e?ee:te,children:t.jsxs(H,{children:[t.jsx(ce,{setDarkMode:n,darkMode:e}),t.jsxs(mi,{children:[t.jsx(Ee,{}),t.jsxs(I,{children:[t.jsx(Ge,{}),t.jsx(zt,{})]}),t.jsx(it,{openModal:a,setOpenModal:r}),t.jsxs(I,{children:[t.jsx($t,{}),t.jsx(pt,{})]}),t.jsx(ut,{}),a.state&&t.jsx(ci,{openModal:a,setOpenModal:r})]})]})})}z.createRoot(document.getElementById("root")).render(t.jsx(u.StrictMode,{children:t.jsx(hi,{})}));
