import React from 'react';
import useCart from '../../hooks/useCart';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const Cart = () => {
    const [cart, refetch] = useCart();
    const axiosSecure = useAxiosSecure()

    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0)

    const handleDelete = id => {
        console.log(id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        console.log(res.data)

                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                        refetch()
                    })

            }
        });



    }




    return (
        <div className='bg-slate-100 py-5'>

            <SectionTitle heading={"My Cart"}></SectionTitle>



            {/* cart table  */}
            <div className="overflow-x-auto mb-7 mt-14">
                <table className="table w-5/6 mx-auto border" >
                    {/* head */}
                    <thead>
                        <tr className='uppercase text-black border bg-white '>
                            <th>#</th>
                            <th>Item image</th>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            cart.map((item, index) => <tr key={item._id} className='border border-gray-200'>
                                <td className='font-bold'>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-16 rounded">
                                            <img src={item.img} alt={item.name} />
                                        </div>
                                    </div>

                                </td>
                                <td className='text-gray-500'>{item.name} x {item.quantity} </td>
                                <td className='text-gray-500'>{item.quantity}</td>
                                <td className='text-gray-500 font-semibold'>${item.price * item.quantity}</td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)}>
                                        <FaTrashAlt className='text-xl text-red-600'></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

            <div className='grid md:grid-cols-2 gap-10  w-5/6 mx-auto'>
                <div></div>
                <div className='border '>
                    <div className='bg-white px-4 font-medium text-black text-3xl py-3'>
                        <h1>Cart Totals</h1>
                    </div>
                    <div className='flex border-b mx-4 py-2' >
                        <h3 className='text-2xl '>Total</h3>
                        <p className='flex-1 text-center text-2xl'>${totalPrice}</p>
                    </div>
                    <div className='flex justify-center my-3 mx-4'>
                        <Link to='/dashboard/payment' className="w-full rounded-none mx-10 btn bg-sky-500 hover:bg-sky-400 text-white items-center justify-center uppercase">Checkout</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cart;