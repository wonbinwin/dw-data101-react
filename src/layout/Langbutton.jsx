import React from "react";
import { CiGlobe } from "react-icons/ci";
import "./Langbutton.css";

const Langbutton = () => {
  return (
    <button className="h lang">
      <CiGlobe />
      언어
    </button>
  );
};

export default Langbutton;
