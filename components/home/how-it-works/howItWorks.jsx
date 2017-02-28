import React from 'react'; 
import './howItWorks.css';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import HowItWorksTab from './howItWorksTab.jsx';

export default class HowItWorks extends React.Component {
  render() {
    return (
      <div className="howItWorks">
        <div className="container">
          <div className="row">
            <header className="col-xs-12">
              <h1 className="text-center register-text">How it works?</h1>
            </header>
            <div className="col-md-12">
              <Tabs defaultActiveKey={1} id="howItWorks">
                <Tab eventKey={1} title="1. Register for free!">
                  <HowItWorksTab/>
                </Tab>
                <Tab eventKey={2} title="2. Get Interview Call">
                  <HowItWorksTab/>
                </Tab>
                <Tab eventKey={3} title="3. Get Trained Online">
                  <HowItWorksTab/>
                </Tab>
                <Tab eventKey={4} title="4. Get Stipend & Rewards">
                  <HowItWorksTab/>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    );
  }
}