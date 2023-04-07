import React from "react";
import "./index.scss";

import mainImgs from '../../../assets/mainImg.png';

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__inner">
            <div className="hero__inner_info">              
                <h1 className="hero__inner_info--title">
                  Hi, I am John, Creative Technologist
                </h1>
                <p className="hero__inner_info--text">
                  
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
                <button className="hero__inner_info--btn">
                Download Resume
                </button>
              
            </div>
            <div className="hero__inner_mainImg">
                <img src="mainImgs" alt="img" className="hero__inner_mainImg--img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
