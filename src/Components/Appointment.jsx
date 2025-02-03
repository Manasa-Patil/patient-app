import React from "react";

export default function Appointment({ selectedDate }) {
  // Ensure the date is formatted or fallback to a placeholder
  const formattedDate = selectedDate ? selectedDate.toDateString() : "No Date Selected";

  return (
    <div>
      
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Patient Id</th>
            <th scope="col">Appointment Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>#abc123</td>
            <td>{formattedDate}</td> {/* Display the formatted date */}
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>#xyz786</td>
            <td>{formattedDate}</td> {/* Display the formatted date */}
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>#tuv282</td>
            <td>{formattedDate}</td> {/* Display the formatted date */}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
