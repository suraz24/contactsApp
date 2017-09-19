import React from 'react';
import Axios from 'axios';
import DeleteButton from './DeleteButton.js';
import EditButton from './EditButton.js';
import GoBack from './goBack.js';


class ViewContact extends React.Component {
   constructor(props) {
      super(props);

      const contactId = this.props.match.params.uuid;
		
      this.state = {
         data: []
      };

       Axios.get(`http://localhost:2222/contact/${contactId}`)
         .then(res => {
         this.setState({ data: res.data[0] });
         console.log(res.data[0]);})
         .catch(err => console.log(err))
}
   render() {
      return (
         <div>
            <h1 className='ContactName'>{this.state.data.firstname + " " + this.state.data.lastname}</h1>
            <GoBack />
            <EditButton />
            <DeleteButton />
            <table className='Contact'>
               <tr>
                  <td><strong>First Name:</strong> {this.state.data.firstname}<br /></td>
               </tr>
               <tr>
                  <td><strong>Last Name:</strong> {this.state.data.lastname}<br /></td>
               </tr>
               <tr>
                  <td><strong>Work Phone:</strong> {this.state.data.workphone}<br /></td>
               </tr>
               <tr>
                  <td><strong>Mobile:</strong> {this.state.data.mobile}<br /></td>
               </tr>
            </table>
            
         </div>
      );
   }
}

export default ViewContact;