import React from 'react';

const AllDataTable = ({ allData }) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Sr.No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Prescription</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    allData.map((appointment, index) =>

                        <tr key={appointment._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{appointment.name}</td>
                            <td>{appointment.phone}</td>
                            <td><button className='btn  btn-brand text-uppercase'>view</button></td>
                            <td><button className='btn  btn-primary text-uppercase'>pending</button></td>
                        </tr>)
                }
            </tbody>
        </table>
    );
};

export default AllDataTable;