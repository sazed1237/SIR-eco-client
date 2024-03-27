import React from 'react';
import useAdmin from '../hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Pages/Shared/Loading/Loading';

const AdminRoute = ({children}) => {

    const [isAdmin, isAdminLoading] = useAdmin()
    const location =useLocation()

    if(isAdminLoading){
        return <Loading></Loading>
    }

    if(isAdmin){
        return children
    }


    return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default AdminRoute;