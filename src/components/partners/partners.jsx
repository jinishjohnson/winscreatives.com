import React from "react";
import Swiper from './swiper';
//SCSS
import "./partners.scss";
import Title from "../ui-components/title/title";

const partners = () => (
  <>
  <div className="container cube">

   <Title title="Our Clients." />

  <div id="partners"> 
    
    <div className="wrapper">
      <Swiper/>
    </div>
  </div>
  </div>
  </>
);

export default partners;
