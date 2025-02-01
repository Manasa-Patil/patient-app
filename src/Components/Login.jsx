import React from "react";

export default function Login() {
  return (
    <div className="MainContainer">
      <div className="FormContainer">
        <h2>Login</h2>
        <form>
          <div className="Name">
            <input
              type="text"
              placeholder="First Name"
              // value={firstName}
              //onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              //value={lastName}
              //onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div>
            <select>
              {/* value={gender} onChange={(e) => setGender(e.target.value)} */}
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div>
            <input
              type="text"
              placeholder="Email"
              //value={email}
              //onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              //value={phone}
              //onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Password"
              //value={}
              //onChange{}
            />
          </div>

          <div>
            <input
              type="date"
              placeholder="Date of Birth"
              //value={dob}
              //onChange={(e) => setDob(e.target.value)}
            />
          </div>

          <textarea
            rows="10"
            //value={address}
            //onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
          />

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
