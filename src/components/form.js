import React from 'react';
import Axios from 'axios';
import {withRouter, Link} from 'react-router-dom';
import {browserHistory} from 'react-router';
import ViewContact from './viewContact.js';
import GoBack from './goBack.js';


class ContactsForm extends React.Component{
	constructor(){
		super();
	}

    createContact(e) {
        e.preventDefault();

        Axios.post("http://localhost:2222/contact/create")
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
			<GoBack />
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


export default ContactsForm;