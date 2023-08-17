import React from 'react';
import FoodCard from '../../../Components/FoodCard/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div>
        <div className='grid grid-cols-3 gap-7 px-10 mt-16 mb-24'>
          { 
        items.map(item =><FoodCard
            key={item._id}
            item={item}
           ></FoodCard>)
          }
        </div>
        </div>
    );
};

export default OrderTab;