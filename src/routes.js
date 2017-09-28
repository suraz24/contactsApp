"use strict";

import React from 'react';
import {Route} from 'react-router-dom';
import Contact from'./views/Contacts.js';
import ViewContact from './views/viewContact.js';
import AddContactForm from './views/AddContactForm.js';
import EditContactForm from './views/EditContactForm.js';


export default class Routes extends React.Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={Contact}/>
                <Route path='/addContact' component={AddContactForm}/>
                <Route path='/editContact/:uuid' component={EditContactForm}/>
                <Route path='/contact/:uuid' component={ViewContact}/>
            </div>
        )
    }
}
