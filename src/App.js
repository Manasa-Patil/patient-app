import Login from "./Components/Login";
import "./app.css";
import Header from "./Components/Header"
import {useState } from "react";
import Footer from "./Components/Footer"
import Appointment from "./Components/Appointment";
import Calender from "./Components/Calender";

// import Appointment from "./Components/Appointment";

function App() {

  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
     <Header />
    <Login />
    <Footer />
    <Calender />
    
    
    {/* <Appointment /> */}
  </div>
  );
}

export default App;
