import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import useCart from '../../../hooks/useCart';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart()

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navMenus = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/productStore/everything'}>Everything</Link></li>
        <li><Link to={'/productStore/men'}>Men</Link></li>
        <li><Link to={'/productStore/women'}>Women</Link></li>
        <li><Link to={'/productStore/accessories'}>Accessories</Link></li>
        <li><Link to={'/contact'}>Contact Us</Link></li>
        <li><Link to={'/dashboard'}>Dashboard</Link></li>
    </>
    return (
        <div className="navbar h-20  bg-base-100 ">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navMenus}
                    </ul>
                </div>
                <a className="btn btn-ghost text-4xl italic font-bold">SIR eco</a>
            </div>


            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold uppercase">
                    {navMenus}
                </ul>
            </div>


            <div className="navbar-end">
                <div className="flex-none mr-5">

                    <Link to={'/cart'}>
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">{cart.length}</span>
                        </div>
                    </Link>


                </div>
                {/* user profile */}

                {
                    user ? <>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt={user.displayName} src={user.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <button onClick={handleLogOut} className='btn btn-ghost'>LogOut</button>
                            </ul>
                        </div>
                    </>
                        :
                        <>
                            <button className='btn btn-sm font-bold hover:bg-black hover:text-white border-none'>
                                <Link to={'/login'}>Login</Link>
                            </button>
                        </>
                }

            </div>
        </div>
    );
};

export default Navbar;