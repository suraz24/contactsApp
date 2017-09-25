import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


class Back extends React.Component{
	constructor(props){
		super(props);
		
	};
   render() {
      return (
          <Link to ="/">
              <input className='BackButton' type="image" src={require("./images/BackButton.png")} alt="BackButton" width="100" height="100"/>
          </Link>
      );
   }
}

export default Back;