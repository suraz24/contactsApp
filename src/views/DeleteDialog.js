"use strict";

import React from "react";
import Axios from 'axios';
import Button from 'muicss/lib/react/button';
import SuccessMsgDialog from './SuccessMsgDialog.js';
import FailureMsgDialog from './FailureMsgDialog.js';
import Alert from '../images/Alert.png';
import DialogStyle from '../components/dialog.css';
import EndPoints from '../endpoints';

class DeleteDialog extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      contactId: this.props.id,
      showDialog: false,
      source: this.props.source,
      hasError: false
    };
    this.deleteContact = this.deleteContact.bind(this);
    this.SuccessResponse = this.SuccessResponse.bind(this);
    this.FailureResponse = this.FailureResponse.bind(this);
  };

    // This function sets the showdialog state to true when the update call returns a success response.
    SuccessResponse() {
        this.setState({
            showDialog: true,
        });
    }

    // This function sets the hasError state to true when the update call returns a failure response.
    FailureResponse(){
        this.setState({
            hasError: true
        });
    }

    deleteContact() {
      Axios.delete(`${API_URL}/${EndPoints.DELETE_CONTACT}/${this.state.contactId}`)
        .then(res => {
            if (res.status === 200) {
              this.SuccessResponse();
            }
        })
        .catch(err => {
            this.FailureResponse();
        }) 
    }

 	render() {
    const dialog = this.state.hasError ? <FailureMsgDialog display={this.state.showDialog} source={this.state.source} uuid={this.state.contactId}/>
    :
    <SuccessMsgDialog display={this.state.showDialog} text="Contact successfully deleted" source={this.state.source} uuid={this.state.contactId}/>;
    return(
      <div>
      {dialog}
        <div className='popup'>
          <div className='popup_inner'>
             <img className='icon' src={`${this.props.icon}`} alt='Icon'/> 
             <h1 className='question'>{this.props.text}</h1>
             <div className='yesno'>
                <Button variant="raised" color="primary" id='yes' onClick={this.deleteContact}>YES</Button>
                <Button variant="raised" color="primary" id='no' onClick={this.props.closePopup}>NO</Button>
             </div>
          </div>
        </div> 
      </div>
    );
  }
}
export default DeleteDialog;
