import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate]= useState(new Date())
    const handleDateChange =(date)=>{
        setSelectedDate(date);
    }
    return (
        <div>
            <Header>black</Header>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <BookAppointment selectedDate={selectedDate}></BookAppointment>
            <Footer></Footer>
         </div>
    );
};

export default Appointment;