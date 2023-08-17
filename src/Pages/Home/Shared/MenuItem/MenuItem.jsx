import React from 'react';

const MenuItem = ({item}) => {
    console.log(item)
    const {_id , name ,category,image, recipe , price} = item
    return (
        <div className='flex space-x-4 my-10'>
             <img src={image} style={{borderRadius: '0 200px 200px 200px'}} className='w-[118px] mb-4' alt="" /> 
             
           <div>
                <p className='uppercase text-xl'>{name}--------------</p>
                <p className='text-[17px]'>{recipe}</p>
            </div>
             <p className='text-[#BB8506] text-xl'>${price}</p>
            
        </div>
    );
};

export default MenuItem;