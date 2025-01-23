import { Testing } from "../svgs/tech-stack";
import "./Portfolio.css";
// import AOPD from "../assets/AOPD.png";
import BookStat from "../assets/homepage.png";

import OBBWeb from "../assets/OBBWeb.png"
import AppleDl from "../assets/apple-dl.png";
import GooglePlay from "../assets/googleplay.png";
import screenShot from "../assets/mobile-screenshot.png";

const projects = [
  {
    name: "BookStat App",
    about:
      "This project was created as a nod to my love of reading and tracking books. BookStat acts as a digital book-journal which allows users to log information in a way that suits them.",
    img: BookStat,
    readMoreUrl: "https://github.com/Cloudy-96/bookstat-server",
    gitHub: "https://github.com/Cloudy-96/BookStat-App",
    techStack: ["JavaScript", "React.js", "HTML", "CSS"],
  },
  // {
  //   name: "GhibVerse",
  //   about:
  //     "An (un)official Studio Ghibili Movie wiki page for fans who want to browse through information on these beautiful animated films",
  //   img: "",
  //   readMoreUrl: "",
  //   gitHub: "https://github.com/Cloudy-96/GhibVerse",
  //   techStack: ["JavaScript", "React.js", "HTML", "CSS", "Tailwind"],
  // },
  // {
  //   name: "NASA's Astronomy Image of the Day",
  //   about:
  //     "A redesign of NASA's own page, allowing me to explore UI. Using NASA's API this page loads a new image related to astronomy and shares an explanation of what is being shown.",
  //   img: AOPD,
  //   readMoreUrl: "https://stars-of-the-day-git-master-cloudy-96.vercel.app/",
  //   gitHub: "https://github.com/Cloudy-96/Stars-of-the-day",
  //   techStack: ["JavaScript", "React.js", "HTML", "CSS", "Tailwind"],
  // },
  // {
  //   name: "ClimbIt App",
  //   about:
  //     "Coming soon... an app for rock climbers that want to keep a record of each of their climbs.",
  //   img: "",
  //   readMoreUrl: "",
  //   gitHub: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //   techStack: ["JavaScript", "React.js", "HTML", "CSS", "..."],
  // },
];
const OBB = [
  {
    id: 0,
    name: "Oh Baby! Games",
    about:
      "This project was created as a nod to my love of reading and tracking books. BookStat acts as a digital book-journal which allows users to log information in a way that suits them.",
    img: OBBWeb,
    readMoreUrl: "https://www.ohbabygames.com/",
  },
  {
    id: 1,
    name: "Oh Baby! Mobile",
    about: "Developed for both ios and Android",
    img: screenShot,
    readMoreUrl:
      "https://play.google.com/store/apps/details?id=com.obbgames.obbmobile&pli=1",
  },
];

const Portfolio = () => {
  return (
    <>
      <div
        id="portfolio"
        className="h-3/4 w-3/4 m-auto p-10 xl:p-20 gap-x-10 shadow-xl rounded-md bg-slate-300 items-center"
      >
        <div className="justify-center z-1">
          <h1 className="font-mono text-6xl my-7">Portfolio: </h1>
          {/* <Testing className="h-11 z-0 translate-y-[-10%] border" /> */}
        </div>

        <div className=" flex-col justify-center max-w-1/2 lg:mx-auto space-y-6 min-w-fit">
          <ul className="portfolio-ul flex gap-6 ">
            {projects.map((project) => (
              <li className="p-8 bg-rose-50 shadow-xs rounded-md m-2 grid mx-auto w-[390px] md:w-[100%]">
                <h2 className="text-xl font-semibold m-4">{project.name}</h2>
                <img
                  className="w-96 h-40 mx-auto"
                  src={project.img}
                  alt={`${project.name} snapshot coming soon`}
                />
                <p className="m-4">{project.about}</p>
                <div>
                  <a
                    className="cursor-pointer"
                    href={
                      project.readMoreUrl
                        ? project.readMoreUrl
                        : "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    See more
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

                  <div className="flex my-2 mx-auto">
                    <ul className="flex gap-5 mx-auto my-2">
                      {project.techStack.map((stack) => (
                        <li className="border border-current p-1 rounded self-center">
                          {stack}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <ul className="portfolio-ul flex gap-6">
            <li className="shadow-dark-primary bg-opacity-[60%] bg-dark-primary md:shadow-md rounded-md m-2 grid mx-auto w-fit max-w-[400px] cursor-pointer">
              <a
                className="cursor-pointer underline w-[190px] md:w-[100%]"
                href={
                  OBB[0].readMoreUrl
                    ? OBB[0].readMoreUrl
                    : "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                }
                target="_blank"
                rel="noreferrer"
              >
                <h2 className="text-xl font-semibold m-4 ">{OBB[0].name}</h2>
                <img
                  className="rounded-md max-w-[100%] "
                  src={OBB[0].img}
                  alt={`${OBB[0].name} snapshot coming soon`}
                />
                <p className="hidden m-4 text-dark-txt">{OBB[0].about}</p>
              </a>
            </li>

            <li className="shadow-dark-primary bg-opacity-[60%] bg-dark-primary md:shadow-md rounded-md m-2 grid mx-auto w-fit max-w-[400px]h-[100%]">
              <h2 className="text-xl font-semibold m-4 cursor-pointer">
                {OBB[1].name}
              </h2>
              <div className="grid md:flex gap-2 h-[100%] bg-slate-200 rounded-lg w-[190px] md:w-[100%]">
                <img
                  className="rounded-md max-h-[200px] md:h-[400px] md:max-h-[100%] cursor-pointer border-black border-2 m-1"
                  src={OBB[1].img}
                  alt={`${OBB[1].name}`}
                />
                <div className="*:rounded-lg w-[100px] md:w-[100%] space-y-2 flex-col p-1 *:cursor-pointer my-auto">
                  <img
                    className="rounded-md w-[100%]"
                    src={AppleDl}
                    alt="Download on apple w-[100%]"
                  />{" "}
                  <img
                    className="rounded-md"
                    src={GooglePlay}
                    alt="Download on google"
                  />
                </div>
              </div>
              <p className="hidden m-4 text-dark-txt">{OBB[1].about}</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
