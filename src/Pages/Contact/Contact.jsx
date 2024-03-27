import React from 'react';
import CoverBanner from '../Shared/CoverBanner/CoverBanner';
import contactBanner from '../../assets/banner/contact.jpg';
import ContactCard from '../../components/ContactCard/ContactCard';
import ContactForm from '../../components/ContactForm/ContactForm';


const Contact = () => {
    return (
        <div className='bg-slate-50'>

            <CoverBanner coverImage={contactBanner} title={'Contact Us'} text={'Feel free to ask anything'}></CoverBanner>
            <ContactCard></ContactCard>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Contact;