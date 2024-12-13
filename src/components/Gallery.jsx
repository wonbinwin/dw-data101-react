import React from "react";
import "./Gallery.css";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
const Gallery = () => {
  return (
    <div className="gal">
      <div className="wrap">
        <img src={img} />

        <button className="l">
          <IoChevronBackOutline />
        </button>
        <button className="r">
          <IoChevronForward />
        </button>
      </div>
    </div>
  );
};

export default Gallery;

const img =
  "https://media.istockphoto.com/id/2155640170/ko/%EC%82%AC%EC%A7%84/%ED%83%9C%ED%8F%89%EC%96%91-%ED%91%9C%EB%A9%B4%EC%9D%98-%EB%82%9C%EA%B8%B0%EB%A5%98-%EB%B0%94%EB%8B%A4-%ED%8C%A8%ED%84%B4.jpg?s=2048x2048&w=is&k=20&c=LYNpELE9PFs8WD8pPulEgbdha-Hn6mCVt5hCclNf7Tg=";
