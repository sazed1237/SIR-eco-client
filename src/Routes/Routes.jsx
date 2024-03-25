import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import Cart from "../Pages/Cart/Cart";
import Dashboard from "../Layout/Dashboard";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/Admin/AddItems/AddItems";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/product-details',
                element: <ProductDetails></ProductDetails>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/singup',
                element: <SingUp></SingUp>
            },
            {
                path: 'cart',
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            },



            // admin route
            {
                path: 'users',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'addItems',
                element: <AddItems></AddItems>
            }

        ]
    }
]);