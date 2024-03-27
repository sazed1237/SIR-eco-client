import React from 'react';
import useProducts from '../../hooks/useProducts';
import ProductCard from '../Shared/ProductCard/ProductCard';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const Everything = () => {

    const [products, loading, refetch] = useProducts()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()


    const handleProductsDetails = async (id) => {
        console.log(id)

        const res = await axiosPublic.get(`/products/${id}`)
        const product = res.data;

        navigate('/product-details', { state: { product } });
    }


    return (
        <div className='px-3'>
            <h1 className='text-3xl py-3'>Total Products : {products.length} </h1>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
                {
                    products.map(product => <button
                        key={product._id}
                        onClick={() => handleProductsDetails(product._id)}
                    >
                        <ProductCard
                            product={product}
                        ></ProductCard>
                    </button>)
                }
            </div>
        </div>
    );
};

export default Everything;