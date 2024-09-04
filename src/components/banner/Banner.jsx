import React from "react";
import videoBg from "../../assets/banner/Banner.mp4";
import "../banner/Banner.scss";
import { TypeAnimation } from 'react-type-animation';



const Banner = () => {
  return (
    <div >
      <video width="600" loop muted autoPlay>
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <h3>We Make Your</h3>
        <h1>Brand Stand Out</h1>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We provide services in Digital Marketing ',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'We provide services in Branding',
        1000,
        'We provide services in Graphic Design ',
        1000,
        'We provide services in Visual Ads',
        1000,
        'We provide services in Web Design and Development',
        1000,
        'We provide services in SEO',
        1000,
        'We provide services in Theatre ',
        1000,
        'We provide services in FM',
        1000,
        'We provide services in Newspaper Ads',
        1000,


      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block'  }}
      repeat={Infinity}
      className="typer"
    />
      </div>
    </div>
  );
};

export default Banner;
