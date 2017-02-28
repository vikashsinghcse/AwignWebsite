import React from 'react'; 
import './getStarted.css';
import Button from 'react-bootstrap/lib/Button';

export default class GetStarted extends React.Component {
  render() {
    return (
      <div className="get-started">
        <div className="get-started-box">
          <div className="get-started-content">
            <h1>Let&apos;s Get Started</h1>
            <p className="text-center">Your experience begins here&#33; Take the first step towards a better resume and life-changing internship</p>
            <div className="get-started-email-box">
              <input type="text" placeholder="Type in your email"/>
              <Button className="btn-register">Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}