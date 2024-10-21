import { Item, Services, Skill } from "../types";

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

export const skills: Skill[] = [
  { src: "/JS.avif", desc: "JavaScript" },
  { src: "/type.png", desc: "TypeScript" },
  { src: "/react3.png", desc: "React" },
  { src: "/bootstrap.png", desc: "Bootsrap" },
  { src: "/tailwind.png", desc: "Tailwind CSS" },
  { src: "/daisy.png", desc: "Daisyui" },
  { src: "/Next.jpeg", desc: "Nextjs" },
  { src: "/Node.svg", desc: "Node.js" },
  { src: "/express.png", desc: "Express" },
  { src: "/nestjs.png", desc: "Nestjs" },
  { src: "/sql.png", desc: "SQL" },
  { src: "/mDB.png", desc: "MongoDB" },
  { src: "/git.png", desc: "Git" },
  { src: "/Rest.png", desc: "Rest API" },
  { src: "/websoket2.png", desc: "Web Socket" },
  { src: "/docker.png", desc: "Learning Docker" },
];

export const services: Services[] = [
  {
    title: "Frontend Development",
    backgroundImage: "bg-[url(/carousel/slide1.jpg)]",
    list: [
      {
        name: "Responsive UI Design",
        desc: "Craft visually stunning, responsive interfaces that work flawlessly across all devices",
      },
      {
        name: "Next.js Expertise",
        desc: "Build SEO-friendly web applications with Next.js, optimizing performance with server-side rendering and static site generation",
      },
    ],
  },
  {
    title: "Backend Development",
    backgroundImage: "bg-[url(/carousel/slide2.jpg)]",
    list: [
      {
        name: "Server-Side Logic",
        desc: "Develop secure, scalable backends using Node.js, Express, and Nest.js to ensure efficient server-side performance",
      },
      {
        name: "Database Management",
        desc: "Design and manage databases with SQL and MongoDB, handling both structured and unstructured data for optimal performance",
      },
      {
        name: "REST APIs & Web Sockets",
        desc: "Create RESTful APIs and real-time communication with WebSockets, ensuring smooth interactions between frontend and backend systems.",
      },
    ],
  },
  {
    title: "Full Stack Capabilities",
    backgroundImage: "bg-[url(/carousel/slide3.jpg)]",
    list: [
      {
        name: "End-to-End Application Development",
        desc: "Deliver full-stack solutions that seamlessly integrate frontend and backend technologies for a cohesive user experience",
      },
      {
        name: "Version Control & Collaboration",
        desc: "Leverage Git for version control, promoting clean code management and collaboration",
      },
      {
        name: "Learning & Adopting Docker",
        desc: "Continuously growing by learning Docker for streamlined deployments and consistent development environments",
      },
    ],
  },
];
