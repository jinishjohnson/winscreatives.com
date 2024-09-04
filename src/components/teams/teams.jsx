import React from "react";
import "./teams.scss";
import Title from "../ui-components/title/title";
import Tcard from "./teamcard/Tcard";
import CardImg1 from "../../assets/about/athul.png";
import CardImg2 from "../../assets/about/anil.png";
import CardImg3 from "../../assets/about/kiran.png";
import CardImg4 from "../../assets/about/sha.png"
import CardImg5 from "../../assets/about/suba.png"
import CardImg6 from "../../assets/about/blal.png"
import CardImg7 from "../../assets/about/aka.png";
import CardImg8 from "../../assets/about/jib.png";
import CardImg9 from "../../assets/about/nithin.png"

const cardData = [
  {
    image: CardImg1,
    title: "Atul Sreekumar",
    description: "Accounts Manager",

  },
  {
    image: CardImg2,
    title: "Anil",
    description: "Sr.Graphic designer",
    
  },
  {
    image: CardImg3,
    title: "Kiran",
    description: "Graphic designer",
  
  },
  {
    image: CardImg4,
    title: "Shambu",
    description: "Graphic designer",
   
  },
  {
    image: CardImg5,
    title: "Surya",
    description: "Cameraman cum Editor",
    
  },
  {
    image: CardImg6,
    title: "Bilal",
    description: "Vfx Artist",
   
  },
  {
    image: CardImg7,
    title: "Akshay A",
    description: "Digital Marketing Executive",
    
  },
  {
    image: CardImg8,
    title: "Jibin",
    description: "Digital Marketing Executive",
    
  },
  {
    image: CardImg9,
    title: "Nithin",
    description: "",
    
  },
  // Add more card objects as needed
];

const teams = () => {
  return (
    <>
      <div className="container teams">
        <Title title="Meet Our Teams" />
        <Tcard cardsData={cardData} />
      </div>
    </>
  );
};

export default teams;
