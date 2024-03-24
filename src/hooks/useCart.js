import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";



const useCart = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    // console.log(user?.email)


    const { data: cart = [], refetch, isLoading } = useQuery({
        queryKey: ['cart', `${user?.email}`],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)


            return res.data;
        }
    })


    return [cart, refetch, isLoading]
};

export default useCart;