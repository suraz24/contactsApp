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

    it('test get contact by ID', () => {
        const component = global.shallow(<ViewContact match={{params:'c'}}/>);
        var data = Nock('http://localhost:3030')
            .get('/contacts/uuid')
            .reply(200, ContactData);

            if(data.interceptors[0].statusCode === 200) {
                component.setState({data: JSON.parse(data.interceptors[0].body)[0]});
            }
        expect(JSON.parse(data.interceptors[0].body)[0]).toEqual(ContactData[0]);
    });

    it('test response for success', (done) => {
        const component = global.shallow(<ViewContact match={{params:'c'}}/>);
        const res= {status:200, data:[{uuid:'123546789',firstname:'Lauren'},{uuid:'897845',firstname:'Chia'}]};
        component.instance().SuccessResponse(res);
        expect(component.state().data).toEqual(res.data[0]);
        done();
    });

    it('test response for failure', (done) => {
        const component = global.shallow(<ViewContact match={{params:'c'}}/>);
        component.instance().FailureResponse();
        expect(component.state().hasError).toBeTruthy();
        done();
    });
});