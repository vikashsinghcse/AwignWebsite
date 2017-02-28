import React from 'react'; 
import Carousel from 'react-bootstrap/lib/Carousel';
import Button from 'react-bootstrap/lib/Button';
import './carousel.css';

export default class CarouselHome extends React.Component {
  render(){
    return (
      <Carousel className="header-carousel">
        <Carousel.Item>
          <div className="carousel-div" id="slide1"></div>
          <Carousel.Caption>
            <h3>Kickstart your career with Awign</h3>
            <p>Appy on various part-time internships</p>
            <Button className="btn-register">Get Started, its free</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-div" id="slide2"></div>
          <Carousel.Caption>
            <h3>Kickstart your career with Awign</h3>
            <p>Appy on various part-time internships</p>
            <Button className="btn-register">Get Started, its free</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-div" id="slide3"></div>
          <Carousel.Caption>
            <h3>Kickstart your career with Awign</h3>
            <p>Appy on various part-time internships</p>
            <Button className="btn-register">Get Started, its free</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}