import React from "react";
import "./contactinfo.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import {Link} from "react-router-dom"

const infoData = {
  name: "winscreatives",
  address:
    "A37, Sreerangam Ln, Sasthamangalam, Thiruvananthapuram, Kerala 695010",
  phone: "+91-8304838318",
  email: "info@winscreatives.com",
};

const ContactInfo = () => {
  return (
    <>
      <div className="box">
      <hr/>
        <div className="icon-group">
          <i className="bi bi-geo"></i>
         <Link to="https://maps.app.goo.gl/97K3bBXNuGGmp2Js6">
         <p>{infoData.address}</p>
         </Link>
        </div>
        <div className="icon-group">
          <i className="bi bi-telephone-fill"></i>
          <Link to="tel:+91830483818">
          <p>{infoData.phone}</p>
          </Link>

        </div>
        <div className="icon-group">
          <i className="bi bi-envelope-at-fill"></i>
        <Link to="mailto:info@winscreatives">
          <p>{infoData.email}</p>
        </Link>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
