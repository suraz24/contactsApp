"use strict";

import React from "react";
import SaFPopupTemplate from "./SuccessandFailureDialog.js";

class SuccessMsgDialog extends React.Component {
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
            icon="./images/GreenTick.png"
            text="Success"
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </div>
    );
  }
}

export default SuccessMsgDialog;
