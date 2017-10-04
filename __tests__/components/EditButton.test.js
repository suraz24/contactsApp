import React from 'react';
import EditButton from '../../src/components/EditButton.js';

describe('Edit Button', () =>{
    it('is rendered correctly', () => {
        const component = global.shallow(<EditButton id="{uuid:'465465654'}}" />);
        expect(component).toMatchSnapshot();
    });

    it('contains class EditButton which is attached to the input', () => {
        const component = global.shallow(<EditButton id="{uuid:'465465654'}}" />);
        expect(component.find('.EditButton')).toHaveLength(1);
    });
});