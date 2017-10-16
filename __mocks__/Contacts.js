import request from './request.js';

export function getContact(contactID){
    return request('/contacts/').then(contact => JSON.stringify(contact.data));
}


