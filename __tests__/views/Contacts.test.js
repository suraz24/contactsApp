import React from 'react';
import Contacts from '../../src/views/contacts';
import Nock from 'nock';
import ContactData from '../../__mocks__/ContactData';


describe('Contacts', () =>{
	it('renders the contacts table', () => {
		const wrapper = global.shallow(<Contacts />);
		expect(wrapper.find('#HomeHeading')).toHaveLength(1);

	});
    it('works with promises', () => {
        var data = Nock('http://localhost:3030/')
            .get('contacts/')
            .reply(200, ContactData);
       // console.log(data);

        expect(data.Scope.body).toEqual(ContactData);
    });
});