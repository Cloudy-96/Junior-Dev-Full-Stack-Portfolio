const Contact = () => {
    return (
      <>
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
      </>
    );
}

export default Contact;