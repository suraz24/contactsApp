import React from "react";

class DeleteDialog extends React.Component{
 	render() {
    	return (
      		<div className='popup'>
       			<div className='popup_inner'>
					<img className='icon' src={require(`${this.props.icon}`)} alt='Icon'/> 
					<h1>{this.props.text}</h1>
					<div className='yesno'>
						<button className='yes'>YES</button>
            			<button className='no' onClick={this.props.closePopup}>NO</button>
					</div>
        		</div>
      		</div>
    	);
	}
}

export default DeleteDialog;
