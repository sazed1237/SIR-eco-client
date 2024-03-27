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
import AdminRoute from "./AdminRoute";
import ManageProducts from "../Pages/Dashboard/Admin/ManageProducts/ManageProducts";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import Everything from "../Pages/Everything/Everything";
import ProductStore from "../Layout/ProductStore";
import Men from "../Pages/Men/Men";
import Women from "../Pages/Women/Women";
import Accessories from "../Pages/Accessories/Accessories";
import Contact from "../Pages/Contact/Contact";



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
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            }
        ]
    },
    {
        path: '/productStore',
        element: <ProductStore></ProductStore>,
        children: [
            {
                path: 'everything',
                element: <Everything></Everything>
            },
            {
                path: 'men',
                element: <Men></Men>
            },
            {
                path: 'women',
                element: <Women></Women>
            },
            {
                path: 'accessories',
                element: <Accessories></Accessories>
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
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },



            // admin route
            {
                path: 'users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'addItems',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: 'manageProducts',
                element: <AdminRoute><ManageProducts></ManageProducts></AdminRoute>
            }

        ]
    }
]);