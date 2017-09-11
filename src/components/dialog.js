"use strict";

import React from "react";

class Popup extends React.Component{
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          	<h1>{this.props.text}</h1>
        	<button onClick={this.props.closePopup}>Close</button>
        </div>
      </div>
    );
  }
}

class Dialog extends React.Component {
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
          <Popup
            text="Success"
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </div>
    );
  }
}

export default Dialog;


