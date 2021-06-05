import React from 'react';
import SearviesDetails from '../ServiceDetails/SearviesDetails';
import fluorideImg from '../../../images/fluoride.png'
import cavityImg from '../../../images/cavity.png'
import toothImg from '../../../images/tooth.png'
const servicesInfo = [
    {
        name: 'Fluoride Treatment',
        img: fluorideImg
    },
    {
        name: 'Cavity Filling',
        img: cavityImg
    },
    {
        name: 'Teeth whitening ',
        img: toothImg
    }
]
const Services = () => {
    return (
        <section className='mt-5 pt-5'>
            <div className='text-center'>
                <h5 className='mb-3' style={{ color: '#1cc7c1' }}>OUR SERVICES</h5>
                <h1 style={{ color: '#3a4256' }}>Services We Provide</h1>
            </div>
            <div className='d-flex justify-content-center mt-5 pt-5'>
                <div className='row w-75'>
                    {
                        servicesInfo.map(service=><SearviesDetails service={service} key={service.name}></SearviesDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;