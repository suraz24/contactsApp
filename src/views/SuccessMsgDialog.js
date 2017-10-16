"use strict";

import React from 'react';
import SuccessAndFailureDialog from './SuccessAndFailureDialog.js';
import DialogStyle from '../components/dialog.css';



class SuccessMsgDialog extends React.Component {
  constructor(props) {
    super(props);
    this.togglePopup=this.togglePopup.bind(this);
  }

  togglePopup() {
    if (this.props.source == "delete"){
      window.location.assign('/');
    }
    else{
     window.location.assign(`/#/contact/${this.props.uuid}`);
    }
  }

  render() {
    return this.props.display ? (
      <div>
        <SuccessAndFailureDialog
          icon={require("../images/GreenTick.png")}
          text={this.props.text}
          closePopup={this.togglePopup}
          buttonLabel="OK"
        />
      </div>
    )
    : null;
  }
}


export default SuccessMsgDialog;
