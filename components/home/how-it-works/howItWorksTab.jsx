import React from 'react'; 
import './howItWorksTab.css';
import Button from 'react-bootstrap/lib/Button';

export default class HowItWorksTab extends React.Component {
  render() {
    return (
      <div className="howItWorks">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="how-it-works-icon"></div>
            </div>
            <div className="col-md-4">
              <h2 className="register-text">Register &amp; go through various internships to apply on them</h2>
              <Button className="btn-register">Register Now</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}