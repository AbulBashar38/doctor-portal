import React from 'react';

const AppointmentTable = ({appointments}) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Service</th>
                </tr>
            </thead>
            <tbody>
                {
                    appointments.map((appointment, index) => 
                        
                    <tr key={appointment._id}>
                        <td>{appointment.name}</td>
                       <td>{appointment.email}</td>
                       <td>{appointment.service}</td>
                    </tr>)
                }
            </tbody>
        </table>
    );
};

export default AppointmentTable;