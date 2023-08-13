import React from 'react';

const MenuItem = ({item}) => {
    console.log(item)
    const {_id , name ,category,image, recipe , price} = item
    return (
        <div className='flex space-x-4 my-10'>

          {/* <img src='https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg' style={{borderRadius: '0 200px 200px 200px'}} className='w-[118px] mb-4' alt="" /> */}

          {/* image not found .i use image from net */}
       <img src='https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  style={{borderRadius: '0 200px 200px 200px'}} className='w-[118px] mb-4'  alt="" />
      


           <div>
                <p className='uppercase text-xl'>{name}--------------</p>
                <p className='text-[17px]'>{recipe}</p>
            </div>
             <p className='text-[#BB8506] text-xl'>${price}</p>
            
        </div>
    );
};

export default MenuItem;