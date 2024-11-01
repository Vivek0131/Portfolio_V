import React from 'react'
import "./About.css"

const About = () => {
  return (
    <>
      <div className="container mb-3 about_container" style={{ minHeight: "100%" }}>
        <div className="container main_container d-flex justify-content-around flex-wrap">
          <div className="left_container mt-5" style={{ width: 500 }}>
            <h2>Meet Vivek Khandelwal</h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2, lineHeight: 2 }}>
              I am Vivek Khandelwal, a dedicated and passionate Computer Science and Engineering student from JK Lakshmipat University, expected to graduate in 2025. My expertise spans across Android and web development with hands-on experience using tools like Kotlin, Jetpack Compose, Firebase, and more. Currently working as an Android Developer Intern at Vas Venture Tech Pvt. Ltd., I am developing the Call Astro app, integrating APIs, and optimizing the user experience. I have also worked on diverse projects like a numerology API and EkamCal-C, a comprehensive calculator web app.
            </p>
          </div>
          <div className="right_container mt-3">
            <img src="vivek.jpg" alt="Vivek Khandelwal" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About