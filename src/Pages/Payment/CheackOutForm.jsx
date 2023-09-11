import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { useEffect } from 'react';
import useAxiosSecure from '../../Hooks/axiosSecured';
import useAuth from '../../Hooks/useAuth';




const CheackOutForm = ({totallPrice}) => {
  const {user} = useAuth()
    const stripe = useStripe()
    const elements = useElements()
    const [axiosSecure] = useAxiosSecure()
    const [clientSecrete , setClientSecrete] = useState('')
    const [cardError , setCardError] = useState('')
    const [proceesing , setProcessing] = useState(false)
    const [transactionId , setTransactionId] = useState('')
  

    useEffect(()=>{
      axiosSecure.post("/create-payment-intent" , {totallPrice})
      .then(res => {
        console.log('data from chekout' , res.data.clientSecret)
        setClientSecrete(res.data.clientSecret)
      })
    





  },[])








const handleSubmit = async(event) => {
      event.preventDefault() ;

      if(!stripe || !elements ){
         return ; 
      }

      const card = elements.getElement(CardElement)
      if(card == null){
        return ; 
     }
     console.log('card is ' , card)


 const {error , paymentMethod} = await stripe.createPaymentMethod({
           
        type:'card' ,
          card 
  }) ;

  if(error){
            console.log('error', error) 
            setCardError(error.message)
   } 
   else{
        setCardError('')
       }

      setProcessing(true)


  const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
  clientSecrete,
  {
    payment_method: {
      card: card,
      billing_details: {
        email: user?.email || 'unknown' ,
        name: user.displayName || 'anonymous'
      },
    },
  },
);


  if(confirmError){
     console.log(confirmError)
     setCardError(confirmError.message)
  }

  console.log( 'payment intent' , paymentIntent)
    setProcessing(false)

   if(paymentIntent.status === "succeeded"){
        setTransactionId(paymentIntent.id)
        //TODO next step
  }




    }


    return (
    <> 
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button  className="bg-orange-600  text-2xl px-10 rounded my-8 text-white  py-2" type="submit" disabled={!stripe || !clientSecrete || proceesing}>
        Pay
      </button>
    </form>
     {cardError && <p className='text-red-700'>{cardError}</p>} 
     {transactionId && <p className='text-green-600'>transaction complete with transaction id :{transactionId}</p>}
    </>
    );
};

export default CheackOutForm;