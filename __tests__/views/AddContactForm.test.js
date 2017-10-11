import React from 'react';
import AddContactForm from '../../src/views/AddContactForm.js';
import Nock from 'nock';
import ContactData from '../../__mocks__/ContactData';
/*import Axios from 'axios'
import Moxios from 'moxios'*/

describe('Add Contact Form', () => {
    it('is rendered correctly', () => {
        const component = global.shallow(<AddContactForm match={{params:'123'}} />);
        const inst = component.instance();
        expect(inst).toBeInstanceOf(AddContactForm);
    });

    it('test post contact', () => {
        const newContact = {uuid: '123',
                            firstname: 'Krishna',
                            lastname: 'Adhikari',
                            workphone: '12345678',
                            mobile: '1234567890'
                            };
        var data = Nock('http://localhost:3030')
            .post('/addContact')
            .reply(200 || 201, newContact);
        expect(JSON.parse(data.interceptors[0].body)).toEqual(newContact);
    });

    it('test response for success', (done) => {
        //const deleteContact = jest.fn();
        const contact = {
            firstname: 'Krishna',
            lastname: 'Adhikari',
            workphone: '12345678',
            mobile: '1234567890'
        }
        const component = global.shallow(<AddContactForm match={{params:'123'}} />);
        // const dialogbox = new EditContactForm({match: {params:'123'}}, {location:{state:'random'}});
        component.instance().SuccessResponse();
        expect(component.state().showDialog).toBe(true);
        done();

    });

    it('test response for failure', (done) => {
        //const deleteContact = jest.fn();
        const contact = {
            firstname: 'Krishna',
            lastname: 'Adhikari',
            workphone: '12345678',
            mobile: '1234567890'
        }
        const component = global.shallow(<AddContactForm match={{params:'123'}} />);
        // const dialogbox = new EditContactForm({match: {params:'123'}}, {location:{state:'random'}});
        component.instance().FailureResponse();
        expect(component.state().hasError).toBe(true);
        done();

    });

        // it('displays correct dialog box', () => {
    //     const component = global.shallow(<AddContactForm />);
    //     component.setState({hasError:false,showDialog:true});
    //     expect(component.contains('Contact successfully added')).toBeTruthy();
    // });
});