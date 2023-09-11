import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CheackOutForm from './CheackOutForm';
import useCarts from '../../Hooks/useCarts';

//TODO published key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY)

const Payment = () => {
    const [cart] = useCarts()

const totll = cart.reduce((sum ,item) => sum + item.price, 0)
const totallPrice = parseFloat(totll.toFixed(2))
   

return (
        <div className='w-full px-10 m-10'>
           <Helmet>
              <title>Bisto Boss | All user</title>
            </Helmet>
            <h2 className='text-3xl mb-6 font-semibold'>Pay confirm to get Order</h2>
    
    <Elements stripe={stripePromise}>
        <CheackOutForm totallPrice={totallPrice}></CheackOutForm>
    </Elements>
   


</div>
    );
};

export default Payment;