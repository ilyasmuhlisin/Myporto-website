import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend Web</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website Kayon OS</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Binar Rental Car</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>List Movie</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Portfolio</p>
            </li>
          </ul>
        </article>
        {/* End of UI?UX */}
        <article className="service">
          <div className="service__head">
            <h3>Backend Web</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Car Management API</p>
            </li>
          </ul>
        </article>
        {/* End of Web */}
        <article className="service">
          <div className="service__head">
            <h3>Fullstack Web</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>EngLearn Website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Food Order Website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>E-commerce SecondHand Website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>E-commerce AtTech Website</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
