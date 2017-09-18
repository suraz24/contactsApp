"use strict";

import React from "react";

class Popup extends React.Component{

	/*
	Success popup
-----------------------------------------

  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
        	<img className='icon' src={require(`${this.props.icon}`)} alt='Icon'/> 
			<h1>{this.props.text}</h1>
			<button onClick={this.props.closePopup}>OK</button>
        </div>
      </div>
    );
  }
}
*/

	/*
	Failure popup
-----------------------------------------
*/

  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
        	<img className='icon' src={require(`${this.props.icon}`)} alt='Icon'/> 
			<h1>{this.props.text}</h1>
			<button onClick={this.props.closePopup}>RETRY</button>
        </div>
      </div>
    );
  }
}

/*
Delete popup
-----------------------------------------
render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
			<img className='icon' src={require(`${this.props.icon}`)} alt='Icon'/> 
			<h1>{this.props.text}</h1>
			<div className='yesno'>
				<button className='yes' onClick={this.props.closePopup}>YES</button>
				<button className='no' onClick={this.props.closePopup}>NO</button>
			</div>
        </div>
      </div>
    );
  }


*/



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

  /*
  Success popup
-----------------------------------------


  render() {
    return (
     <div className='app'>
        <button onClick={this.togglePopup.bind(this)}>Show popup</button>
        {this.state.showPopup ? 
          <Popup
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

*/	
  /*
  Failure popup
-----------------------------------------
*/	
  render() {
    return (
     <div className='app'>
        <button onClick={this.togglePopup.bind(this)}>Show popup</button>
        {this.state.showPopup ? 
          <Popup
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

  /*
    Delete popup
-----------------------------------------
   render() {
    return (
		<div className='app'>
			<button onClick={this.togglePopup.bind(this)}>Show popup</button>
			{this.state.showPopup ? 
			<Popup
				icon="./images/Alert.png"
				text="Are you sure you want to delete {full name}?"
				closePopup={this.togglePopup.bind(this)}
			/>
			: null
			}
		</div>
    );
  }
}
*/

export default Dialog;


