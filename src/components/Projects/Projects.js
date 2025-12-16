import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/dash.png";
import bitsOfCode from "../../Assets/Projects/drowsy.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="HR-Attrition Analysis"
              description="A complete HR analytics solution built using Power BI, Excel, and DAX to analyze employee turnover and identify key factors influencing attrition.
The project includes data cleaning,Power Query transformations, DAX calculations, star schema modelling, and a fully interactive dashboard.
It highlights insights on employee satisfaction, tenure, salary distribution, job roles, and work-life balance, helping HR teams make data-driven retention decisions."
              ghLink="https://github.com/ram7811/HR_Attrition-Report"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Drowsy Alert & Fatigue Detection System"
              description="An AI-powered real-time driver monitoring system developed using Python, OpenCV, dlib, and Machine Learning.
The system uses facial landmark detection and the Eye Aspect Ratio (EAR) algorithm to track eye blinks, yawning, and head movements to detect fatigue.
Designed as a low-cost, non-intrusive solution, it runs efficiently on both standard cameras and embedded devices like Raspberry Pi, improving road safety through early drowsiness alerts."
              ghLink="https://github.com/ram7811/Drowzy-Alert "
            />
          </Col> 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="HR-Attrition Analysis"
              description="A complete HR analytics solution built using Power BI, Excel, and DAX to analyze employee turnover and identify key factors influencing attrition.
The project includes data cleaning,Power Query transformations, DAX calculations, star schema modelling, and a fully interactive dashboard.
It highlights insights on employee satisfaction, tenure, salary distribution, job roles, and work-life balance, helping HR teams make data-driven retention decisions."
              ghLink="https://github.com/ram7811/HR_Attrition-Report"
              
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
