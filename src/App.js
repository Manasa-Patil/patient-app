import Login from "./Components/Login";
import "./app.css";
import Header from "./Components/Header"
import {useState } from "react";
import Footer from "./Components/Footer"
import Appointment from "./Components/Appointment";
import Calender from "./Components/Calender";


function App() {

  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
     <Header />
    <Login />
    <Footer />
    <Calender />
    
    
  </div>
  );
}

export default App;
