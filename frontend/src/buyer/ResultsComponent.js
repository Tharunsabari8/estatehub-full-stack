import React from 'react';
import './ResultsComponent.css';

const ResultsComponent = ({ results, onSelectProperty }) => {
  return (
    <div className="results-container">
      {results.length > 0 ? (
        results.map((result) => (
          <div key={result.id} className="result-card" onClick={() => onSelectProperty(result)}>
            <div className="result-location" ><h1>{result.location}</h1></div>
            <div className="result-type"><b>Property Type : </b>{result.propertyType}</div>
            <div className="result-size"><b>Size : </b>{result.size}</div>
            <div className="result-price"><b>Price : </b>{result.sale ? `Buy at ${result.price}` : `Rent at ${result.price}`}</div>
            <div className="result-agent">
              <strong>Agent Details:</strong>
              <div>{result.agentName}</div>
              <div>{result.agentContact}</div>
            </div>
            <div className='result-address'>
            <strong>Address:</strong>
            <div>{result.address}</div>
            </div>
            <div className="result-details">
              <strong>Details:</strong>
              <div>{result.details}</div>
            </div>
            {/* Adding Contact and WhatsApp buttons */}
            <div className="result-buttons">
              <button className="contact-button">Contact</button>
              <button 
                className="whatsapp-button"
                onClick={(e) => {
                  e.stopPropagation(); // Prevents card click from triggering
                  window.open(`https://wa.me/${result.agentContact}`, '_blank');
                }}
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default ResultsComponent;
