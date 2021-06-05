import React from 'react';
import DoctorInfo from '../DoctorInfo/DoctorInfo';

const Doctors = () => {
    return (
        <section className='mt-5 pt-5'>
            <h5 className='text-center text-primary'>Doctors</h5>
            <div className='mt-5 row'>
                <DoctorInfo />
                <DoctorInfo />
                <DoctorInfo />
            </div>
        </section>
    );
};

export default Doctors;