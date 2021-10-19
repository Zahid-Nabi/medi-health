import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { FcGoogle } from 'react-icons/fc';
import './Login.css';

const Login = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <div className="login-container">
            <div className="form-container">
                <div className="form-box">
                    <h2 className="form-title">Login</h2>
                    <div className="form">
                        <form action="">
                            <div className="email">
                                <input type="email" name="" id="" placeholder="Email" />
                            </div>
                            <div className="password">
                                <input type="password" name="" id="" placeholder="Password" />
                                <Link to="/forgot"><small>Forgot your password?</small></Link>
                            </div>
                            <div className="submit">
                                <input type="submit" value="Login" />
                            </div>
                        </form>
                        <div className="other-login">
                            <p>Or Login With</p>
                            <div className="social-media">
                                <button onClick={signInWithGoogle}>Google <FcGoogle /></button>
                            </div>
                        </div>
                        <small className="signup-msg"> Don't have an account? Please <Link to="/register">Sign Up</Link></small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;