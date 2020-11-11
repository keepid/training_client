import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Logo from '../static/images/logo.svg';
import getServerURL from '../serverOverride';
import Role from '../static/Role';

const logoSize = 40;
interface Props {
  isLoggedIn: boolean,
  setLoginState: (loginState: boolean) => void
}

interface State {}

class Header extends Component<Props, State, {}> {
  handleLogout = (event: any) => {
    event.preventDefault();
    const {
      setLoginState,
    } = this.props;
    setLoginState(false);
  }

  render() {
    const {
      isLoggedIn,
    } = this.props;
    if (isLoggedIn) {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top navbar-custom">
          <div className="container px-0">
            <Link className="pr-3" to="/home">
              <img
                alt="Logo"
                src={Logo}
                width={logoSize}
                height={logoSize}
                className="d-inline-block"
              />
            </Link>
            <Link className="navbar-brand" to="/home">
              Keep.id
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleLoggedIn" aria-controls="navbarToggleLoggedIn" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2" id="navbarToggleLoggedIn">
              <ul className="navbar-nav ml-auto">
                <div className="my-1 flex-fill">
                  <button type="button" onClick={this.handleLogout} className="btn btn-primary btn-dark-custom">Log Out</button>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top navbar-custom">
        <div className="container px-0">
          <Link className="pr-3" to="/home">
            <img
              alt="Logo"
              src={Logo}
              width={logoSize}
              height={logoSize}
              className="d-inline-block"
            />
          </Link>
          <Link className="navbar-brand" to="/home">
            Keep.id
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarToggle">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
              <li className="nav-item my-1 mr-3 ml-2">
                <Link to="/login">
                  <button type="submit" className="btn btn-secondary w-40 mr-2">Log in</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
