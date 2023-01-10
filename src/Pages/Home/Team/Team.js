import React from 'react';
import './Team.css';
import chef1 from '../../../Assets/Images/Avatar-1.png'
import chef2 from '../../../Assets/Images/Avatar-2.png'
import chef3 from '../../../Assets/Images/Avatar-3.png'

const Team = () => {
    return (
        <section className='team'>
		<div className='container'>
			<h1 className='text-3xl'>Our Team of Professinal Chefs</h1>
			<div className='box'>
				<img src={chef1} alt='' />
				<p>Julie Julie</p>
			</div>
			<div className='box'>
				<img src={chef2} alt='' />
				<p>Tomi Mia</p>
			</div>
			<div className='box'>
            			<img src={chef3} alt='' />
				<p>Peter Gomez</p>
			</div>
		</div>
	</section>
    );
};

export default Team;