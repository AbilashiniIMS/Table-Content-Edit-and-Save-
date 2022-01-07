import React, { useState } from 'react';

function TableNew() {
  //use of hook for couting
  const [noOfRows, setNoOfRows] = useState(1);

  return (
    <div>
      <br />
      <table>
        <thead>
          <tr>
            <th scope="col">SI.No</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(noOfRows)].map((elementInArray, index) => {
            return (
              <tr>
                <td scope="col">SI.No</td>
                <td scope="col">First</td>
                <td scope="col">Last</td>
                <td scope="col">Handle</td>
                {/* <td>{index + 1}</td>
                <td>{elementInArray.Company}</td>
                <td>{elementInArray.Country}</td>
                <td>{elementInArray.Contact}</td> */}
                <td>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => setNoOfRows(noOfRows - 1)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        type="button"
        class="btn btn-primary me-3"
        onClick={() => setNoOfRows(noOfRows + 1)}
      >
        Add
      </button>
    </div>
  );
}
export default TableNew;
