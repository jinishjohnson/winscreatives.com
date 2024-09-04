import React from 'react'
import Banner from '../../../assets/portfolio/inner-banner.png';

import './pageheader.css';

const pageheader = (props) => {
  return (
    <>
    <div className="background">
          <img src={Banner} alt="" className="Banner_img" />
          <div className="container titleW">
            <p className={`TitleM ${props.className}`}>
              {props.titleSen} <br className="non" /> {props.titleFir}
            </p>
            <p className="descp">
            {props.content}
            </p>
          </div>
        </div>
    </>
  )
}

export default pageheader