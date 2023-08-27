import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/others/authentication1.png'
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';



const Login = () => {
  const [disabled , setDisabled] = useState(true) 
  const {signIn} = useContext(AuthContext)
  let navigate = useNavigate()
  let location = useLocation()


   const from = location.state?.from?.pathname || "/"

 

  // handle login form
 const handleLogin = event =>{
       event.preventDefault();
       const form = event.target 
       const email = form.email.value 
       const password = form.password.value 
       console.log(email,password)

       signIn(email ,password)
       .then(result =>{
         const user = result.user 
         console.log(user)
         Swal.fire({
          title: 'successfully login',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        
        navigate(from , {replace:true})

      })
      .catch(error =>console.log(error))

   
  }

  // recaptcha part
  useEffect(()=>{
    loadCaptchaEnginge(6); 
  },[])

// recaptcha part
  const handleValidedCaptcha =(e)=>{
      const user_captcha_value = e.target.value 

      if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
          }
  else{
        alert('Captcha Does Not Match')
        setDisabled(true)
      }
      
  }
    




    return (
      <>
            <Helmet>
              <title>Bisto Boss | Login</title>
         </Helmet>

         <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row justify-around">
          <div className="text-center lg:text-left  md:w-1/2">
            <img src={img} alt="" className='rounded-lg' />
          </div>
          <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="type email" className="input input-bordered" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="type password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                     <LoadCanvasTemplate />
                </label>
                <input onBlur={handleValidedCaptcha}  type="text" name='type captcha' placeholder="recaptcha" className="input input-bordered" />
               
              </div>
               {/* TODO : button disable to valided captcha */}
              <div className="form-control mt-3">
                <input disabled={false} className="btn btn-primary" type="submit" value="Sign in" />
              </div>

             
              <p className='text-center text-[16px] text-[#D1A054] mt-2'> 
              <small className='text-[15px]'> New here ?</small><Link to='/signUp' className=' hover:underline'> Create a New Account</Link></p>
              <p className='text-center text-lg'>Or sign in With</p>
            </form>
          </div>
        </div>
      </div>
      </>
   
    );
};

export default Login;