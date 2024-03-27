import React from 'react';
import SectionTitle from '../../Pages/Shared/SectionTitle/SectionTitle';
import { FaClock, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const ContactCard = () => {
    return (
        <section className='w-10/12 mx-auto py-5'>
            <SectionTitle heading={"We're here to Help"} subHeading={"Have any queries?"}></SectionTitle>

            <div className='grid md:grid-cols-4 gap-7 py-10'>

                <div className="card  border rounded-none">
                    <div className='bg-slate-500 w-full py-2'>
                        <h1 className='text-center text-xl text-white font-semibold'>Sales</h1>
                    </div>
                    <div className="card-body  items-center text-center">
                        <h2 className="uppercase">Vestibulum ante ipsum primis in faucibus orci luctus.</h2>
                        <p className='text-sky-500 text-lg'>+8801000000000000</p>

                    </div>
                </div>
                
                <div className="card  border rounded-none">
                    <div className='bg-slate-500 w-full py-2'>
                        <h1 className='text-center text-xl text-white font-semibold'>Complaints</h1>
                    </div>
                    <div className="card-body  items-center text-center">
                        <h2 className=" uppercase">Vestibulum ante ipsum primis in faucibus orci luctus.</h2>
                        <p className='text-sky-500 text-lg'>+8801000000000000</p>

                    </div>
                </div>
                
                <div className="card  border rounded-none">
                    <div className='bg-slate-500 w-full py-2'>
                        <h1 className='text-center text-xl text-white font-semibold'>Returns</h1>
                    </div>
                    <div className="card-body  items-center text-center">
                        <h2 className=" uppercase">Vestibulum ante ipsum primis in faucibus orci luctus.</h2>
                        <p className='text-sky-500 text-lg'>+8801000000000000</p>

                    </div>
                </div>
                
                <div className="card  border rounded-none">
                    <div className='bg-slate-500 w-full py-2'>
                        <h1 className='text-center text-xl text-white font-semibold'>Marketing</h1>
                    </div>
                    <div className="card-body  items-center text-center">
                        <h2 className=" uppercase">Vestibulum ante ipsum primis in faucibus orci luctus.</h2>
                        <p className='text-sky-500 text-lg'>+8801000000000000</p>

                    </div>
                </div>
                


            </div>

        </section>
    );
};

export default ContactCard;