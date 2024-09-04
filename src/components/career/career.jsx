import React, { useState } from "react";
import "../career/career.scss";
import Title from "../ui-components/title/title";
import imgCard from "../../assets/career/2151459502.jpg";
import CareerPopup from "./careerpopup/CareerPopup";
import { AwesomeButton } from "react-awesome-button";


const Career = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isWhyUsVisible, setIsWhyUsVisible] = useState(false);
  const [isHowToApplyVisible, setIsHowToApplyVisible] = useState(false);
  const [isInternshipVisible, setIsInternshipVisible] = useState(false);
  const [isJoinTeamVisible, setIsJoinTeamVisible] = useState(false);


  const careerData = [
    {
      title: "Content Writer",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: imgCard,
    },
    {
      title: "Digital Marketing Executive",
      text: "Another quick example text to build on the card title and make up the bulk of the card's content.",
      image: imgCard,
    },
    {
      title: "Team Lead",
      text: "Yet another quick example text to build on the card title and make up the bulk of the card's content.",
      image: imgCard,
    },
    {
      title: "Web Developer",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: imgCard,
    },
  ];

  const WhyData = [
    {
      title: "Innovative Setting",
      content:
        "Join a team creating the future with the latest technology and forward-looking strategies.",
    },
    {
      title: "Growth Opportunities",
      content:
        "We are committed to the professional development of our employees, offering training programs, mentorship, and clear career progression paths.",
    },
    {
      title: "Inclusive Culture",
      content:
        "We foster a workplace where diversity is celebrated, and everyone's voice is heard.",
    },
    {
      title: "Work-Life Balance",
      content:
        "We understand the importance of balancing work with personal life and offer flexible working arrangements to support your needs.",
    },
    {
      title: "Collaborative Environment",
      content:
        "We believe in the power of teamwork, encouraging collaboration across departments to achieve great results together.",
    },
  ];

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };
  const toggleWhyUs = () => {
    setIsWhyUsVisible(!isWhyUsVisible);
  };

  const toggleHowToApply = () => {
    setIsHowToApplyVisible(!isHowToApplyVisible);
  };

  const toggleInternship = () => {
    setIsInternshipVisible(!isInternshipVisible);
  };

  const toggleJoinTeam = () => {
    setIsJoinTeamVisible(!isJoinTeamVisible);
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Title title="Career." />
          <p className="font19">
            People are our greatest asset at WinsCreatives. We are always on the
            lookout for passionate, innovative, and driven individuals who want
            to make a difference. Whether you are embarking on your first career
            move or seeking your next great adventure, we deliver creative
            inspiration and wonderful opportunities for collaboration in our
            dynamic environment.
          </p>
          <div className="card">
            {careerData.map((item, index) => (
              <div key={index} className="card-body">
                <img src={item.image} alt="" width={126} className="card-pic" />
                <div className="card-content">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.text}</p>
                 
                  <AwesomeButton type="primary" className="card-btn" onPress={togglePopup}>apply</AwesomeButton>
                  
                </div>
              </div>
            ))}
          </div>
            {/* Why Work With Us Section */}
          <div className="dropdown">
            <button className="dropdown-btn" onClick={toggleWhyUs}>
              Why Work With Us?
            </button>
            {isWhyUsVisible && (
              <ul className="dropdown-content">
                {WhyData.map((item, index) => (
                  <li key={index}>
                    <p className="whyus_desc">
                      <strong className="whyus_title">{item.title}:</strong>
                      <br /> {item.content}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* How to Apply Section */}
          <div className="dropdown">
            <button className="dropdown-btn" onClick={toggleHowToApply}>
              How to Apply
            </button>
            {isHowToApplyVisible && (
              <div className="dropdown-content">
                <p className="font19">
                  Apply by clicking the position below that interests you and
                  following the instructions. Be sure to upload your resume, a
                  cover letter, and any work samples. We'd love to learn more
                  about you!
                </p>
              </div>
            )}
          </div>

          {/* Internship Section */}
          <div className="dropdown">
            <button className="dropdown-btn" onClick={toggleInternship}>
              Internships
            </button>
            {isInternshipVisible && (
              <div className="dropdown-content">
                <p className="font19">
                  Just Starting Your Career? Check our Internship Programs.
                  These are designed to provide hands-on experience in the field
                  of your choice. Our internships will not only give you great
                  insight but could be the first of many steps toward a
                  fulfilling career with us.
                </p>
              </div>
            )}
          </div>

          {/* Join Our Team Section */}
          <div className="dropdown">
            <button className="dropdown-btn" onClick={toggleJoinTeam}>
              Join Our Team
            </button>
            {isJoinTeamVisible && (
              <div className="dropdown-content">
                <p className="font19">
                  At WinsCreatives, we're not just offering jobs; we're offering
                  careers that matter. Come be a part of something bigger, and
                  help us build a better future together.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {isPopupVisible && <CareerPopup togglePopup={togglePopup} />}
    </>
  );
};

export default Career;