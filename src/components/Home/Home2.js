import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ram.png";
import Tilt from "react-parallax-tilt";



function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={7} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Data Analyst who loves turning raw data into meaningful insights that drive smart decisions. Over the years, I’ve developed a strong analytical mindset and discovered my passion for uncovering patterns, solving business problems, and presenting data in simple, impactful ways.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  SQL, Python, Excel, Power BI, and Tableau{" "}
                </b>
              </i>
              — I enjoy working across data cleaning, modeling, visualization, and reporting pipelines.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Business Analytics, Predictive Modeling, Dashboard Development,{" "}
                </b>
              </i>
              exploring how data can improve real-world processes and customer experiences.
              <br />
              <br />
              Whenever possible, I love building 
              <b className="purple"> dashboards, automating workflows </b> {" "}
              <i>
                <b className="purple">creating clear visual stories</b> and{" "}
                that help teams understand data quickly and confidently.
              </i>
            </p>
          </Col>

          <Col md={5} className="ram d-flex justify-content-center align-items-center">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
              
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
