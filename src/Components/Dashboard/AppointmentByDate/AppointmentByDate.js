import React from 'react';
import AppointmentTable from '../AppointmentTable/AppointmentTable';

const AppointmentByDate = ({appointments}) => {
    return (
        <div>
            <h1>Appointments {appointments.length}</h1>
            <div>
                <AppointmentTable appointments={appointments}></AppointmentTable>
            </div>
        </div>
    );
};

export default AppointmentByDate;