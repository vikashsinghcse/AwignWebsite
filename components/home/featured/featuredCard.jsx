import React from 'react'; 
import './featuredCard.css';
import Button from 'react-bootstrap/lib/Button';

export default class FeaturedCard extends React.Component {
  render() {
    return (
      <div className="featured-card">
        <div className="featured-card-icon"></div>
        <div>
          <header>
            <h4>Market Expansion Executive</h4>
            <p>One Mobikwik Systems Pvt Ltd, Bangalore</p>
          </header>
        </div>
        <div className="featured-card-details">
          <div>
            <header>Location</header>
            <p>Bengaluru</p>
          </div>
          <div>
            <header>Stipened</header>
            <p>Rs. 7000</p>
          </div>
          <div>
            <header>Duration</header>
            <p>3 Weeks</p>
          </div>
          <div>
            <header>Work hours</header>
            <p>2-3 hours&#47;day</p>
          </div>
        </div>
        <div>
          <Button bsStyle="link">VIEW &amp; APPLY</Button>
        </div>
      </div>
    );
  }
}