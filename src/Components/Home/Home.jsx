
import React from 'react';
import Navbar from "../Navbar/Navbar";
import Categories from "./Categories";
import FeaturedJobs from "./FeaturedJobs";
import Header from "./Header";

const Home = () => {
    return (
        <section>
            <article className='bg-indigo-50 lg:h-[100vh]'>
            <Navbar />
            <Header />
            </article>
            <article className='w-[80%] mx-auto'>
            <Categories />
            <FeaturedJobs />
            </article>
        </section>
    );
};

export default Home;