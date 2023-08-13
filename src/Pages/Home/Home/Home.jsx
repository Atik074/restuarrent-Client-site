import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Service from '../Service/Service';
import PopularMenu from '../PopularMenu/PopularMenu';
import Features from '../Featured/Features';
import Testimonial from '../Testimonial/Testimonial';




const Home = () => {
    return (
        <div>
           <Banner/>
           <Category/>
           <Service/>
           <PopularMenu/>
           <Features/>
           <Testimonial/>
         
        </div>
    );
};

export default Home;