import React, { useState } from "react";
import "./AddProperty.css";

const AddProperty = ({ onAddProperty }) => {
  const [formData, setFormData] = useState({
    propertyType: "",
    propertyPrice: "",
    propertyDescription: "",
    contactNumber: "",
    location: "",
    bhk: "",
    size: "",
    agentName: "",
    agentPhone: "",
    propertyDocument: null, // New state for storing the PDF file
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "propertyDocument") {
      setFormData({ ...formData, [name]: files[0] }); // Store the selected file
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to the server
    const formDataToSubmit = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSubmit.append(key, formData[key]);
    });

    onAddProperty(formDataToSubmit);
    setFormData({
      propertyType: "",
      propertyPrice: "",
      propertyDescription: "",
      contactNumber: "",
      location: "",
      bhk: "",
      size: "",
      agentName: "",
      agentPhone: "",
      propertyDocument: null, // Reset the PDF file
    });
  };

  return (
    <div className="add-property">
      <h2>Add New Property</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label>Property Type:</label>
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            required
          >
            <option value="">Select Property Type</option>
            <option value="Villa">Villa</option>
            <option value="Plot or Land">Plot or Land</option>
            <option value="Commercial Building">Commercial Building</option>
            <option value="House">House</option>
            <option value="PG/Rental">PG/Rental</option>
          </select>
        </div>
        <div className="form-group">
          <label>Property Price:</label>
          <input
            type="number"
            name="propertyPrice"
            value={formData.propertyPrice}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Property Description:</label>
          <textarea
            name="propertyDescription"
            value={formData.propertyDescription}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Contact Number:</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>BHK:</label>
          <input
            type="number"
            name="bhk"
            value={formData.bhk}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Size (sqft):</label>
          <input
            type="number"
            name="size"
            value={formData.size}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Agent Name:</label>
          <input
            type="text"
            name="agentName"
            value={formData.agentName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Agent Phone:</label>
          <input
            type="text"
            name="agentPhone"
            value={formData.agentPhone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Property Document (PDF):</label>
          <input
            type="file"
            name="propertyDocument"
            accept="application/pdf"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Add Property</button>
      </form>
    </div>
  );
};

export default AddProperty;
