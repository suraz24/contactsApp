import React from 'react';
import Action from './actionItems.js'

class ViewContact extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         data: 
            {
               "firstName":"Krishna",
               "lastName":"Adhikari",
               "workPhone": "0312345678",
               "mobile": "0412345678"
            }
      };
   }
	
   render() {
      return (
         <div>
            <h1 className='ContactName'>{this.state.data.firstName + " " + this.state.data.lastName}</h1>
            <table className='Contact'>
               <tr>
                  <td><strong>First Name:</strong> {this.state.data.firstName}<br /></td>
               </tr>
               <tr>
                  <td><strong>Last Name:</strong> {this.state.data.lastName}<br /></td>
               </tr>
               <tr>
                  <td><strong>Work Phone:</strong> {this.state.data.workPhone}<br /></td>
               </tr>
               <tr>
                  <td><strong>Mobile:</strong> {this.state.data.mobile}<br /></td>
               </tr>
            </table>
            <Action />
            <Back />
         </div>
      );
   }
}


class Back extends React.Component{
   render() {
      return (
         <input className='BackButton' type="image" src={require("./images/BackButton.png")} alt="BackButton" width="100" height="100"/>
      );
   }
}
export default ViewContact;