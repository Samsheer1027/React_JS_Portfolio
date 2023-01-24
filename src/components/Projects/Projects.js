import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import breastCancer from "../../Assets/Projects/breastCancer.png";
import heartDiseasePred from "../../Assets/Projects/heartDiseasePred.png";
//import editor from "../../Assets/Projects/codeEditor.png";
import BondStrength from "../../Assets/Projects/BondStrength.png";
import carPrisePred from "../../Assets/Projects/carPrisePred.png";
//import bitsOfCode from "../../Assets/Projects/blog.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've Done recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BondStrength}
              isBlog={false}
              title="Bond-Strength-prediction"
              description="The FRP bond strength prediction model using ensemble learning is a sophisticated model that utilizes multiple machine learning algorithms to accurately predict bond strength of fiber reinforced polymers in structural applications. It uses diverse features and an ensemble of models for improved prediction accuracy and has been validated through testing. This model can improve the design and safety of FRP structures and reduce their overall cost"
              ghLink="https://github.com/Samsheer1027/Bond-Strength-prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heartDiseasePred}
              isBlog={false}
              title="Heart-Disease-Prediction"
              description="A Machine Learning model that predicts heart disease utilizes various patient data such as demographics, medical history, and lab results to identify potential risk factors for heart disease and make predictions on a patient's likelihood of developing the disease. It utilizes advanced algorithms such as decision trees, random forests, and neural networks to analyze the data and make predictions. This model can aid in early identification and prevention of heart disease, improving patient outcomes"
              ghLink="https://github.com/Samsheer1027/Heart-disease-prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carPrisePred}
              isBlog={false}
              title="Car-Price-Prediction"
              description="A Machine Learning model that predicts car prices uses data on various car features such as make, model, year, mileage, and condition to determine the market value of a vehicle. It utilizes advanced algorithms such as linear regression and random forests to analyze the data and make accurate price predictions. This model can aid buyers and sellers in making informed decisions in the car market, helping to establish fair prices for vehicles."
              ghLink="https://github.com/Samsheer1027/car-price-prediction"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={breastCancer}
              isBlog={false}
              title="Breast-Cancer"
              description="A Machine Learning model using KNN algorithm to classify if a patient has Breast Cancer or not, is based on analyzing data from patients' medical records such as demographics, symptoms, and test results. KNN algorithm allows this model to identify patterns and similarities in the data to accurately classify a patient as having or not having breast cancer. This model can aid in early detection and diagnosis of breast cancer, improving patient outcomes."
              ghLink="https://github.com/Samsheer1027/knn_wisconsin"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
