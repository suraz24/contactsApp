"use strict";
import React from 'react';

let Authors = React.createClass({
    getInitialState: function() {
        return {
            contacts: []
        };
    },

    componentWillMount: function(){
        this.setState({contacts: "localhost:8080/contacts"});
    },

    render: function() {
        let createContactRow = function (author){
            return(
                <tr key = {contacts.id}>
                    <td>{contacts.firstName}</td>
                    <td>{contacts.lastName}</td>
                </tr>
            )
        };

        return(
            <div>
                <h1>Contacts</h1>

                <table className="contactsTable">
                  <tbody>
                    {this.state.contacts.map(createContactRow, this)}
                  </tbody>
                </table>
            </div>
        );
    }
});

export default Contacts;