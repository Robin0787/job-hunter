import React from 'react';
import FeaturedJobs from './FeaturedJobs';
import Categories from './Header/Categories';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Categories />
            <FeaturedJobs />
        </div>
    );
};

export default Home;