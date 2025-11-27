// TechstackDataAnalyst.jsx
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPython,
  SiPostgresql,
  SiMysql,
  SiPowerbi,
  SiTableau,
  SiMicrosoftexcel,
  SiJupyter,
  SiPandas,
  SiNumpy,
  SiGit,
  SiVisualstudiocode,
  SiGooglecolab,
  SiApacheairflow,
  SiAmazonaws,
} from "react-icons/si";
import { FaChartBar } from "react-icons/fa";

function TechstackDataAnalyst() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming & Languages */}
      <Col xs={6} md={2} className="tech-icons">
        <SiPython />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <SiMysql />
        <div className="tech-icons-text">MySQL</div>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <SiPostgresql />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>

      {/* Python libraries */}
      <Col xs={6} md={2} className="tech-icons">
        <SiPandas />
        <div className="tech-icons-text">Pandas</div>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <SiNumpy />
        <div className="tech-icons-text">NumPy</div>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <SiJupyter />
        <div className="tech-icons-text">Jupyter</div>
      </Col>

      {/* Visualization & BI */}
      <Col xs={6} md={2} className="tech-icons">
        <SiPowerbi />
        <div className="tech-icons-text">Power BI</div>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <SiTableau />
        <div className="tech-icons-text">Tableau</div>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <SiMicrosoftexcel />
        <div className="tech-icons-text">Excel</div>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <FaChartBar />
        <div className="tech-icons-text">Data Viz</div>
      </Col>

      {/* ETL / Data Engineering */}
      <Col xs={6} md={2} className="tech-icons">
        <SiApacheairflow />
        <div className="tech-icons-text">Airflow</div>
      </Col>

      {/* Cloud / BigQuery / Storage */}
      <Col xs={6} md={2} className="tech-icons">
        <SiAmazonaws />
        <div className="tech-icons-text">AWS (S3)</div>
      </Col>

      {/* Analysis & Statistics */}
      <Col xs={6} md={2} className="tech-icons">
        <SiJupyter />
        <div className="tech-icons-text">Stats & EDA</div>
      </Col>

      {/* Tools */}
      <Col xs={6} md={2} className="tech-icons">
        <SiGooglecolab />
        <div className="tech-icons-text">Colab</div>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <SiGit />
        <div className="tech-icons-text">Git</div>
      </Col>

      {/* Optional / Nice-to-have */}
      <Col xs={6} md={2} className="tech-icons">
        <SiPandas />
        <div className="tech-icons-text">Scikit-learn</div>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <SiNumpy />
        <div className="tech-icons-text">Statsmodels</div>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <SiTableau />
        <div className="tech-icons-text">Looker Studio</div>
      </Col>
    </Row>
  );
}

export default TechstackDataAnalyst;
