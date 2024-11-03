import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import './project.css'; // Import your CSS file

const projectData = [
  {
    projectName: "Call-Astro App",
    imgsrc: "Call-astro.png",
    description: "A comprehensive mobile application that integrates numerology APIs to provide personalized reports for users. It features intuitive form submission, data retrieval, and PDF generation, with Google Maps integration for location-based insights.",
    tools: "Kotlin, Jetpack Compose, Retrofit, Firebase, Android Studio",
  },
  {
    projectName: "EkamCal-C WebApp",
    imgsrc: "img1.webp",
    description: "A web-based application offering various calculators, such as scientific, financial, and health calculators, all on a single platform. The project is designed to be user-friendly and precise for both students and professionals.",
    tools: "HTML, CSS, Bootstrap, JavaScript",
  },
  {
    projectName: "Underwater Temple Simulation",
    imgsrc: "underwatertemple.png",
    description: "A 3D virtual reality simulation of an underwater temple created using Unreal Engine and Blender. The project focuses on realistic visuals and immersive experiences, offering users an interactive and engaging experience.",
    tools: "Unreal Engine, Blender",
  }
];

const Project = () => {
  const [spin, setSpin] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSpin(false);
    }, 1500);
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <>
      {
        spin ? (
          <div className='d-flex justify-content-center align-items-center' style={{ height: "90vh" }}>
            <Spinner animation="border" variant="primary" /> &nbsp;&nbsp; Loading .....
          </div>
        ) : (
          <div className="container">
            <h2 className='text-center mt-4'>Projects</h2>
            <div className="row d-flex justify-content-center">
              {
                projectData.map((el, index) => (
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                    <Card style={{ height: "100%" }}>
                      <Card.Img variant="top" src={el.imgsrc} alt={el.projectName} style={{ height: "10rem", objectFit: "cover" }} />
                      <Card.Body className='d-flex flex-column'>
                        <Card.Title className='text-center'>{el.projectName}</Card.Title>
                        <Card.Text>{el.description}</Card.Text>
                        <p><strong>Tools Used:</strong> {el.tools}</p>
                      </Card.Body>
                    </Card>
                  </div>
                ))
              }
            </div>
          </div>
        )
      }
    </>
  );
}

export default Project;
