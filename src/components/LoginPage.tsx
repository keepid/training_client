import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { withAlert } from 'react-alert';
import ReCAPTCHA from 'react-google-recaptcha';
import { Link } from 'react-router-dom';
import getServerURL from '../serverOverride';
import LoginSVG from '../static/images/login-svg.svg';
import { reCaptchaKey } from '../configVars';

interface State {
  username: string,
  password: string,
  buttonState: string,
  recaptchaPayload: string
}

const recaptchaRef: React.RefObject<ReCAPTCHA> = React.createRef();

interface Props {
  setLogInState: (isLoggedIn: boolean) => void,
  isLoggedIn: boolean,
  alert: any
}

class LoginPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      buttonState: '',
      recaptchaPayload: '',
    };
  }

  onSubmitWithReCAPTCHA = async (e) => {
    e.preventDefault();
    if (recaptchaRef !== null && recaptchaRef.current !== null) {
      const recaptchaPayload = await recaptchaRef.current.executeAsync();
      this.setState({ recaptchaPayload }, this.handleLogin);
    }
  }

  handleChangePassword = (event: any) => {
    this.setState({ password: event.target.value });
  }

  handleChangeUsername = (event: any) => {
    this.setState({ username: event.target.value });
  }

  handleLogin = (): void => {
    this.setState({ buttonState: 'running' });
    const {
      logIn,
    } = this.props;
    const {
      username,
      password,
      recaptchaPayload,
    } = this.state;
    if (username.trim() === '' || password.trim() === '') {
      this.props.alert.show('Please enter a valid username or password');
      this.setState({ buttonState: '' });
    } else {
      fetch(`${getServerURL()}/login`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({
          username,
          password,
          recaptchaPayload,
        }),
      }).then((response) => response.json())
        .then((responseJSON) => {
          const responseObject = JSON.parse(responseJSON);
          const {
            status,
          } = responseObject;

          if (status === 'AUTH_SUCCESS') {
            logIn(true); 
          } else if (status === 'AUTH_FAILURE') {
            this.props.alert.show('Incorrect Username or Password');
            this.setState({ buttonState: '' });
          } else if (status === 'USER_NOT_FOUND') {
            this.props.alert.show('Incorrect Username or Password');
            this.setState({ buttonState: '' });
          } else {
            this.props.alert.show('Server Failure: Please Try Again');
            this.setState({ buttonState: '' });
          }
        }).catch((error) => {
          this.props.alert.show('Network Failure: Check Server Connection');
          this.setState({ buttonState: '' });
        });
    }
  }

  static enterKeyPressed(event, funct) {
    if (event.key === 'Enter') {
      funct();
    }
  }

  render() {
    const {
      username,
      password,
    } = this.state;
    return (
      <div>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Keep.id" />
        </Helmet>
        <div className="container">
          <div className="row mt-4">
            <div className="col mobile-hide">
              <div className="float-right w-100">
                <img alt="Login graphic" className="w-75 pt-5 mt-5 mr-3 float-right " src={LoginSVG} />
              </div>
              <div className="row pl-3 pb-3">
                <span className="text-muted recaptcha-login-text pt-4 mt-4 pl-5 ml-5 w-75">
                  This page is protected by reCAPTCHA, and subject to the Google
                  {' '}
                  <a href="https://www.google.com/policies/privacy/">Privacy Policy </a>
                  and
                  {' '}
                  <a href="https://www.google.com/policies/terms/">Terms of service</a>
                  .
                </span>
              </div>
            </div>

            <div className="col">
              <form className="form-signin pt-5">
                <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
                <label htmlFor="username" className="w-100 font-weight-bold">
                  Username
                  <input
                    type="text"
                    className="form-control form-purple mt-1"
                    id="username"
                    placeholder="username"
                    value={username}
                    onChange={this.handleChangeUsername}
                    required
                  />
                </label>
                <label htmlFor="password" className="w-100 pt-2 font-weight-bold">
                  Password
                  <input
                    type="password"
                    className="form-control form-purple mt-1"
                    id="password"
                    placeholder="password"
                    value={password}
                    onChange={this.handleChangePassword}
                    required
                  />
                </label>
                <div className="row pl-3 pb-3">
                  <Link to="/forgot-password" className="text-decoration-none">
                    <span className="">Forgot your password?</span>
                  </Link>
                </div>
                <div className="row pl-3 pb-1">
                  <span className="pt-3">
                    Don&apos;t have an account?
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ReCAPTCHA
          theme="dark"
          size="invisible"
          ref={recaptchaRef}
          sitekey={reCaptchaKey}
        />
      </div>
    );
  }
}

export default withAlert()(LoginPage);
