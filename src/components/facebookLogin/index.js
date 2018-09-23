import React, {Component} from 'react';
import {FacebookLogin} from 'react-facebook-login-component';
import authAction from '../../reducers/login/actions';
import {connect} from 'react-redux';
const {login} = authAction;
const FACEBOOK_APP_ID = "fb_client_Id";
class FacebookAuth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resp: {}
    }
  }

  responseFacebook(response) {
    const {email, name} = response;
    var nameArray = name.split(' ');
    var first_name = "",
      mid_name = "",
      last_name = "";
    if (nameArray.length == 3) {
      first_name = nameArray[0];
      mid_name = nameArray[1];
      last_name = nameArray[2];
    } else if (nameArray.length == 2) {
      first_name = nameArray[0];
      last_name = nameArray[1];
    }

    const user = {
      first_name,
      last_name,
      email
    };
    this.props.login({token: user});
    //console.log("props",this.props)
  }

  render() {

    return (
      <div className="facebook-button">

        <FacebookLogin
          socialId={FACEBOOK_APP_ID}
          language="en_US"
          scope="public_profile,email"
          fields="name,email,picture"
          version="v2.5"
          responseHandler={this
          .responseFacebook
          .bind(this)}
          className='auth-fb-btn-block'>
          <span className="facebook-span">Log in with facebook</span>
        </FacebookLogin>

      </div>
    );
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
}, {login})(FacebookAuth);
