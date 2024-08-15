// SigninPopup.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './SigninPopup.css';

const SigninPopup = ({ closePopup, handleSubmit, email, setEmail, password, setPassword, error }) => {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-button" onClick={closePopup}>X</button>
                <h2 className="signin-form-title">Sign in</h2>
                <form onSubmit={handleSubmit} className="register-form" id="register-form">
                    <div className="signin-form-group">
                        <FontAwesomeIcon icon={faUser} className="fa" />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="signin-form-group">
                        <FontAwesomeIcon icon={faLock} className="fa" />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="signin-form-group">
                        <input
                            type="checkbox"
                            name="remember-me"
                            id="remember-me"
                            className="agree-term"
                        />
                        <label htmlFor="remember-me" className="label-agree-term">Remember me</label>
                    </div>
                    {error && <div className="signin-form-error">{error}</div>}
                    <div className="signin-form-group signin-form-button">
                        <input
                            type="submit"
                            name="signin"
                            id="signin"
                            className="signin-form-submit"
                            value="Log in"
                        />
                    </div>
                    <div className="social-login">
                        <p>Or login with</p>
                        <div className='socicons'>
                            <a href="#" className="social-link"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="#" className="social-link"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="#" className="social-link"><FontAwesomeIcon icon={faGoogle} /></a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SigninPopup;
