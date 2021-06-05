import React from 'react';

const TestimonialCart = (props) => {
    const { name, country, img } = props.info
    return (
        <div className='col-md-4'>
            <div style={{ border: '1px solid #D3D3D3' }}>
                <div className='pt-3 ps-4 pe-3'>
                    <p className='mt-3 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque similique ex eaque sequi eveniet recusandae deleniti corrupti, error incidunt cumque. Repudiandae ea quisquam itaque commodi cumque quia. Animi culpa explicabo officiis quam aliquam at blanditiis nobis mollitia ad, vitae temporibus!</p>

                    <div className='row mb-4'>
                        <div className="col-md-4">
                            <img src={img} alt="" />
                        </div>
                        <div className="col-md-8">
                            <h5 className='text-primary'>{name}</h5>
                            <p className='text-secondary'>{country}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCart;