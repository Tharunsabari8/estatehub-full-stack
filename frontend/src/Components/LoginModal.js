import React, { useState } from 'react';
import './LoginModal.css'; // Include your CSS for styling the modal
import RealEstateSignin from './RealEstateSignin';
const LoginModal = ({ isOpen, onClose, goToSignup }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <RealEstateSignin goToSignup={goToSignup}/>
      </div>
    </div>
  );
};

export default LoginModal;
