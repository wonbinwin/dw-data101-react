import React from "react";
import "./Sampleheader.css";

const Sampleheader = () => {
  return (
    <header>
      <button className="netflix">n</button>
      <ul>
        <li>
          <button class="ko">한국어</button>
        </li>
        <li>
          <button>로그인</button>
        </li>
      </ul>
    </header>
  );
};

export default Sampleheader;
