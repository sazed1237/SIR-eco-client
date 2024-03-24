import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import AddToCartButton from '../../components/AddToCartButton/AddToCartButton';

const ProductDetails = () => {


    const quantityRef = useRef(null)
    const location = useLocation();
    const product = location.state.product;
    console.log(product)

    const { img, name, _id, rating, details, price, category } = product

    const [quantity, setQuantity] = useState(1);

    const handleQuantity = () => {
        const quantityValue = quantityRef.current?.value;
        setQuantity(quantityValue);
    }

    console.log("qunatity", quantity)

    return (
        <section className='bg-slate-100 '>
            <div className='md:h-screen h-full grid  md:grid-cols-2 gap-10 py-14'>
                <div className='flex items-center justify-center'>
                    <img className=' h-full' src={img} alt="" />
                </div>

                <div className='space-y-5 px-5 '>
                    <p>{category}</p>
                    <h1 className='text-5xl font-thin'>{name}</h1>
                    <h2 className='text-3xl font-semibold'>${price}<span className='text-sm'>+Free Shipping</span> </h2>
                    <p className='pb-10'>{details}</p>

                    <div className='py-5 border-y border-gray-400 flex'>
                        <input onChange={handleQuantity} type="number" ref={quantityRef} name='quantity' defaultValue="1" className="input rounded-none  input-md max-w-20 mr-5" />
                        <AddToCartButton buttonName={'add to cart'} product={product} quantity={quantity} ></AddToCartButton>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default ProductDetails;
