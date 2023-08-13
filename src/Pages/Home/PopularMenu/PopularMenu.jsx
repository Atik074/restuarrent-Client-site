import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import MenuItem from '../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu , setMenu ] = useState([])
   
   useEffect(()=>{
    fetch('data.json')
    .then(res=> res.json())
    .then(data =>{
       console.log(data)
       const popularItems = data.filter(item => item.category === 'popular')
       setMenu(popularItems)
      
    })

    
} , [])

    return (
        <div>
            <SectionTitle
               subheading={'---Cheack it out---'}
               heading={'FORM OUR MENU'}
            >
            </SectionTitle>

            <div className='grid  md:grid-cols-2 gap-4'>
                {
               menu.map(item => <MenuItem
                 key={item._id}
                 item = {item}
               ></MenuItem>)
                }
            </div>

        
            
        </div>
    );
};

export default PopularMenu;