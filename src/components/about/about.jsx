import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import TeamBox from './teamBox';
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
// Assets
import Person01 from "../../assets/about/person01.png";
import Person02 from "../../assets/about/person02.png";

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="ABOUT US." />
      <p className="font12">
      We are committed to developing, organising, and managing marketing and advertising campaigns for our clients in a range of sectors and industries. In addition to many other services, we provide TV commercials, SEO services, print advertising, social media management & marketing, content production, and strategic planning. Our group of gifted and knowledgeable experts can assist you and expand your company. We are the right firm if you require a memorable tagline, an eye-catching logo, a sensational video, or a thorough marketing plan. Get in touch with us right now, and allow us to demonstrate why we are Trivandrum's top advertising agency.
      </p>
      <Row>
        <Col md={12} lg={4}>
          <TeamBox avatar={Person01} name="Ajish" job="CEO" />
        </Col>
        <Col md={12} lg={4}>
          <TeamBox avatar={Person02} name="Athul" job="Account Manager" />
        </Col>
        <Col md={12} lg={4}>
          <TeamInfo />
        </Col>
      </Row>
    </div>
  </div>
);

export default about;
