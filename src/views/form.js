"use strict";

import React from 'react';
import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';
import GoBack from '../components/goBack.js';
import formStyle from './form.css';
import FormErrors from './formErrors.js';

class ContactsForm extends React.Component{
  constructor(props){
    super(props);
        this.state= {
          firstname: this.props.contact.firstname ||"",
          lastname: this.props.contact.lastname || "",
          workphone: this.props.contact.workphone || "",
          mobile: this.props.contact.mobile || "", 
          formErrors: { 
                  firstname: "",
                  lastname: "",
                  workphone: "",
                  mobile: ""
                },
          firstnameValid: false,
          lastnameValid: false,
          workphoneValid:false,
          mobileValid: false,
          // firstnameValid: this.props.contact.firstname.match(/^[A-Za-z -]+$/),
          // lastnameValid: this.props.contact.lastname.match(/^[A-Za-z -]+$/),
          // workphoneValid:this.props.contact.workphone.match(/^[0-9]{8,8}$/),
          // mobileValid: this.props.contact.mobile.match(/^[0-9]{10,10}$/),
          formValid: false
        }
        this.changeValues=this.changeValues.bind(this);
  }
  validateField(fieldName, value) {
  let fieldValidationErrors = this.state.formErrors;
  let firstnameValid = this.state.firstnameValid;
  let lastnameValid = this.state.lastnameValid;
  let workphoneValid = this.state.workphoneValid;
  let mobileValid = this.state.mobileValid;

  switch(fieldName) {
    case 'firstname':
      firstnameValid = value.match(/^[A-Za-z -]+$/); //pattern for regular letters and spaces
      fieldValidationErrors.firstname = firstnameValid ? '' : 'First name must not contain symbols or numbers';
      break;
    case 'lastname':
      lastnameValid = value.match(/^[A-Za-z -]+$/); //pattern for regular letters and spaces
      fieldValidationErrors.lastname = lastnameValid ? '' : 'Last name must not contain symbols or numbers';
      break;
    case 'workphone':
      workphoneValid = value.match(/^[0-9]{8,8}$/);
      fieldValidationErrors.workphone = workphoneValid ? '': 'Work phone must be 8 numeric digits';
      break;
    case 'mobile':
      mobileValid = value.match(/^[0-9]{10,10}$/);
      fieldValidationErrors.mobile = mobileValid ? '': 'Mobile must be 10 numeric digits';
      break;
    // default:
    //   break;
  }
  this.setState({formErrors: fieldValidationErrors,
                  firstnameValid: firstnameValid,
                  lastnameValid: lastnameValid,
                  workphoneValid: workphoneValid,
                  mobileValid: mobileValid
                }, this.validateForm);
  }

  validateForm() {
    console.log(this.state.firstnameValid);
  this.setState({formValid: this.state.firstnameValid && this.state.lastnameValid && this.state.workphoneValid && this.state.mobileValid});
  }

  adding(e){
    e.preventDefault();
    this.props.action(this.state);
  }

  changeValues(e){
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ // takes callback function to validate after user types in field
        [name]: value},
        () => {this.validateField(name,value)});
  }
  
  componentWillMount(){ //Initial setting of boolean values for Edit contact pg (will be true unlike Add contact pg)
    if(this.state.firstname.length > 0 && this.state.lastname.length > 0 && this.state.workphone.length > 0 && this.state.mobile.length > 0 ){
      this.setState({ 
        firstnameValid: this.props.contact.firstname.match(/^[A-Za-z -]+$/),
        lastnameValid: this.props.contact.lastname.match(/^[A-Za-z -]+$/),
        workphoneValid:this.props.contact.workphone.match(/^[0-9]{8,8}$/),
        mobileValid: this.props.contact.mobile.match(/^[0-9]{10,10}$/)
      });
    }
  }

  render() {
        return (
        <div>
          <div id='formHeading' className="mui--text-display3">{this.props.heading}</div>      
          <GoBack />
          <div id="errorPanel">
              <FormErrors formErrors={this.state.formErrors} />
          </div>
          <form className='ContactForm' noValidate="noValidate">
            <Input label="First Name" floatingLabel={true} type="text" name="firstname" value={this.state.firstname} autoComplete="off" onChange={this.changeValues} required/>
            <Input label="Last Name" floatingLabel={true} type="text" name="lastname" value={this.state.lastname} autoComplete="off" onChange={this.changeValues} required/>
            <Input label="Work Phone" floatingLabel={true} type="text" name="workphone" value={this.state.workphone} autoComplete="off" onChange={this.changeValues} required/>
            <Input label="Mobile" floatingLabel={true} type="text" name="mobile" value={this.state.mobile} autoComplete="off" onChange={this.changeValues} required/>
            <Button variant="raised" color="primary" className="SaveButton" type="submit" disabled={!this.state.formValid} onClick={this.adding.bind(this)}>{this.props.button}</Button>
          </form>
        </div>
      );
   }
}

ContactsForm.defaultProps = {
  contact : {}
}

export default ContactsForm;

