import React from 'react';
import Axios from 'axios';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import AddButton from './AddButton.js';
import ViewContact from './viewContact.js';
import SuccessMsgDialog from './SuccessMsgDialog.js'


class Contacts extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data: []
      };
   }
    componentDidMount() {
        Axios.get('http://localhost:3030/contacts')
            .then(res => this.setState({ data: res.data }))
            .catch(err => console.log(err))
    }
   render() {
        const row = this.state.data.map((contact) => <TableRow contact={contact} />);
       //key = {i} inside map() function. This will help React to
       //update only the necessary elements instead of re-rendering the
       //entire list when something changes
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
          <div key={contact.uuid}>
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
