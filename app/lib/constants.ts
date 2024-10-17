import { Item, Services } from "../types";


export const projects: Item[] = [
    {
      id: 1,
      name: "URL shortener",
      desc: "An APP that creates a short version of a long URL, that can be easily shared with friends or for official purpose.",
      imgSrc: "URLShortener.png",
      stack: "Nodejs, Express, Nestjs, MongoDb",
      link: "https://short-clicks-frontend.vercel.app/",
    },
    {
      id: 2,
      name: "Restaurant Chat Bot",
      desc: "A chatbot built with Express and Socket.io to handle real-time user interaction.",
      imgSrc: "Restaurant-bot.png",
      stack: "HTML, CSS, Nodejs, Expressjs, Socket.io.",
      link: "https://bot.hostless.app/",
    },
    {
      id: 3,
      name: "Admin dashboard",
      desc: "A dashboard displaying details of a logged-in user using a dummy backend data. It has several pages populated with data. I did this project while following a tutorial.",
      imgSrc: "dashboard.png",
      stack: "React.js, CSS",
      link: "https://first-admin-dashboard.vercel.app/",
    },
    {
      id: 4,
      name: "Country display website",
      desc: "A mobile responsive website that allows you to see various country and continents in the world. You could search a country by name or use a filter section to filter by continents.",
      imgSrc: "country-display.png",
      stack: "React, tailwind CSS, Typescript, Rest country API",
      link: "https://country-display-search.vercel.app/",
    },
    {
      id: 5,
      name: "Game list App",
      desc: "A website that displays trending games from rawg.io API.",
      imgSrc: "video-game-list.png",
      stack: "React, CSS, rawg video API",
      link: "https://game-list-app.vercel.app/",
    },
    {
      id: 6,
      name: "Blogging App",
      desc: "An APP with CRUD end points that logged in user could effectively interact with. It was built as an examination while studying nodejs with Altschool Africa. It has protected routes with authentications and authorization.",
      imgSrc: "blogStar.png",
      stack: "Node.js, Express, MongoDB, EJS, HTML, CSS.",
      link: "https://blogstar.onrender.com",
    },
  ];

  export const skills: string[] = [
    "JavaScript",
    "TypeScript",
    "React",
    "Bootstrap",
    "Tailwind CSS",
    "Daisyui",
    "Next.js",
    "Node.js",
    "Express",
    "Nest.js",
    "SQL",
    "MongoDB",
    "Git",
    "REST APIs",
    "Web Socket",
    "Learning Docker",
  ];

  export const services: Services[] = [
    {
      title: "Frontend Development",
      list: [
        {
          name: "Responsive UI Design",
          desc: "Craft visually appealing and responsive interfaces using JavaScript, TypeScript, React, Bootstrap, Tailwind CSS, and DaisyUI, ensuring your web applications look great across devices.",
        },
        {
          name: "Next.js Expertise",
          desc: "Build optimized, SEO-friendly web applications with Next.js, leveraging its powerful server-side rendering and static site generation features for faster load times and better user experience.",
        },
      ],
    },
    {
      title: "Backend Development",
      list: [
        {
          name: "Server-Side Logic",
          desc: "Develop robust and scalable server-side applications using Node.js, Express, and Nest.js, ensuring your backend is efficient and secure.",
        },
        {
          name: "Database Management",
          desc: "Design and manage databases using SQL and MongoDB, ensuring structured and unstructured data is handled efficiently with performance in mind.",
        },
        {
          name: "REST APIs & Web Sockets",
          desc: "Create and maintain RESTful APIs and real-time communication channels using Web Sockets, providing seamless interaction between frontend and backend systems.",
        },
      ],
    },
    {
      title: "Full Stack Capabilities",
      list: [
        {
          name: "End-to-End Application Development",
          desc: "Build full-fledged web applications from the ground up, integrating frontend and backend technologies to create a smooth, cohesive product.",
        },
        {
          name: "Version Control & Collaboration",
          desc: " Use Git for effective version control, ensuring clean code management and seamless team collaboration on projects.",
        },
        {
          name: "Learning & Adopting Docker",
          desc: "Continuously expanding my toolkit by learning Docker to implement containerization for easier deployment and consistent environments.",
        },
      ],
    },
  ];