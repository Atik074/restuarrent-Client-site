import React from 'react';
import FoodCard from '../../../Components/FoodCard/FoodCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';


const OrderTab = ({items}) => {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
        <div>
  <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >

        <SwiperSlide>
          <div className='grid grid-cols-3 gap-7 px-10 mt-16 mb-24'>
             { 
              items.map(item =><FoodCard
              key={item._id}
             item={item}
              ></FoodCard>)
          }
        </div>

        </SwiperSlide>
     
    </Swiper>
        </div>
    );
};

export default OrderTab;