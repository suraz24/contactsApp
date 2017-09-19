import React from 'react';
import Axios from 'axios';
import {withRouter, Link} from 'react-router-dom';
import {browserHistory} from 'react-router';
import ViewContact from './viewContact.js';

class ContactsForm extends React.Component{
	constructor(){
		super();
	}

    createContact(e) {
        e.preventDefault();

        Axios.post("https://virtserver.swaggerhub.com/suraz/ContactsAPI/1.0.0/contact/")
            .then(res => {
                console.log(res.data);
              // browserHistory.push(`contact/${res.data}`);
               window.location.assign(`contact/${res.data}`);
            })
            .catch(err => {
                console.log(err);

            })

    }

    render() {
      return (
      	<div>
			<h1 className="FormHeading">{this.props.heading}</h1>
      		<form className='ContactForm'>
      			<label>First Name:</label>
      			<input type="text" name="firstName"/>
      			<br />
      			<label>Last Name:</label>
      			<input type="text" name="lastName"/>
      			<br />
      			<label>Work Phone:</label>
				<input type="text" name="workPhone"/>
      			<br />
      			<label>Mobile:</label>
      			<input type="text" name="mobile"/>
      			<br />
				<input type="submit" onClick={this.createContact.bind(this)} value={this.props.button} />
      		</form>
      	</div>
      );
   }
}

class FormContents extends React.Component{
	constructor(props){
		super(props);
	};
	render(){
		return(
			<ContactsForm 
				heading="Add a Contact"
	            button="Add"
	     	/>
     	);
    }
	/*
	Edit
	----------------------------
	render(){
		return(
			<Form 
				heading="Edit a Contact"
	            button="Save"
	     	/>
	    );
	}

	*/
}

export default FormContents;