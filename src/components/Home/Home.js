import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> RAMKUMAR S</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container className="contact_form">
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="forms" >
          <h2 className="Contact">Contact Me</h2>

  <form 
    action="https://formsubmit.co/ramkumarramu825@gmail.com" 
    method="POST"
  >
    {/* Disable spam */}
    <input type="hidden" name="_captcha" value="false" />

    {/* Redirect to your site after submit */}
    <input type="hidden" name="_next" value="https://ramkumar78.netlify.app/" />

    <div className="form-group" style={{ marginBottom: "15px" }}>
      <label className="purple">Name</label>
      <input 
        type="text" 
        name="name" 
        required 
        className="form-control" 
        placeholder="Enter your name" 
      />
    </div>

    <div className="form-group" style={{ marginBottom: "15px" }}>
      <label className="purple">Email</label>
      <input 
        type="email" 
        name="email" 
        required 
        className="form-control" 
        placeholder="Enter your email" 
      />
    </div>

    <div className="form-group" style={{ marginBottom: "15px" }}>
      <label className="purple">Subject</label>
      <input 
        type="text" 
        name="subject" 
        className="form-control" 
        placeholder="Enter subject" 
      />
    </div>

    <div className="form-group" style={{ marginBottom: "15px" }}>
      <label className="purple">Description</label>
      <textarea 
        name="message" 
        rows="5" 
        required 
        className="form-control" 
        placeholder="Write your message"
      ></textarea>
    </div>

    <button 
      type="submit" 
      className="btn btn-primary"
      style={{ marginTop: "10px" }}
    >
      Submit
    </button>
  </form>
          
          </Col>
        </Row>
        
      </Container>
    </section>
  );
}

export default Home;
