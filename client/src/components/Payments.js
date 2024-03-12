import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch } from 'react-redux';
import * as actions from '../actions';

const Payments = () => {
  const dispatch = useDispatch();

  const handleToken = token => {
    dispatch(actions.handleToken(token));
  };

  return (
    <StripeCheckout
      name='Maily'
      description='$5 for 5 survey credits'
      amount={500}
      token={handleToken}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button className='red btn'>Add Credits</button>
    </StripeCheckout>
  );
};

export default Payments;
