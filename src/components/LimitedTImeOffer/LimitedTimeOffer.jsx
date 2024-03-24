import React from 'react';
import banner from '../../assets/banner/limited.jpg';

const LimitedTimeOffer = () => {
    return (
        <div style={{ backgroundImage: `url('${banner}')`, backgroundSize: 'cover' }} className=' h-[500px] md:bg-fixed flex items-center'>
            <div className='ml-10'>
                <h4 className='text-2xl font-semibold py-5 text-white'>Limited Time Offer</h4>
                <h1 className='text-6xl font-bold pb-5  text-rose-500 '>Special Edition</h1>
                <p className='w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,  luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <h2 className='text-2xl font-semibold py-5 text-red-500 md:w-full w-2/3'>Buy This T-shirt At 20% Discount, Use Code OFF20</h2>
                <div>
                    <button className="btn rounded-none hover:bg-black hover:text-white border-none uppercase">Shop now</button>
                
                </div>
            </div>

        </div>
    );
};

export default LimitedTimeOffer;