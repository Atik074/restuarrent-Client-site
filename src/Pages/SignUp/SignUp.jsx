import React from 'react';
import img from '../../assets/others/authentication2.png'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const SignUp = () => {
  const { createUser ,   updateUserProfile} = useContext(AuthContext)
  const { register, handleSubmit, reset,  formState: { errors } } = useForm();
  const navigate = useNavigate()
  
  
  const onSubmit = data => {
      createUser(data.email, data.password)
        .then(result =>{
          
            const loggedUser = result.user;
            console.log(loggedUser);

            updateUserProfile(data.name, data.photoURL)
                .then(() => {
                    const saveUser = { name: data.name, email: data.email }
                    fetch('http://localhost:5000/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(saveUser)
                    })
                      .then(res => res.json())
                    .then(data => {
                            if (data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'User created successfully.',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate('/');
                            }
                        })

                })
          .catch(error => console.log(error))
        })
};




    return (
      <>
       <Helmet>
              <title>Bisto Boss | Sign up</title>
         </Helmet>
         <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse justify-around">
        <div className="text-center lg:text-left  md:w-1/2">
            <img src={img} alt="" className='rounded-lg' />
          </div>
          <div className="card  md:w-1/2 max-w-sm shadow-xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="name" {...register("name", {required:true})} name='name' placeholder="type here" className="input input-bordered" />
                {errors.name && <span className='mt-1 text-red-700'>Name field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="url" {...register("photoUrl" ,{required:true})}  placeholder="type here url" className="input input-bordered" />
                {errors.photoUrl && <span className='mt-1 text-red-700'>Photo url is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email" ,{required:true})} name='email' placeholder="type here" className="input input-bordered" />
                {errors.email && <span className='mt-1 text-red-700'>Email field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", {required:true , minLength:6 ,
                 maxLength:20,
                 pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{6,}$/
                
                })} name='password' placeholder="type password" className="input input-bordered" />
                {errors.password?.type === 'required' && <span className='mt-1 text-red-700'>password field is required</span>}
                {errors.password?.type === 'minLength' && <span className='mt-1 text-red-700'>password at least 6 character</span>}
                {errors.password?.type === 'maxLength' && <span className='mt-1 text-red-700'>password maximum 15 character</span>}
                {errors.password?.type === 'pattern' && <span className='mt-1 text-red-700'>password must be at least a capital letter,a small letter , a number & a special character</span>}
              
          
              </div>

            <div className="form-control mt-6">
                <input  className="py-3 rounded text-white text-xl bg-[#D1A054] border-blue-50" type="submit" value="Sign up" />
              </div>

              <p className='text-center text-[16px] text-[#D1A054] mt-2'> 
              <small className='text-[15px]'>Allready registered?</small><Link to='/login' className=' hover:underline'> Go to log in</Link></p>
              <p className='text-center text-lg'>Or sign up With</p>
            </form>
          </div>
        </div>
      </div>
      </>
     
    );
};

export default SignUp;