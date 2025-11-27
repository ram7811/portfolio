import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Ramkumar S</span>{" "}
            from <span className="purple">Tamil Nadu, India</span>.
            <br />
            I recently graduated with a{" "}
            <span className="purple">Bachelor of Technology</span> in{" "}
            <span className="purple">Information Technology</span>.
            <br />I’m currently building my career in{" "}
            <span className="purple">Data Analysis, Python Development </span> and{" "}
            <span className="purple">Business Intelligence.</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ramkumar S</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
