import React from 'react'; 
import './featured.css';
import FeaturedCard from './featuredCard.jsx';
import Button from 'react-bootstrap/lib/Button';

export default class Featured extends React.Component {
  render() {
    return (
      <div className="featured">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <header>
                <h1 className="text-center register-text">Featured Internships</h1>
              </header>
            </div>
            <div className="col-md-12 featured-cards-container">
              <FeaturedCard/>
              <FeaturedCard/>
              <FeaturedCard/>
            </div>
            <div className="col-md-12 text-center">
              <Button className="btn-register">Browse all Internships</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}