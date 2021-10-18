import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className="login-container">
            <div class="form-container">
                <div class="form-box">
                    <h2 class="form-title">Login</h2>
                    <div class="form">
                        <form action="">
                            <div class="email">
                                <input type="email" name="" id="" placeholder="Email" />
                            </div>
                            <div class="password">
                                <input type="password" name="" id="" placeholder="Password" />
                                <Link to="/forgot"><small>Forgot your password?</small></Link>
                            </div>
                            <div class="submit">
                                <input type="submit" value="Login" />
                            </div>
                        </form>
                        <div class="other-login">
                            <p>Or Login With</p>
                            <div class="social-media">
                                <button>Google</button>
                                <button>Github</button>
                                <button>Facebook</button>
                                <button>Twitter</button>
                            </div>
                        </div>
                        <small class="signup-msg"> Don't have an account? Please <Link to="/register">Sign Up</Link></small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;