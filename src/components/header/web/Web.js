import React from "react";
import "./Web.css";

function Web() {
  return (
    <div className="web">
      <div className="web__option">
        <a href="#project">
          <i class="fi-rr-edit-alt option__icon"></i>Projects
        </a>
      </div>
      <div className="web__option">
        <a href="#skill">
          <i class="fi-rr-laptop option__icon option__icon"></i>Skills
        </a>
      </div>
      <div className="web__option">
        <a href='#work'>
          <i class="fi-rr-briefcase option__icon"></i>Work
        </a>
      </div>
      <div className="web__option">
        <a href='#contact'>
          <i class="fi-rr-microphone option__icon"></i>Contact
        </a>
      </div>
    </div>
  );
}

export default Web;
