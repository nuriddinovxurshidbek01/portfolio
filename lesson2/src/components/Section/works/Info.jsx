import React from "react";
import './index.scss';
import img from '../../../assets/react.svg';

const Info = () => {
  return (
    <>
      <section className="info">
        <div className="container">
          <h4>Featured works</h4>
          <div className="info__wrapper">
            <div className="info__wrapper_card">
              <img src="img" alt="img" className="info__wrapper_card--img" />
              <div className="info__wrapper_card--info">
                <h3 className="info__wrapper_card--info-title">
                  Designing Dashboards
                </h3>
                <span className="info__wrapper_card--info--year">
                  <p className="info__wrapper_card--info--year-god">2020</p>
                  <p>Dashboard</p>
                </span>
                <p className="info__wrapper_card--info-text">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <hr />
            <div className="info__wrapper_card">
              <img src="img" alt="img" className="info__wrapper_card--img" />
              <div className="info__wrapper_card--info">
                <h3 className="info__wrapper_card--info-title">
                  Designing Dashboards
                </h3>
                <span className="info__wrapper_card--info--year">
                  <p className="info__wrapper_card--info--year-god">2020</p>
                  <p>Dashboard</p>
                </span>
                <p className="info__wrapper_card--info-text">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
<hr />
            <div className="info__wrapper_card">
              <img src="img" alt="img" className="info__wrapper_card--img" />
              <div className="info__wrapper_card--info">
                <h3 className="info__wrapper_card--info-title">
                  Designing Dashboards
                </h3>
                <span className="info__wrapper_card--info--year">
                  <p className="info__wrapper_card--info--year-god">2020</p>
                  <p>Dashboard</p>
                </span>
                <p className="info__wrapper_card--info-text">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
