import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import img from '../../../assets/home/featured.jpg'
import './Features.css'

const Features = () => {
    return (
        <div className='featrures text-white pt-8 my-20 bg-fixed'>
            <SectionTitle
                subheading={'---Check it out---'}
                heading={'FORM OUR MENU'}
            ></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-60 px-36 pb-20 pt-12'>
          
           <div>
                 <img src={img} alt="" className='rounded' />
            </div>
            <div className='md:ml-8'>
                <p className=' mb-'>August 10, 2023</p>
                <p>WHERE CAN I GET SOME ?</p>
                <p className='text- my-2'>This salad was delicious, but for some reason, the ingredients didn't go together for me. Maybe I am not a taco salad person, but it felt like this was three dishes trying to be forced into one.I felt like I needed to eat the chili by itself  The salad on the side of that and the chips with the salsa. When I started eating it, I ate it like this, but then I remembered I had to do a proper review and mixed it all together. It still tasted delicious, but for some reason, I still wanted to eat all the ingredients separatel</p>
            
                <button className="btn btn-outline border-0 border-b-2 text-white">READ MORE</button>
            </div>

            </div>


        </div>
    );
};

export default Features;