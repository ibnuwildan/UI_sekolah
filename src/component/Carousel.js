import Carousel from "react-bootstrap/Carousel";
import image1 from "../asset/carousel1.jpg";
import image2 from "../asset/carousel2.jpg";
import image3 from "../asset/carousel3.jpg";

const carousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={image1} className="d-block w-100" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default carousel;
