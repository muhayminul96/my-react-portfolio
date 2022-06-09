import React, { useRef, useState } from 'react';
import './Contract.css'
import emailjs from "@emailjs/browser";


const Contract = () => {
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cboyjso",
        "template_rpl32ac",
        form.current,
        "3dNDG41BDGNfuhAM8"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setDone(true);
          
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

    return (
        <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          <span>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
    );
};

export default Contract;