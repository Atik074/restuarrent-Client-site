import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle';


const Category = () => {
    return (
        <section>

            <SectionTitle 
              subheading={'---From 11am to 10pm---'}
              heading={'ORDER ONLINE'}
             >
                   
         </SectionTitle>
        

         <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-14 mb-24"
      >
        <SwiperSlide>
            <img src={slide1} alt='food-img'/>
            <h2 className='text-white text-3xl uppercase text-center -mt-20 mb-7'>Salad</h2>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt='food-img'/>
            <h2 className='text-white text-3xl -mt-20  uppercase text-center'>Pizza</h2>

        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt='food-img'/>
            <h2 className='text-white text-3xl uppercase -mt-20 text-center'>Soups</h2>

            </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt='food-img'/>
            <h2 className='text-white text-3xl uppercase -mt-20 text-center'>Desserts</h2>

            </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt='food-img'/>
            <h2 className='text-white text-3xl uppercase -mt-20 text-center'>Salad</h2>

            </SwiperSlide>
    
      </Swiper>   
        </section>
    );
};

export default Category;