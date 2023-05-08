import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "../hooks/admin/useAuthContext";

// doctor pages
import DocLogin from "../pages/doctor/docLogin";

import Profile from "../pages/doctor/Profile";
import PrescriptionViews from "../pages/doctor/PrescriptionView";
import ClientView from "../pages/doctor/ClientView";
import BookingView from "../pages/doctor/BookingView";


function DoctorRoutes() {
  const {doctor} = useAuthContext()
  return (
    <Routes>
      <Route path="/doctor/login" element={!doctor ? <DocLogin /> : <Navigate to ={'/doctor/profile'}/> } />
      
      <Route path="/doctor/profile" element={doctor ? <Profile /> : <Navigate to = {'/doctor/login'}/>}/>
      <Route path="/doctor/PrescriptionView" element={doctor ? <PrescriptionViews  /> : <Navigate to ={'/doctor/login'}/>} />
      <Route path="/doctor/ClientView" element={doctor ? <ClientView /> : <Navigate to ={'/doctor/login'}/>} />
      <Route path="/doctor/BookingView" element={doctor ? <BookingView/>: <Navigate to ={'/doctor/login'}/>} />
    </Routes>
  );
}

export default DoctorRoutes;
