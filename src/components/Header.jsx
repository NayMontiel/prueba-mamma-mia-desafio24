import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import banner from "../assets/img/banner.png";
import banner1 from "../assets/img/banner1.png";
import banner2 from "../assets/img/banner2.png";
import banner3 from "../assets/img/banner3.png";

const Header = () => {
  return (
    <>
   <Carousel variant="light">
   <Carousel.Item>
        <img
          className="d-block w-100 banner"
          src={banner}
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 banner"
          src={banner1}
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 banner"
          src={banner2}
          alt="Second slide"
        />
        <Carousel.Caption className="text" >
          <h3 >👨‍🍳 Aprovecha nuestro martes y jueves de promociones 👨‍🍳</h3>
          <p>🍕 nuestros 2x1 con bebida gratis. valido solo por la web.💻</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 banner"
          src={banner3}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
    </>
  );
};

export default Header;
