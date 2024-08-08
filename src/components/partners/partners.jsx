import React from "react";
import Swiper from './swiper';
//SCSS
import "./partners.scss";
import Title from "../ui-components/title/title";

const partners = () => (
  <>
  <div className="container">

   <Title title="Clients." />
  </div>

  <div id="partners"> 
    
    <div className="wrapper">
      <Swiper/>
    </div>
  </div>
  </>
);

export default partners;
