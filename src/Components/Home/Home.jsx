
import React from 'react';
import Categories from "./Categories";
import FeaturedJobs from "./FeaturedJobs";
import Header from "./Header";

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