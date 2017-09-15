import React from 'react';

class Edit extends React.Component{
	   render() {
	      return (
	         <input className='EditButton' type="image" src={require("./images/EditButton.png")} alt="EditButton" width="100" height="100"/>
	      );
	   }
	}

class Delete extends React.Component{
   render() {
      return (
         <input className='DeleteButton' type="image" src={require("./images/DeleteButton.png")} alt="DeleteButton" width="100" height="100"/>
      );
   }
}

class Action extends React.Component{
	constructor(props){
		super(props);
		
	};
	render(){
		return(
			<div>
				<Edit />
				<Delete />
			</div>
		);
	}

}
export default Action;
