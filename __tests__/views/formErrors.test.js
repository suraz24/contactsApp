import React from 'react';
import FormErrors from '../../src/views/formErrors';

describe('<Form Error />', () => {
    it('`<Form error>` element should have a className', () => {
        let wrapper = global.shallow(<FormErrors formErrors={{}}/>)
        expect(
            wrapper.find('div').hasClass('formErrors')
        ).toBe(true);
    });

    it('`<Form error>` returns nothing if no errors are passed', () => {
        let wrapper = global.mount(<FormErrors formErrors={{}}/>);
        const errors = wrapper.find('.formErrors').map(node => node.text());
        expect (errors).toEqual(['']);
    });

    it('`<Form error>` returns errors if there is an error', () => {
        let formErrors={firstName:'first name invalid', lastName:'last name invalid', mobile:'', workphone:''};
        let wrapper = global.shallow(<FormErrors formErrors={formErrors}/>);
        expect(wrapper.find('div.formErrors p')).toMatchSnapshot();
    });
});