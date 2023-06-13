import "./App.css";

function App() {
  return (
    <div className="App">
      <hero>
        <header id="header">
          <h1 className="title left text-gray-50">Kat De Mey</h1>
          <div className="Nav-buttons right">
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
          </div>
        </header>

        <div className="self-intro pt-36 pb-20 ">
          <h1 className="text-5xl text-gray-50 ">
            Hiring A Full Stack Developer?
          </h1>
          <h2 className="text-xl text-gray-50">
            Hi, I'm Kat I am a junior full stack developer based in Leamington
            Spa, UK.
          </h2>
          <p className="text-gray-50">
            Aiming to become the <scan>best</scan> and work for the best.
          </p>
          <p className="text-gray-50">
            {" "}
            Skills in <scan>React,</scan> <scan>JS,</scan>
            <scan>HTML</scan> and <scan>CSS</scan>
          </p>
        </div>
      </hero>

      <main>
        {/* ABOUT ME */}
        <div className="page about-me" id="about-me">
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/0d/87/44/54/uhuru-peak-tanzania-mount.jpg"
            alt="Uhuru peak on kilimanjaro"
          />
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
              I succeed, be it scaling a mountain, or learning something new.
            </li>
          </ul>
        </div>

        <div className="page" id="FAQs">
          <h2>FAQs:</h2>
          <div>"What are you currently learing?"</div>
          <p>
            Currently I am exploring Typescript, TailWind, and specialised react
            libraries
          </p>
          <div>"what are you currently working on?"</div>
          <p>
            I am working on creating more front-end and full-stack projects to
            add to my portfolio.
          </p>
          <div>"What is your favourite game"</div>
          <p>
            I love a good "cozy" game, like Animal Crossing, Coral Island, and
            Stray. My all time favourite though is Stardew Valley, and the more
            I have learnt to code, the more I appreciate how it was developped
            by a single developer, ConcernedApe (aka Eric Barone), and I highly
            admire that.
          </p>
        </div>

        {/* PORTFOLIO */}
        <div className="page portfolio" id="portfolio">
          <h1>Portfolio</h1>
          <div className="container">
            <div className="Item1">
              <h2>BookStat</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                iste numquam perferendis, quae eius, deleniti odio, ipsam error
                placeat optio molestias cum exercitationem. Ullam debitis
                aspernatur vitae non mollitia saepe.
              </p>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noreferrer"
              >
                <p className="read-more">Read More</p>
              </a>
              <a
                href="https://github.com/Cloudy-96/BookStat-App"
                target="_blank"
                rel="noreferrer"
              >
                Git Hub Repo
              </a>
            </div>
            <div className="Item2">
              <h2>GhibVerse</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                iste numquam perferendis, quae eius, deleniti odio, ipsam error
                placeat optio molestias cum exercitationem. Ullam debitis
                aspernatur vitae non mollitia saepe.
              </p>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noreferrer"
              >
                <p className="read-more">Read More</p>
              </a>
              <a
                href="https://github.com/Cloudy-96/GhibVerse"
                target="_blank"
                rel="noreferrer"
              >
                Git Hub Repo
              </a>
            </div>
            <div className="Item3">
              <h2>ClimbIt</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                iste numquam perferendis, quae eius, deleniti odio, ipsam error
                placeat optio molestias cum exercitationem. Ullam debitis
                aspernatur vitae non mollitia saepe.
              </p>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noreferrer"
              >
                <p className="read-more">Read More</p>
              </a>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noreferrer"
              >
                Git Hub Repo
              </a>
            </div>
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="page experience">
          <h1>Experience</h1>
          <div className="skills">
            <h3>Tech Stack</h3>
            <ul>
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
            </ul>
          </div>
          <div className="skills">
            <h3>Learning</h3>
            <ul>
              <li>TailWind</li>
              <li>Typescript</li>
            </ul>
          </div>
          <p></p>
        </div>
        {/* CONTACT */}
        <div className="page Contact" id="contact">
          <h2>Where you can find me</h2>
          <ul>
            <li>github</li>
            <li>linkedIn</li>
            <li>email</li>
          </ul>
          {/* </div>
        <div> */}
          <h2>Say hi!</h2>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Message" />
        </div>
      </main>

      {/* TODO: position this over each page
      <a className="to-top" href="#header">
        ^
      </a>
       */}
    </div>
  );
}

export default App;
