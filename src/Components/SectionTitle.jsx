import React from 'react';

const SectionTitle = ({subheading , heading}) => {
    return (
        <div className='md:w-1/4 mx-auto mt-20 text-center sm:w-1/2 mb-4'>
           <p className='text-xl  text-[#D99904] py-4  border-b-4'>{subheading}</p> 

           <p className='text-3xl  font-serif border-b-4 py-4'>{heading}</p>
        </div>
    );
};

export default SectionTitle;