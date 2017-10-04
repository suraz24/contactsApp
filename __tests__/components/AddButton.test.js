import React from 'react';
import AddButton from '../../src/components/AddButton.js';



describe('Add Button', () =>{
    it('is rendered correctly', () => {
        const component = global.shallow(<AddButton />);
        const inst = component.instance();
        expect(inst).toBeInstanceOf(AddButton);
    });

    it('contains class AddButton which is attached to the input', () => {
        const component = global.shallow(<AddButton />);
        expect(component.find('.AddButton')).toHaveLength(1);
    });
});