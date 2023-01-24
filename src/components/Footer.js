import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by SamsheerayAllam A</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SA</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Samsheer1027"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
  
            <li className="social-icons" >
              <a
                href="https://www.linkedin.com/in/samsheeray-allam-a-411b70229/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons" >
              <a
                href="https://www.kaggle.com/samsheerayallama"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiKaggle />
              </a>
            </li>
          
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
