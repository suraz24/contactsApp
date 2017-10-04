import React from 'react';
import Contacts from '../../src/views/contacts';

describe('Contacts', () =>{
	it('renders the contacts table', () => {
		const wrapper = global.shallow(<Contacts />);
		expect(wrapper).toHaveLength(1);
		console.log(wrapper);
	});
});