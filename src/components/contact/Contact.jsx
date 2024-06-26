import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // emailjs.sendForm(
    //   "YOUR_SERVICE_ID",
    //   "YOUR_TEMPLATE_ID",
    //   form_current,
    //   "YOUR_USER_ID"
    // );
    emailjs.sendForm(
      "service_gm1rk9i",
      "template_bq4ezm3",
      form.current,
      "vmFUGJywj1w4zvlWK"
    );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ilyasmhlsn21@gmail.com</h5>
            <a href="mailto:ilyasmhlsn21@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          {/* <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>ilyasmhlsn@gmail.com</h5>
            <a href="mailto:ilyasmhlsn@gmail.com" target="_blank">
              Send a message
            </a>
          </article> */}
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+6281228892447</h5>
            <a
              href="https://api.whatsapp.com/send?phone=6281228892447"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          {/* End of contact options */}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn-c btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
