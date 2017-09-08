//console.log('hello world!!');

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './welcome.js';
import Contacts from './contacts.js'

var Contacts = React.createClass({
    render: function() {
        return(
            <div>
                <Contacts />
            </div>
        );
    }

})
ReactDOM.render(<Home />, document.getElementById('app'));