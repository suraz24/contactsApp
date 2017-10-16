import React from 'react';
import EditContactForm from '../../src/views/EditContactForm.js';
import Nock from 'nock';
import ContactData from '../../__mocks__/ContactData';

describe('Edit Contact Form', () => {
    it('is rendered correctly', () => {
        const component = global.shallow(<EditContactForm match={{params:'123'}} location={{state:'some random state'}} />);
        const inst = component.instance();
        expect(inst).toBeInstanceOf(EditContactForm);
    });

    it('test edit contact', () => {
        const editContact = {uuid: '123',
                            firstname: 'Krishna',
                            lastname: 'Adhikari',
                            workphone: '12345678',
                            mobile: '1234567890'
                            };
        var data = Nock('http://localhost:3030')
            .put('/editContact')
            .reply(200 , editContact);
        expect(JSON.parse(data.interceptors[0].body)).toEqual(editContact);
    });

    it('test response for success', (done) => {
        const component = global.shallow(<EditContactForm match={{params:'123'}} location={{state:'some random state'}} />);
        const res= {status:200, data:'123546789'};
        component.instance().SuccessResponse(res);
        expect(component.state().showDialog).toBeTruthy();
        done();
    });

    it('test response for failure', (done) => {
        const component = global.shallow(<EditContactForm match={{params:'123'}} location={{state:'some random state'}} />);
        component.instance().FailureResponse();
        expect(component.state().hasError).toBeTruthy();
        done();
    });
});