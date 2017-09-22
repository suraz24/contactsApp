import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';
import Axios from 'axios';
import {withRouter, Link} from 'react-router-dom';
import {browserHistory} from 'react-router';
import ViewContact from './viewContact.js';
import GoBack from './goBack.js';


class ContactsForm extends React.Component{
	
  constructor(props){
		super(props);
    console.log(props);

    this.state= {
        firstname: this.props.contact.firstname ||"",
        lastname: this.props.contact.lastname || "",
        workphone: this.props.contact.workphone || "",
        mobile: this.props.contact.mobile || ""
    }

    this.changeValues=this.changeValues.bind(this);
	}

  adding(e){
    e.preventDefault();
      this.props.action(this.state);
  }

  changeValues(e){
    this.setState({
        [e.target.name]: e.target.value
    });
  }

    render() {
/*      const PopulatedInput = (name, value) => {
        return value ? (<input type="text" name={name} value={value} onChange={this.changeValues} />) : (<input type="text" name={name} onChange={this.changeValues}/>)
      }*/

        return (
        <div>
          <div id='formHeading' className="mui--text-display3">{this.props.heading}</div>      
          <GoBack />
          <form className='ContactForm'>
            <Input label="First Name *" floatingLabel={true} type="text" name="firstname" value={this.state.firstname} onChange={this.changeValues} required/>
            <Input label="Last Name *" floatingLabel={true} type="text" name="lastname" value={this.state.lastname} onChange={this.changeValues} required/>
            <Input label="Work Phone" floatingLabel={true} type="text" name="workphone" value={this.state.workphone} onChange={this.changeValues} />
            <Input label="Mobile" floatingLabel={true} type="text" name="mobile" value={this.state.mobile} onChange={this.changeValues}/>
            <Button variant="raised" color="primary" className="SaveButton" type="submit" onClick={this.adding.bind(this)} >{this.props.button}</Button>
          </form>
          <div id="hint" className="mui--text-dark-secondary">* mandatory fields</div>
        </div>
      );
   }
     /* return (
      	<div>
          <h1 className="FormHeading">{this.props.heading}</h1>
          <GoBack />
      		<form className='ContactForm'>
      			<label>First Name:</label>
      			<PopulatedInput  name="firstname" value={this.state.firstname} />
      			<br />
      			<label>Last Name:</label>
      			<PopulatedInput  name="lastname" value={this.state.lastname} />
      			<br />
      			<label>Work Phone:</label>
				    <PopulatedInput  name="workphone" value={this.state.workphone}/>
      			<br />
      			<label>Mobile:</label>
      			<PopulatedInput name="mobile" value={this.state.mobile} />
      			<br />
				    <input type="submit" onClick={this.adding.bind(this)} value={this.props.button} />
      		</form>
      	</div>
      );
   }*/
}

ContactsForm.defaultProps = {
  contact : {}
}


export default ContactsForm;

