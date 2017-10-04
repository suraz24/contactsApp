import React from "react";
import Button from 'muicss/lib/react/button';
import GreenTick from '../images/GreenTick.png';
import DialogStyle from '../components/dialog.css';


class SuccessAndFailureDialog extends React.Component{
 	render() {
    return (
          <div className='popup' id='SuccessAndFailurePopup'>
              <div className='popup_inner' id='SuccessAndFailurePopupInner'>
                 <img className='icon' src={`${this.props.icon}`} alt='Icon'/>
                 <h1>{this.props.text}</h1>
                 <Button variant="raised" color="primary" onClick={this.props.closePopup}>{this.props.buttonLabel}</Button>
               </div>
          </div>
        );
	}
}

export default SuccessAndFailureDialog;
