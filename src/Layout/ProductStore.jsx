import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import { NavLink, Outlet } from 'react-router-dom';
import Offer from '../Pages/Shared/Offer/Offer';

const ProductStore = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                    {/* Sidebar content here */}
                    <div className='p-4 w-64 min-h-full bg-base-200 text-base-content'>

                        <h3 className='text-2xl font-semibold py-3'>Categories</h3>

                        <ul className="menu uppercase ">

                            <li><NavLink to={'/productStore/everything'}>
                                Everything
                            </NavLink></li>
                            <li><NavLink to={'/productStore/men'}>
                                men
                            </NavLink></li>
                            <li><NavLink to={'/productStore/women'}>
                                women
                            </NavLink></li>
                            <li><NavLink to={'/productStore/accessories'}>
                                accessories
                            </NavLink></li>


                        </ul>
                    </div>

                </div>
            </div>
            <Offer></Offer>
            <Footer></Footer>
        </>
    );
};

export default ProductStore;