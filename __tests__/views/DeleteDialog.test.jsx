import React from 'react';
import DeleteDialog from '../../src/views/DeleteDialog';
import Nock from 'nock';
import ContactData from '../../__mocks__/ContactData';
import axios from 'axios';

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

		it('test check 200 status code', () => {
			const deleteContact = {uuid: '123',
	                            firstname: 'Krishna',
	                            lastname: 'Adhikari',
	                            workphone: '12345678',
	                            mobile: '1234567890'
	                            };
			var data = Nock('http://localhost:3030')
	            .delete('/contact/delete')
	            .reply(200, deleteContact);
	        expect(data.interceptors[0].statusCode).toBe(200);
		});

		it('test check 500 status code', () => {
			const deleteContact = {uuid: '123',
	                            firstname: 'Krishna',
	                            lastname: 'Adhikari',
	                            workphone: '12345678',
	                            mobile: '1234567890'
	                            };
			var data = Nock('http://localhost:3030')
	            .delete('/contact/delete')
	            .reply(500, deleteContact);
	        expect(data.interceptors[0].statusCode).toBe(500);
		});

		it('test delete contact', () => {
	        const deleteContact = {uuid: '123',
	                            firstname: 'Krishna',
	                            lastname: 'Adhikari',
	                            workphone: '12345678',
	                            mobile: '1234567890'
	                            };
	        var data = Nock('http://localhost:3030')
	            .delete('/contact/delete')
	            .reply(200, deleteContact);
	        //console.log(data);
	        //console.log(data.interceptors[0]);
	        //console.log(data.interceptors[0].body);
	        //console.log(data.interceptors[0].scope.keyedInterceptors);

	        expect(data.interceptors[0].method).toEqual('DELETE');
    	});

    	it('test successful trigger delete dialog', () => {
	    	const dialogbox = global.shallow(<DeleteDialog />);
	    	const deleteContact = {uuid: '123',
	                            firstname: 'Krishna',
	                            lastname: 'Adhikari',
	                            workphone: '12345678',
	                            mobile: '1234567890'
	                            };
	        dialogbox.setState({ showDialog: false });
	        var data = Nock('http://localhost:3030')
	            .delete('/contact/delete')
	            .reply(200, deleteContact);
	        if(data.interceptors[0].statusCode === 200){
	        	dialogbox.setState({ showDialog: true });
	        }
	        expect(dialogbox.state('showDialog')).toBe(true);
    	});

    	it('test error trigger delete dialog', () => {
	    	const dialogbox = global.shallow(<DeleteDialog />);
	    	const deleteContact = {uuid: '123',
	                            firstname: 'Krishna',
	                            lastname: 'Adhikari',
	                            workphone: '12345678',
	                            mobile: '1234567890'
	                            };
	        dialogbox.setState({ hasError: false });
	        var data = Nock('http://localhost:3030')
	            .delete('/contact/delete')
	            .reply(500, deleteContact);
	        if(data.interceptors[0].statusCode === 500){
	        	dialogbox.setState({ hasError: true });
	        }
	        expect(dialogbox.state('hasError')).toBe(true);
    	});

    	it('test response', (done) => {
    		//const deleteContact = jest.fn();
    		const dialogbox = new DeleteDialog({contactId: 123});
    		dialogbox.deleteContact()
    		.then( () => {
    			expect(dialogbox.state({showDialog})).toBe(true);
    		})
    	});
    	//https://medium.com/@srph/axios-easily-test-requests-f04caf49e057
	}); 