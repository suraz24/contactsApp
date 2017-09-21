import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'muicss/lib/react/button';
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
  // componentWillMount() {
  //   if (this.props.data) {
  //     this.setState({
  //       firstname: this.props.data.firstname,
  //       lastname: this.props.data.lastname,
  //       workphone: this.props.data.workphone,
  //       mobile: this.props.data.mobile
  //     })
  //   }
  // }
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
      <h1 className="FormHeading">{this.props.heading}</h1>
      <GoBack />
          <form className='ContactForm'>
            <label>First Name:</label>
            <input type="text" name="firstname" value={this.state.firstname} onChange={this.changeValues}/>
            <br />
            <label>Last Name:</label>
            <input type="text" name="lastname" value={this.state.lastname} onChange={this.changeValues}/>
            <br />
            <label>Work Phone:</label>
            <input type="text" name="workphone" value={this.state.workphone} onChange={this.changeValues}/>
            <br />
            <label>Mobile:</label>
            <input type="text" name="mobile" value={this.state.mobile} onChange={this.changeValues}/>
            <br />
            <Button color="primary" classname="SaveButton" type="submit" onClick={this.adding.bind(this)} >{this.props.button}</Button>
          </form>
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

