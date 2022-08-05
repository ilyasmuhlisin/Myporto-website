import React from "react";
import "./portofolio.css";
import IMG1 from "../../assets/tehpucuk.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Englearn Website",
    github: "https://github.com",
  },
  {
    id: 2,
    image: IMG1,
    title: "Englearn Website",
    github: "https://github.com",
  },
  {
    id: 3,
    image: IMG1,
    title: "Englearn Website",
    github: "https://github.com",
  },
  {
    id: 4,
    image: IMG1,
    title: "Englearn Website",
    github: "https://github.com",
  },
  {
    id: 5,
    image: IMG1,
    title: "Englearn Website",
    github: "https://github.com",
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
                <a href={github} className="btn btn-primary" target="_blank">
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portofolio;
