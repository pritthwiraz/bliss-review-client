import React from 'react';

const ServicesSection = ({service}) => {

    const {img, price, title} = service;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl w-full gap-6 p-4">
        <figure><img src={img} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title text-xl">{title}</h2>
          <p>Click the button to listen on Spotiwhy app</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default ServicesSection;  