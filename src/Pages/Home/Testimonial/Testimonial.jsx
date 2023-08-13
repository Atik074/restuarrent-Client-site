import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle'; 

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const Testimonial = () => {
    const [reviewItems , setReviewItems] = useState([])

   
    useEffect(()=>{
      fetch('review.json')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setReviewItems(data)

    })
    } , [])

    return (
        <div>
            <SectionTitle
                subheading={'---What Our Clients Say---'}
                heading={'TESTIMONIALS'}
            ></SectionTitle>

   <div>
     <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
         
            {
                 reviewItems.map(reviewItem =><SwiperSlide
                   key={reviewItem._id}
                 >
                     <div className='text-center  
                     '>
                      <p className='text-[19px] p-20'>{reviewItem.details}</p>
                      <p>{reviewItem.name}</p>
                    </div>
        
                 </SwiperSlide>)
            }

          </Swiper>
    </div>
            
        </div>
    );
};

export default Testimonial;