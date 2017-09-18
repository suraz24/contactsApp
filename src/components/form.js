import React from 'react';

class ContactsForm extends React.Component{
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
				<input type="submit" value={this.props.button}/>
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