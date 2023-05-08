import React from 'react'
import Nav from '../../components/nav'
import Footer from '../../components/Footer'
import TimeSlotBookingPage from '../../components/TimeSlotBookingPage'
import { useLocation } from 'react-router-dom'

function BookThisDoctor() {
  const location=useLocation()
  const id =new URLSearchParams(location.search).get('id');
  const departmentid=new URLSearchParams(location.search).get('department')
  return (
    <>
    <Nav/>
    <TimeSlotBookingPage id={id} departmentid={departmentid}/>
    <Footer/>
    </>
  )
}

export default BookThisDoctor