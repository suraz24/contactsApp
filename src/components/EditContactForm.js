import React from 'react';
import ContactsForm from './form.js';

class EditContactForm extends React.Component{
	constructor(props){
		super(props);
	};
	render(){
		return(
			<ContactsForm 
				heading="Edit a Contact"
	            button="Save"
	     	/>
	    );
	}
}

export default EditContactForm;