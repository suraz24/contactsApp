"use strict";

import React from "react";
import SaFPopupTemplate from "./SuccessAndFailureDialog.js";
import DialogStyle from '../components/dialog.css';


class FailureMsgDialog extends React.Component {
  constructor() {
    super();
  }

  togglePopup() {
    console.log(this.props);
    if (this.props.source == "delete"){ 
      window.location.assign(`/#/contact/${this.props.uuid}`); ///////////SHOULD GO BACK TO VIEW PAGE
    }
    else if(this.props.source == "create"){
      window.location.assign('/#/addContact');
    }
    else if(this.props.source == "update"){
      window.location.assign(`/#/editContact/${this.props.uuid}`);
    }
    else{
      window.location.assign('/');
    }
  }
  
  render() {
    return !this.props.display ? (
      <div>
        <SaFPopupTemplate
          icon={require("../images/Retry.png")}
          text="Sorry, something went wrong. Please try again."
          closePopup={this.togglePopup.bind(this)}
          buttonLabel="OK"
        />
      </div>
    )
    : null;
  }
}

export default FailureMsgDialog;
