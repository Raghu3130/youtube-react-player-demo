import React from 'react'
import ReactDOM from 'react-dom'
import {GoogleLogin} from 'react-google-login-component';
import authAction from '../../reducers/login/actions';
import {connect} from 'react-redux';
const {login} = authAction;
const GOOGLE_CLIENT_ID = "";

//console.log('GOOGLE_CLIENT_ID', GOOGLE_CLIENT_ID);

class GoogleAuth extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible
    }

  }
  responseGoogle(googleUser) {
    var profile = googleUser.getBasicProfile();
    //console.log("google profile", profile);
    let first_name = profile.ofa;
    let last_name = profile.wea;
    let email = profile.U3;
    //console.log("URL: ", this.props);

    const user = {
      first_name,
      last_name,
      email
    };
    // console.log("iuser", user);
   
    this.props.login({token: user});
  }
  render() {
    return (
      <div>
        <GoogleLogin
          socialId={GOOGLE_CLIENT_ID}
          fetchBasicProfile={true}
          responseHandler={this
          .responseGoogle
          .bind(this)}
          className="auth-gp-btn-block">
          <span>
            Login with Google+</span>
        </GoogleLogin>
      </div>
    )
  }
}

export default connect(state => {
  return ({
    isLoggedIn: state
      .Login
      .get('idToken') !== null
      ? true
      : false

  })
}, {login})(GoogleAuth);