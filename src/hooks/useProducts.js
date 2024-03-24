import React, { useEffect, useState } from 'react';

const useProducts = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetch('http://localhost:5001/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [])

    return [products, loading]
};

export default useProducts;