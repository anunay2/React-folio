import React from "react";
import "./Mobile.css";

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close__icon" onClick={() => setIsOpen(!isOpen)}>
        <i class="fi-rr-cross-circle"></i>
      </div>
      <div className="mobile__options">
        <div className="mobile__option" onClick={() => setIsOpen(!isOpen)}>
          <a href="#project">
            <i class="fi-rr-edit-alt option__icon"></i>Projects
          </a>
        </div>
        <div className="mobile__option" onClick={() => setIsOpen(!isOpen)}>
          <a href="#skill">
            <i class="fi-rr-laptop option__icon option__icon"></i>Skills
          </a>
        </div>
        <div className="mobile__option" onClick={() => setIsOpen(!isOpen)} >
          <a href='#work'>
            <i class="fi-rr-briefcase option__icon"></i>Work
          </a>
        </div>
        <div className="mobile__option" onClick={() => setIsOpen(!isOpen)}>
          <a href='#contact'>
            <i class="fi-rr-microphone option__icon"></i>Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
