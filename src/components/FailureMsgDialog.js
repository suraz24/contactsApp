"use strict";

import React from "react";
import SaFPopupTemplate from "./SuccessandFailureDialog.js";

class FailureMsgDialog extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
     <div className='app'>
        <button onClick={this.togglePopup.bind(this)}>Show popup</button>
        {this.state.showPopup ? 
          <SaFPopupTemplate
            icon="./images/Retry.png"
            text="Sorry, something went wrong. Please try again."
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </div>
    );
  }
}

export default FailureMsgDialog;
