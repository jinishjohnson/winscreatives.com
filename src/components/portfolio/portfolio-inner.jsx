import React from "react";
import "./portfolio-inner.scss";
// import GifP from "../../assets/portfolio/portfolio-123/service digital marketing agency toronto.gif";
// import SmallImg from "../../assets/portfolio/portfolio-123/creative.jpeg";
// import CardImg from "../../assets/portfolio/portfolio-123/2024070309175603.png";
import Banner from "../../assets/portfolio/inner-banner.png";
import PortfolioImg from "../../assets/portfolio/portfolio-123/port1.jpg";
import PortfolioImg1 from "../../assets/portfolio/portfolio-123/port2.png";
import PortfolioImg2 from "../../assets/portfolio/portfolio-123/port3.png";
import PortfolioImg3 from "../../assets/portfolio/portfolio-123/portfolio-1.png"
import PortfolioImg4 from "../../assets/portfolio/portfolio-123/portfolio-2.jpg"
import PortfolioImg5 from "../../assets/portfolio/portfolio-123/portfolio-13.jpg"
import PortfolioImg6 from "../../assets/portfolio/portfolio-123/portfolio-4.jpg"
import PortfolioImg7 from "../../assets/portfolio/portfolio-123/portfolio-11.jpg"
import PortfolioImg8 from "../../assets/portfolio/portfolio-123/portfolio-15.jpg"
import PortfolioImg9 from "../../assets/portfolio/portfolio-123/portfolio-7.jpg"
import PortfolioImg10 from "../../assets/portfolio/portfolio-123/portfolio-8.jpg"
import PortfolioImg11 from "../../assets/portfolio/portfolio-123/portfolio-9.jpg"
import PortfolioImg12 from "../../assets/portfolio/portfolio-123/portfolio-10.jpg"
import PortfolioImg13 from "../../assets/portfolio/portfolio-123/portfolio-15.1.jpg"
import PortfolioImg14 from "../../assets/portfolio/portfolio-123/portfolio-16.jpg"





const projectShow = [
  {
    image: PortfolioImg,
  },
  {
    image: PortfolioImg1,
  },
  {
    image: PortfolioImg2,
  },
  {
    image: PortfolioImg,
  },
  {
    image: PortfolioImg,
  },
  {
    image: PortfolioImg9,
  },
  // Add more items if needed
];
const projectShowm = [
  {
    image: PortfolioImg14,
  },
  {
    image: PortfolioImg7,
  },
  {
    image: PortfolioImg5,
  },
  {
    image: PortfolioImg11,
  },
  {
    image: PortfolioImg10,
  },
  {
    image: PortfolioImg8,
  },
  {
    image: PortfolioImg13,
  },
  {
    image: PortfolioImg12,
  },
  
];
const SmData = [
  {
    image: PortfolioImg3,
  },
  {
    image: PortfolioImg3,
  },
  {
    image: PortfolioImg3,
  },
  {
    image:PortfolioImg3,
  },
];

const PortfolioInner = () => {
  return (
    <>

      <div className="container-flex portfolioinner">
        <div className="background">
          <img src={Banner} alt="" className="Banner_img" />
          <div className="container titleW">
            <p className="TitleM">
              See Our Work <br className="non" /> in Action
            </p>
          </div>

          <div className="bannerportfolio"></div>
        </div>
        <div className="showcase">
          {projectShow.map((item, index) => (
            <div className="col" key={index}>
              <img src={item.image} alt={`Portfolio Item ${index}`} />
            </div>
          ))}
        </div>
        <div className="showcase2">
          {projectShowm.map((item, index) => (
            <div className="colm" key={index}>
              <img src={item.image} alt={`Portfolio Item M ${index}`} />
            </div>
          ))}
        </div>
        <div className="showcase3">
          {SmData.map((item, index) => (
            <div className="colsm" key={index}>
              <img src={item.image} alt={`Portfolio Item ${index}`} />
            </div>
          ))}
        </div>
       

      </div>
    </>
  );
};

export default PortfolioInner;
