const AboutMe = () => {
  return (
    <>
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
          amazing experience and the more I code and learn, the more I love it.
        </p>

        <p>
          I'm looking for the opportunity to join a team where I can contribute
          my passion for coding, and to be part of something great.
        </p>

        <p>
          Some fun facts about me is that I am an avid reader, and rock climber,
          and I also love to have a good time hanging out with friends, and
          learning new languages (the more I learn, the more people I can talk
          to!).
        </p>

        <ul>
          Something cool that I have acheived:
          <li>
            I summited the tallest mountain in Africal: Mount Kilimanjaro...
            when I have my heart set on something, I will work toward it until I
            succeed, be it scaling a mountain, or learning something new.
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
          I am working on creating more front-end and full-stack projects to add
          to my portfolio.
        </p>
        <div>"What is your favourite game"</div>
        <p>
          I love a good "cozy" game, like Animal Crossing, Coral Island, and
          Stray. My all time favourite though is Stardew Valley, and the more I
          have learnt to code, the more I appreciate how it was developped by a
          single developer, ConcernedApe (aka Eric Barone), and I highly admire
          that.
        </p>
      </div>
    </>
  );
};

export default AboutMe;