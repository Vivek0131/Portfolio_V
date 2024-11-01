import React from 'react'
import "./footer.css"

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <>
      <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          <div className="first mt-5">
            <h4>Vivek Khandelwal</h4>
            <p>© {year} Vivek Khandelwal All rights reserved</p>
            <p className='d-flex'>
              <i className='fa-brands fa-instagram'></i>
              <i className='fa-brands fa-facebook mx-3'></i>
              <i className='fa-brands fa-github'></i>
            </p>
          </div>
          <div className="second mt-5">
            <h4>Get In Touch</h4>
            <p>I am passionate about technology and development. Feel free to reach out to discuss potential opportunities or collaborations.</p>
            <p>vivekkhandelwalwork@gmail.com</p>
            <p>+91 7568385548</p>
          </div>
          <div className="third mt-5">
            <h4>About</h4>
            <p><a href="https://github.com/Vivek0131/Resume/blob/main/VivekKhandelwal_Resume%20(5).pdf" target="_blank" rel="noopener noreferrer">Resume</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer