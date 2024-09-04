import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./hero.scss";
import HeroImage from '../../assets/hero/s (1).gif';
import { Link} from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';
import Title from "../ui-components/title/title";



const Hero = () => {

  return (
    <div className="hero" id="hero">
      <div className="wrapper">
        <Row>
          <Col md={12} lg={6}>
            <div className="hero-info">
          
              <Title title='We Are Creative Agency.'></Title>
              
      
              <p className="font19">
                We are the right firm if you require a memorable tagline, an eye-catching logo, a sensational video, or a thorough marketing plan. Get in touch with us right now, and allow us to demonstrate why we are Trivandrum's top advertising agency.
              </p>
              <Link to='/about'>
              <AwesomeButton type="primary" className="About-btn">Get know more</AwesomeButton>
              </Link>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="hero-image">
              <img src={HeroImage} alt="hero" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Hero;
