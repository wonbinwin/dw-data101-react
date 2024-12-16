import React from "react";
import "./Gal.css";

const Gal = () => {
  return (
    <div id="gal">
      <div className="wrap">
        <img src={img} />
        <button className="chev l"> {"<"}</button>
        <button className="chev r">{">"}</button>
        <div className="txts">
          <h1>트렁크</h1>
          <p>2024</p>
        </div>
      </div>
    </div>
  );
};

export default Gal;

const img =
  "https://www.istockphoto.com/photo/assorted-christmas-cookies-on-festive-table-gm2159582042-580158884?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored_ratiochange&utm_content=https%3A%2F%2Fpixabay.com%2Fko%2Fimages%2Fsearch%2Fchristmas%2F&utm_term=christmas";
