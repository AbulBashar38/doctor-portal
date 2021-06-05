import React from 'react';
import './Testimonial.css'
import Winson from '../../../images/Ellipse 1.png'
import female1 from '../../../images/Ellipse 2.png'
import female2 from '../../../images/Ellipse 3.png'
import TestimonialCart from '../TestimonialCart/TestimonialCart';
const testimonialInfo=[
    {
        name:'Winson Herry',
        country:'california',
        img:Winson
    },
    {
        name:'Winson Herry',
        country:'california',
        img:female1
    },
    {
        name:'Winson Herry',
        country:'california',
        img:female2
    },
]

const Testimonial = () => {
    return (
        <section className='testimonial-style mt-5 pt-5'>
            <div className="container">
                <div className="section-header">
                    <div>
                        <h5 className="text-primary pb-3">Testimonial</h5>
                        <h1>What's Our Patients <br /> Say</h1>
                    </div>
                </div>
                <div className='mt-5 row'>
                    {
                        testimonialInfo.map(info=><TestimonialCart key={info.img} info={info}></TestimonialCart>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;