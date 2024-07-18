import React from "react";
import './style.scss';


const Contact = () => {
  

  return (
   <div>
      <h2 className="common-heading">Feel Free to Contact me</h2>
      
      

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mqazaedr"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required></textarea>

            <input type="submit" value="send" />

          </form>
        </div>
      </div>
      </div>
  );
};

export default Contact;

