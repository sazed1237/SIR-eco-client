import React from 'react';
import top1 from '../../../assets/top/premium_photo.avif';
import top2 from '../../../assets/top/men-s-shoes-clothing-accessories.jpg';
import top3 from '../../../assets/top/top3.jpg';
import top4 from '../../../assets/top/top4.jpg';

const BrandingCard = () => {
    return (
        <section className=' w-5/6 mx-auto h-[500px] grid md:grid-cols-3 gap-10 my-24 text-white'>
            <div style={{ backgroundImage: `url('${top4}')`, backgroundSize: 'cover',  }} className="card flex flex-col relative rounded-none">

                <div className=" card-body bg-black bg-opacity-20 flex flex-col justify-between  ">
                    <div className='absolute bottom-0'>
                        <h2 className="card-title">20% Off On Tank Tops</h2>
                        <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                        <div className="my-6">
                            <button className="btn hover:bg-black border-none hover:text-white rounded-none text-center uppercase bg-gray-100">Shop now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ backgroundImage: `url('${top1}')`, backgroundSize: 'cover' }} className="card  flex flex-col relative rounded-none">
                {/* <figure><img src={top2} alt="Shoes" /></figure> */}
                <div className=" card-body flex flex-col justify-between bg-black bg-opacity-20">
                    <div className='absolute bottom-0'>
                        <h2 className="card-title">20% Off On Tank Tops</h2>
                        <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                        <div className="my-6">
                            <button className="btn hover:bg-black border-none hover:text-white rounded-none text-center uppercase bg-gray-100">Shop now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ backgroundImage: `url('${top2}')`, backgroundSize: 'cover' }} className="card flex flex-col relative rounded-none">
                {/* <figure><img src={top1} alt="Shoes" /></figure> */}
                <div className=" card-body flex flex-col justify-between bg-black bg-opacity-20">
                    <div className='absolute bottom-0'>
                        <h2 className="card-title">20% Off On Tank Tops</h2>
                        <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                        <div className="my-6">
                            <button className="btn hover:bg-black border-none hover:text-white rounded-none text-center uppercase bg-gray-100">Shop now</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default BrandingCard;