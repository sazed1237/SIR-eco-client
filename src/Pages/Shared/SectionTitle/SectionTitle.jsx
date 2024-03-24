import React from 'react';

const SectionTitle = ({heading}) => {
    return (
        <div className=' md:text-5xl text-3xl text-center font-semibold mb-10'>
            <span className='border-b-4 pb-3 border-opacity-80 border-blue-600 '>{heading}</span>
        </div>
    );
};

export default SectionTitle;