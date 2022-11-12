import React from 'react';

const Review = () => {
    return (
        <form className="form-control my-8">
            <label className="label">
                <span className="label-text text-2xl">Add Your Review</span>
                
            </label>
            <textarea className="textarea textarea-bordered h-24 text-xl" placeholder="Review"></textarea>
            <button className='btn btn-primary my-3 w-2/6'>Submit your Review</button>
        </form>
    );
};

export default Review;