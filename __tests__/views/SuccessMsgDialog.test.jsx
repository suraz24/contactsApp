import React from 'react';
import SuccessMsgDialog from '../../src/views/SuccessMsgDialog';

	describe('Success Dialog', () =>{
		it('renders a sucess dialog box', () => {
			const dialogbox = global.shallow(<SuccessMsgDialog />);
			const inst = dialogbox.instance();
			expect(inst).toBeInstanceOf(SuccessMsgDialog);
		});

		it('renders the icon', () => {
			const dialogbox = global.shallow(<SuccessMsgDialog />);
			dialogbox.setProps({icon:'../images/GreenTick.png'});
			expect(dialogbox.children()).toMatchSnapshot();
		});

		it('renders the button text', () => {
			const dialogbox = global.shallow(<SuccessMsgDialog />);
			dialogbox.setProps({buttonLabel:'OK'})
			expect(dialogbox.children()).toMatchSnapshot();
		});

		it('passes props to the rendered dialog box as children', () => {
			const dialogbox = global.shallow(<SuccessMsgDialog />);
			dialogbox.setProps({buttonLabel:'OK',icon:'../images/GreenTick.png', text:'Successful', closePopup: false})
			expect(dialogbox.children()).toMatchSnapshot();
		});

		it('should direct to home page after delete', () => {
			const SuccessMsgDialog = global.shallow(<SuccessMsgDialog />);
			SuccessMsgDialog.setProps({source: "delete"});
			// SuccessMsgDialog.togglePopup();
			expect(global.location.href).toEqual('/');
		});

		it('should direct to view contact after add', () => {
			
		});

		it('should direct to view contact after edit', () => {
			
		});
	});