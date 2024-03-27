import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';


// TODO: Publishable key
const stripPromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {
    return (
        <div>

            <SectionTitle heading={'Payment'}></SectionTitle>

            <Elements stripe={stripPromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;