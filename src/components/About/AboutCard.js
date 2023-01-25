import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello There! I'm <span className="purple">Samsheeray Allam A,</span> a futurist who is fascinated in learning about Humanity, 
            Science and Technology.
            <br />
            <br />
            <br />
            Currently, an <span className="purple"> Undergraduate</span> majoring in
            <span className="purple">Artifical Intelligence and Data Science Engineering </span> at <span className="purple"> KPRIET,</span> Coimbatore.
            I build <span className="purple"> Machine Learning</span> based models and develop full stack application.
            <br />
            <br />
            <br />
            
            Apart from all techical stuffs, some other activities that I love !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <span className="purple"> Sports Enthusiast </span>
            </li>
            <li className="about-activity">
              <ImPointRight /><span className="purple"> Designing </span>
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple"> Travelling </span>
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
