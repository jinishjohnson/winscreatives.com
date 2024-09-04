import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactSocial.scss";

// Correct paths to assets
import FacebookIcon from "../../../assets/contact/facebook.svg";
import TwitterIcons from "../../../assets/contact/twitter.svg";
import DribbleIcon from "../../../assets/contact/dribble.svg";
import fbicon from "../../../assets/contact/facebook.png"; // Adjusted path
import youtubeicon from "../../../assets/contact/youtube.png"; // Adjusted path
import linkedinicon from "../../../assets/contact/LINKEDIN.png"; // Adjusted path

const contactSocial = () => (
  <>
    <div className="contact-icons">
      <Row>
        <Col xs={12}>
          <Row center="xs">
            <Col xs={1} lg={1} className="contact__social">
              <img src={FacebookIcon} alt="Facebook" />
            </Col>
            <Col xs={1} lg={1} className="contact__social">
              <img src={TwitterIcons} alt="Twitter" />
            </Col>
            <Col xs={1} lg={1} className="contact__social">
              <img src={DribbleIcon} alt="Dribble" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
    
    <div className="container-fluid mobile-social">
      <h1>connect on</h1>
      <div className="platform">
        <img src={linkedinicon} alt="LinkedIn"  />
        <img src={fbicon} alt="Facebook" />
        <img src={youtubeicon} alt="YouTube" />
      </div>
    </div>
  </>
);

export default contactSocial;
