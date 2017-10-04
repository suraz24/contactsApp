import React from 'react';
import GoBack from '../../src/components/goBack.js';

describe('Go Back Button', () =>{
    it('is rendered correctly', () => {
        const component = global.shallow(<GoBack />);
        const inst = component.instance();
        expect(inst).toBeInstanceOf(GoBack);
    });

    it('contains class BackButton which is attached to the input', () => {
        const component = global.shallow(<GoBack />);
        expect(component.find('.BackButton')).toHaveLength(1);
    });
});