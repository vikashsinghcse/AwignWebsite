import React from 'react'; 
import './footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row underline">
            <div className="col-md-4 footer-content">
              <h4>About Awign</h4>
              <p>Headquatered in Bangalore, India our team is composed of passionate AdWords experts, developers and designers. We strive to provide the edge AdWords agencies needed to be successful.</p>
            </div>
            <div className="col-md-4 footer-content">
              <h4>Contact Us</h4>
              <p>We are available to answer questions and provide technical assistance from Monday to Friday (09:00 to 18:00 GMT). Contact support using the chat box below, email support&#64;awign.com</p>
            </div>
            <div className="col-md-4 footer-content">
              <h4>Partners</h4>
              <p>For enquiries relating to Awign, potential partnerships or other business related enquiries, email support&#64;awign.com or call 020 3575 1125</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <h5>Follow Us</h5>
              <ul className="list-unstyled">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Google Plus</li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>About Us</h5>
              <ul className="list-unstyled">
                <li>Why Awign</li>
                <li className="footer-highlight">Meet the team</li>
                <li>Join us</li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>For Students</h5>
              <ul className="list-unstyled">
                <li>Browse Internships</li>
                <li>Intern Blog</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>For Business</h5>
              <ul className="list-unstyled">
                <li>Explore</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="footer-logo-full"></div>
              <address>
                <p><strong>Awign Corporate Office</strong></p>
                <p>12th Main, HSR Layout, Bangalore.</p>
                <p><span className="footer-highlight">M</span> +91 8904000432 &nbsp;&nbsp;&nbsp;&nbsp;<span className="footer-highlight">E </span><email>info&#64;awign.com</email></p>
              </address>
            </div>
          </div>
        </div>
        <div className="dark-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ul className="list-unstyled">
                  <li><a href="" className="footer-logo"></a></li>
                  <li><a href="">Terms &amp; Conditions</a></li>
                  <li><a href="">Privacy policy</a></li>
                  <li className="pull-right">Copyright &copy; 2017 Awign Enterprises Pvt. Ltd. All rights reserved</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}