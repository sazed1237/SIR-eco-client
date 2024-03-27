import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import ProductCard from '../../Shared/ProductCard/ProductCard';
import { Link, useNavigate } from 'react-router-dom';
import ProductDetails from '../../ProductDetails/ProductDetails';
import useProducts from '../../../hooks/useProducts';

const FeaturedProducts = () => {

    // const [products, setProducts] = useState([])
    const navigate = useNavigate()
    const [products, loading, refetch] = useProducts()
    const featuredProducts = products.filter(product => product.featured === "popular")

    // useEffect(() => {
    //     fetch('http://localhost:5001/products')
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data)
    //             const featuredProducts = data.filter(product => product.featured === "popular")
    //             setProducts(featuredProducts)
    //             // console.log(featuredProducts)
    //         })
    // }, [])


    const handleProductsDetails = id => {
        console.log(id)


        fetch(`http://localhost:5001/products/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)

                navigate('/product-details', { state: { product: data } });
            })
    }



    return (
        <section className='bg-gray-100 pb-12 pt-24'>
            <SectionTitle heading={'Featured Products'} ></SectionTitle>


            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 pt-10'>
                {
                    featuredProducts.map(product => <button
                        key={product._id}
                        onClick={() => handleProductsDetails(product._id)}
                    >
                        <ProductCard product={product} ></ProductCard>

                    </button>

                    )
                }
            </div>

        </section >
    );
};

export default FeaturedProducts;