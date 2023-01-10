import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const {createUser, signInWithGoogle} = useContext(AuthContext);
    const handSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    return (
<div className="hero w-full">
            <div className="hero-content grid md:grid-cols-2 lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Sign Up</h1>                    
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                    <form onSubmit={handSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="text" placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="text" placeholder="password" className="input input-bordered" required/>
                   
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />                            
                        </div>
                    </form>
                    <p className='text-center'>Have An Account<Link className='text-rose-500 font-bold'to='/login'> Login</Link></p>
                    <div className="divider mx-2">OR</div>
                    <button className="btn btn-outline mx-6" onClick={handleGoogleSignIn}>SIGN UP WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;