import React from 'react';
import myImage from './Healthcare-logo.jpg';
import {Link} from "react-router-dom"


export default function Header() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
  <div className="container-fluid d-flex justify-content-start align-items-center">
    <a className="navbar-brand order-1 p-2" href="/">
      <img src={myImage} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/> 
     
      HealthCare
    </a>
    <Link className="nav-link order-2 p-2" aria-current="page" to="/">Login</Link>
    <Link className="nav-link order-3 p-2" aria-current="page" to="/appointment">Appointment</Link>

  </div>
</nav>
    </div>
  );
}
