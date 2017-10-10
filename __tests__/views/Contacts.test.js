import React from 'react';
import Contacts from '../../src/views/contacts';
import Nock from 'nock';
import ContactData from '../../__mocks__/ContactData';



describe('Contacts', () =>{
	it('renders the contacts table', () => {
		const wrapper = global.shallow(<Contacts />);
		expect(wrapper.find('#HomeHeading')).toHaveLength(1);
	});

    it('test get contacts', () => {
        const wrapper = global.shallow(<Contacts />);
        var data = Nock('http://localhost:3030')
            .get('/contacts/')
            .reply(200, ContactData);
        //console.log(data);
        //console.log(data.interceptors[0]);
        //console.log(data.interceptors[0].body);
        //console.log(data.interceptors[0].scope.keyedInterceptors);

        expect(JSON.parse(data.interceptors[0].body)).toEqual(ContactData);
    });

    it('test set new data', () => {
        const wrapper = global.shallow(<Contacts />);
        var data = Nock('http://localhost:3030')
            .get('/contacts/')
            .reply(200, ContactData);
        //console.log(data);
        //console.log(data.interceptors[0]);
        //console.log(data.interceptors[0].body);
        //console.log(data.interceptors[0].scope.keyedInterceptors);

        wrapper.setState({data: ContactData});
        expect(wrapper.state('data')).toEqual(ContactData);
    });

    it('test table rows created', () => {
        const wrapper = global.shallow(<Contacts />);
        wrapper.setState({data: ContactData});
        expect(wrapper.find('#ContactsTable')).toMatchSnapshot();
    });
});

