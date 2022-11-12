import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from './Review';

const ServiceDetails = () => {
    const { img, title, description, price } = useLoaderData();

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl my-8">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">{title}</h2>
                    <p className='text-2xl'>{description}</p>
                    <p className='text-2xl'>Package Price: {price} Per Person</p>                 
                </div>
            </div>
            <Review></Review>
        </div>
    );
};

export default ServiceDetails;