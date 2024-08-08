import React from "react";

import "./contactInfoBox.scss";






const contactInfoBox = (props) => (
  <div className="contact__info-box">
    <div>
      <img src={props.icon} alt="address"  style={{ width: '20%', height: 'auto' }} />
      <hr style={{color: 'grey'}}/>
    </div>
    <div>
      <p>{props.textLine1}</p>
      <p>{props.textLine2}</p>
    </div>
  </div>
);

export default contactInfoBox;
