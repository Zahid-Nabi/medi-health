import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { signInWithGoogle, handleNameField, handleEmailField, handlePasswordField, handleConfirmPasswordField, handleRegistration, error, success } = useAuth();
    return (
        <div className="register-container">
            <div className="form-container">
                <div className="form-box">
                    <h2 className="form-title">Create an Account</h2>
                    <div className="form">
                        <form onSubmit={handleRegistration}>
                            <div className="name">
                                <input onBlur={handleNameField} type="text" name="" id="" placeholder="Full Name" required />
                            </div>
                            <div className="email">
                                <input onBlur={handleEmailField} type="email" name="" id="" placeholder="Email" required />
                            </div>
                            <div className="password">
                                <input onBlur={handlePasswordField} type="password" name="" id="" placeholder="Password" required />
                            </div>
                            <div className="password">
                                <input onBlur={handleConfirmPasswordField} type="password" name="" id="" placeholder="Confirm Password" required />
                            </div>
                            {
                                error ?
                                    <div className="error">
                                        <p className="text-danger">Error: {error}</p>
                                    </div>
                                    : ''
                            }
                            {
                                success ?
                                    <div className="success">
                                        <p className="text-success">You have successfully registered.</p>
                                    </div>
                                    : ''
                            }
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