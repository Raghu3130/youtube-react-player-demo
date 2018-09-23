import React, {Component} from 'react';

export default(Page) => class withVideo extends Component {

  getVideoLink(data) {
    ;
    return new Promise((resolve, reject) => {
      try {
        if(data.length>0){

        
        fetch('http://localhost:1337/links/search/'+data, {
            method: "get",

          })
          .then(res => res.json())
          .then(res => {
              resolve(res);
          });
        }
      } catch (e) {
          reject(e);
      }
    })
  }
  render() {
    return (<Page getVideoLink={(data) =>this.getVideoLink(data)} {...this.props}/>)
  }
}