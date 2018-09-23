import React, {Component} from 'react'
import ReactPlayer from 'react-player'
import withVideo from '../Base/withVideo'
import authAction from '../../reducers/login/actions';
import {connect} from 'react-redux';
const {logout} = authAction;


class Player extends Component {
  constructor(props){
    super(props);
    this.state={
      options:[

      ]
    }
  }
  render() {
    console.log( "",this.props)
    const Suggestions = (props) => {
      const options = props.results.map(r => (
        <li style={{cursor:"pointer"}} key={r.id} onClick={() => this.setState({link:r.url})}>
         {r.name}
        </li>
      ))
      return <ul>{options}</ul>
    }

    return (
      <div className="videoPlayer">
       <input placeholder="Search Video by name" onChange={async (e) =>{

       let data = await  this.props.getVideoLink(e.target.value);
       this.setState({options:data.data})}

       
       }/>
       {
         this.state.options.length>0 && 
         <span style={{paddingTop:"20px"}}>Click below to view</span>
       }
       
       <Suggestions results ={this.state.options}/>
        <ReactPlayer url={this.state.link ||'https://www.youtube.com/watch?v=ysz5S6PUM-U'}/>
        <a className="logout" onClick={() => this.props.logout()}>Logout</a>
      </div>
    )
  }
}


export default connect(state => ({
  isLoggedIn: state
    .Login
    .get('idToken')!== null ? true : false
}), {logout})(withVideo(Player));