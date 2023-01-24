import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, iam <span className="purple">SamsheerayAllam </span>
            <br />I am currently pursuing BTech Artificial Intelligence and Data Science 
            @KPRIET.
            <br />
            <br />
            Apart from all tech sthuffs, some other activities that I love !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports Enthusiast
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Try and fail but dont fail to try ..!"{" "}
          </p>
          <footer className="blockquote-footer">SamsheerayAllam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
