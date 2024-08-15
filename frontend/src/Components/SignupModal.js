// SignupModal.js
import React, { useState } from 'react';
import './SignupModal.css'; // Import CSS for styling
import RealEstateSignup from './RealEstateSignup';
const SignupModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSignup = () => {
    // Handle signup logic here
  };

  return (
    <div className="signup-modal-overlay">
      <div className="signup-modal-content">
        <button className="signup-modal-close" onClick={onClose}>X</button>
        <RealEstateSignup />
      </div>
    </div>
  );
};

export default SignupModal;
