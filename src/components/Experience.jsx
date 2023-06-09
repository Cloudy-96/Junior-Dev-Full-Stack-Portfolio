import {
  ReactSVG,
  JavascriptSVG,
  TypescriptSVG,
  HtmlSVG,
  CssSVG,
  NodeSVG,
  TailwindSVG,
  JwtSVG,
  ExpressJsSVG,
  JiraSVG,
  GitSVG,
} from "../svgs/tech-skills";
import "./Experience.css"
const Experience = () => {
  return (
    <>
      <div
        id="experience"
        className="flex-row experience bg-gray-100 py-10 place-items-center "
      >
        <div className="py-4 flex-row  justify-center">
          <h1 className="font-mono text-6xl my-7">Experience</h1>
        </div>

        <div className="p-20 max-w-5xl text-left mx-auto">
          <p>
            Completed a full-time 6-month training program as a full stack
            developer at Boolean Coding Academy. Worked on various projects that
            taught me how to turn user requirements into software and work
            through the full development cycle using React, JavaScript, RESTful
            APIs, and PostgreSQL.
          </p>
          <br />
          <p>
            Have dedicated over 900 hours of study and work on various projects
            which have included building:
          </p>
          <ul className="experienceUL px-20 list-disc">
            <li> responsive websites</li>
            <li> creating dynamic front-end and web applicationss</li>
            <li> designing, creating and using databases</li>
            <li> writing and maintaining documentation for APIs</li>
          </ul>
        </div>

        <div className="skills">
          <h3 className="text-xl font-semibold m-10">Tech Stack</h3>

          <div className="flex justify-center gap-5">
            <ReactSVG />
            <JavascriptSVG />
            <HtmlSVG />
            <CssSVG />
            <NodeSVG />
            <JwtSVG />
            <ExpressJsSVG />
            <JiraSVG />
            <GitSVG />
          </div>
          {/* <ul>
            <li>HTML & CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>TDD</li>
            <li>OOP</li>
            <li>Agile</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>VS Code</li>
          </ul> */}
        </div>

        <div className="skills">
          <h3 className="text-xl  font-semibold m-10">Learning</h3>
          <div className="flex justify-center gap-5">
            <div>
              <TailwindSVG />
            </div>
            <div>
              <TypescriptSVG />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
