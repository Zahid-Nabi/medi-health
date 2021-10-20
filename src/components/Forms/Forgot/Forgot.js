import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Forgot = () => {

    const { handleEmailField, handlePasswordReset, error, success } = useAuth();

    return (
        <div className="forgot-container">
            <div className="form-container">
                <div className="form-box">
                    <h2 className="form-title">Reset Password</h2>
                    <div className="form">
                        <form onSubmit={handlePasswordReset}>
                            <div className="email">
                                <input onBlur={handleEmailField} type="email" name="" id="" placeholder="Your Email" />
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
                                        <small className="reset-msg text-success"> Please check your email to reset password.</small>
                                    </div>
                                    : ''
                            }
                            <div className="submit">
                                <input type="submit" value="Submit" />
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forgot;