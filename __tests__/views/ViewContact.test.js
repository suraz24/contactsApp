import React from 'react';
import ViewContact from '../../src/views/viewContact.js';
import Nock from 'nock';
import ContactData from '../../__mocks__/ContactData';

describe('View Contact page', () => {
    it('is rendered correctly', () => {
        const component = global.shallow(<ViewContact match={{params:'c'}} />);
        const inst = component.instance();
        expect(inst).toBeInstanceOf(ViewContact);
    });

    // it('displays correct dialog box', () => {
    //     const component = global.shallow(<AddContactForm />);
    //     component.setState({hasError:false,showDialog:true});
    //     expect(component.contains('Contact successfully added')).toBeTruthy();
    // });

    it('test get contact by ID', () => {
        var data = Nock('http://localhost:3030')
            .get('/contacts/uuid')
            .reply(200, ContactData);
        //console.log(data);
        //console.log(data.interceptors[0]);
        //console.log(data.interceptors[0].body);
        //console.log(data.interceptors[0].body[0]);
        //console.log(data.interceptors[0].scope.keyedInterceptors);

        //console.log(JSON.parse(data.interceptors[0].body));
        console.log(JSON.parse(data.interceptors[0].body[0]));
        //console.log(ContactData[0]);

        expect(JSON.parse(data.interceptors[0].body)).toEqual(ContactData[0]);
    });
});