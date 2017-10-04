import React from 'react';
import FailureMsgDialog from '../../src/views/FailureMsgDialog';

	describe('Failure Dialog', () =>{
		it('renders a failure dialog box', () => {
			const dialogbox = global.shallow(<FailureMsgDialog />);
			const inst = dialogbox.instance();
			expect(inst).toBeInstanceOf(FailureMsgDialog);
		});

		it('renders the icon', () => {
			const dialogbox = global.shallow(<FailureMsgDialog />);
			dialogbox.setProps({icon:'../images/Retry.png'});
			expect(dialogbox.children()).toMatchSnapshot();
		});

		it('renders the button text', () => {
			const dialogbox = global.shallow(<FailureMsgDialog />);
			dialogbox.setProps({buttonLabel:'OK'})
			expect(dialogbox.children()).toMatchSnapshot();
		});

		it('passes props to the rendered dialog box as children', () => {
			const dialogbox = global.shallow(<FailureMsgDialog />);
			dialogbox.setProps({buttonLabel:'OK',icon:'../images/Retry.png', text:'Sorry, something went wrong. Please try again.', closePopup: false})
			expect(dialogbox.children()).toMatchSnapshot();
		});
		
			//https://stackoverflow.com/questions/43747397/simulate-a-button-click-in-jest
});