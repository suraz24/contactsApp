"use strict";

import React from 'react';
import Axios from 'axios';
import DeleteButton from '../components/DeleteButton.js';
import EditButton from '../components/EditButton.js';
import GoBack from '../components/goBack.js';
import FailureMsgDialog from './FailureMsgDialog.js';

import ViewContactStyle from './ViewContact.css';
import EndPoints from '../endpoints';

class ViewContact extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [],
         contactId: this.props.match.params.uuid,
         hasError: false
      };

       Axios.get(`${API_URL}/${EndPoints.GET_CONTACT_BY_ID}/${this.state.contactId}`)
         .then(res => {
            if (res.status === 200){ 
               this.setState({ 
                  data: res.data[0] 
               });
            }
         })
         .catch(err => {
               this.setState({
               hasError: true
               });
         })

    }

   render() {
      const fullName = this.state.data.firstname + " " + this.state.data.lastname;
      const dialog = this.state.hasError ? <FailureMsgDialog display={this.state.showDialog} uuid={this.state.contactId}/>
    :
     null
      return (
         <div>
            {dialog}
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