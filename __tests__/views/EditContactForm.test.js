import React from 'react';
import EditContactForm from '../../src/views/EditContactForm.js';

describe('Edit Contact Form', () => {
    it('is rendered correctly', () => {
        const component = global.shallow(<EditContactForm />);
        component.setState({contactId:'123456798', data:''});
        const inst = component.instance();
        expect(inst).toBeInstanceOf(EditContactForm);
    });

    // it('displays correct dialog box', () => {
    //     const component = global.shallow(<AddContactForm />);
    //     component.setState({hasError:false,showDialog:true});
    //     expect(component.contains('Contact successfully added')).toBeTruthy();
    // });
});