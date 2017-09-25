"use strict";

import React from 'react';
import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';
import GoBack from '../components/goBack.js';
import formStyle from './form.css';

class ContactsForm extends React.Component{
  constructor(props){
		super(props);
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
}

ContactsForm.defaultProps = {
  contact : {}
}

export default ContactsForm;

