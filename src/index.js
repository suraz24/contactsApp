"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes.js';

class App extends React.Component {
    constructor(){
        super();
console.log('In app');
    }

   render() {
      return (
         <div>
             <Router basename="#" >
                <Routes />
             </Router>
         </div>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('app'));

