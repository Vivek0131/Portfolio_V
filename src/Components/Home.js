import React from 'react'
import Button from 'react-bootstrap/Button';
import "./Home.css"

const Home = () => {
  return (
    <>
      <div className="container home_container">
        <div className="home_innerdiv">
          <div className="left_div">
            <h2>Welcome to <span style={{ color: "#6c63ff" }}>Vivek Khandelwal</span></h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2 }}>
              I am Vivek Khandelwal, a Btech undergraduate student with experience in Android and web development. I specialize in using tools like Kotlin, Jetpack Compose, Firebase, and more. I'm always eager to learn new technologies and work on exciting projects that challenge me to grow professionally.
            </p>
            <div className="btn_div mt-4">
              <Button
                variant="danger"
                href="https://github.com/Vivek0131"
                style={{ letterSpacing: "1px", border: "none", borderRadius: 4, background: "#2f2d69", marginRight: 24 }}
              >
                Github
              </Button>
              <Button
                variant="danger"
                href="https://www.linkedin.com/in/vivek-khandelwal-bb1159193"
                style={{ letterSpacing: "1px", border: "none", borderRadius: 4, background: "#6c63ff" }}
              >
                Linkedin
              </Button>
            </div>
          </div>
          <div className="right_div">
            <img src="hp.png" alt="Vivek Khandelwal" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
