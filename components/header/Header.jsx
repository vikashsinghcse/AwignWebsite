import React from 'react'; 
import './header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
            <div className="logo">Awign</div>
            <ul className="nav">
                <li>Internships</li>
                <li>Intern Blog</li>
                <li>About</li>
                <li>Faqs</li>
                <li>Contact Us</li>
            </ul>
        </nav>
      </header>
    );
  }
}