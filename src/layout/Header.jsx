import React from "react";
import "./Header.css";
import { SiNetflix } from "react-icons/si";
import Langbutton from "./Langbutton";

const Header = () => {
  return (
    <header>
      <button className="logo">
        <SiNetflix />
      </button>

      <ul>
        <li>
          <Langbutton />
        </li>
        <li>
          <button className="h l">로그인</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
