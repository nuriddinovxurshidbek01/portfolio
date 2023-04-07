import React from "react";
import "./index.scss";
const Intro = () => {
  return (
    <>
      <section className="intro">
        <div className="container">
          <div className="intro__wrapper">
            <div className="intro__wrapper_left">
              <h2 className="intro__wrapper_left--title">
                Making a design system from scratch
              </h2>
              <span className="intro__wrapper_left--span">
                <p className="intro__wrapper_left--span-date">12 Feb 2020</p>
                <p className="intro__wrapper_left--span-line"></p>
                <p className="intro__wrapper_left--span-fima">
                  Design, Pattern
                </p>
              </span>
              <p className="intro__wrapper_left--text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="intro__wrapper_left">
              <h2 className="intro__wrapper_left--title">
                Making a design system from scratch
              </h2>
              <span className="intro__wrapper_left--span">
                <p className="intro__wrapper_left--span-date">12 Feb 2020</p>
                <p className="intro__wrapper_left--span-line"></p>
                <p className="intro__wrapper_left--span-fima">
                  Design, Pattern
                </p>
              </span>
              <p className="intro__wrapper_left--text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Intro;
