import React from 'react';
import AddContactForm from '../../src/views/AddContactForm.js';
import FailureMsgDialog from '../../src/views/FailureMsgDialog.js';
import SuccessMsgDialog from '../../src/views/SuccessMsgDialog.js';

describe('Add Contact Form', () => {
    it('is rendered correctly', () => {
        const component = global.shallow(<AddContactForm />);
        const inst = component.instance();
        expect(inst).toBeInstanceOf(AddContactForm);
    });

    // it('displays correct dialog box', () => {
    //     const component = global.shallow(<AddContactForm />);
    //     component.setState({hasError:false,showDialog:true});
    //     expect(component.contains('Contact successfully added')).toBeTruthy();
    // });
});