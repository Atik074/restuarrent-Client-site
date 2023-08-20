import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle'; 
import { FaQuoteLeft} from 'react-icons/fa'
import './Testimonial.css'
// Import Swiper styles
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// rating 
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'



const Testimonial = () => {
    const [reviewItems , setReviewItems] = useState([])

   
    useEffect(()=>{
      fetch('http://localhost:5000/review')
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
     <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-12 ">
         
            {
                 reviewItems.map(reviewItem =><SwiperSlide
                   key={reviewItem._id}
                
                 >
                  <div className='text-center flex flex-col items-center '>
                     <Rating 
                     style={{ maxWidth: 180 , margin:'0 auto' }}
                    value={reviewItem.rating}
                     readOnly
                     />
                     <p><FaQuoteLeft className='text-[40px] my-10'></FaQuoteLeft></p>
                     <div className=' px-16'>
                        <p className='text-[19px]   mb-4'>{reviewItem.details}</p>
                        <p className='text-orange-500 text-xl '>{reviewItem.name}</p>
                     </div>
                    
                    </div>
        
                 </SwiperSlide>)
            }

          </Swiper>
    </div>
            
        </div>
    );
};

export default Testimonial;