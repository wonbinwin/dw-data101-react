import React from "react";
import "./Footer.css";
import { CiGlobe } from "react-icons/ci";

const Footer = () => {
  return (
    <footer>
      <p>질문이 있으신가요? 문의전화:02-308-321-0161(수신자부담)</p>
      <ul>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
      </ul>
      <button className="h lang">
        <CiGlobe />
        한국어
      </button>
      <div>
        <p>넷플릭스 대한민국</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsum
          est, perferendis quam maxime iste ullam eius quisquam minus, ad sunt
          ipsam tempore alias libero ducimus explicabo natus neque rem.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
