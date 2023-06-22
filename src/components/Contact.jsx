import { LinkedInSVG, GithubSVG } from "../svgs/socials";

const Contact = () => {
  return (
    <>
      <div className="Contact" id="contact">
        <h2 className="font-mono text-6xl my-7">Where you can find me</h2>
        <h2>Say hi!</h2>
        <div className="flex justify-center gap-5">
          <a
            href="https://github.com/Cloudy-96"
            target="_blank"
            rel="noreferrer"
          >
            <GithubSVG />
          </a>
          <a
            href="https://www.linkedin.com/in/kat-de-mey-80409a21b/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <LinkedInSVG />
          </a>
        </div>
        {/* </div>
        <div> */}
      </div>
    </>
  );
};

export default Contact;
