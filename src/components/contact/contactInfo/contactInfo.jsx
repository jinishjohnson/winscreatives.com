import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactInfo.scss";

import ContactInfoBox from "../contactInfo/contactInfoBox";


import ContactInfoIcon1 from '../../../assets/contact/location.gif';
import ContactInfoIcon2 from "../../../assets/contact/call-setting.gif";
import ContactInfoIcon3 from "../../../assets/contact/email.gif";


const contactInfo = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={12} lg={3} className="contact__info">
          <ContactInfoBox
           
            textLine1="A37, Sreerangam Ln,
Sasthamangalam, "
            textLine2="Thiruvananthapuram, Kerala 695010"
          />
        </Col>
        <Col xs={12} lg={3} className="contact__info">
          <ContactInfoBox
            
            textLine1="+91_8304838318"
            textLine2=""
          />
        </Col>
        <Col xs={12} lg={3} className="contact__info">
          <ContactInfoBox
            
            textLine1="info@winscreatives.com"
            textLine2="winscreatives@gmail.com"
          />
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactInfo