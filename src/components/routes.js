import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Contact from'./Contacts.js';
import ViewContact from './viewContact.js';
import Form from './form.js';

export default class Routes extends React.Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={Contact}/>
                <Route path='/addContact' component={Form}/>
                <Route path='/contact/:id' component={ViewContact}/>
            </div>
        )
    }
}
