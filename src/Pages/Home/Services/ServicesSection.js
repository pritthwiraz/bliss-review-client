import React from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = ({ service }) => {

  const { _id, img, price, title, description } = service;

  return (
    <div className="hero max-h-80 bg-slate-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="py-6">{description}</p>
          <p className='py-3 font-bold'>Price: {price} Per Person</p>
          <Link to={`/servicedetails/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;  