import React from 'react'; 
import './internship.css';

export default class Internship extends React.Component {
  render() {
    return (
      <div className="internship">
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <header><h1>Internship throughout the year.</h1></header>
                </div>
                <div className="col-xs-12 col-md-4">
                    <div className="part-time-icon icon"></div>
                    <h2>Part-Time Internship</h2>
                    <p>Work in and around your location, at your comfortable pan India.</p>
                </div>
                <div className="col-xs-12 col-md-4">
                    <div className="get-paid-icon icon"></div>
                    <h2>Get Paid</h2>
                    <p>Earn a handsome stipend by investing less than 12 hours a week.</p>
                </div>
                <div className="col-xs-12 col-md-4">
                    <div className="cert-icon icon"></div>
                    <h2>Certificates &amp; PPI</h2>
                    <p>Grab certificates signed by business leaders and get Pre-Placement Interviews</p>
                </div>
            </div>
        </div>
      </div>
    );
  }
}