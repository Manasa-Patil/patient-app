import React from "react";

const Appointment = ({ selectedDate }) => {
  if (!selectedDate) return null; // Prevent rendering if no date is selected

  return (
    <div className="mt-4 p-4 bg-white rounded-lg shadow-md text-center">
      <h3 className="text-lg font-semibold">Appointment Details</h3>
       {/* Ensures valid date */}
      <div>
      <table class="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td><p> {selectedDate?.toDateString()}</p></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td> </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>Joe</td>
              <td> </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointment;
