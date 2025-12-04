import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>If you'd like to collaborate or have any questions, feel free to reach out!</p>

      <div className="contact-container">

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><i className="fas fa-envelope"></i> ezhilarasan0624@gmail.com</p>
          <p><i className="fas fa-phone"></i> +91 6379303755</p>
          <p><i className="fas fa-map-marker-alt"></i> Bangalore, India</p>

          <div className="social-links">
            <a href="https://github.com/ezhilrond/" target="_blank"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/ezhilarasan-dev/" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/coding_brothers__/" target="_blank"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="contact-form"
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
