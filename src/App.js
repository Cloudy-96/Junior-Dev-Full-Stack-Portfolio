import "./App.css";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { BackToTop } from "./svgs/up-arrow-svgrepo-com";

function App() {
  return (
    <div className="App">
      <hero>
        <header className="relative" id="header">
          <h1 className="title left text-gray-50">Kat De Mey</h1>
          <nav className="Nav-buttons right">
            <div className="about-me-button">
              <a href="#about-me">About Me</a>
            </div>
            <div className="FAQs-button">
              <a href="#FAQs">FAQs</a>
            </div>
            <div>
              <a href="#portfolio">Portfolio</a>
            </div>
            <div>
              <a href="#experience">Experience</a>
            </div>
            <div>
              <a href="#contact">Contact</a>
            </div>
          </nav>
        </header>

        <div className="self-intro pt-36 pb-20 ">
          <h1 className="text-5xl text-gray-50 ">
            Hiring A Full Stack Developer?
          </h1>
          <div className="text-xl text-gray-50 p-6">
            <p className="text-gray-50">
              Hi I'm Kat, a junior full stack developer based in Leamington Spa,
              UK.
            </p>
            <p className="text-gray-50">
              Aiming to become the <scan>best</scan> and work for the best.
            </p>
            <p className=" text-gray-50">
              {" "}
              I specialize in <scan>React</scan>, <scan>JavaScript</scan>,
              <scan> HTML</scan>, <scan>CSS</scan>, <scan>Node.js</scan>, and
              <scan> postgreSQL</scan>.
            </p>
          </div>
        </div>
      </hero>

      <main className="bg-slate-50">
        <a
          href="#header"
          className="fixed mx-5 h-16 w-16 rounded-xl -right-0.5 no-underline text-3xl bg-pink-900 bg-opacity-60 flex items-center justify-center items-end"
        >
          <BackToTop />
        </a>

        {/* ABOUT ME */}
        <AboutMe />

        {/* PORTFOLIO */}
        <Portfolio />

        {/* EXPERIENCE */}
        <Experience />

        {/* CONTACT */}
        <Contact />
      </main>
    </div>
  );
}

export default App;
