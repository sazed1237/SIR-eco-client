import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';
import Swal from 'sweetalert2';

const AddToCartButton = ({ buttonName, product, quantity }) => {

    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()

    console.log('quantity', quantity)

    const { img, name, _id, rating, details, price, category } = product

    const handleAddToCart = product => {
        if (product && user) {
            // send product to database 
            console.log(product, user.email)

            const cartProduct = {
                productId: _id,
                email: user.email,
                name,
                price,
                category,
                img,
                quantity

            }
            // use Custom hooks Axios 
            axiosSecure.post('/carts', cartProduct)
                .then(res => {
                    console.log(res.data)

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} is Added to Cart`,
                        showConfirmButton: false,
                        timer: 1500
                    });

                    // reFetch data 
                    refetch()
                })

        } else {
            Swal.fire({
                title: "You are Not Logged in",
                text: "Please Login to Add to Cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div>
            <button onClick={() => handleAddToCart(product)} className='uppercase btn text-white text-lg  rounded-none  bg-sky-500 border-none hover:bg-sky-700'>{buttonName}</button>
        </div>
    );
};

export default AddToCartButton;