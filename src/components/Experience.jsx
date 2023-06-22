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
  FigmaSVG,
} from "../svgs/tech-skills";

const Experience = () => {
  return (
    <>
      <div className="flex-row experience">
        <div>
          <h1 className="font-mono text-6xl my-7">Experience</h1>
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
