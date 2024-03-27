import React from 'react';

const ContactForm = () => {
    return (
        <div className="hero min-h-screen w-10/12 mx-auto">
            <div className='grid md:grid-cols-2 gap-5'>
                <div className='flex flex-col justify-center '>
                    <h3 className='text-lg font-bold'>Don't be a Stranger!</h3>
                    <h1 className='text-4xl font-bold mb-8'>You tell us. We listen.</h1>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maxime reiciendis iusto iure perspiciatis ea minima. A ullam quas dolor, explicabo labore, vel et laudantium unde impedit amet accusamus excepturi.</p>
                </div>
                <div className="card w-full bg-base-100 shadow-xl rounded-none">
                    <form className="card-body">
                        <div className='grid md:grid-cols-2 gap-7'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name*</span>
                                </label>

                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email*</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone*</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message*</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className=" mx-auto mt-6 ">
                            <input className="btn btn-sm rounded-none bg-yellow-600 border-none btn-w-sm btn-primary hover:bg-gray-400 text-white" type="submit" value="Send Message" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ContactForm;