import React from 'react'; 
import './stories.css';
import Carousel from 'react-bootstrap/lib/Carousel';
import Button from 'react-bootstrap/lib/Button';
import StoryBoard from './storyBoard.jsx';

export default class Stories extends React.Component {
  render() {
    return (
      <div className="stories">
        <div className="container">
            <div className="row">
                <header className="col-md-12">
                    <h1 className="text-center">Internship Stories</h1>
                </header>
                <div className="col-md-12">
                    <Carousel>
                        <Carousel.Item>
                          <div className="carousel-div">
                            <StoryBoard/>
                            <StoryBoard/>
                            <StoryBoard/>
                          </div>
                        </Carousel.Item>
                        <Carousel.Item>
                          <div className="carousel-div">
                            <StoryBoard/>
                            <StoryBoard/>
                            <StoryBoard/>
                          </div>
                        </Carousel.Item>
                        <Carousel.Item>
                          <div className="carousel-div">
                            <StoryBoard/>
                            <StoryBoard/>
                            <StoryBoard/>
                          </div>
                        </Carousel.Item>
                      </Carousel>
                </div>
                <div className="col-md-12 text-center">
                  <Button className="btn-register">View all stories</Button>
                </div>
            </div>
        </div>
      </div>
    );
  }
}