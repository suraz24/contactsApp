import React from 'react';
import DeleteButton from '../../src/components/DeleteButton.js';



describe('Delete Button', () =>{
    it('is rendered correctly', () => {
        const component = global.shallow(<DeleteButton />);
        const inst = component.instance();
        expect(inst).toBeInstanceOf(DeleteButton);
    });

   it('contains class DeleteButton which is attached to the input', () => {
        const component = global.shallow(<DeleteButton />);
        expect(component.find('.DeleteButton')).toHaveLength(1);
    });

   it('toggles popup when the state is changed', () => {
       const component = global.shallow(<DeleteButton />);
       expect(component.state().showPopup).toBeFalsy();
       component.find('.DeleteButton').simulate('click');
       expect(component.state().showPopup).toBeTruthy();
   })
});