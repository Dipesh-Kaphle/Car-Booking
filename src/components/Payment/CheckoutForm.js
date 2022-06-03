import React from 'react';
import {
  CardElement,
  useStripe,
  useElements,
  // CardExpiryElement
} from '@stripe/react-stripe-js';


import { Button, Form ,Row,Col} from 'antd';
import Title from 'antd/lib/typography/Title';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
  console.log('error',error,paymentMethod)
//   console.log('promo',values.promoCode)
//   setPromo(values.promoCode)
//   if (!stripe || !elements) {
//       return;
//   } 
//     const cardElement = elements.getElement(CardNumberElement,
//       CardExpiryElement,
//       CardCvcElement,CardElement);
     
//     const {error, paymentMethod} = await stripe.createPaymentMethod({
//       type: 'card',
//       card: cardElement,
//       billing_details:{
//           name:values.first_name,
//           email:values.email,
//           phone:values.phone,
//           address:{
//               country:values.country.toUpperCase(),
//               city:values.city,
//               state:values.billingAddress,
//               postal_code:values.zip,
//   }}
      

  };
  return (
      <Row>
          <Col span={24}>
          <Form onSubmit={handleSubmit}>
            {/* 
           */}
            {/* <CardCvcElement/> */}
            {/* <CardNumberElement /> */}
            {/* <CardExpiryElement/>  */}
            <Col span={24}>
              <Row>
                <Title>
                Choose Payment Method
                </Title>
              </Row>
              <Row style={{marginTop:'20px'}}>
              <CardElement />
              </Row>

            </Col>
            <Col>
            <Button type="submit" disabled={!stripe || !elements}>
                Pay
            </Button>
            </Col>
           
            </Form>
          </Col>
      
      </Row>
   
  );
};
export default CheckoutForm
