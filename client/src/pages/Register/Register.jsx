import React, { useContext } from 'react';
import { AuthContext } from './../../provider/AuthProvider';


const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password)


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('created user', user)
            })
            .catch(error => console.log(error))

    }
    return (
        <div>
            <h1 className='text-3xl text-center my-2'>Register</h1>
            <div className="hero">
                <div className="hero-content">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;