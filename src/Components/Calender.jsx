import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Appointment from "./Appointment";  // Import the Appointment component

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (

    <div className="flex justify-center items-center h-screen bg-gray-100">
      <h2>Video Call Appointment</h2>
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-xl font-semibold mb-4">Select a Date</h2>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)} // Updates selectedDate state
          className="p-2 border rounded-md w-48 text-center"
          dateFormat="yyyy-MM-dd"
        />
        {selectedDate && (
          <p className="mt-4 text-gray-700">Selected Date: {selectedDate.toDateString()}</p>
        )}
      </div>
      <Appointment selectedDate={selectedDate} /> {/* Pass the date to Appointment */}
    </div>
  );
};

export default Calender;
