import React from 'react';
import img from '../../assets/others/authentication2.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SignUp = () => {
  const { createUser} = useContext(AuthContext)

  const handleCreateUsere = (event)=>{
    event.preventDefault()
    const from = event.target ;
    const name = from.name.value 
    const email = from.email.value 
    const password = from.password.value 
    console.log(name , email, password)

    createUser(email ,password)
    .then(result =>{
        const user = result.user 
        console.log(user)
    })
    .catch(err =>console.log(err))
  }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse justify-around">
        <div className="text-center lg:text-left  md:w-1/2">
            <img src={img} alt="" className='rounded-lg' />
          </div>
          <div className="card  md:w-1/2 max-w-sm shadow-xl bg-base-100">
            <form onSubmit={handleCreateUsere}  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="name" name='name' placeholder="type here" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="type here" className="input input-bordered" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="type password" className="input input-bordered" />
          
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
    );
};

export default SignUp;