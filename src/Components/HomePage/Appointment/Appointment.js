import React from 'react';
import appointDoctor from '../../../images/5790-removebg.png'
import './Appoinment.css'
const Appointment = () => {
    
    return (
        <section className='appointment'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                        <img src={appointDoctor} alt="" className="img-fluid" />
                    </div>
                    <div style={{zIndex:'10'}} className="col-md-7 mt-5 text-white">
                        <h6 className='text-primary pb-3'>APPOINTMENT</h6>
                        <h1 className='pb-2'>Make an appointment <br /> Today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, illum quos!</p>
                        <button className="btn btn-primary mt-3">Learn more</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;