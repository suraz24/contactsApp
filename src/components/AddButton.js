"use strict";

import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

class AddButton extends React.Component{
   	render() {
      	return (
         	<Link to ="/addContact">
            	<input className='AddButton' type="image" src={require("./images/AddButton.png")} alt="AddButton" width="100" height="100"/>
         	</Link>
      	);
   	}
}
export default AddButton;