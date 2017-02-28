import React from 'react'; 
import './home.css';
import Header from '../header/Header.jsx';
import CarouselHome from '../carousel/Carousel.jsx';
import Refer from './refer/refer.jsx';
import Internship from './internships/internship.jsx';
import HowItWorks from './how-it-works/howItWorks.jsx';
import Stories from './stories/stories.jsx';
import Featured from './featured/featured.jsx';
import GetStarted from './get-started/getStarted.jsx';
import TrustedSources from './trusted-sources/trustedSources.jsx';
import MediaStories from './media-stories/mediaStories.jsx';
import Footer from '../footer/footer.jsx';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <CarouselHome/>
        <Refer/>
        <Internship/>
        <HowItWorks/>
        <Stories/>
        <Featured/>
        <GetStarted/>
        <TrustedSources/>
        <MediaStories/>
        <Footer/>
      </div>
    );
  }
}