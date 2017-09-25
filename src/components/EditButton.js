"use strict";

import React from 'react';
import {Link} from 'react-router-dom';

const EditButton = ({ id }) => {
	console.log(id);
	return (
		<Link to={{ 
		    pathname: `/editContact/${id.uuid}`, 
		    state: { data: id} 
        }}>
		    <input className='EditButton' type="image" src={require("../images/EditButton.png")} alt="EditButton" width="100" height="100"/>
 		</Link>
  	);	   
}

export default EditButton;