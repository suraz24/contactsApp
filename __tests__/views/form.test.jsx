import React from 'react';
import Form from '../../src/views/form';

describe('Form', () =>{
	it('renders the form', () => {
		const wrapper = global.shallow(<Form />);
		expect(wrapper).toHaveLength(1);
		console.log(wrapper);
	});
	it('submit event when click submit'), () => {

	}
});
//https://stackoverflow.com/questions/30034774/what-exactly-should-i-test-when-calling-reacts-this-props-onclickthis-in-jest

//https://github.com/airbnb/enzyme/issues/634