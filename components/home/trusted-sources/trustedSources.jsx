import React from 'react'; 
import './trustedSources.css';

export default class TrustedSources extends React.Component {
  render() {
    return (
      <div className="trusted-sources">
        <h3>Awign is trusted by 1000+ students, Institutions & Companies pan India</h3>
        <div className="trusted-sources-icons">
          <div className="iimb-icon"></div>
          <div className="iimc-icon"></div>
          <div className="iimb-icon"></div>
          <div className="iimc-icon"></div>
          <div className="iimb-icon"></div>
          <div className="iimc-icon"></div>
        </div>
      </div>
    );
  }
}