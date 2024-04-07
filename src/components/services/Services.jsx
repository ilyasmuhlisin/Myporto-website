import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

function Services() {
  return (
    <section id="services">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>
      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <div>
                <p>Website Kayon OS</p>
                <p>(CSS, Javascript, Bootstrap)</p>
              </div>
              <a href="" className="btn" target="_blank">
                Github
              </a>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <div>
                <p>Binar Rental Car Web</p>
                <p>(CSS, React-Bootstrap, Reactjs)</p>
              </div>
              <a
                href="hhttps://github.com/ilyasmuhlisin/binar-academy-challenge"
                className="btn"
                target="_blank"
              >
                Github
              </a>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <div>
                <p>List Movie Web</p>
                <p>(CSS, React-Bootstrap, Reactjs)</p>
              </div>
              <a
                href="https://github.com/ilyasmuhlisin/Basic-Nextjs"
                className="btn"
                target="_blank"
              >
                Github
              </a>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <div>
                <p>Portofolio Web</p>
                <p>(CSS, Reactjs)</p>
              </div>
              <a
                href="https://github.com/ilyasmuhlisin/Myporto-website"
                className="btn"
                target="_blank"
              >
                Github
              </a>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <div>
                <p>BPRS Dana Amanah Web</p>
                <p>(CSS, React-Bootstrap, Reactjs)</p>
              </div>
              <a
                href="https://github.com/ilyasmuhlisin/BPRS-Dana-Amanah"
                className="btn"
                target="_blank"
              >
                Github
              </a>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <div>
                <p>News Blog Web</p>
                <p>(CSS, Tailwind, Reactjs, Redux)</p>
              </div>
              <a
                href="https://github.com/Hacktiv8-project1/news-project1"
                className="btn"
                target="_blank"
              >
                Github
              </a>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <div>
                <p>Movies Project Web</p>
                <p>(CSS, Tailwind, Reactjs, Redux)</p>
              </div>
              <a
                href="https://github.com/Hacktiv8-Project4/movies-project"
                className="btn"
                target="_blank"
              >
                Github
              </a>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <div>
                <p>Ecommerce Blipedia Web</p>
                <p>(CSS, Tailwind, Reactjs, Redux)</p>
              </div>
              <a
                href="https://github.com/Hacktiv8-Project2/ecommerce-project2"
                className="btn"
                target="_blank"
              >
                Github
              </a>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <div>
                <p>Hotel Reservation Mobile App</p>
                <p>(CSS, Tailwind, React Native, Redux)</p>
              </div>
              <a
                href="https://github.com/Hacktiv8-Project3/HoRes-mobile"
                className="btn"
                target="_blank"
              >
                Github
              </a>
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
              <div>
                <p>Car Management API</p>
                <p>(Nodejs, Expressjs, PostgreSQL)</p>
              </div>
              <a
                href="https://github.com/ilyasmuhlisin/Car-Management-Api"
                className="btn"
                target="_blank"
              >
                Github
              </a>
            </li>
          </ul>
        </article>
        {/* End of Web */}
        <article className="service">
          <div className="service__head">
            <h3>Fullstack Web</h3>
          </div>
          <ul className="service__list">
            <li className="">
              <BiCheck className="service__list-icon" />
              <div>
                <p>EngLearn Website</p>
                <p>(CSS, Javascript, Bootstrap, PHP, Mysql)</p>
              </div>
              <a
                href="https://github.com/ilyasmuhlisin/EngLearn-Website"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              {/* </div> */}
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <div>
                <p>Food Order Website</p>
                <p>(CSS, Javascript, Bootstrap, PHP, Mysql)</p>
              </div>
              <a
                href="https://github.com/ilyasmuhlisin/food-order"
                className="btn"
                target="_blank"
              >
                Github
              </a>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <div>
                <p>E-commerce SecondHand Website</p>
                <p>
                  (CSS, Bootstrap, Nextjs, Redux, Nodejs, Expressjs, PostgreSQL)
                </p>
              </div>
              <a
                href="https://github.com/second-hand-kelompok2"
                className="btn"
                target="_blank"
              >
                Github
              </a>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <div>
                <p>Percetakan Ikhlas E-commerce Website</p>
                <p>
                  (CSS, Tailwind, React, Redux, Nodejs, ExpressJs, MongoDBL)
                </p>
              </div>
              <a
                href="https://github.com/ilyasmuhlisin/perc-ikhlas"
                className="btn"
                target="_blank"
              >
                Github
              </a>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
