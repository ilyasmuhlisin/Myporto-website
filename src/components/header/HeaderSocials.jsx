import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com" target="-blank">
        <BsLinkedin />
      </a>
      <a href="https://www.github.com" target="-blank">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com" target="-blank">
        <BsLinkedin />
      </a>
    </div>
  );
}

export default HeaderSocials;
