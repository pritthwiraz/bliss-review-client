import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { img, title, description, } = useLoaderData();

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl my-8">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                 
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;