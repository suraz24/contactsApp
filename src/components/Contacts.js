import React from 'react';

class Contacts extends React.Component {
   constructor() {
      super();
		
      this.state = {
            data: 
            [
               {
                  "id":1,
                  "firstName":"Krishna",
                  "lastName":"Adhikari"
               },
   				
               {
                  "id":2,
                  "firstName":"Vivek",
                  "lastName":"Bhusal"
               },
   				
               {
                  "id":3,
                  "firstName":"Lauren",
                  "lastName":"Chia"
               }
            ]
      };
   }
	
   render() {
      return (
         <div>
            <Header/>
            <table className='ContactsTable'>
               <tbody>
                  {this.state.data.map((contact, i) => <TableRow key = {i}  
                  //key = {i} inside map() function. This will help React to 
                  //update only the necessary elements instead of re-rendering the 
                  //entire list when something changes
                     data = {contact} />)}
               </tbody>
            </table>
            <Add />
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

class Add extends React.Component{
   render() {
      return (
         <input className='AddButton' type="image" src={require("./images/AddButton.png")} alt="AddButton" width="100" height="100"/>
      );
   }
}

class TableRow extends React.Component {
    
   render() {
      return (
         <tr >
            {/*<td>{this.props.data.id}</td>*/}
            <td>{this.props.data.firstName}</td>
            <td>{this.props.data.lastName}</td>
         </tr>
      );
   }
}


export default Contacts;