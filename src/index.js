"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes.js';
import greenTick from './images/GreenTick.png';
import BackButton from './images/BackButton.png';
import AddButton from './images/AddButton.png';
import EditButton from './images/EditButton.png';
import DeleteButton from './images/DeleteButton.png';

class App extends React.Component {
    constructor(){
        super();

    }

   render() {
      return (
         <div>
             <Router >
                <Routes />
             </Router>
         </div>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('app'));

