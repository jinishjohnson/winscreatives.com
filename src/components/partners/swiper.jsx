import React from "react";
import Swiper from "react-id-swiper";
// SCSS
import "swiper/css/swiper.css";
// Components
import PartnerBox from "./partnerBox";
// Assets
import Partner01 from "../../assets/partners/cry.png";
import Partner02 from "../../assets/partners/gg.png";
import Partner03 from "../../assets/partners/gia.png";
import Partner04 from "../../assets/partners/pngegg.png";
import Partner05 from "../../assets/partners/POLICE.png";
import Partner06 from "../../assets/partners/pothys.png";
import Partner07 from "../../assets/partners/rama.png";
import Partner08 from "../../assets/partners/siji.png";

class MultipleSlidesPerView extends React.Component {
  state = {
    partners: [
      { preview: Partner01, id: "1" },
      { preview: Partner02, id: "2" },
      { preview: Partner03, id: "3" },
      { preview: Partner04, id: "4" },
      { preview: Partner05, id: "5" },
      { preview: Partner06, id: "6" },
      { preview: Partner07, id: "7" },
      { preview: Partner08, id: "8" },
    ],
  };

  swiperRef = React.createRef();

  // Method to handle pause on hover
  handleMouseEnter = () => {
    if (this.swiperRef.current) {
      this.swiperRef.current.swiper.autoplay.stop();
    }
  };

  // Method to handle play on mouse leave
  handleMouseLeave = () => {
    if (this.swiperRef.current) {
      this.swiperRef.current.swiper.autoplay.start();
    }
  };

  render() {
    let partnersRender = null;

    if (this.state.partners) {
      partnersRender = this.state.partners.map((partner) => (
        <div
          key={partner.id}
          className="swiper-slide"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <PartnerBox partner={partner.preview} className="grayscale" />
        </div>
      ));
    }

    const params = {
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 1000, // Delay between transitions (in milliseconds)
        disableOnInteraction: false, // Continue autoplay after user interaction
      },
      speed: 1000, // Duration of transition (in milliseconds)
      breakpoints: {
        1200: {
          slidesPerView: 6,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
    };

    return (
      <Swiper {...params} ref={this.swiperRef}>
        {partnersRender}
      </Swiper>
    );
  }
}

export default MultipleSlidesPerView;