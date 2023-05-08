
import BaseTable from '../../components/baseTable'
import React, { useEffect, useState } from 'react'

import axios from "../../instance/axios"
import AdminNavbar from '../../components/Sidebar'
import AdminTopbar from '../../components/AdminTopbar'
import { ClipLoader } from 'react-spinners'
import Swal from 'sweetalert2';


const BookingView = () => {
    const [booking, setBooking] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const getBooking = async () => {
        try {
            const response = await axios.get("/api/admin/getBookings")

            setBooking(response.data)



        } catch (error) {

        } finally {
            setIsLoading(false);
        }
    };

    const handleEdit = async (id) => {
        try {
             const confirmed = await Swal.fire({
                icon: 'question',
                text: 'Are you sure you want to Cancel This Booking?',
                showCancelButton: true,
                confirmButtonText: 'Yes!',
                cancelButtonText: 'No, cancel',
              });
        
              if (confirmed.value === true) {
        
            const response = await axios.get(`/api/admin/cancelbooking/${id}`);
           getBooking()
        }
     } catch (error) {
            
        }
    }


    const columns = [
        {
            name: "Client Name",
            selector: row => row.client_id
        },
        {
            name: "Doctor Name",
            selector: row => row.doctor_id
        },
        {
            name: "Department Name",
            selector: row => row.department_id
        },



        {
            name: "Date",
            selector: row => row.date
        },
        {
            name: "Time",
            selector: row => row.starting_time
        },
        {
            name: "Action",
            cell: (row) => (
                <>
               
                <button onClick={()=>handleEdit(row._id)} className={`${row.status?"bg-green-700" : "bg-red-700"} px-2 py-1 text-white rounded-md w-[120px]`}
>
                    {row.status ? "Cancel":"Cancelled"}

                </button>
                </>
            
            )
        },
        

    ];
    useEffect(() => {
        getBooking();
    }, []);

    return (
        <>
            <div>
                <AdminTopbar />
            </div>
            <div className='flex gap-24'>
                <div>
                    <AdminNavbar />
                </div>
                <div className='d-flex w-full flex-column align-items-center mt-10 mr-24'>
                    {isLoading ? (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto' }}>
                            <ClipLoader css="display: block; margin: 0 auto; border-color: red;" size={200} color={"teal-900"} loading={true} />
                        </div>
                    ) : (




                        <BaseTable
                            columns={columns}
                            data={booking}
                            title={"TOTAL BOOKINGS"}
                        />
                    )}

                </div>
            </div>
        </>
    )
}

export default BookingView