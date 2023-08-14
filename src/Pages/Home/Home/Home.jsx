import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Service from '../Service/Service';
import PopularMenu from '../PopularMenu/PopularMenu';
import Features from '../Featured/Features';
import Testimonial from '../Testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';




const Home = () => {
    return (
        <div>
        <Helmet>
              <title>Bisto Boss | Home</title>
         </Helmet>
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