//  payment integration steps :
// 1. npm stripe js 
// 2. create a check out form with card element(card elements contains:card number ,expiration date , cvs ,zip code)
// 3.create accoount on stripe and get Publihsed key pk 
// .4 get card information 
// 5. create a payment method
// 6. use test card to test payment 

// Back end server work below:
// 1. npm i stripe  
// 2. strip require with secrete key (key is founded in stripe website developers section)
// 3.create a payment api ('create-payment-intent')
//4.  take price from req.body and multiply price * 100 that is store in amount
//4. crete strip.paymentIntens.crete({})
//5. take payment_method_type ['card]
// 6. res.send({clientScrete : payment})

// client side 
// 1. call payment intent APis to get  client secrete and store it in a state
// 2. use confirmCardPayment APIs with client secrete info
