import React from 'react';
import './LoginAlertModal.css';

const LoginAlertModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="login-alert-overlay">
      <div className="login-alert-modal">
      <h1 className='login-oops'>OOPS!</h1>
        <h2 className="login-alert-title">Login Required :)</h2>
        <p className="login-alert-message">Please log in to access the Seller Dashboard.</p>
        <div className="login-alert-buttons">
          <button className="login-alert-button" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default LoginAlertModal;
