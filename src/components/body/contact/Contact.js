import React from "react";
import Seperator from "../common/Seperator";
import "./Contact.css";
import SocialContact from "../common/SocialContact";

function Contact() {
  return (
    <div className="contact">
      <label className="section__title">Contact</label>
      <div className="contact__container">
        <div className="contact__tex">
          <p>Reach out to me on any of the platforms.</p>
        </div>
        <div className="contact__left">
          <SocialContact />
        </div>
      </div>
    </div>
  );
}

export default Contact;
