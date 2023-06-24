import { Testing } from "../svgs/tech-stack";

const projects = [
  {
    name: "BookStat App",
    about:
      "This project was created as a nod to my love of reading and tracking books. BookStat acts as a digital book-journal which allows users to log information in a way that suits them.",
    img: "",
    readMoreUrl: "",
    gitHub: "https://github.com/Cloudy-96/BookStat-App",
    techStack: ["JavaScript", "React.js", "HTML", "CSS"]
  },
  {
    name: "GhibVerse",
    about:
      "An (un)official Studio Ghibili Movie wiki page for fans who want to browse through information on these beautiful animated films",
    img: "",
    readMoreUrl: "",
    gitHub: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    techStack: ["JavaScript", "React.js", "HTML", "CSS", "Typescript"]
  },
  {
    name: "Junior Dev Portfolio",
    about: "This very site",
    img: "",
    readMoreUrl: "",
    gitHub: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    techStack: ["JavaScript", "React.js", "HTML", "CSS", "Tailwind"]
  },
  {
    name: "ClimbIt App",
    about:
      "Coming soon... an app for boulderers (rock climbers) that want to keep a record of each of their climbs.",
    img: "",
    readMoreUrl: "",
    gitHub: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    techStack: ["JavaScript", "React.js", "HTML", "CSS", "..."]
  },
];

const Portfolio = () => {
  return (
    <>
      <div
        className="portfolio grid-rows-2 object-contain
      mx-2.5
      p-12
      content-center"
        id="portfolio"
      >
        <h1 className="font-mono text-6xl my-7">Portfolio</h1>
        <Testing />
        <div className=" flex justify-center overflow-x-visible">
          <ul className="flex scrolling-touch">
            {projects.map((project) => (
              <li
                key="project.id"
                className="p-8 mt-10 bg-rose-50 shadow-xs  rounded-md m-2 w-80"
              >
                <h2 className="text-xl font-semibold m-4">{project.name}</h2>
                <p className="m-4">{project.about}</p>
                <div>
                  <a
                    className="cursor-pointer"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read More
                  </a>
                  <br />
                  <a
                    className="cursor-pointer"
                    href={project.gitHub}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Portfolio;