import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

const projectData = [
  {
    projectName: "Call-Astro App",
    imgsrc: "Call-astro.png",  // Ensure this image exists in your project
    description: "A comprehensive mobile application that integrates numerology APIs to provide personalized reports for users. It features intuitive form submission, data retrieval, and PDF generation, with Google Maps integration for location-based insights.",
    tools: "Kotlin, Jetpack Compose, Retrofit, Firebase, Android Studio",
    liveLink: "#", // Link to your live project (if any)
    repoLink: "#"  // GitHub repository link
  },
  {
    projectName: "EkamCal-C WebApp",
    imgsrc: "img1.webp",  // Ensure this image exists in your project
    description: "A web-based application offering various calculators, such as scientific, financial, and health calculators, all on a single platform. The project is designed to be user-friendly and precise for both students and professionals.",
    tools: "HTML, CSS, Bootstrap, JavaScript",
    liveLink: "#", // Link to your live project (if any)
    repoLink: "#"  // GitHub repository link
  },
  {
    projectName: "Underwater Temple Simulation",
    imgsrc: "underwatertemple.png",  // Ensure this image exists in your project
    description: "A 3D virtual reality simulation of an underwater temple created using Unreal Engine and Blender. The project focuses on realistic visuals and immersive experiences, offering users an interactive and engaging experience.",
    tools: "Unreal Engine, Blender",
    liveLink: "#", // Link to your live project (if any)
    repoLink: "#"  // GitHub repository link
  }
];

const Project = () => {
  const [spin, setSpin] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSpin(false);
    }, 1500);
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
            <h2 className='text-center mt-2'>Projects</h2>
            <div className="card_div">
              <div className="row d-flex justify-content-around align-items-center">
                {
                  projectData.map((el, index) => (
                    <Card style={{ width: '22rem', height: "26rem" }} className="mt-4 mb-4" key={index}>
                      <Card.Img variant="top" style={{ height: "10rem" }} src={el.imgsrc} alt={el.projectName} />
                      <Card.Body className='d-flex flex-column justify-content-between'>
                        <div>
                          <Card.Title className='text-center'>{el.projectName}</Card.Title>
                          <Card.Text>{el.description}</Card.Text>
                          <p><strong>Tools Used:</strong> {el.tools}</p>
                        </div>
                      
                      </Card.Body>
                    </Card>
                  ))
                }
              </div>
            </div>
          </div>
        )
      }
    </>
  );
}

export default Project;
