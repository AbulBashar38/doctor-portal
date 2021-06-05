import React from 'react';
import FeatureServices from '../FeatureServices/FeatureServices';
import Home from '../Home/Home';
import Services from '../Services/Services';

const FullHomePage = () => {
    return (
        <div>
            <Home></Home>
            <Services></Services>
            
            <FeatureServices></FeatureServices>
        </div>
    );
};

export default FullHomePage;