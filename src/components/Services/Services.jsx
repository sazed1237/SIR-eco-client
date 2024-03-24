import globeIcon from '../../assets/icons/globe-free-img.png';
import quality from '../../assets/icons/quality-free-img.png';
import lock from '../../assets/icons/lock-free-img.png';
import tag from '../../assets/icons/tag-free-img.png';

const Services = () => {
    return (
        <section className='w-5/6 mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 my-16'>
            <div className='flex flex-col items-center text-center'>
                <img className='w-[50px] ' src={globeIcon} alt="" />
                <div>
                    <h3 className='font-bold py-3 '>Worldwide Shipping</h3>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div>
            <div className='flex flex-col items-center text-center'>
                <img className='w-[50px] ' src={quality} alt="" />
                <div>
                    <h3 className='font-bold py-3 '>Best Quality</h3>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div>
            <div className='flex flex-col items-center text-center'>
                <img className='w-[50px] ' src={tag} alt="" />
                <div>
                    <h3 className='font-bold py-3 '>Best Offers</h3>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div>
            <div className='flex flex-col items-center text-center'>
                <img className='w-[50px] ' src={lock} alt="" />
                <div>
                    <h3 className='font-bold py-3 '>Secure Payments</h3>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;