import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../static/images/logo.svg';
import Email from '../static/images/email-2.svg';
import FacebookLogo from '../static/images/fb-logo.svg';
import GithubLogo from '../static/images/github-logo.svg';
import InstagramLogo from '../static/images/instagram.svg';

class Footer extends Component<{}, {}> {
  render() {
    return (
      <footer className="footer custom-footer-color">
        <div className="container">
          <div className="d-flex flex-row bd-highlight py-8 py-md-11 flex-wrap">
            <div className="p-2 bd-highlight col-12 col-md-4 col-lg-4 mb-4">
              <div className="row">
                <img alt="Keep.id Logo" className="footer-brand img-fluid mb-2 ml-3" src={Logo} />
                <div className="mb-2 ml-3 footer-brand-logo">Keep.id</div>
              </div>
              <p className="text-gray-700 mb-2">Securely Combating Homelessness</p>
              <ul className="list-unstyled list-inline list-social">
                <li className="list-inline-item list-social-item mr-3">
                  <a href="mailto:contact@keep.id" className="text-decoration-none">
                    <img alt="Email Address" src={Email} className="list-social-icon" />
                  </a>
                </li>
                <li className="list-inline-item list-social-item mr-3">
                  <a href="https://www.instagram.com/keepidphilly/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <img alt="Instagram Link" src={InstagramLogo} className="list-social-icon" />
                  </a>
                </li>
                <li className="list-inline-item list-social-item mr-3">
                  <a href="https://github.com/keepid" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <img alt="Github Link" src={GithubLogo} className="list-social-icon" />
                  </a>
                </li>
                <li className="list-inline-item list-social-item mr-3">
                  <a href="https://www.facebook.com/keepidphilly" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <img alt="Facebook Link" src={FacebookLogo} className="list-social-icon" />
                  </a>
                </li>
              </ul>
              <span className="text-muted pb-2">&copy; 2020 Keep.id</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
