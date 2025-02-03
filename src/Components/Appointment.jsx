// import React from "react";
// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// const PatientManagement = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [patientName, setPatientName] = useState("");
//   const [videoLink, setVideoLink] = useState("");

//   const addAppointment = () => {
//     if (patientName && videoLink) {
//       setAppointments([...appointments, { name: patientName, link: videoLink }]);
//       setPatientName("");
//       setVideoLink("");
//     }
//   };

//   return (
//     <div className="p-6 max-w-lg mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Patient Management</h1>
//       <Card>
//         <CardContent className="p-4">
//           <Label className="block mb-2">Patient Name</Label>
//           <Input 
//             value={patientName} 
//             onChange={(e) => setPatientName(e.target.value)} 
//             placeholder="Enter patient name" 
//             className="mb-4"
//           />
//           <Label className="block mb-2">Video Call Link</Label>
//           <Input 
//             value={videoLink} 
//             onChange={(e) => setVideoLink(e.target.value)} 
//             placeholder="Enter video call link" 
//             className="mb-4"
//           />
//           <Button onClick={addAppointment} className="w-full">Add Appointment</Button>
//         </CardContent>
//       </Card>
//       <div className="mt-6">
//         <h2 className="text-xl font-semibold mb-2">Appointments</h2>
//         {appointments.length === 0 ? (
//           <p className="text-gray-500">No appointments scheduled</p>
//         ) : (
//           <ul className="space-y-2">
//             {appointments.map((appointment, index) => (
//               <li key={index} className="p-3 border rounded-lg flex justify-between items-center">
//                 <span>{appointment.name}</span>
//                 <a href={appointment.link} target="_blank" rel="noopener noreferrer" className="text-blue-600">Join Call</a>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PatientManagement;
