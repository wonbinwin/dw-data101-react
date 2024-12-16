import React from "react";
import "./Ninput.css";

const Ninput = () => {
  return (
    <div>
      Ninput
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
        optio, minima suscipit molestias odit, iusto nostrum assumenda
        accusamus, illum qui ratione quidem quis aut ex voluptate? Atque,
        quibusdam. Iusto, aperiam.
      </p>
      <input type="text" placeholder="이메일을 입력해주세요" />
      <>
        <div className="btn">
          <button>시작하기{">"}</button>
        </div>
      </>
    </div>
  );
};

export default Ninput;
