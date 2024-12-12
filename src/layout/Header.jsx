import React from "react";
import "./Header.css";

import { SiNetflix } from "react-icons/si";

import { CiGlobe } from "react-icons/ci";

const Header = () => {
  return (
    <header>
      <button className="logo">
        <SiNetflix />
      </button>

      <ul>
        <li>
          <button className="h lang">
            <CiGlobe />
            언어
          </button>
        </li>
        <li>
          <button className="h l">로그인</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
