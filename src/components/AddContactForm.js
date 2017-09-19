import React from 'react';
import ContactsForm from './form.js';

class AddContactForm extends React.Component{
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
}

export default AddContactForm;