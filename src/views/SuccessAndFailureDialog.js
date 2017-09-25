import React from "react";
import Button from 'muicss/lib/react/button';
import GreenTick from '../images/GreenTick.png';

class SaFPopupTemplate extends React.Component{
 	render() {
    return (
          <div className='popup' id='SaFPopup'>
              <div className='popup_inner' id='SaFPopupInner'>
                 <img className='icon' src={require(`${this.props.icon}`)} alt='Icon'/>
                 <h1>{this.props.text}</h1>
                 <Button variant="raised" color="primary" onClick={this.props.closePopup}>{this.props.buttonLabel}</Button>
               </div>
          </div>
        );
	}
}
export default SaFPopupTemplate;
