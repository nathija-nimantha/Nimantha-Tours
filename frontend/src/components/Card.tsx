import React from 'react';

const Card = (props) => {
    return (
        <div className='w-full md:w-1/3 lg:w-1/4 p-4 min-w-[250px]'>
            <div className='bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105'>
                <img
                    src={props.img}
                    alt={props.title}
                    className='w-full h-48 object-cover'
                />
                <div className='p-4'>
                    <h2 className='text-xl font-bold mb-2 text-gray-800'>{props.title}</h2>
                    <p className='text-gray-600 mb-4'>{props.description}</p>
                    <a href={props.link} className='text-amber-600 font-semibold hover:text-amber-700'>
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
