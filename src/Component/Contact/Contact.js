import React from "react";
import contactStyle from "./Contact.module.css";

function Contact() {
  return (
    <>
      <div className={contactStyle.container} id="contact">
        <div className={contactStyle.overlay}>

          <div className={contactStyle.left}>
              <h1 className={contactStyle.heading}>Get In Touch</h1>
              <p className={contactStyle.para}>Lorem ipsum dolor sit amet consectetur.</p>
              <form className={contactStyle.form}>
                  <input type="text" placeholder="Your Name *"  />
                  <input type="email" placeholder="Your Email *" name="" id="" />
                  <input type="number" placeholder="Your Phone *" name="" id="" />
                  <textarea placeholder="Your Message *" name="" id="" className={contactStyle.textarea} rows="3" cols="30" ></textarea>
              </form>
              <button className={contactStyle.btn}>Send Message</button>
          </div>
          <div className={contactStyle.right}>
              <div className={contactStyle.content}>
                 <div className={contactStyle.one}>
                     <p>xBe - Creative Agency</p>
                     <p>284 Swanston St,</p>
                     <p>Melbourne VIC 3000, Australia</p>
                 </div>   
                 <div className={contactStyle.two}>
                     <p>Email Us</p>
                     <p className={contactStyle.mail}>Your.email@example.com</p>
                     <p className={contactStyle.mail}>support@example.com</p>
                 </div>
              </div>
              <div className={contactStyle.map}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
