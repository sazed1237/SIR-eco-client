import React from 'react';
import { FaAd, FaCalendar, FaHome, FaInbox, FaList, FaListAlt, FaMailBulk, FaProductHunt, FaShoppingBag, FaShoppingCart, FaUsers, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';


const Dashboard = () => {

    const [cart] = useCart()

    const [isAdmin] = useAdmin();
    console.log(isAdmin)

    return (
        <div className='flex'>
            {/* Dashboard side bar */}
            <div className='w-64 min-h-screen bg-[#D1A054]'>
                <div className='text-center pt-3 pb-8 text-4xl font-bold'>
                    <h1>SIR Eco <br /> <span className='font-light '>Dashboard</span></h1>
                </div>
                <ul className='menu uppercase'>
                    {
                        isAdmin ? <>
                            <li><NavLink to={'/dashboard/AdminHome'}>
                                <FaHome></FaHome>
                                Admin Home
                            </NavLink></li>

                            <li><NavLink to={'/dashboard/addItems'}>
                                <FaProductHunt></FaProductHunt>
                                Add Product
                            </NavLink></li>

                            <li><NavLink to={'/dashboard/manageProduct'}>
                                <FaList></FaList>
                                Manage Product
                            </NavLink></li>

                            <li><NavLink to={'/dashboard/users'}>
                                <FaUsers></FaUsers>
                                All Users
                            </NavLink></li>
                        </>
                            :
                            <>
                                <li><NavLink to={'/dashboard/userHome'}>
                                    <FaHome></FaHome>
                                    User Home
                                </NavLink></li>

                                <li><NavLink to={'/cart'}>
                                    <FaShoppingCart></FaShoppingCart>
                                    My Cart ({cart.length})
                                </NavLink></li>

                                <li><NavLink to={'/dashboard/paymentHistory'}>
                                    <FaWallet></FaWallet>
                                    PAYMENT HISTORY
                                </NavLink></li>

                                <li><NavLink to={'/dashboard/review'}>
                                    <FaAd></FaAd>
                                    ADD Review
                                </NavLink></li>
                            </>
                    }


                    {/* divider Dashboard content and Main content */}

                    <div className="divider "></div>

                    <li><NavLink to={'/'}>
                        <FaHome></FaHome>
                        Home
                    </NavLink></li>


                    <li><NavLink to={'/shop'}>
                        <FaShoppingBag></FaShoppingBag>
                        Shop
                    </NavLink></li>

                    <li><NavLink to={'/contact'}>
                        <FaMailBulk></FaMailBulk>
                        Contact
                    </NavLink></li>


                </ul>
            </div>
            {/* Dashboard content */}
            <div className='flex-1 px-8 '>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;