import React, { useEffect, useState } from 'react';
const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('Categories.json')
        .then(res => res.json())
        .then(data => setCategories(data));
    },[]);

    return (
        <section className='my-16'>
            <article>
            <h1 className='text-center text-4xl md:text-5xl font-semibold'>Job Category list</h1>
            <p className="text-sm md:text-md text-gray-500 text-center mt-4 mb-6">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </article>
            <article className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    categories.map((category,index) => <SingleCategory key={index} category={category}/>)
                }
            </article>
        </section>
    );
};

function SingleCategory ({category}) {
    const {categoryLogo, categoryTitle, categoryDesc} = category;
    return (
        <div className='p-8 bg-indigo-50'>
                    <img src={categoryLogo} className='mb-5 bg-indigo-100 p-4'/>
                    <h3 className="text-md font-bold text-gray-700">{categoryTitle}</h3>
                    <p className="text-sm text-gray-500">{categoryDesc}</p>
                </div>
    )
}

export default Categories;