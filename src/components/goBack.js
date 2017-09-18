import React from 'react';

class Back extends React.Component{
	constructor(props){
		super(props);
		
	};
   render() {
      return (
      	<div>
         <input className='BackButton' type="image" src={require("./images/BackButton.png")} alt="BackButton" width="100" height="100"/>
        </div>
      );
   }
}

export default Back;