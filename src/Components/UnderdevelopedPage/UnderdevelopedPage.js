import React from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const UnderdevelopedPage = () => {
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <h1>THis page is Underdeveloped</h1>
            </div>
        </div>
    );
};

export default UnderdevelopedPage;