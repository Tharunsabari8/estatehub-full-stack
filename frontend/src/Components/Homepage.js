import React, { useState, useEffect } from 'react';
import About from './About';
import Amenities from './Amenities';
import Services from './Services';
import Team from './Team';
import Exploreproperty from './Exploreproperty';
import SellersRatedPage from './SellersRatedPage';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal'; // Import the SignupModal component
import './HomePage.css';
import { FaUserCircle } from 'react-icons/fa'; // Example icon import

const Homepage = () => {
  const [sellerName, setSellerName] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // State for login modal visibility
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false); // State for signup modal visibility
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false); // State for profile menu visibility

  useEffect(() => {
    const name = localStorage.getItem('sellerName');
    setSellerName(name || 'Guest');
  }, []);

  const goToSignup = () => {
    setIsSignupModalOpen(true); // Open signup modal
  };

  const handleLogout = () => {
    localStorage.removeItem('sellerName');
    setSellerName('Guest');
    setIsProfileMenuOpen(false); // Close profile menu after logout
    // Redirect to login page or home page if needed
  };

  return (
    <div>
      <div className="homepage">
        <nav className="home-navbar">
          <div className="home-navbar-left">
            <div className="home-logo">
              <img src='/Assets/Images/Estate-Hub.png' alt="Logo" />
            </div>
            <ul className="home-nav-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#service">Our Services</a></li>
              <li><a href="#Amenities">Amenities</a></li>
              <li><a href="#Properties">Explore Properties</a></li>
              <li><a href="#Contact">Contact Us</a></li>
              <li><a href="#Team">The Team</a></li>
            </ul>
          </div>
          <div className="home-navbar-right">
            {sellerName === 'Guest' ? (
              <>
                <button className="auth-button" onClick={() => setIsLoginModalOpen(true)}>Login</button>
                <button className="auth-button" onClick={goToSignup}>Signup</button>
              </>
            ) : (
              <>
                <div className="profile-menu">
                  <button className="profile-icon" onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}>
                    <FaUserCircle size={60} />
                  </button>
                  {isProfileMenuOpen && (
                    <div className="profile-menu-dropdown">
                    <center><button style={{color:"orange" , fontSize:"24px"}}><strong>Hi Tharun!!!</strong></button></center>
                    <button className="auth-button">Dashboard</button>
                      <button className="auth-button" onClick={handleLogout}>Sign Out</button>
                      
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </nav>
        <br />
        <img src='/Assets/Images/Homepagebanner.jpg' alt="Homepage Banner" />
        <header className="home-hero">
          <div className="home-hero-content">
            <h1>Welcome to EstateHub</h1>
            <p>Your dream home is just a click away</p>
            <br />
            <a href="#Properties" className="home-hero-button">Explore Now</a>
          </div>
        </header>
      </div>
      <div>
        <About />
        
        <Services />
        <Amenities />
        <Exploreproperty />
        
        <SellersRatedPage />
        
        
      </div>
      <div className='footer'>
        <div className='footer-content'>
          <div className='footer-section'>
            <h2>Contact Us</h2>
            <p>If you have any questions or feedback, feel free to reach out to us:</p>
            <p>Email: <a href="mailto:admin@estatehub.com">admin@estatehub.com</a></p>
            <p>Phone: <a href="tel:6374453114">+91 9865655712</a></p>
          </div>
          <div className='footer-section'>
            <h2>Follow Us</h2>
            <p>Stay updated with our latest news and updates:</p>
            <div className='social-links'>
              <a href="https://facebook.com/quizmaster" target="_blank" rel="noopener noreferrer" className='social-icon'>
                <img src="/Assets/Images/FaceBook.jpg" alt="Facebook" className='soc-logo'/>
              </a>
              <a href="https://twitter.com/quizmaster" target="_blank" rel="noopener noreferrer" className='social-icon'>
                <img src="/Assets/Images/Ex.jpg" alt="Twitter" className='soc-logo'/>
              </a>
              <a href="https://instagram.com/quizmaster" target="_blank" rel="noopener noreferrer" className='social-icon'>
                <img src="/Assets/Images/Insta.jpg" alt="Instagram" className='soc-logo'/>
              </a>
            </div>
          </div>
          <div className='footer-section'>
            <h2>About Us</h2>
            <p>EstateHub is dedicated to bringing you the best plots and houses to make your search of houses easy and happy. Join our community and enjoy the benefits today!</p>
          </div>
        </div>
        <div className='footer-bottom'>
          <p>&copy; {new Date().getFullYear()} EstateHub. All rights reserved.</p>
        </div>
      </div>

      {/* Render the LoginModal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} goToSignup={goToSignup}/>
      
      {/* Render the SignupModal */}
      <SignupModal isOpen={isSignupModalOpen} onClose={() => setIsSignupModalOpen(false)} />
    </div>
  );
};

export default Homepage;
