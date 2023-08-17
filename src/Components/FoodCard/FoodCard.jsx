import React from 'react';

const FoodCard = ({item}) => {
    const {_id , name ,category,image, recipe , price} = item
    return (
        <div>

   <div className="card w-96 h-[560px]  bg-base-100 shadow-xl">
  <figure className='p-8'>
    <img src={image} alt="food" className="rounded-xl" />
    <p className='bg-black text-white px-4 p-2 absolute top-11 right-11 rounded'>${price}</p>
  </figure>
  <div className="card-body items-center">
    <h2 className="card-title">{name}</h2>
    <p className='text-lg my-3'>{recipe}</p>
    <div className="card-actions">
      <button className="btn  text-[#BB8506] border-b-2 border-b-[#BB8506] hover:bg-black">Add to Cart</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default FoodCard;