import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';







const CheackOutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const [cardError , setCardError] = useState('')


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
        console.log('paymentMethod ' , paymentMethod)
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
      <button className="bg-orange-600  text-2xl px-10 rounded my-8 text-white  py-2" type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
     {cardError && <p className='text-red-700'>{cardError}</p>}
    </>
    );
};

export default CheackOutForm;