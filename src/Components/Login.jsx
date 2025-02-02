import React from "react";
import styles from './login.module.css';



export default function Login() {
  return (
    <div className={styles.container}>
    
       <h2>Login</h2>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">First Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="First Name"/>
</div>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Last Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Last Name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Phone Number"/>
</div>

<div  class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Date of Birth</label>
<input
 class="form-control" id="exampleFormControlInput1"
              type="date"
              placeholder="Date of Birth"
              //value={dob}
             // onChange={(e) => setDob(e.target.value)}
            />
</div>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<label for="inputPassword5" class="form-label">Password</label>
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"/>
<div id="passwordHelpBlock" class="form-text">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</div>
<div class="mb-3">
<select class="form-select" aria-label="Default select example">
  <option selected>Select Location</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="3">Three</option>
  <option value="3">Three</option>
  <option value="3">Three</option>
</select>
</div>
<div class="mb-3">
<select class="form-select" aria-label="Default select example">
  <option selected>Select Speciality</option>
  <option value="1">Gyneacologist</option>
  <option value="2">Surgeon</option>
  <option value="3">Orthopedic</option>
  <option value="3">Pediatrician</option>
  <option value="3">Physicist</option>
  <option value="3">Dermatologist</option>
</select>
</div>




<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Address</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button type="button" class="btn btn-primary">Submit</button>
<button type="button" class="btn btn-link">Back</button>
{/* <label for="exampleDataList" class="form-label">Doctors</label>
<input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
<datalist id="datalistOptions">
  <option value="Gyneacologist"/>
  <option value="Surgeon"/>
  <option value="Orthopedic"/>
  <option value="Pediatrician"/>
  <option value="Physicist"/>
  <option value="Dermatologist"/>
</datalist> */}
    </div>
  );
}
