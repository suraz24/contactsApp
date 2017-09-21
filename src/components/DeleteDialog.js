import React from "react";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Axios from 'axios';


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
						      <button className='yes' onClick={this.deleteContact}>YES</button>
            			<button className='no' onClick={this.props.closePopup}>NO</button>
				       </div>
        		</div>
      		</div>
    	);
	}
}

export default DeleteDialog;
