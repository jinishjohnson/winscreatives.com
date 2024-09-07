import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactSocial.scss";
import {Link} from "react-router-dom";

// Correct paths to assets
import FacebookIcon from "../../../assets/contact/facebook.svg";
import TwitterIcons from "../../../assets/contact/twitter.svg";
import DribbleIcon from "../../../assets/contact/dribble.svg";
import LinkedIcon from "../../../assets/contact/linkedin.svg";
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
             <Link to="https://www.facebook.com/winscreatives1"> <img src={FacebookIcon} alt="Facebook" className="fb" /></Link>
            </Col>
            <Col xs={1} lg={1} className="contact__social">
             <Link to="https://www.youtube.com/@winscreatives"> <img src={TwitterIcons} alt="Twitter" className="youtube" /></Link>
            </Col>
            <Col xs={1} lg={1} className="contact__social">
            <Link to="https://www.instagram.com/winscreatives/">  <img src={DribbleIcon} alt="Dribble" className="insta"/></Link>
            </Col>
            <Col xs={1} lg={1} className="contact__social">
            <Link to="https://www.linkedin.com/company/wins-creatives">  <img src={LinkedIcon} alt="Dribble" className="linkedin"/></Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  </>
);

export default contactSocial;
