import React from 'react';
import Axios from 'axios';
import {withRouter, Link} from 'react-router-dom';
import {browserHistory} from 'react-router';
import ViewContact from './viewContact.js';
import GoBack from './goBack.js';


class ContactsForm extends React.Component{
	
  constructor(props){
		super(props);
    console.log(this.props.action);

    this.state=
    {
        firstname: null,
        lastname: null,
        workphone: null,
        mobile: null
    }

    this.changeValues=this.changeValues.bind(this);
	}

  adding(e){
    e.preventDefault();
      console.log('im inside adding function');
      this.props.action(this.state);
  }

  changeValues(e){
    this.setState({
        [e.target.name]: e.target.value
    });
           console.log(`state: ${this.state}, name: ${e.target.name}, value: ${e.target.value}`);

  }

    render() {
      return (
      	<div>
			<h1 className="FormHeading">{this.props.heading}</h1>
			<GoBack />
      		<form className='ContactForm'>
      			<label>First Name:</label>
      			<input type="text" name="firstname" value={this.state.value} onChange={this.changeValues}/>
      			<br />
      			<label>Last Name:</label>
      			<input type="text" name="lastname" value={this.state.value} onChange={this.changeValues}/>
      			<br />
      			<label>Work Phone:</label>
				    <input type="text" name="workphone" value={this.state.value} onChange={this.changeValues}/>
      			<br />
      			<label>Mobile:</label>
      			<input type="text" name="mobile" value={this.state.value} onChange={this.changeValues}/>
      			<br />
				    <input type="submit" onClick={this.adding.bind(this)} value={this.props.button} />
      		</form>
      	</div>
      );
   }
}


export default ContactsForm;

