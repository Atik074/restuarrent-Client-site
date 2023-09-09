import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useMenu from '../../Hooks/UseMenu';
import useAxiosSecure from '../../Hooks/AxiosSecured';

const ManageItems = () => {
    const [menu , , refetch] = useMenu()
    const [axiosSecure] = useAxiosSecure()
   
    console.log(menu)

     // TODO delete count zero
  const handleDelete = item => {
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
          if (result.isConfirmed) {

              axiosSecure.delete(`/menu/${item._id}`)
                  .then(res => {
                      console.log('deleted res', res.data);
                      if (res.data.deletedCount > 0) {
                          refetch();
                          Swal.fire(
                              'Deleted!',
                              'Your file has been deleted.',
                              'success'
                          )
                      }
                  })

          }
      })
  }







    return (
        <div className='w-full'>
            <SectionTitle 
               subheading={'---Hurry Up!---'}
               heading={'MANAGE ALL ITEMS'}
            ></SectionTitle>  
           
        
  <div className="overflow-x-auto px-10">
  <h2 className='text-3xl front-semibold uppercase mb-2'>Totall items:{menu.length}</h2>
  <table className="table">
    {/* head */}
    <thead className='uppercase bg-[#D1A454] text-xl text-white'>
      <tr>
        <th>
          #
        </th>
        <th>Item image</th>
        <th>Item name</th>
        <th>Price</th>
        <th>Update</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            menu.map((item , index)=><tr
               key={item._id}
            >
            <th>
             {index + 1}
            </th>
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
            </td>
            <td>
            <div className=" text-[19px]">${item.price}</div>
            </td>
            <th>
            
            </th>
            <th>
            <button onClick={()=>handleDelete(item)}  className="bt p-2 rounded bg-red-700 text-white"><FaTrashAlt size={24}/></button>
            </th>
          </tr>
          
          )
        }
      {/* row 1 */}
    
  </tbody>
   
     
    
  </table>
   </div>

          




        </div>
    );
};

export default ManageItems;