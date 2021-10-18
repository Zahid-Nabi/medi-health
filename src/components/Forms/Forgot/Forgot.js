import React from 'react';

const Forgot = () => {
    return (
        <div className="forgot-container">
            <div className="form-container">
                <div className="form-box">
                    <h2 className="form-title">Reset Password</h2>
                    <div className="form">
                        <form action="">
                            <div className="email">
                                <input type="email" name="" id="" placeholder="Your Email" />
                            </div>
                            <div className="submit">
                                <input type="submit" value="Submit" />
                            </div>
                        </form>
                        <small className="reset-msg"> Please check your email to reset password.</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forgot;