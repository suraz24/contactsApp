"use strict";

import React from 'react';
import ContactsForm from './form.js';
import querystring from 'querystring';
import Axios from 'axios';
import SuccessMsgDialog from './SuccessMsgDialog.js';
import FailureMsgDialog from './FailureMsgDialog.js';
import EndPoints from '../endpoints';

class AddContactForm extends React.Component{
	constructor(){
		super();
        this.state = {
            showDialog: false,
            uuid: "",
            hasError: false
        }
        this.createContact = this.createContact.bind(this);
	}

    createContact(contact) {
        Axios.post(`${API_URL}/${EndPoints.CREATE_CONTACT}`,
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
              if (res.status === 200 || res.status === 201) {
                this.setState({
                  showDialog: true,
                  uuid: res.data
                });
              }
            })
            .catch(err => {
                this.setState({
                  hasError:true
                });    
            })
    }

    render() {
      const dialog = this.state.hasError ? <FailureMsgDialog display={this.state.showDialog} source="create" uuid={this.state.uuid}/>
    :
     <SuccessMsgDialog display={this.state.showDialog} text="Contact successfully added" uuid={this.state.uuid}/>;
      return(
        <div>
          {dialog}
          <ContactsForm 
            heading="Add a Contact"
            action={this.createContact}
            button="Add"
          />
        </div>
      );
    }
}

export default AddContactForm;