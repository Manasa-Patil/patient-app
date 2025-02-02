import React from 'react';
import myImage from './Healthcare-logo.jpg';

export default function Header() {
  return (
    <div>
      <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src={myImage} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/> 
     
      HealthCare
    </a>
  </div>
</nav>
    </div>
  );
}
