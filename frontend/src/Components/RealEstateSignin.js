import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import './RealEstateSignin.css';

const RealEstateSignin = ({goToSignup}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const user = await response.json();
                console.log('User logged in:', user);
                localStorage.setItem('sellerName', user.name);
                navigate('/seller-dashboard');
            } else {
                setError('Invalid email or password');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <section className="signin-container">
            <div className="signin-content">
                
                <div className="signin-form">
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
                        <div className="signin-form-group create-account-link">
                            <a onClick={goToSignup} className="create-account-link">Create an account</a>
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
        </section>
    );
}

export default RealEstateSignin;
