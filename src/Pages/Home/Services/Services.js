import React, { useEffect, useState } from 'react';
import ServicesSection from './ServicesSection';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))

    }, [])

    return (
        <div className='mb-5'>
            <div className='mt-2 pb-5'>
            <h1 className='text-3xl text-center font-semibold text-gray-900'>Premier Food Services From our Cloud Kitchen</h1>
            <p className='text-xl font-semibold text-center'>Quality Comes First is the Bliss Cloud Kitchen's Motto</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-1 gap-5 w-9/12 container mx-auto'>
                {
                    services.map(service => <ServicesSection
                        key={service.service_id}
                        service={service}
                    ></ServicesSection>)
                }
            </div>
            
        </div>
    );
};

export default Services;