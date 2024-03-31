import axios from "axios";



const useAxiosPublic = () => {

    const axiosPublic = axios.create({
        baseURL: 'https://sir-eco-server.vercel.app',
        // baseURL: 'https://sir-eco-server.vercel.app',
    });

    return axiosPublic;
};

export default useAxiosPublic;