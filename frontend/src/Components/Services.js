import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import LoginAlertModal from './LoginAlertModal'; // Import the custom modal

const Services = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const navigate = useNavigate();

  const handleSellHomeClick = () => {
    const isLoggedIn = localStorage.getItem('sellerName'); // Check if the user is logged in
    if (isLoggedIn) {
      navigate('/seller-dashboard');
    } else {
      setIsAlertOpen(true); // Open the custom alert modal
    }
  };

  const handleBuyHomeClick = () => {
    navigate('/search?type=buy');
  };

  const handleRentHomeClick = () => {
    navigate('/search?type=rent');
  };

  return (
    <div>
      <section className="service" id="service">
        <div className="container">
          <p className="section-subtitle">Our Services</p>
          <h2 className="h2 section-title">Our Main Focus</h2>
          <ul className="service-list">
            <li>
              <div className="service-card">
                <div className="card-icon">
                  <img src="/Assets/Images/service-1.png" alt="Service icon" />
                </div>
                <h3 className="h3 card-title">
                  <a href="/prop">Buy a Property</a>
                </h3>
                <p className="card-text">
                  Over 1 million+ homes for sale available on the website, we
                  can match you with a house you will want to call home.
                </p>
                <a href="/prop" className="card-link" onClick={handleBuyHomeClick}>
                  <span>Find A Home</span>
                  <ion-icon name="arrow-forward-outline" />
                </a>
              </div>
            </li>
            <li>
              <div className="service-card">
                <div className="card-icon">
                  <img src="/Assets/Images/service-2.png" alt="Service icon" />
                </div>
                <h3 className="h3 card-title">
                  <a href="/prop">Rent a Property</a>
                </h3>
                <p className="card-text">
                  Over 1 million+ homes for rent available on the website, we
                  can match you with a house you will want to call home.
                </p>
                <a href="/prop" className="card-link" onClick={handleRentHomeClick}>
                  <span>Find A Home</span>
                  <ion-icon name="arrow-forward-outline" />
                </a>
              </div>
            </li>
            <li>
              <div className="service-card">
                <div className="card-icon">
                  <img src="/Assets/Images/service-3.png" alt="Service icon" />
                </div>
                <h3 className="h3 card-title">
                  <a onClick={handleSellHomeClick}>Sell a Property</a>
                </h3>
                <p className="card-text">
                  Over 1 million+ homes for sale available on the website, we
                  can match you with a house you will want to call home.
                </p>
                <a className="card-link" onClick={handleSellHomeClick}>
                  <span>Find A Home</span>
                  <ion-icon name="arrow-forward-outline" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Render the LoginAlertModal */}
      <LoginAlertModal isOpen={isAlertOpen} onClose={() => setIsAlertOpen(false)} />
    </div>
  );
};

export default Services;
