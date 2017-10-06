import React from 'react';
import Contacts from '../../src/views/contacts';
import * as ContactsMock from '../../__mocks__/Contacts';

describe('Contacts', () =>{
	it('renders the contacts table', () => {
		const wrapper = global.shallow(<Contacts />);
		expect(wrapper.find('#HomeHeading')).toHaveLength(1);

	});
    xit('works with promises', () => {
    });
});