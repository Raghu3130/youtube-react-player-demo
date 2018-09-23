import React from 'react';
import GoogleAuth from '../googleLogin';
import FacebookAuth from '../facebookLogin';
import { connect } from 'react-redux';


 class Login extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        if( this.props.isLoggedIn){
            this.props.history.push("/video")
        }
        return (
            <div className="sociallogin">
                <GoogleAuth {...this.props}/>
                <FacebookAuth {...this.props}/>
            </div>
        )
    }

}

export default connect(state => ({
    isLoggedIn: state
      .Login
      .get('idToken')!== null ? true : false
  }), null)(Login);