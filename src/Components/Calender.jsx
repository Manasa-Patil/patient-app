import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Appointment from "./Appointment"; // Import the Appointment component

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 container border-rounded ">
      <h3 className="text-2xl font-bold mb-4 text-center " style={{color:"white"}}>Video Call Appointment</h3>
      
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h3 className="text-xl font-semibold mb-4">Select a Date</h3>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)} // Updates selectedDate state
          className="p-2 border rounded-md w-48 text-center  my-3 "
          dateFormat="yyyy-MM-dd"
        />
        
        {/* {selectedDate && (
          <p className="mt-4 text-gray-700">
            Selected Date: {selectedDate?.toDateString()} 
          </p>
        )} */}
      </div>

      {/* Only render Appointment if a date is selected */}
      {selectedDate && <Appointment selectedDate={selectedDate} />}
    </div>
  );
};

export default Calender;