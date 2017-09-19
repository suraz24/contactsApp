//console.log('hello world!!');

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link} from 'react-router-dom';

import Contacts from './Contacts.js';
import ContactsCSS from './Contacts.css';

import Dialog from './dialog.js';
import DialogCSS from './dialog.css';
import SuccessIcon from './images/GreenTick.png';
import DeleteIcon from './images/Alert.png';

import ActionItems from './actionItems.js';
import AddButton from './images/AddButton.png';

import ViewContact from './viewContact.js';
import ViewContactCSS from './viewContact.css';
import EditButton from './images/EditButton.png';
import DeleteButton from './images/DeleteButton.png';

import GoBack from './goBack.js';
import GoBackCSS from './goBack.css';
import BackButton from './images/BackButton.png';

import Form from './form.js';
import FormCSS from './form.css';


import {browserHistory } from 'react-router'


import Routes from './routes.js';

class App extends React.Component {

    constructor(){
        super();

    }
   render() {


      return (
         <div>
             <Router history={browserHistory}>
                <Routes />
             </Router>
         </div>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('app'));

