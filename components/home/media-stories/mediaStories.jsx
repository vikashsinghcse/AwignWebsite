import React from 'react'; 
import './mediaStories.css';

export default class MediaStories extends React.Component {
  render() {
    return (
      <div className="media-stories">
        <h3 className="text-center">As spotted in</h3>
        <div className="media-stories-icons">
          <div className="forbes-icon"></div>
          <div className="tc-icon"></div>
          <div className="ys-icon"></div>
          <div className="th-icon"></div>
        </div>
      </div>
    );
  }
}