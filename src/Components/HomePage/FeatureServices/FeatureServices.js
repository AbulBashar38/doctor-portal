import React from 'react';
import featureImg from '../../../images/Mask Group 3.png'
const FeatureServices = () => {
    return (
        <section>
            <div className='row'>
                <div className="col-md-5 text-center">
                    <img style={{height:'500px'}} src={featureImg} alt="" />
                </div>
                <div className="col-md-7">
                    <h1>Exceptional Dental <br /> Care on your terms</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, magni! Voluptatum quam a dolor recusandae aliquid corporis, sit facilis iusto eius qui. Tempora assumenda ipsum quam similique veritatis modi, autem et, facilis voluptas animi, veniam iusto voluptatum itaque aspernatur alias! Tempore sed minima provident excepturi eum rerum maiores sequi eos.</p>
                    <button className="btn btn-primary">Learn more</button>
                </div>
            </div>
        </section>
    );
};

export default FeatureServices;