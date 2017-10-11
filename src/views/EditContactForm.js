"use strict";

import React from 'react';
import ContactsForm from './form.js';
import Axios from 'axios';
import querystring from 'querystring';
import SuccessMsgDialog from './SuccessMsgDialog.js';
import FailureMsgDialog from './FailureMsgDialog.js';
import EndPoints from '../endpoints';

class EditContactForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
          contactId: this.props.match.params.uuid,
          contactData: this.props.location.state.data,
          showDialog: false,
          hasError: false
      };
		this.updateContact = this.updateContact.bind(this);
		this.SuccessResponse = this.SuccessResponse.bind(this);
		this.FailureResponse = this.FailureResponse.bind(this);
	};

	// This function sets the showdialog state to true when the update call returns a success response.
	SuccessResponse() {
        this.setState({
            showDialog: true,
        });
    }

    // This function sets the hasError state to true when the update call returns a failure response.
    FailureResponse(){
        this.setState({
            hasError: true
        });
    }

	 //This function receives contact data as a parameter and makes an axios call
  	updateContact(contact) {
        Axios.put(`${API_URL}/${EndPoints.UPDATE_CONTACT}/${this.state.contactId}`,
        	querystring.stringify({
            firstName:contact.firstname,
            lastName: contact.lastname,
            workPhone:contact.workphone,
            mobile: contact.mobile
        	}),{
                header:{
                    "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then(res => {
          if (res.status === 200) {
           this.SuccessResponse();
          }
        })
        .catch(err => {
          this.FailureResponse();
        })
    }

	render() {
    const dialog = this.state.hasError ? <FailureMsgDialog display={this.state.showDialog} source="update" uuid={this.state.contactId}/>
    :
     <SuccessMsgDialog display={this.state.showDialog} text="Contact successfully updated" uuid={this.state.contactId}/>;
      return(
        <div>
            {dialog}
              <ContactsForm
                contact={this.state.contactData}
                heading="Edit a Contact"
                action={this.updateContact}
                button="Save"
              />
        </div>
      );
  }
}

export default EditContactForm;