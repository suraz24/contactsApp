import React from 'react';
import ContactsForm from './form.js';
import Axios from 'axios';
import querystring from 'querystring';
import SuccessMsgDialog from './SuccessMsgDialog.js';
import FailureMsgDialog from './FailureMsgDialog.js';

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
              if (res.status === 200) {
               this.setState({
                  showDialog: true,
                });
              }
            })
            .catch(err => {
                console.log(err); 
                    this.setState({
                      hasError: true
                    });
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