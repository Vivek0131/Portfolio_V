import React from 'react';
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer_container">
        <div className="first">
          <h4>Vivek Khandelwal</h4>
          <p>© {year} Vivek Khandelwal. All rights reserved.</p>
          <div className="social-icons">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook mx-3"></i>
            <i className="fa-brands fa-github"></i>
          </div>
        </div>
        <div className="second">
          <h4>Get In Touch</h4>
          <p>I am passionate about technology and development. Feel free to reach out to discuss potential opportunities or collaborations.</p>
          <p>Email: <a href="mailto:vivekkhandelwalwork@gmail.com">vivekkhandelwalwork@gmail.com</a></p>
          <p>Phone: <a href="tel:+917568385548">+91 7568385548</a></p>
        </div>
        <div className="third">
          <h4>About</h4>
          <p><a href="https://github.com/Vivek0131/Resume/blob/main/VivekKhandelwal_Resume%20(5).pdf" target="_blank" rel="noopener noreferrer">Resume</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
