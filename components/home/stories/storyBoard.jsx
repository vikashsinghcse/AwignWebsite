import React from 'react'; 
import './storyBoard.css';

export default class StoryBoard extends React.Component {
  render() {
    return (
      <div className="story-board">
        <div><img src="/public/images/storyBoard1.png" width="100%" height="150px"></img></div>
        <blockquote>
          <article>&quot;Within a week I had heard back from one of the four jobs I applied to on Awign. A week later</article>
          <footer><strong>Ram</strong>, <em>IIM Kozhikode</em></footer>
        </blockquote>
      </div>
    );
  }
}