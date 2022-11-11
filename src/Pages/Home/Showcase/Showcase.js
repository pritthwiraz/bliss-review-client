import React from 'react';
// import img1 from '../../../Assets/Images/Catering Service-2.jpg'

const Showcase = () => {
    return (
<div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/YfNYjXY/Catering-Service-2.jpg")`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Bliss Kitchen Ltd.</h1>
      <p className="mb-5 text-2xl font-bold">Promise To Provide Blissfull Services To Our Customer</p>
   
    </div>
  </div>
</div>
    );
};

export default Showcase;