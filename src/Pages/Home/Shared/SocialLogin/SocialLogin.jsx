import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname ||  '/'

  const handleGooleSingIn = ()=>{
       googleSignIn()
       .then(result =>{
         const loggedInUser = result.user 
          const saveUser  = {name : loggedInUser.displayName , email:loggedInUser.email}
         fetch('http://localhost:5000/users' ,{
            method:'POST' ,
            headers:{
              'content-type' : 'application/json'
            },
            body:JSON.stringify(saveUser)
         })
         .then(res =>res.json())
         .then(data =>{
            console.log(data)
            navigate( from , {replace:true})
          })





    })
     .catch(error =>console.log(error))
    
    }



    return (
        <div>
            <div className="divider my-0"></div>
            <div className='pb-4 pt-2 text-center'>
            <button onClick={handleGooleSingIn} className="btn btn-circle text-xl btn-outline">
                G
             </button>
            </div>
        </div>
    );
};

export default SocialLogin;