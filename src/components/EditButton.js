import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


class EditButton extends React.Component{
	render() {
		return (
			<Link to ="/editContact">
            	<input className='EditButton' type="image" src={require("./images/EditButton.png")} alt="EditButton" width="100" height="100"/>
         	</Link>
	      );
	   }
	}

export default EditButton;