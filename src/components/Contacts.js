import React from 'react';
import Axios from 'axios';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import AddButton from './AddButton.js';
import ViewContact from './viewContact.js';


class Contacts extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data: 
         [
            // {
            //    "id":1,
            //    "firstName":"Krishna",
            //    "lastName":"Adhikari"
            // },
				//
            // {
            //    "id":2,
            //    "firstName":"Vivek",
            //    "lastName":"Bhusal"
            // },
				//
            // {
            //    "id":3,
            //    "firstName":"Lauren",
            //    "lastName":"Chia"
            // }
         ]
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
         <div>
            <Header/>
            <AddButton />
            <table className='ContactsTable'>
               <tbody>
                {row}
               </tbody>
            </table>
         </div>
         );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1 className='HomeHeading'>My Contacts</h1>
         </div>
      );
   }
}

const TableRow  = ({contact}) => {
  return (
          <div key={contact.uuid}>
          {console.log(contact)}
             <tr>
                <Link to= {`contact/${contact.uuid}`} >
                    <td>{contact.firstname}</td>
                    <td>{contact.lastname}</td>
                </Link>
             </tr>
             {/*<Route path = {`contact/${this.props.data.id}`} component={ViewContact(this.props.id)} />*/}

          </div>
  );
};


export default Contacts;