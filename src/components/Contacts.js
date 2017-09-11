import React from 'react';

class Contacts extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data: 
         [
            {
               "id":1,
               "firstName":"A",
               "lastName":"X"
            },
				
            {
               "id":2,
               "firstName":"B",
               "lastName":"Y"
            },
				
            {
               "id":3,
               "firstName":"C",
               "lastName":"Z"
            }
         ]
      };
   }
	
   render() {
      return (
         <div>
            <Header/>
            <table>
               <tbody>
                  {this.state.data.map((contact, i) => <TableRow key = {i}  
                  //key = {i} inside map() function. This will help React to 
                  //update only the necessary elements instead of re-rendering the 
                  //entire list when something changes
                     data = {contact} />)}
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
            <h1>My Contacts</h1>
         </div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.firstName}</td>
            <td>{this.props.data.lastName}</td>
         </tr>
      );
   }
}

export default Contacts;