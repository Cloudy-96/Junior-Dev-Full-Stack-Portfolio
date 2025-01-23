import "./aboutMe.css";
import { FiChevronDown } from "react-icons/fi";
import Kat from "../assets/Torii2.jpg"
const AboutMe = () => {
  return (
    <>
      <div className="h-3/4 w-3/4 m-auto p-10 xl:p-20 gap-x-10 shadow-xl rounded-md bg-slate-300 items-center">
        <div
          className="about-me grid md:grid-cols-2 gap-4  place-items-center"
          id="about-me"
        >
          <div className="hideInMobView shadow-2xl pr-0 h-[450px] w-[100%] max-w-[350px] rounded-full border-2 border-black overflow-hidden">
            <img
              className="pr-0 size-[100%]"
              src={Kat}
              alt="Kat and some torri gates"
            />
          </div>
          <section className="">
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


            <br />

            <ul className="font-semibold">
              A fun fact about myself:
              <li className="font-normal">
                I summited the tallest mountain in Africa: Mount Kilimanjaro!
                When I have my heart set on something, I will work toward it
                until I succeed, be it scaling a mountain, or learning something
                new.
              </li>
            </ul>
          </section>
        </div>
      </div>

      <div className="accordian my-12 bg-gray-100 py-6" id="FAQs">
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
                I am working on creating more front-end and full-stack projects to add to my portfolio.
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
                I love a good "cozy" game, like Animal Crossing, Coral Island, and Stray. My all time favourite though is Stardew Valley, and the more I have learnt to code, the more I appreciate how it was developped by a single developer, ConcernedApe (aka Eric Barone), and I highly admire that.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AboutMe;
