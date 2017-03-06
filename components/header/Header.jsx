import React from 'react'; 
import './header.css';
import Nav from 'react-bootstrap/lib/Nav';
import Button from 'react-bootstrap/lib/Button';
import NavItem from 'react-bootstrap/lib/NavItem';
import Navbar from 'react-bootstrap/lib/Navbar';

export default class Header extends React.Component {
  render() {
    return (
      <header className="app-header">
        <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#"></a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#" className="active">Interships</NavItem>
                <NavItem eventKey={2} href="#">Intern Blog</NavItem>
                <NavItem eventKey={4} href="#">How it works</NavItem>
                <NavItem eventKey={3} href="#">About</NavItem>
                <NavItem eventKey={6} href="#" className="link-business">For Business</NavItem>
                <NavItem eventKey={5} href="#" className="link-help"><div>Need Help?</div><span>+91 890 400 0342</span></NavItem>
                <NavItem eventKey={7} href="#" className="link-signin">Sign In</NavItem>
                <NavItem eventKey={8} href="#" className="link-register">Register</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      </header>
    );
  }
}