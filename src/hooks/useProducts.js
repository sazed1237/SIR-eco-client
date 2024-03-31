import React, { useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from 'react-query';

const useProducts = () => {

    const axiosPublic = useAxiosPublic()
    // const [products, setProducts] = useState([])
    // const [loading, setLoading] = useState(true)


    // useEffect(() => {
    //     fetch('https://sir-eco-server.vercel.app/products')
    //         .then(res => res.json())
    //         .then(data => {
    //             setProducts(data)
    //             setLoading(false)
    //         })
    // }, [])

    const {data: products =[], isLoading: loading, refetch} = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await axiosPublic.get('/products')

            return res.data
        }
    })

    return [products, loading, refetch]
};

export default useProducts;