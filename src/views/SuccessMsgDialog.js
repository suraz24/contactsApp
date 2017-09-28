"use strict";

import React from 'react';
import SaFPopupTemplate from './SuccessAndFailureDialog.js';
import DialogStyle from '../components/dialog.css';


class SuccessMsgDialog extends React.Component {
  constructor() {
    super();
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
        <SaFPopupTemplate
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
