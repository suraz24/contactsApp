import React from "react";

class SaFPopupTemplate extends React.Component{
 	render() {
    	return (
      		<div className='popup'>
        		<div className='popup_inner'>
        			<img className='icon' src={require(`${this.props.icon}`)} alt='Icon'/> 
					<h1>{this.props.text}</h1>
					<button onClick={this.props.closePopup}>{this.props.buttonLabel}</button>
        		</div>
      		</div>
    	);
  	}
}

export default SaFPopupTemplate;
