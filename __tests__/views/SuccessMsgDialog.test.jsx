import React from 'react';
import SuccessMsgDialog from '../../src/views/SuccessMsgDialog';
import SuccessAndFailureDialog from '../../src/views/SuccessAndFailureDialog.js'

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
			window.location.assign = jest.fn();
			const dialogbox = new SuccessMsgDialog({source: "delete"});
			dialogbox.togglePopup();
			expect(window.location.assign).toBeCalledWith("/");
		});

		it('should direct to view contact after add', () => {
			window.location.assign = jest.fn();
			const dialogbox = new SuccessMsgDialog({uuid: 'abc'});
			dialogbox.togglePopup();
			expect(window.location.assign).toBeCalledWith("/#/contact/abc");
		});

		it('should direct to view contact after edit', () => {
			window.location.assign = jest.fn();
			const dialogbox = new SuccessMsgDialog({uuid: '123'});
			dialogbox.togglePopup();
			expect(window.location.assign).toBeCalledWith("/#/contact/123");
		});

	/*	it('render null when display is false', () => {
			const dialogbox = global.shallow(<SuccessMsgDialog display={true} />);
			expect(dialogbox.contains(dialogbox.instance())).toEqual(true);
		});*/

	});