import "./aboutMe.css";
import { FiChevronDown } from "react-icons/fi";

const AboutMe = () => {
  return (
    <>
      <div className="About grid-rows-2 grid-rows-2 py-16">
        <div
          className=" about-me grid grid-cols-2 gap-3  place-items-center"
          id="about-me"
        >
          <img
            className="hideInMobView shadow-2xl pr-0"
            src="https://media-cdn.tripadvisor.com/media/photo-s/0d/87/44/54/uhuru-peak-tanzania-mount.jpg"
            alt="Uhuru peak on kilimanjaro"
          />
          <section className="pr-12 ">
            <h1 className="font-mono text-6xl my-7">About Me: </h1>
            <p>
              After having studied many subjects, I like to think of myself as a
              jack-of-many-trades, and in this past year I've been immersed in a
              full time online software developer bootcamp. It has been a truly
              amazing experience and the more I code and learn, the more I love
              it. Now I am a junior full stack developer with a passion for
              turning UI/UX designs into functional and elegant code.
            </p>
            <br />
            <p>
              I'm looking for the opportunity to join a team where I can
              contribute my passion for coding, and to be part of something
              great.
            </p>

            <p>
              Some fun facts about me is that I am an avid reader, and rock
              climber, and I also love to have a good time hanging out with
              friends, and learning new languages (the more I learn, the more
              people I can talk to!)
            </p>

            <br />

            <img
              className="showInMobView hidden shadow-2xl pr-0"
              src="https://media-cdn.tripadvisor.com/media/photo-s/0d/87/44/54/uhuru-peak-tanzania-mount.jpg"
              alt="Uhuru peak on kilimanjaro"
            />

            <br />

            <ul className="font-semibold">
              Something cool that I have acheived:
              <li className="font-normal">
                I summited the tallest mountain in Africa: Mount Kilimanjaro...
                when I have my heart set on something, I will work toward it
                until I succeed, be it scaling a mountain, or learning something
                new.
              </li>
            </ul>
          </section>
        </div>

        <div className="accordian my-12 block bg-gray-100 py-10" id="FAQs">
          <h2 className="font-mono text-6xl my-7">FAQs:</h2>
          <ul id="accordian">
            <li>
              <label for="first">
                "What are you currently learning?"{" "}
                <span>
                  <FiChevronDown />
                </span>
              </label>
              <input type="radio" name="accordian" id="first" />
              <div className="content">
                <p>
                  Currently I am exploring Typescript, TailWind, and specialised
                  react libraries
                </p>
              </div>
            </li>
            <li>
              <label for="second">
                "What are you currently working on?"{" "}
                <span>
                  <FiChevronDown />
                </span>
              </label>
              <input type="radio" name="accordian" id="second" />
              <div className="content">
                <p>
                  I am working on creating more front-end and full-stack
                  projects to add to my portfolio.
                </p>
              </div>
            </li>{" "}
            <li>
              <label for="third">
                "What is your favourite game"{" "}
                <span>
                  <FiChevronDown />
                </span>
              </label>
              <input type="radio" name="accordian" id="third" />
              <div className="content">
                <p>
                  I love a good "cozy" game, like Animal Crossing, Coral Island,
                  and Stray. My all time favourite though is Stardew Valley, and
                  the more I have learnt to code, the more I appreciate how it
                  was developped by a single developer, ConcernedApe (aka Eric
                  Barone), and I highly admire that.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
