import React from 'react';

class Form extends React.Component{
	constructor(props){
		super(props);
	};
   render() {
      return (
      	<div>
			<FormHeader />
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
				<input type="submit" value="Save"/>
      		</form>		
      	</div>
      );
   }
}

class FormHeader extends React.Component {
   render() {
      return (
         <div>
            <h1 className='FormHeading'>Add</h1>
         </div>
      );
   }
}

export default Form;