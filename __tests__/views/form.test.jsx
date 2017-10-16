import React from 'react';
import Form from '../../src/views/form';

describe('Form', () =>{
    beforeEach(() => {
       let wrapper = global.shallow(<Form />);
    });
	it('renders the form', () => {
        let wrapper = global.shallow(<Form />);
		expect(wrapper).toHaveLength(1);
	});
});

describe('<input />', () => {
    beforeEach(() => {
        let wrapper = global.shallow(<Form />);
    });
    it('`<input>` element should be of type `text`', () => {
        let wrapper = global.shallow(<Form />);
        expect(
            wrapper.find('form').childAt(0).props().type
        ).toBe('text');
    });

    it('`<input>` element value should be empty', () => {
        let wrapper = global.shallow(<Form />);
        expect(
            wrapper.find('form').childAt(0).props().value
        ).toBe('');
    });

    it('`<input>` element should have an onChange attribute', () => {
        let wrapper = global.shallow(<Form />);
        expect(
            wrapper.find('form').childAt(0).props().onChange
        ).toBeDefined();
    });

    it('onChange attribute should be of type `function`', () => {
        let wrapper = global.shallow(<Form />);
        expect(
            typeof wrapper.find('form').childAt(0).props().onChange === 'function'
        ).toBe(true);
    });

    it('should update the state when a value is input', () => {
        let wrapper = global.shallow(<Form />);
        const name = 'Blerch';
        const input = wrapper.find('form').childAt(0);
        input.simulate('change', {
            target: {
                name: 'firstname',
                value: name,
            }
        });
        expect(
            wrapper.state().firstname
        ).toBe(name);
    });
    it('Form checks for the validation for first name', () => {
        let wrapper = global.shallow(<Form />);
        expect (wrapper.state().firstnameValid).toBeFalsy();
        wrapper.instance().validateField('firstname', 'Suraz');
        expect (wrapper.state().firstnameValid).toBeTruthy();
        wrapper.instance().validateField('firstname', '!@#!@#$123456asdffadsfsad');
        expect (wrapper.state().firstnameValid).toBeFalsy();
    });

});