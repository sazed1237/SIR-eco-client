import React from 'react';
import bannerImg from '../../../assets/banner/banner.jpg';

const Banner = () => {
    return (
        <section style={{ backgroundImage: `url('${bannerImg}')`, backgroundSize: 'cover', }} className='h-screen  flex items-center bg-fixed'>

            <div className='pl-10 '>
                <h1 className='text-5xl md:text-7xl font-bold text-white space-x-1'>Raining Offers For <br /> Hot Summer!</h1>
                <h3 className='text-3xl font-semibold py-10'>25% Off On All Products</h3>
                <div>
                    <button className='btn rounded-none uppercase text-xl mr-4'>shop now </button>
                    <button className='btn btn-outline border-white text-white uppercase rounded-none text-xl'>Find more </button>
                </div>
            </div>
        </section>
    );
};

export default Banner;