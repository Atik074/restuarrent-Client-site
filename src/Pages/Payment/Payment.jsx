import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import CheackOutForm from './CheackOutForm';

//TODO published key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY)

const Payment = () => {
   
    return (
        <div className='w-full px-10 m-10'>
           <Helmet>
              <title>Bisto Boss | All user</title>
            </Helmet>
            <h2 className='text-3xl mb-6 font-semibold'>Pay confirm to get Order</h2>
    
    <Elements stripe={stripePromise}>
        <CheackOutForm></CheackOutForm>
    </Elements>
   


</div>
    );
};

export default Payment;