import '../css/login.css';
import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

function Customers(CustomerId, CustomerName, Department, DateOfJoining) {
  return { CustomerId, CustomerName, Department, DateOfJoining };
}

function home() {
  console.log("entery to home");

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>הסתיים?</th>
            <th>בהשהיה</th>
            <th>בפעולה</th>
            <th>דחוף</th>
            <th>מתוכנן</th>
          </tr>
        </thead>
        <tbody>
          {/* {Customers.map((cst) => ( */}
            <tr key={Customers.CustomerId}>
              <td>{Customers.CustomerId}</td>
              <td>{Customers.CustomerName}</td>
              <td>{Customers.Department}</td>
              <td>{Customers.DateOfJoining}</td>
              <td><button
                type="button" className="btn btn-light mr-1" data-bs-toggle="modal" data-bs-target="#exampleModal"
                onClick={() => this.editClick()}>Edit</button>
                <button
                  type="button" className="btn btn-light mr-1"
                  onClick={() => this.deleteClick()}>Delete</button>
              </td>
            </tr>
          {/* ))} */}
        </tbody>
      </table>
    </div>

  );




  //     {Customers.map((cst) => (
  //       <tr key={cst.CustomerId}>
  //         <td>{cst.CustomerId}</td>
  //         <td>{cst.CustomerName}</td>
  //         <td>{cst.Department}</td>
  //         <td>{cst.DateOfJoining}</td>
  //         <td>
  //           <button
  //             type="button"
  //             // className="btn btn-light mr-1"
  //             // data-bs-toggle="modal"
  //             // data-bs-target="#exampleModal"
  //             onClick={() => this.editClick(emp)}
  //           >
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               width="16"
  //               height="16"
  //               fill="currentColor"
  //               className="bi bi-pencil-square"
  //               viewBox="0 0 16 16"
  //             >
  //               <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
  //               <path
  //                 fillRule="evenodd"
  //                 d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
  //               />
  //             </svg>
  //           </button>
  //           <button
  //             type="button"
  //             className="btn btn-light mr-1"
  //             onClick={() => this.deleteClick(emp.EmployeeId)}
  //           >
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               width="16"
  //               height="16"
  //               fill="currentColor"
  //               className="bi bi-trash-fill"
  //               viewBox="0 0 16 16"
  //             >
  //               <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
  //             </svg>
  //           </button>
  //         </td>
  //       </tr>
  //     ))}
  // </table>


  //  function createData(name, calories, fat, carbs, protein) {
  //    return { name, calories, fat, carbs, protein };
  //  }
  //  const rows = [
  //    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //    createData('Eclair', 262, 16.0, 24, 6.0),
  //    createData('Cupcake', 305, 3.7, 67, 4.3),
  //    createData('Gingerbread', 356, 16.0, 49, 3.9),
  //  ];
  //  export default function BasicTable() {
  //    return (
  //      <TableContainer component={Paper}>
  //        <Table sx={{ minWidth: 650 }} aria-label="simple table">
  //          <TableHead>
  //            <TableRow>
  //              <TableCell>Dessert (100g serving)</TableCell>
  //              <TableCell align="right">Calories</TableCell>
  //              <TableCell align="right">Fat&nbsp;(g)</TableCell>
  //              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
  //              <TableCell align="right">Protein&nbsp;(g)</TableCell>
  //            </TableRow>
  //          </TableHead>
  //          <TableBody>
  //            {rows.map((row) => (
  //              <TableRow
  //                key={row.name}
  //                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  //              >
  //                <TableCell component="th" scope="row">
  //                  {row.name}
  //                </TableCell>
  //                <TableCell align="right">{row.calories}</TableCell>
  //                <TableCell align="right">{row.fat}</TableCell>
  //                <TableCell align="right">{row.carbs}</TableCell>
  //                <TableCell align="right">{row.protein}</TableCell>
  //              </TableRow>
  //            ))}
  //          </TableBody>
  //        </Table>
  //      </TableContainer>
  //    );
}

export default home;
