/*import React from 'react';
import renderer from 'react-test-renderer';
import {Link, MemoryRouter as Router} from 'react-router-dom';
import Sum from '../src/sum.js';

describe('App', () => {
    test('should be able to run tests', () => {
        expect (Sum(4,1)).toMatchSnapshot();
    });

    test('Link renders correctly', () => { //requires react-test-rendered
  	const tree = renderer.create(
  		<Router>
    		<Link url="https://localhost:8080">Contacts App</Link>
    	</Router>
  		).toJSON();
 	expect(tree).toMatchSnapshot();
	});
});



*/
import React from 'react';
import DeleteDialog from '../src/views/DeleteDialog';


	describe('Delete Dialog', () =>{
		it('renders a delete dialog box', () => {
		const component = global.shallow(<DeleteDialog />);
		expect(component).toHaveLength(1);
		console.log(component);
		});
	});
/*
	describe('Success Dialog Boxes', () =>{
		it('renders a success dialog box', () => {
		const component = shallow(<SuccessAndFailureDialog />);
		expect(component).toHaveLength(1);
		expect(component).to
		console.log(component);
		});

		it('renders children / success msg content in dialog box', () => {
		const component = mount(<SuccessMsgDialog />);
		expect(component).toHaveLength(1);
		expect(component).to
		console.log(component);
		});
		
		it('renders a success dialog box', () => {
		const component = mount(<SuccessMsgDialog />);
		expect(component).toHaveLength(1);
		expect(component).to
		console.log(component);
		});
	});

	describe('Failure Dialog', () =>{
		it('renders a failure dialog box', () => {
		const component = mount(<FailureMsgDialog />);
		expect(component).toHaveLength(1);
		console.log(component);
		});
	});

	describe('Failure Dialog', () =>{
		it('renders failure dialog box', () => {
		const component = mount(<FailureMsgDialog />);
		expect(component).toHaveLength(1);
		console.log(component);
		});
	});*/