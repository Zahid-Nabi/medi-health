import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <div className="register-container">
            <div className="form-container">
                <div className="form-box">
                    <h2 className="form-title">Create an Account</h2>
                    <div className="form">
                        <form action="">
                            <div className="name">
                                <input type="text" name="" id="" placeholder="Full Name" />
                            </div>
                            <div className="email">
                                <input type="email" name="" id="" placeholder="Email" />
                            </div>
                            <div className="password">
                                <input type="password" name="" id="" placeholder="Password" />
                            </div>
                            <div className="password">
                                <input type="password" name="" id="" placeholder="Confirm Password" />
                            </div>
                            <div className="submit">
                                <input type="submit" value="Register" />
                            </div>
                        </form>
                        <div className="other-login">
                            <p>Or Login With</p>
                            <div className="social-media">
                                <button onClick={signInWithGoogle}>Google <FcGoogle /></button>
                            </div>
                            <small className="login-msg"> Already have an account? Please <Link to="/login">Login</Link></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;