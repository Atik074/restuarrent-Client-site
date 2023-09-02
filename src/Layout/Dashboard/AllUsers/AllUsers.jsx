import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../Components/SectionTitle';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const {data : users = [] , refetch} = useQuery([], async()=>{
          const res = await fetch('http://localhost:5000/users')
          return res.json()
      })

   const handleMakeAdmin = (user) =>{
          fetch(`http://localhost:5000/users/admin/${user._id}` ,{
                method:'PATCH' ,
                headers:{'content-type' : 'application/json'}
              })
          .then(res =>res.json())
          .then(data =>{
           if(data.modifiedCount){
            refetch()
            console.log(data)
            Swal.fire({
              position: 'center',
              icon: 'success',
              title:`${user.name} is an admin now`,
              showConfirmButton: false,
              timer: 1500
            })
            }
         })


    
         }

 const  handleDelete =(user)=>{

      }




    return (
        <div className='w-full  px-10'>
             <Helmet>
              <title>Bisto Boss | All user</title>
            </Helmet>
            <SectionTitle 
              subheading={'---How Many??---'}
              heading={'MANAGE ALL USERS'}
             >
             </SectionTitle>

    <h2 className='text-3xl front-semibold uppercase'>Totall users : {users.length}</h2>

    <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr className='bg-[#D1A054] text-xl uppercase text-white'>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      { 
         users.map(( user, index) =><tr
           key={user._id}
         >
            <th>{ index + 1 }</th>
            <td  className="text-[19px]">{user.name}</td>
            <td  className="text-[19px]">{user.email}</td>
            <td>
                {user.role === 'admin' ? 'admin' :  <button onClick={()=>handleMakeAdmin(user)}  className="bt p-2 rounded bg-[#D1A454] text-white"><FaUserShield size={24}/></button> }
            </td>
            <td>               
                 <button  className="bt p-2 rounded bg-red-700 text-white"><FaTrashAlt size={24}/></button>
           </td>
          </tr>)
      }
      
     
    </tbody>
  </table>
</div>




        </div>
    );
};

export default AllUsers;