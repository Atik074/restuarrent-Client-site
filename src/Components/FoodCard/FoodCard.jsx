import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const FoodCard = ({item}) => {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
    const {_id , name ,category,image, recipe , price} = item

    const handleAddToCart = item =>{
        console.log(item)
        if(user && user.email){
          const cartItem = {menuItemId: _id , image, name,price, email:user.email}
              fetch('http://localhost:5000/carts',{
                   method:"POST" ,
                   headers:{'content-type' : 'application/json'},
                   body: JSON.stringify(cartItem)
                 })
              .then(res=>res.json())
              .then(data =>{
                console.log(data)
                if(data.insertedId){
                  Swal.fire(
                    'successfull add to cart',
                    '',
                    'success'
                  )
                  }
               
              })

        }

        else{
          Swal.fire({
            title: 'Please login first',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
          
            confirmButtonText: ' Login'
          })
          .then((result) => {
            if (result.isConfirmed) {
                navigate('/login' , {state: {from:location}})
            }
          })
        
          }

       }

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
      <button onClick={()=>{handleAddToCart(item)}} className="btn  text-[#BB8506] border-b-2 border-b-[#BB8506] hover:bg-black">Add to Cart</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default FoodCard;