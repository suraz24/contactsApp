"use strict";

import React from 'react';
import DeleteDialog from '../views/DeleteDialog.js';
import Alert from '../images/Alert.png';

class DeleteButton extends React.Component{
	constructor(props) {
    	super(props);
    	this.state = {
      		showPopup: false
    	};
  	}
  	togglePopup() {
    	this.setState({
      	showPopup: !this.state.showPopup
    	});
  	}

	render() {
		return (
    		<div>
          <input className='DeleteButton' onClick={this.togglePopup.bind(this)} type="image" src={require("../images/DeleteButton.png")} alt="DeleteButton" width="100" height="100"/>
          {this.state.showPopup ? 
            <DeleteDialog
              id={this.props.id}
              icon={require("../images/Alert.png")}
              text= {`Are you sure you want to delete ${this.props.fullName}?`}
              source="delete"
              closePopup={this.togglePopup.bind(this)}
            />
           	: null
         	}
       	</div>
     	);
    }
}

export default DeleteButton;