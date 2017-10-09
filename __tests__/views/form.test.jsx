import React from 'react';
import Form from '../../src/views/form';

describe('Form', () =>{
	it('renders the form', () => {
		const wrapper = global.shallow(<Form />);
		expect(wrapper).toHaveLength(1);
	});

	it('handle changed input', () => {
		const wrapper = global.shallow(<Form />); 
		wrapper.instance().changeValues = jest.fn();
		wrapper.update();
		wrapper.find('[label="firstname"]').simulate('change');
		expect(wrapper.instance().changeValues).toHaveBeenCalled();
		expect(wrapper).toMatchSnapshot();
	});
	//https://stackoverflow.com/questions/41830165/how-to-mock-react-component-methods-with-jest-and-enzyme

	
	it('test submit form', () => {
	    const wrapper = global.shallow(<Form />);
	    const preventDefault = jest.fn();
	    wrapper.find('form').simulate('click', { preventDefault });
	    expect(JSON.stringify(wrapper)).toMatchSnapshot();
	    expect(preventDefault).toBeCalled();
  	});
	
});
// //https://stackoverflow.com/questions/30034774/what-exactly-should-i-test-when-calling-reacts-this-props-onclickthis-in-jest

// //https://github.com/airbnb/enzyme/issues/634