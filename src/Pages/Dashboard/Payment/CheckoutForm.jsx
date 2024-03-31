import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useCart from '../../../hooks/useCart';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {

    const [error, setError] = useState()
    const [success, setSuccess] = useState()
    const [transactionId, setTransactionId] = useState()
    const [clientSecret, setClientSecret] = useState()

    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth();
    const [cart, refetch] = useCart()
    const navigate = useNavigate()

    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)
    const totalQuantity = cart.reduce((total, item) => total + parseInt(item.quantity), 0)
    console.log(totalQuantity)
    console.log(totalPrice)
    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])


    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('error', error)
            setError(error.message)
        } else {
            console.log('payment Method', paymentMethod)
            setError('')
        }


        // confirm Card Payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName,
                        email: user?.email
                    },
                },
            },
        );

        if (confirmError) {
            console.log('confirm Error', confirmError)
            setError(confirmError.message)
        }
        else {
            console.log(paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id)

                // now save the payment in the database
                const payment = {
                    email: user.email,
                    name: user.displayName,
                    price: parseFloat(totalPrice),
                    quantity: totalQuantity,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cartIds: cart.map(item => item._id),
                    productIds: cart.map(item => item.productId),
                    status: 'Pending'
                }
                const res = await axiosSecure.post('/payments', payment)
                console.log('payment saved', res.data)
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        title: "Thank You",
                        text: "Your Payment is Successful.",
                        icon: "success"
                    });
                }
                refetch()

                // navigate to payment history page
                navigate('/dashboard/paymentHistory')

            }
        }


    }

    return (
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
            <button className='bg-green-500 px-3 mt-4 rounded text-white'
                type="submit"
                disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className='text-red-500'><small>{error}</small></p>

        </form>
    );
};

export default CheckoutForm;