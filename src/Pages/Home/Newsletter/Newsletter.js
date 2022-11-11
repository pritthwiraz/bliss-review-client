import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <div id="newsletter">
		<div className="container">
			<h1 className='text-3xl'>Subscribe To Our Newsletter</h1>
			<form>
				<input type="email" placeholder="Enter your Email"/>
				<button type="submit" className='button-1'>Subscribe</button>
			</form>
		</div>
	</div>
    );
};

export default Newsletter;