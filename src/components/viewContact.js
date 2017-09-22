import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'muicss/lib/react/button';
import Axios from 'axios';
import DeleteButton from './DeleteButton.js';
import EditButton from './EditButton.js';
import GoBack from './goBack.js';


class ViewContact extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         data: [],
         contactId: this.props.match.params.uuid
      };

       Axios.get(`http://localhost:3030/contact/${this.state.contactId}`)
         .then(res => {
         this.setState({ data: res.data[0] });
         })
         .catch(err => console.log(err))
}

   render() {
      const fullName = this.state.data.firstname + " " + this.state.data.lastname;
      console.log(this.state.data)
      return (
         <div>
            <h1 id='ContactName' className="mui--text-display3">{this.state.data.firstname + " " + this.state.data.lastname}</h1>
            <GoBack />
            <EditButton id={this.state.data} />
            <DeleteButton id={this.state.contactId} fullName={fullName}/>
            <table id='Contact' className="mui--z3">
               <tr>
                  <td ><strong>First Name:</strong> {this.state.data.firstname}<br /></td>
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