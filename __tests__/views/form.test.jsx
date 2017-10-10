import React from 'react';
import Form from '../../src/views/form';
import FormErrors from '../../src/views/formErrors';
import Button from 'muicss/lib/react/button';
// import Sinon from 'sinon';

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
    it('Submitting the form', () => {
        let wrapper = global.shallow(<Form />);
        wrapper.setState({ firstname: 'Lauren', lastname: 'Chia', workphone: '03456789', mobile: '0123456789' });
        console.log(wrapper.find('Button'));
       wrapper.find('Button').simulate('click');
    });
});

describe('<Form Error />', () => {
    it('`<Form error>` element should have a className', () => {
        let wrapper = global.shallow(<FormErrors />)
        expect(
            wrapper.find('div').hasClass('formErrors')
        ).toBe(true);
    });
});

    // it('should display an error when no value is input', () => {
    //     const handleFormSubmit = spy();
    //     wrapper = mount(<InputForm handleFormSubmit={handleFormSubmit} />);
    //     wrapper.find('form').simulate('submit');
    //     expect(
    //         wrapper.state().fieldErrors.name
    //     ).toBe('Please enter your name.');
    // });


	// it('handle changed input', () => {
	// 	const wrapper = global.shallow(<Form />);
	// 	wrapper.instance().changeValues = jest.fn();
	// 	wrapper.update();
	// 	wrapper.find('[label="firstname"]').simulate('change');
	// 	expect(wrapper.instance().changeValues).toHaveBeenCalled();
	// 	expect(wrapper).toMatchSnapshot();
	// });
	// //https://stackoverflow.com/questions/41830165/how-to-mock-react-component-methods-with-jest-and-enzyme
    //
	//
	// it('test submit form', () => {
	//     const wrapper = global.shallow(<Form />);
	//     const preventDefault = jest.fn();
	//     wrapper.find('form').simulate('click', { preventDefault });
	//     expect(JSON.stringify(wrapper)).toMatchSnapshot();
	//     expect(preventDefault).toBeCalled();
  	// });
	

// //https://stackoverflow.com/questions/30034774/what-exactly-should-i-test-when-calling-reacts-this-props-onclickthis-in-jest

// //https://github.com/airbnb/enzyme/issues/634