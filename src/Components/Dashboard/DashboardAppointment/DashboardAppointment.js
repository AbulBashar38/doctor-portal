import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';

const DashboardAppointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [appointments, setAppointments] = useState([])
    const handleDateChange = (date) => {
        setSelectedDate(date);
    }
    useEffect(() => {
        fetch('http://localhost:5000/appointsByDate',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({date:selectedDate})
        })
        .then(res=>res.json())
        .then(data=>setAppointments(data))
    }, [selectedDate])
    
    
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div style={{height:'700px'}} className='d-flex justify-content-center align-items-center col-md-5'>
                <div>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
                </div>
            </div>
            <div className="col-md-5 d-flex justify-content-center align-items-center ">
                <AppointmentByDate appointments={appointments}></AppointmentByDate>
            </div>
        </div>
    );
};

export default DashboardAppointment;