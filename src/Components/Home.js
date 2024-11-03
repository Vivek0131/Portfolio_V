import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container home_container">
        <div className="home_innerdiv">
          <div className="left_div">
            <h2>Welcome to <span className="highlight">Vivek Khandelwal's</span> Portfolio</h2>
            <p className="intro_text">
              I am a B.Tech undergraduate student passionate about Android and web development.
              Proficient in Kotlin, Jetpack Compose, Firebase, and more, I’m always eager to
              explore new technologies and take on exciting projects that help me grow professionally.
            </p>
            <div className="btn_div mt-4">
              <Button
                variant="outline-dark"
                href="https://github.com/Vivek0131"
                className="icon_btn"
              >
                <FaGithub className="icon" /> GitHub
              </Button>
              <Button
                variant="outline-primary"
                href="https://www.linkedin.com/in/vivek-khandelwal-bb1159193"
                className="icon_btn"
              >
                <FaLinkedin className="icon" /> LinkedIn
              </Button>
            </div>
          </div>
          <div className="right_div">
            <img src="hp.png" alt="Vivek Khandelwal" className="profile_image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
