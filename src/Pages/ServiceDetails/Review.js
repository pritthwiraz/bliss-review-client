import React from 'react';

const Review = () => {
    return (
        <form className="form-control my-8">
            <label className="label">
                <span className="label-text">Add Your Review</span>
                <span className="label-text-alt">Alt label</span>
            </label>
            <textarea className="textarea textarea-bordered h-24" placeholder="Review"></textarea>
            <button className='btn btn-primary my-3 w-2/6'>Submit your Review</button>
        </form>
    );
};

export default Review;