import React from "react";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Axios from 'axios';
import Button from 'muicss/lib/react/button';
import SuccessMsgDialog from './SuccessMsgDialog.js';
import FailureMsgDialog from './FailureMsgDialog.js';

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
  }

    deleteContact() {
        Axios.delete(`http://localhost:3030/contact/delete/${this.state.contactId}`)
            .then(res => {
              if (res.status === 200) {
               this.setState({
                  showDialog: true,
                });
              }
            })
            .catch(err => {
                console.log(err); 
                    this.setState({
                      hasError: true
                    });
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
               <img className='icon' src={require(`${this.props.icon}`)} alt='Icon'/> 
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
