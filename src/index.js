"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes.js';

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

