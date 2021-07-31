import React, { useState } from "react";
import "./Header.css";
import Mobile from "./mobile/Mobile";
import Web from "./web/Web";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="header__logo">
      <img className="logo__image" src="https://img.icons8.com/doodle/50/000000/stack.png" alt=""/>Full Stack Dev
      </div>
      <div className="menu">
        <div className="web__menu">
          <Web />
        </div>
        <div className="mobile__menu">
          <div className="menu__icon" onClick={() => setIsOpen(!isOpen)}>
            <i class="fi-rr-apps-sort"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
