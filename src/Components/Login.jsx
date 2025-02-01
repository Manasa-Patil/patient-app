import React from "react";


export default function Login() {
  return (
    <div className="container">
    {/* <div className={styles.FormContainer}>
        <h2>Login</h2>
        <form>
          <div className="Name">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div>
            <select>
              value={gender} onChange={(e) => setGender(e.target.value)}
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Password"
              value={}
              onChange{}
            />
          </div>

          <div>
            <input
              type="date"
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          <textarea
            rows="10"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
          />

          <button>Submit</button>
        </form>
      </div> */}
       <h2>Login</h2>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">First Name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="First Name"/>
</div>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Last Name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Last Name"/>
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
  <label for="exampleFormControlTextarea1" class="form-label"> Enter your Symptoms</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<label for="exampleDataList" class="form-label">Doctors</label>
<input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
<datalist id="datalistOptions">
  <option value="Gyneacologist"/>
  <option value="Surgeon"/>
  <option value="Orthopedic"/>
  <option value="Pediatrician"/>
  <option value="Physicist"/>
  <option value="Dermatologist"/>
</datalist>
    </div>
  );
}
