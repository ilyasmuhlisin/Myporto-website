import React from "react";
import "./portofolio.css";
import IMG1 from "../../assets/tehpucuk.jpg";
// import IMG2 from "../../assets/tehpucuk.jpg";
// import IMG3 from "../../assets/tehpucuk.jpg";
// import IMG4 from "../../assets/tehpucuk.jpg";
// import IMG5 from "../../assets/tehpucuk.jpg";
// import IMG6 from "../../assets/tehpucuk.jpg";

const Portofolio = () => {
  return (
    <section id="portofolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>
      <div className="container protofolio__container">
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portofolio item title</h3>
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
          >
            Github
          </a>
        </article>
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portofolio item title</h3>
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
          >
            Github
          </a>
        </article>
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portofolio item title</h3>
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
          >
            Github
          </a>
        </article>
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portofolio item title</h3>
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
          >
            Github
          </a>
        </article>
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portofolio item title</h3>
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
          >
            Github
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portofolio;
