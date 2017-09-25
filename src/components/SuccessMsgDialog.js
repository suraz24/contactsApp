"use strict";

import React from "react";
import SaFPopupTemplate from "./SuccessandFailureDialog.js";

class SuccessMsgDialog extends React.Component {
  constructor() {
    super();
      }
  togglePopup() {
    if (this.props.source == "delete"){
      window.location.assign('/');
    }
    else{
      //console.log("this is from update or create")
     window.location.assign(`/contact/${this.props.uuid}`);
    }
  }
  render() {
    return this.props.display ? (
      <div>
        <SaFPopupTemplate 
              icon="./images/GreenTick.png"
              text={this.props.text}
              closePopup={this.togglePopup.bind(this)}
              buttonLabel="OK"
            />
      </div>
      ) 
      : null;
  }
}

export default SuccessMsgDialog;
