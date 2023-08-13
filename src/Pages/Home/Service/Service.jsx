import React from 'react';
import img from '../../../assets/home/chef-service.jpg'

const Service = () => {
    return (
        <div className='relative'>
            <img src={img} alt=""/>

        <div className='bg-white rounded  absolute top-[22%] p-10 mx-20 text-black text-center '>
          <h1 className="text-3xl mb-3 font-mono">BISTRO BOSS</h1>
            <p className='text-[19px] px-10'>It is the representation of gourmet interest in cooking with a combination of blogging and photography. Such a blog may comprise of anything ranging from cooking styles, recipes, types of foods, food testing, reviews about different types of food, healthy eating, and food photography. The majority of blogs have photos  by the authors of the blogs who are called bloggers for better illustration of what you are about to get</p>
            </div>
        </div>
    );
};

export default Service;