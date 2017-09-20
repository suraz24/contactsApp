import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


const EditButton = ({ id }) => {
	return (
		<Link to={`/editContact/${id}`}>
			<input className='EditButton' type="image" src={require("./images/EditButton.png")} alt="EditButton" width="100" height="100"/>
 		</Link>
  	);	   
}

export default EditButton;