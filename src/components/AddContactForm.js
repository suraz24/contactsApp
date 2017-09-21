import React from 'react';
import ContactsForm from './form.js';
import querystring from 'querystring';
import Axios from 'axios';
class AddContactForm extends React.Component{
	constructor(){
		super();
	}

    createContact(contact) {
        Axios.post("http://localhost:3030/contact/create",
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
                console.log(res.data);
              // browserHistory.push(`contact/${res.data}`);
                window.location.assign(`contact/${res.data}`);
            })
            .catch(err => {
                console.log(err);
            })
    }

	render(){
		return(
			<ContactsForm 
				heading="Add a Contact"
				action={this.createContact}
	            button="Add"
	     	/>
     	);
    }
}

export default AddContactForm;