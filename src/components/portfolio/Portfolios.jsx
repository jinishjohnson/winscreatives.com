import React from 'react';
import './portfolios.css';
import Title from '../ui-components/title/title';
import { Link } from 'react-router-dom';
import { TiArrowUp ,TiMediaPlay } from "react-icons/ti";

const cardDataset = [
    {
        image: "https://procreate-assets-cdn.procreate.art/img/help-center_en.ad78992.jpg",
        title: "Graphic Ads",
        button: <TiArrowUp className="rotated-icon"/>
    },
    {
        image: "https://procreate-assets-cdn.procreate.art/img/b-series.a9a2d98.jpg",
        title: "Visual Ads",
        button:  <TiMediaPlay className='play-icon'/>
    },
    {
        image: "https://procreate-assets-cdn.procreate.art/img/education.3fa4906.jpg",
        title: "Social ads",
        button:  <TiArrowUp className="rotated-icon" />
    },
];

const Portfolios = () => {
  return (
    <>
      <div className="container">
        <Title title="WORK SHOWCASE." />
        <div className="showcase">
          {cardDataset.map((item, index) => (
            <div className="card-port" key={index}>
              <img src={item.image} alt="Card image cap" className="cardimge" />
              <div className="overlay-contents">
                <Link to="/portfolioinner">
                <button>{item.button}</button>
                </Link>
              </div>
              <div>
              <h2 className='Card_title'>{item.title}</h2>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolios;
