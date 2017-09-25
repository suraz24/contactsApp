import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import DeleteDialog from './DeleteDialog.js';
import ViewContact from './viewContact.js';

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
          <input className='DeleteButton' onClick={this.togglePopup.bind(this)} type="image" src={require("./images/DeleteButton.png")} alt="DeleteButton" width="100" height="100"/>
          {this.state.showPopup ? 
            <DeleteDialog
              id={this.props.id}
              icon="./images/Alert.png"
              text= {`Are you sure you want to delete ${"\n" + this.props.fullName}?`}
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