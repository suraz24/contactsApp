import React from 'react';
import SuccessAndFailureDialog from '../src/views/SuccessAndFailureDialog';
import SuccessMsgDialog from '../src/views/SuccessMsgDialog';

	describe('Success and Failure Dialog', () =>{
		it('renders a dialog box', () => {
			const dialogbox = global.shallow(<SuccessAndFailureDialog />);
			const inst = dialogbox.instance();
			expect(inst).toBeInstanceOf(SuccessAndFailureDialog);
		});

		it('renders the icon', () => {
			const dialogbox = global.shallow(<SuccessAndFailureDialog />);
			dialogbox.setProps({icon:'../images/GreenTick.png'});
			expect(dialogbox.children()).toMatchSnapshot();
		});

		it('renders the button text', () => {
			const dialogbox = global.shallow(<SuccessAndFailureDialog />);
			dialogbox.setProps({buttonLabel:'OK'})
			expect(dialogbox.children()).toMatchSnapshot();
		});

		it('passes props to the rendered dialog box as children', () => {
			const dialogbox = global.shallow(<SuccessAndFailureDialog />);
			dialogbox.setProps({buttonLabel:'OK',icon:'../images/GreenTick.png', text:'Successful', closePopup: false})
			expect(dialogbox.children()).toMatchSnapshot();
		});
		
		
});