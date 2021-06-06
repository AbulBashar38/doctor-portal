import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Appointment from '../Appointment/Appointment';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FeatureServices from '../FeatureServices/FeatureServices';
import Home from '../Home/Home';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const FullHomePage = () => {
    return (
        <div>
            <Home></Home>
            <Services></Services>
             <FeatureServices></FeatureServices>
             <Appointment></Appointment>
             <Testimonial></Testimonial>
             <Blog></Blog>
             <Doctors></Doctors>
             <Contact></Contact>
             <Footer></Footer>
        </div>
    );
};

export default FullHomePage;