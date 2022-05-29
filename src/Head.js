import React, { useState } from "react";
import "./Nav.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (


<>
    <nav className="nav">
      <a href="https://web.facebook.com/profile.php?id=100000381098557" target='_blank'className="nav__brand">
        Shan flores
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="https://web.facebook.com/profile.php?id=100000381098557" target='_blank' className="nav__link">
            facebook
          </a>
        </li>
        <li className="nav__item">
          <a href="https://github.com/" target='_blank' className="nav__link">
            github
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>

    
    
    
    </>


  );
}

export default Navbar;