"use strict";

import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import AddButton from '../components/AddButton.js';
import ContactsStyle from './Contacts.css';
import Endpoints from '../endpoints';

class Contacts extends React.Component {
   constructor() {
      super();
      this.state = {
         data: []
      };
   }

    componentDidMount() {
        Axios.get(`${API_URL}/${Endpoints.GET_ALL_CONTACTS}`)
            .then(res => this.setState({ data: res.data }))
            .catch(err => console.log(0))
    }

   render() {
      const row = this.state.data.map((contact) => <TableRow contact={contact}  key={contact.uuid} />);
      return (
         <div >
            <div id='HomeHeading' className="mui--text-display3">My Contacts</div>
            <AddButton />
            <table id='ContactsTable' className="mui--z3" >
               <tbody>
                    {row}
               </tbody>
            </table>
         </div>
      );
   }
}

const TableRow  = ({contact}) => {
  return (
    <div>
        <tr>
            <Link to= {`contact/${contact.uuid}`} >
                <td>{contact.firstname}</td>
                <td>{contact.lastname}</td>
            </Link>
        </tr>
    </div>
);
};

export default Contacts;
