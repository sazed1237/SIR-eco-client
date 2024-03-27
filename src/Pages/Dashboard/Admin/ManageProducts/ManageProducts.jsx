import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import { FaEdit, FaTrashAlt, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useProducts from '../../../../hooks/useProducts';

const ManageProducts = () => {

    const [products, loading, refetch] = useProducts()
    const axiosSecure = useAxiosSecure()




    const handleDeleteUser = id => {
        console.log(id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't to delete this user!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await axiosSecure.delete(`/products/${id}`)
                console.log(res.data)

                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your User has been deleted.",
                        icon: "success"
                    });
                }

                refetch()


            }
        });
    }



    return (
        <div>
            <SectionTitle heading={'Manage All products'} subHeading={'How Many??'} ></SectionTitle>

            <div className='bg-base-100 px-3 py-5'>
                <h2 className='text-2xl py-2 font-semibold'>Total products: {products.length} </h2>

                {/* cart table  */}
                <div className="overflow-x-auto mb-7">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='uppercase text-white bg-[#D1A054]'>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index) => <tr key={product._id}>
                                    <td className='font-bold'>{index + 1}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-16 rounded">
                                                <img src={product.img} alt={product.name} />
                                            </div>
                                        </div>

                                    </td>
                                    <td className='text-gray-500'>{product.name}</td>
                                    <td>
                                        <Link>
                                            <button className='btn btn-sm bg-[#D1A054]' onClick={() => handleMakeAdmin(product)}>
                                                <FaEdit className='text-xl text-white'></FaEdit>
                                            </button>
                                        </Link>
                                    </td>

                                    <th>
                                        <button onClick={() => handleDeleteUser(product._id)}>
                                            <FaTrashAlt className='text-xl text-red-600'></FaTrashAlt>
                                        </button>
                                    </th>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;