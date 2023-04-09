import React from 'react';
import account from '../../assets/Icons/accounts-1.png';
import business from '../../assets/Icons/business-1.png';
import chip from '../../assets/Icons/chip-1.png';
import social from '../../assets/Icons/social-media-1.png';
const Categories = () => {
    return (
        <section className='my-16'>
            <article>
            <h1 className='text-center text-4xl md:text-5xl font-semibold'>Job Category list</h1>
            <p className="text-sm md:text-md text-gray-500 text-center mt-4 mb-6">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </article>
            <article className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div className='p-8 bg-indigo-50'>
                    <img src={account} className='mb-5 bg-indigo-100 p-4'/>
                    <h3 className="text-md font-bold text-gray-700">Account & Finance</h3>
                    <p className="text-sm text-gray-500">250 Jobs available</p>
                </div>
                <div className='p-8 bg-indigo-50'>
                    <img src={business} className='mb-5 bg-indigo-100 p-4'/>
                    <h3 className="text-md font-bold text-gray-700">Creative Design</h3>
                    <p className="text-sm text-gray-500">190 Jobs available</p>
                </div>
                <div className='p-8 bg-indigo-50'>
                    <img src={social} className='mb-5 bg-indigo-100 p-4'/>
                    <h3 className="text-md font-bold text-gray-700">Marketing & Sales</h3>
                    <p className="text-sm text-gray-500">222+ Jobs available</p>
                </div>
                <div className='p-8 bg-indigo-50'>
                    <img src={chip} className='mb-5 bg-indigo-100 p-4'/>
                    <h3 className="text-md font-bold text-gray-700">Engineering Job</h3>
                    <p className="text-sm text-gray-500">200 Jobs available</p>
                </div>
            </article>
        </section>
    );
};

export default Categories;