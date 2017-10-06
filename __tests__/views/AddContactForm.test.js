import React from 'react';
import AddContactForm from '../../src/views/AddContactForm.js';
import Axios from 'axios'
import Moxios from 'moxios'

describe('Add Contact Form', () => {
    it('is rendered correctly', () => {
        const component = global.shallow(<AddContactForm match={{params:'123'}} />);
        const inst = component.instance();
        expect(inst).toBeInstanceOf(AddContactForm);
    });
    beforeEach(function () {
        // import and pass your custom axios instance to this method
        Moxios.install()
    })

    afterEach(function () {
        // import and pass your custom axios instance to this method
        Moxios.uninstall()
    })


    // it('just for a single spec', function (done) {
    //     moxios.withMock(function () {
    //         let onFulfilled = Sinon.spy()
    //         axios.get('/contact/12345').then(onFulfilled)
    //
    //         moxios.wait(function () {
    //             let request = moxios.requests.mostRecent()
    //             request.respondWith({
    //                 status: 200,
    //                 response: {
    //                     id: 12345, firstName: 'Chai', lastName: 'Latte', workphone:'03456789',mobile:'0412345678'
    //                 }
    //             }).then(function () {
    //                 equal(onFulfilled.called, true)
    //                 done()
    //             })
    //         })
    //     })
    // })
    //


        // it('displays correct dialog box', () => {
    //     const component = global.shallow(<AddContactForm />);
    //     component.setState({hasError:false,showDialog:true});
    //     expect(component.contains('Contact successfully added')).toBeTruthy();
    // });
});