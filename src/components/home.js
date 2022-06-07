import '../css/login.css';
import * as React from 'react';
import { getAllUsers } from '../api/user';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';


// const Customers = [
//   { CustomerId: 1, CustomerName: "Anom", Department: "Male", DateOfJoining: new Date },
//   { CustomerId: 2, CustomerName: "Megha", Department: "Female", DateOfJoining: new Date },
//   { CustomerId: 3, CustomerName: "Subham", Department: "Male", DateOfJoining: new Date },
// ]

async function getAll() {

  var users = await getAllUsers();
  debugger
  return users;
}

 var users = () => ({ users : getAll()}) ;

const result = [];
  debugger
  for (var i in users)
    result.push([i, users[i]]);
    console.log(result);

function home() {
  console.log("Entery to home");

  return (
    <div className="App">
      <table >
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {result.map((val, key) => {
            debugger
            return (
              <tr key={key}>
                <td>{val.fullName}</td>
                <td>{val.email}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

// return (
//   <div>
//     <table className="table table-striped">
//       <thead>
//         <tr>
//           <th>הסתיים?</th>
//           <th>בהשהיה</th>
//           <th>בפעולה</th>
//           <th>דחוף</th>
//           <th>מתוכנן</th>
//         </tr>
//       </thead>
//       <tbody>
//         {Customers.map((cst) => (
//           <tr key={Customers.CustomerId}>
//             <td>{Customers.CustomerId}</td>
//             <td>{Customers.CustomerName}</td>
//             <td>{Customers.Department}</td>
//             <td>{Customers.DateOfJoining}</td>
//             <td><button
//               type="button" className="btn btn-light mr-1" data-bs-toggle="modal" data-bs-target="#exampleModal"
//               onClick={() => this.editClick()}>Edit</button>
//               <button
//                 type="button" className="btn btn-light mr-1"
//                 onClick={() => this.deleteClick()}>Delete</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>

// );


// }

export default home;
