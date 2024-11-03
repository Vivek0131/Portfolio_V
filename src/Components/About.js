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
            I am Vivek Khandelwal, a Computer Science and Engineering student from JK Lakshmipat University, expected to graduate in 2025. I possess hands-on experience with tools like Kotlin, Jetpack Compose, and Firebase. Currently, I am an Android Developer Intern at Vas Venture Tech Pvt. Ltd., where I am involved in the development of the Call Astro app, focusing on API integration and optimizing user experience. Additionally, I have worked on diverse projects, including a numerology API and EkamCal-C, a comprehensive calculator web app, which demonstrate my enthusiasm for creating impactful solutions.
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