import React from 'react';
import Newsletter from '../Newsletter/Newsletter';
import Services from '../Services/Services';
import Showcase from '../Showcase/Showcase';
import Team from '../Team/Team';


const Home = () => {
    return (
        <div>
           <Showcase></Showcase>
           <Newsletter></Newsletter>
           <Team></Team>
           <Services></Services>
        
        </div>
    );
};

export default Home;