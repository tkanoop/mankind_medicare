import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { useAuthContext } from "../hooks/admin/useAuthContext";

// Client Pages
import LandingPage from "../pages/client/landingPage";
import Doctors from "../pages/client/Doctors";
import Departments from "../pages/client/Departments";
import Signup from "../pages/client/Signup";
import Login from "../pages/client/Login";
import Verify from "../pages/client/Verify";
import DepartmentDoctor from "../pages/client/DepartmentDoctor";
import BookThisDoctor from "../pages/client/BookThisDoctor";
import PatientProfile from "../pages/client/PatientProfile"

function ClientRoutes() {
  const {client} = useAuthContext()
  console.log(client);
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/doctors" element={client ? <Doctors /> : <Navigate to ={'/login'}/>} />
      <Route path="/departments" element={client ? <Departments />: <Navigate to ={'/login'}/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={!client ?<Login /> :<Navigate to ={'/departments'}/> } />
      <Route path="/verify" element={<Verify />} />
      <Route path="/doctor" element={client ? <DepartmentDoctor/> : <Navigate to ={'/login'}/>}/>
      <Route path="/doctorbooking" element={client?<BookThisDoctor/>:<Navigate to ={'/login'}/>}/>
      <Route path="/profile" element={client?<PatientProfile/>:<Navigate to ={'/login'}/>}/>
    </Routes>
  );
}

export default ClientRoutes;
