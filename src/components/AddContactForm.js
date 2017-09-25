import React from 'react';
import ContactsForm from './form.js';
import querystring from 'querystring';
import Axios from 'axios';
import SuccessMsgDialog from './SuccessMsgDialog.js';
import FailureMsgDialog from './FailureMsgDialog.js';

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
      console.log("Hitting the create contact method");
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
              // browserHistory.push(`contact/${res.data}`);
              console.log(res);
              if (res.status === 200 || res.status === 201) {
                console.log(this.state.showDialog);
                this.setState({
                  showDialog: true,
                  uuid: res.data
                });
              }
            })
            .catch(err => {
                console.log(err);          
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