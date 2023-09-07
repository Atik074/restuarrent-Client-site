import React from 'react';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import useAxiosSecure from '../../Hooks/axiosSecured';
import Swal from 'sweetalert2';



//image hosted
const imageHosting = import.meta.env.VITE_IMAGE_API_KEY;



const AddItem = () => {
   const [axiosSecure] = useAxiosSecure() 
    const { register, handleSubmit, formState: { errors } , reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${imageHosting}` 


  const onSubmit = data =>{

    const formData = new FormData()
       formData.append('image' , data.image[0])

       fetch(img_hosting_url , {
            method:'POST' ,
           body:formData
          })
      .then(res =>res.json())
      .then(imagesResponse =>{
        console.log(imagesResponse)
        if(imagesResponse.success){
           const imgURL = imagesResponse.data.display_url
           const {name , price , category, recipe} = data 
           const newItem = { name , price:parseFloat(price) , category, recipe , image:imgURL  }
           console.log(newItem)

           axiosSecure.post('/menu' , newItem)
           .then(res =>{
                 if(res.data.insertedId){
                  reset()
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Item added successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                
                }
           })
            
        }
      
      })







    
    };
    console.log(errors);


    return (
        <div className='w-full px-10'>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full ">
          <label className="label">
         <p className="label-text mb-1 text-[19px] font-medium">Recipe name<span className='text-red-800'>*</span></p>
        </label>
        <input type="name" {...register("name", {required: true, maxLength: 80})} placeholder="recepie name" className="input input-bordered w-full text-lg " />
     </div>
        
  <div className='flex space-x-6 my-3'>
      <div className="form-control w-full ">
     <label className="label">
    <p className="label-text mb-1 text-[19px] font-medium">Category<span className='text-red-800'>*</span> </p>
  
  </label>
  <select className="select select-bordered  text-[18px]" {...register("category", { required: true })}>
    <option >category</option>
    <option>Salad</option>
    <option>Pizza</option>
    <option>Soup</option>
    <option>Dessert</option>
    <option>Drink</option>
    </select>
     </div>

     <div className="form-control w-full ">
          <label className="label">
         <p className="label-text mb-1 text-[19px] font-medium">Price<span className='text-red-800'>*</span></p>
        </label>
        <input type="number" {...register("price", { required: true })} placeholder="price" className="input input-bordered w-full text-lg" />
     </div>


  </div>

  <div className="form-control mb-6">
   <label className="label">
   <p className="label-text mb-1 text-[19px] font-medium">Recipe details<span className='text-red-800'>*</span></p>
   </label>
   <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24 resize-none  text-lg" placeholder="recepie details"></textarea>
 </div>
  
   <div className="form-control max-w-sm mb-4">
     <input type="file" {...register("image", { required: true })}  className="file-input file-input-bordered file-input-sm w-full " />
   </div>
        <button className='flex items-center text-[21px] font-medium text-white px-3 py-[9px] rounded bg-[#D1A454]'>Add item <FaUtensils className='mx-2'></FaUtensils></button>
          
           </form>
        </div>
    );
};

export default AddItem;