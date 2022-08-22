import React from "react";
import "./portofolio.css";
import IMG1 from "../../assets/g1.png";
import IMG2 from "../../assets/g2.png";
import IMG3 from "../../assets/g3.png";
import IMG4 from "../../assets/g4.png";
import IMG5 from "../../assets/g5.png";
import IMG6 from "../../assets/g6.png";
import IMG7 from "../../assets/g7.png";
import IMG8 from "../../assets/g8.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Englearn Website",
    github: "https://github.com/ilyasmuhlisin/EngLearn-Website",
  },
  {
    id: 2,
    image: IMG2,
    title: "E-commerce SecondHand Website",
    github: "https://github.com/second-hand-kelompok2",
  },
  {
    id: 3,
    image: IMG3,
    title: "Ecommerce JS Mastery with stripe",
    github: "https://github.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "Rental Car Website",
    github: "hhttps://github.com/ilyasmuhlisin/binar-academy-challenge",
  },
  {
    id: 5,
    image: IMG5,
    title: "List Movie Website",
    github: "https://github.com/ilyasmuhlisin/Basic-Nextjs",
  },
  {
    id: 6,
    image: IMG6,
    title: "Car Management API",
    github: "https://github.com/ilyasmuhlisin/Car-Management-Api",
  },
  {
    id: 7,
    image: IMG7,
    title: "Portofolio Website",
    github: "https://github.com/ilyasmuhlisin/Myporto-website",
  },
  {
    id: 8,
    image: IMG8,
    title: "Food Order Website",
    github: "https://github.com/ilyasmuhlisin/food-order",
  },
];

const Portofolio = () => {
  return (
    <section id="portofolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>
      <div className="container portofolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article className="portofolio__item">
              <div className="portofolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portofolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                {/* <a href={github} className="btn btn-primary" target="_blank">
                  Github
                </a> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portofolio;
