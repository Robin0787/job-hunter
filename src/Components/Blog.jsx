import React from 'react';
import Navbar from './Navbar/Navbar';

const Blog = () => {
    return (
        <section>
            <article className='bg-no-repeat bg-indigo-50 bg-clip-content' style={{ backgroundImage: `url('/vector.png'), url('/vector-1.png')`, backgroundPosition: `bottom left, top right` }}>
            <Navbar />
            <h2 className="text-2xl font-semibold text-center pt-2 pb-10">Blogs</h2>
            </article>
            <article className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-6 md:my-10 lg:my-16 '>
                <div className='border rounded-md shadow-lg space-y-3'>
                    <h1 className='text-xl h-20 flex justify-center items-center rounded-t-md font-semibold bg-indigo-400 p-3 text-white text-center'>When should we use Context API?</h1>
                    <p className="text-md text-gray-600 text-justify p-3">The <span className="font-semibold">Context API</span> in React should be used when we need to share data or state between components that are not directly connected in the component tree. The Context API provides a way to pass data through the component tree without having to pass props down through every level.</p>
                </div>
                <div className='border rounded-md shadow-lg space-y-3'>
                    <h1 className='text-xl h-20 flex justify-center items-center rounded-t-md font-semibold bg-indigo-400 p-3 text-white text-center'>What is Custom hook?</h1>
                    <p className="text-md text-gray-600 text-justify p-3">A <span className="font-semibold">Custom</span> hook in React is a JavaScript function that starts with the prefix "use" and that allows us to reuse stateful logic between different components. Custom hooks enable us to extract reusable logic from components and reuse that logic across multiple components without duplicating code.</p>
                </div>
                <div className='border rounded-md shadow-lg space-y-3'>
                    <h1 className='text-xl h-20 flex justify-center items-center rounded-t-md font-semibold bg-indigo-400 p-3 text-white text-center'>What is useRef hook?</h1>
                    <p className="text-md text-gray-600 text-justify p-3"><span className="font-semibold">useRef</span> is a built-in hook in React that allows us to create a mutable reference to a value that persists across renders. The useRef hook returns a single mutable ref object that contains a .current property, which can be set to any value.</p>
                </div>
                <div className='border rounded-md shadow-lg space-y-3'>
                    <h1 className='text-xl h-20 flex justify-center items-center rounded-t-md font-semibold bg-indigo-400 p-3 text-white text-center'>What is useMemo hook?</h1>
                    <p className="text-md text-gray-600 text-justify p-3"><span className="font-semibold">useMemo</span> is a built-in hook in React that allows you to memoize a value and avoid expensive recalculations on every render. It takes two arguments: a function that returns the memoized value, and an array of dependencies that determine when to recalculate the memoized value.</p>
                </div>
            </article>
        </section>
    );
};

export default Blog;