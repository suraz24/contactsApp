"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes.js';

// class App extends React.Component {
//     constructor(){
//         super();
// console.log('In app');
//     }

//    render() {
//       return (
//            <Router basename="#">
//               <Routes />
//            </Router>
//       );
//    };
// }

function App() {
  return (
           <Router basename="#">
              <Routes />
           </Router>
      );
}

ReactDOM.render(<App />, document.getElementById('app'));

