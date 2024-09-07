import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
import { useLocation } from "react-router-dom";
// Components
import TeamBox from './teamBox';
import TeamInfo from "./teamInfo";
import PageHeader from "../ui-components/page-header/pageheader";
// Assets
import Person01 from "../../assets/about/person01.png";

const About = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/about" && (
        <PageHeader titleSen="Our Story," titleFir="Your Success." className="pgheader" />
      )}
      <div className="container"> {/* Fixed className */}
        <Row>
          <Col md={12} lg={4}>
            <TeamBox avatar={Person01} name="Ajish" job="CEO" />
          </Col>
          {/* Uncomment if needed */}
          {/* <Col md={12} lg={4}>
            <img src={Person02} alt="Ceo" className="person2"/>
          </Col> */}
          <Col md={12} lg={8}>
            <TeamInfo />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default About;
