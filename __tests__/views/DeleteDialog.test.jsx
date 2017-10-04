import React from 'react';
import DeleteDialog from '../../src/views/DeleteDialog';

	describe('Delete Dialog', () =>{
		it('renders a delete dialog box', () => {
			const wrapper = global.shallow(<DeleteDialog />);
			expect(wrapper).toHaveLength(1);
		});

		it('renders the icon', () => {
			const dialogbox = global.shallow(<DeleteDialog />);
			dialogbox.setProps({icon:'../images/Alert.png'});
			expect(dialogbox.children()).toMatchSnapshot();
		});

		it('renders buttons', () => {
			const dialogbox = global.shallow(<DeleteDialog />);
			const yesButton = dialogbox.find('#yes');
			const noButton = dialogbox.find('#no');
			expect(yesButton).toHaveLength(1);
			expect(noButton).toHaveLength(1);
		});
		
		it('test click button', () => {
			const dialogbox = global.shallow(<DeleteDialog />);
			dialogbox.setState({display: false});
			expect(dialogbox.children()).toMatchSnapshot();
		});

	});