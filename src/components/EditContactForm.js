import React from 'react';
import ContactsForm from './form.js';
import Axios from 'axios';
import querystring from 'querystring';

class EditContactForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
          contactId: this.props.match.params.uuid,
          contactData: this.props.location.state.data
      }; 

		this.updateContact = this.updateContact.bind(this);
	};

  	updateContact(contact) {
        Axios.put(`http://localhost:3030/contact/update/${this.state.contactId}`,
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
              // browserHistory.push(`contact/${res.data}`);
               window.location.assign(`/contact/${this.state.contactId}`);
            })
            .catch(err => {
                console.log(err);
            })
    }

	render(){
    console.log(this.state.contactData);
		return(
			<ContactsForm 
        contact={this.state.contactData}
				heading="Edit a Contact"
				action={this.updateContact}
        button="Save"
     	/>
    );
	}
}

export default EditContactForm;