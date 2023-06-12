import "./App.css";

function App() {
  return (
    <div className="App">
      <hero className="App-header">
        <header className="title">
          <h1>Kat De Mey</h1>
        </header>
        <div className="Nav-buttons">
          <div className="about-me-button">
            <a href="#about-me">About Me</a>
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
        </div>

        <div class="landing-page-body">
          <h1>Hiring A</h1>
          <h1>Full Stack</h1>
          <h1>Developer?</h1>
          <h2>
            Hi, I'm Kat I am a full stack developer based in Leamington Spa, UK.
          </h2>
          <p>
            the <scan>best</scan> junior full stack developers you have ever
            seen mate. Skills in <scan>React,</scan> <scan>JS,</scan>
            <scan>HTML</scan> and <scan>CSS</scan>
          </p>
        </div>
      </hero>

      <main>
        <div class="about-me" id="about-me">
          <h1>About Me</h1>
          <h2>Introduction</h2>
          <p>
            After having studied many subjects, I like to think of myself as a
            jack-of-many-trades, and in this past year I've been immersed in a
            full time online software developer bootcamp. It has been a truly
            amazing experience and the more I code and learn, the more I love
            it.
          </p>

          <p>
            I'm looking for the opportunity to join a team where I can
            contribute my passion for coding, and to be part of something great.
          </p>

          <p>
            Some fun facts about me is that I am an avid reader, and rock
            climber, and I also love to have a good time hanging out with
            friends, and learning new languages (the more I learn, the more
            people I can talk to!).
          </p>

          <ul>
            Something cool that I have acheived:
            <li>
              I summited the tallest mountain in Africal: Mount Kilimanjaro...
              when I have my heart set on something, I will work toward it until
              I succeed, be it learning something new, or scaling a mountain
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
