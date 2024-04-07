import React from "react";
import "./about.css";
import ME from "../../assets/img3.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>Nothing</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Project</h5>
              <small>Completed</small>
            </article>
          </div>
          <p>
            Saya lulusan S1 Teknik Informatika dari Universitas Muhammadiyah
            Surakarta. Saya bertujuan untuk menjadi seorang web developer. Saya
            fokus untuk meningkatkan kemampuan pembuatan website, oleh karena
            itu saya selalu tertantang dengan proyek baru dalam pembuatan
            website
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
