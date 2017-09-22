import React from "react";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Axios from 'axios';
import Button from 'muicss/lib/react/button';

class DeleteDialog extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      contactId: this.props.id
    };
    this.deleteContact = this.deleteContact.bind(this);
  }

    deleteContact() {
        Axios.delete(`http://localhost:3030/contact/delete/${this.state.contactId}`)
            .then(res => {
                window.location.assign('/');
            })
            .catch(err => {
                console.log(err);
            })
    }

 	render() {
    	return (
      		<div className='popup'>
       			<div className='popup_inner'>
					     <img className='icon' src={require(`${this.props.icon}`)} alt='Icon'/> 
					     <h1 className='question'>{this.props.text}</h1>
					     <div className='yesno'>
                  <Button variant="raised" color="primary" id='yes' onClick={this.deleteContact}>YES</Button>
                  <Button variant="raised" color="primary" id='no' onClick={this.props.closePopup}>NO</Button>
				       </div>
        		</div>
      		</div>
    	);
	}
}

export default DeleteDialog;
