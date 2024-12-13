import React from "react";
import "./Footer.css";
import Langbutton from "./Langbutton";

const Footer = () => {
  return (
    <footer>
      <p>질문이 있으신가요? 문의전화:02-308-321-0161(수신자부담)</p>
      <ul>
        <li>
          <a href="">자주하는 질문</a>
        </li>
        <li>
          <a href="">미디어 센터</a>
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
      <div className="wrap">
        <Langbutton />
      </div>
      <div className="txt">
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
