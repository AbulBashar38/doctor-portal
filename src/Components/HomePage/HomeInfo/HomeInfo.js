import React from 'react';
import ShowInfo from '../ShowInfo/ShowInfo';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const HomeInfo = () => {
    const infoData = [
        {
            title: 'Opening Hours',
            description: 'we are open 7 hours',
            icon: faClock,
            color: 'primary'
        },
        {
            title: 'Visit our location',
            description: 'Brooklyn, NY 10036,United States',
            icon: faMapMarker,
            color: 'dark'
        },
        {
            title: 'Contract us now',
            description: '+8801234567890',
            icon: faPhone,
            color: 'primary'
        },
    ]
    return (
        <section className='d-flex justify-content-center'>
            <div className='row w-75'>
                {
                    infoData.map(info => <ShowInfo info={info} key={info.title}></ShowInfo>)
                }
            </div>
        </section>
    );
};

export default HomeInfo;