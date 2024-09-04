import React from 'react';
import './Tcard.scss';

const Tcard = ({ cardsData }) => {
  return (
    <div className="card-list">
      {cardsData.map((card, index) => (
        <div className="card-container" key={index}>
          <div className="Tcard">
            <div className="Tcard-front">
              <img src={card.image} alt={card.title} />
            </div>
            <div className="Tcard-back">
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </div>
          </div>
        </div> 
      ))}
    </div>
  );
};

export default Tcard;
