import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ShowInfo.css'
const ShowInfo = (props) => {
    const { title, description, icon, color } = props.info;
    return (
        <div className= {`col-md-4`}>
            <div className= {`d-flex justify-content-center align-items-center bgColor-${color}  info-item`}>
                <div className='fs-1 me-2'>
                    <FontAwesomeIcon icon={icon} />
                </div>
                <div>
                    <h5>{title}</h5>
                    <small>{description}</small>
                </div>
            </div>
        </div>
    );
};

export default ShowInfo;