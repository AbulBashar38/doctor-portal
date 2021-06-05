import React from 'react';

const SearviesDetails = (props) => {
    const {name,img}=props.service
    return (
        <div className='col-md-4 text-center'>
                <img className='mb-3' style={{height:'60px'}} src={img} alt="" />
                <h5 className='mb-3'>{name}</h5>
                <small className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, enim!</small>
        </div>
    );
};

export default SearviesDetails;