import React from 'react';
import Banner from '../Banner/Banner';
import BrandingCard from '../BrandingCard/BrandingCard';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import LimitedTimeOffer from '../../../components/LimitedTImeOffer/LimitedTimeOffer';
import Services from '../../../components/Services/Services';
import Offer from '../../Shared/Offer/Offer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BrandingCard></BrandingCard>
            <FeaturedProducts></FeaturedProducts>
            <LimitedTimeOffer></LimitedTimeOffer>
            <Services></Services>
            <Offer></Offer>
        </div>
    );
};

export default Home;