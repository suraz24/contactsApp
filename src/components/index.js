//console.log('hello world!!');

import React from 'react';
import ReactDOM from 'react-dom';

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
import BackButton from './images/BackButton.png';

import Form from './form.js';
import FormCSS from './form.css';

class App extends React.Component {
   render() {
      return (
         <div>
	        <Contacts />
         </div>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('app'));

