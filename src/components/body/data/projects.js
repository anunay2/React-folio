export const projectData = [
  {
    id: 1,
    title: "Job-Heist",
    about:
      "Microservices based Job hunting webapp.Features of JWT authentication,profile pages,skill matching.Implemented ELK stack to view logs and dockerized the app",
    tags: [
      { name: "Angular", link: "", icon:"devicon-angularjs-plain colored"},
      { name: "SpringBoot", link: "",icon:"devicon-spring-plain colored"},
      { name: "MongoDB", link: "" ,icon:"devicon-mongodb-plain-wordmark colored"},
      { name: "Docker", link: "", icon:"devicon-docker-plain colored" },
      { name: "RabbitMQ", link: "", icon:"" },
      { name: "ELK", link: "" },
    ],
    github: "https://github.com/anunay2/JobHiest",
    image: require("../../../assets/project2.png").default,
    doc:"https://drive.google.com/file/d/1XmWAL9Rf52dY0tUyuCzc_uKrsaVIwRg6/view",
  },
  {
    id: 2,
    title: "Amazon Clone",
    about:
      "React based Amazon Clone .Features of authentication,stripe payment,user profile,order history",
    tags: [
      { name: "React", link: "" },
      { name: "Firebase", link: "" },
      { name: "NodeJS", link: "" },
    ],
    github: "https://github.com/anunay2/amazon-clone/tree/master",
    demo: "https://challenge-1db10.web.app/",
    image: require("../../../assets/project1.png").default,
  },
];
