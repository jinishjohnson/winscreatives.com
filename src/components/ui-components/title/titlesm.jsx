import React from "react";
import { Row, Col } from "react-flexbox-grid";

import "./titlesm.scss";

const titlesm = (props) => (
  <Row>
    <Col className="big__titleq">
      <h2 className="weight300 font40 padding40">{props.titlesm1}</h2>
    </Col>
  </Row>
);

export default titlesm;
