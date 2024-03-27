import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { img, name, _id, rating, details, price, category } = product
    return (
        <div className="card card-compact text-left rounded-none  ">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div>
                    <p className='text-opacity-40 text-black p-0 '>{category}</p>
                    <p className='font-semibold text-lg'>$ {price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;