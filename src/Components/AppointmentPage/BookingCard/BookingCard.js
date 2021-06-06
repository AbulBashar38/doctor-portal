import React, { useState } from 'react';
import AppointmentModal from '../Appointment/AppoinmentModal/AppointmentModal';

const BookingCard = (props) => {
    const { subject, visitingHour, totalSpace} = props.bookData
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5 ">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{subject}</h5>
                    <h6>{visitingHour}</h6>
                    <p>{totalSpace} SPACES AVAILABLE</p>
                    <button onClick={openModal} className="btn btn-brand text-uppercase">Book Appointment</button>
                    <AppointmentModal modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentOn={subject} date={props.date}></AppointmentModal>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;