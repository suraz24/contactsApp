import React from 'react';
import Axios from 'axios';
import Action from './actionItems.js';
import GoBack from './goBack.js';


class ViewContact extends React.Component {
   constructor(props) {
      super(props);

      const contactId = this.props.match.params.id;
		
      this.state = {
         data: {}
      };

       Axios.get(`https://virtserver.swaggerhub.com/suraz/ContactsAPI/1.0.0/contact/${contactId}`)
           .then(res => {
               this.setState({ data: res.data });
               console.log(res.data);})
           .catch(err => console.log(err))
   }
	
   render() {
      return (
         <div>
            <h1>{this.state.data.firstName}</h1>
            <h1 className='ContactName'>{this.state.data.firstname + " " + this.state.data.lastname}</h1>
            <GoBack />
            <table className='Contact'>
               <tr>
                  <td><strong>First Name:</strong> {this.state.data.firstname}<br /></td>
               </tr>
               <tr>
                  <td><strong>Last Name:</strong> {this.state.data.lastname}<br /></td>
               </tr>
               <tr>
                  <td><strong>Work Phone:</strong> {this.state.data.workPhone}<br /></td>
               </tr>
               <tr>
                  <td><strong>Mobile:</strong> {this.state.data.mobile}<br /></td>
               </tr>
            </table>
            <Action />
         </div>
      );
   }
}

export default ViewContact;