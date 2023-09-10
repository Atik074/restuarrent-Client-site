import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCarts from '../../../Hooks/useCarts';
import {FaTrashAlt} from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyCart = () => {
    const [cart , refetch] = useCarts()
    console.log(cart)



    const totallPrice = cart.reduce((sum , item)=> item.price + sum , 0)
    
    const handleDelete= id=>{
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
             if (result.isConfirmed){

              fetch(`http://localhost:5000/carts/${id}`,{
                method:'DELETE' ,
                headers:{
                   'content-type' : 'application/json'   
              }
              })
              .then(res =>res.json())
             .then(data =>{ 
                   console.log(data)
                     if(data.deletedCount === 1){
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your order has been deleted.',
                            'success'
                          )
                      }
                  })             
            }
          })       
     }
    


    return (
        <div className='w-full'>
            <Helmet>
              <title>Bisto Boss | mycart</title>
            </Helmet>
         
            <div className='flex uppercase font-semibold justify-between h-[60px] items-center mx-10'>
                <h2 className='text-2xl'>Totall order: {cart.length}</h2>
                <h2 className='text-2xl'>Totall price: ${totallPrice.toPrecision(4)}</h2>
                <Link to='/dashboard/payment'> 
                   <button className=" rounded px-4  text-xl  btn-sm text-white bg-[#D1A054]">Pay</button>
                </Link>
                
            </div>

  <div className="overflow-x-auto px-10">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='bg-[#D1A054] text-xl text-white'>
        <th>Serial</th>
        <th>Food</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            cart.map((item, index) => <tr
                   key={item._id}
                
                   >
                <td>
                   {index + 1}
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                 
                  </div>
                </td>
                <td>
                 <div className=" text-[19px]">{item.name}</div>
                  <br/>
                </td>
                <td className="text-[19px]">${item.price}</td>
                <th>
                <button onClick={()=>handleDelete(item._id)} className="bt p-2 rounded bg-red-700 text-white"><FaTrashAlt size={24}/></button>
                </th>
              </tr>)
              
              }
    </tbody> 
  </table>
</div>
             
        </div>
    );
};

export default MyCart;