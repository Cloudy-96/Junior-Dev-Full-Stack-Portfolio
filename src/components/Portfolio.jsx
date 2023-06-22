import { Testing } from "../svgs/tech-stack";

const Portfolio = () => {
  return (
    <>
      {/* <header className="relative" id="header">
        <h1 className="title left text-purple-color: #7C3AED;">Kat De Mey</h1>
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
      </header> */}
      <div
        className="portfolio grid-rows-2 object-contain
      mx-2.5
      p-12
      content-center"
        id="portfolio"
      >
        <h1 className="font-mono text-6xl my-7">Portfolio</h1>
        <Testing />
        <div className=" flex gap-3 ">
          <div className="border-2 border-green-700">
            <h2 className="secondary-heading">BookStat</h2>
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
              <button className="bg-blue-300">
                {/* <p className="read-more"> */}
                Read More
                {/* </p> */}
              </button>
            </a>
            <a
              href="https://github.com/Cloudy-96/BookStat-App"
              target="_blank"
              rel="noreferrer"
            >
              Git Hub Repo
            </a>
          </div>
          <div className="border-2 border-red-500">
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
          <div className="border-2 border-yellow-200">
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
    </>
  );
};

export default Portfolio;
