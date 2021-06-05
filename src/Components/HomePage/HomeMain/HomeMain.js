import React from 'react';
import chair from '../../../images/Mask Group 1.png'
const HomeMain = () => {
    return (
        <main style={{ height: '600px' }} className='row d-flex align-items-center'>
            <div className="col-md-4 offset-md-1 ">
                <h1 style={{ color: '#3a4256' }}>Your New Smile <br /> Start Here</h1>
                <small className='text-secondary '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem, fuga facilis nesciunt sint cumque aliquam nam assumenda velit non quae facere saepe labore provident.</small>
                <button className="btn btn-primary mt-3">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HomeMain;