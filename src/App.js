// import Login from "./Components/Login";
import "./app.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calender from "./Components/Calender";
// import Appointment from "./Components/Appointment";

const root = document.getElementById("root");


function App() {

  // const [selectedDate, setSelectedDate] = useState(null);
  ReactDOM.createRoot(root).render(
  

      <BrowserRouter>
    
    
      <Header />
      <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Login/>
              }
            />
            <Route
              exact
              path="/appointment"
              element={
              <Calender/>
            }
            />
          </Routes>
        </div>

        <Footer />

  
  
    </BrowserRouter>
  );
}

export default App;
