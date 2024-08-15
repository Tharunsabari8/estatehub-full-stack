import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PropertyList.css'; // Create a CSS file for styling

// Mapping property types to images
const propertyImages = {
  Villa: [
    'https://www.favouritehomes.com/wp-content/uploads/2022/01/luxury-villa-life.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAYTc83YOjtFyUdyinPzvYki7aNyCUpJCis-2Z46tQ00SpeDIN8MPPpFx9L9LV0oxn1DI&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAkVfrTwZ4dK4K_Ww68eLzoL7Mo1Fu3ZQNJ1mlGmVifd3_kZ2SzGvjsN1WWDWwEp9eAwA&usqp=CAU',
  ],
  House: [
    'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    'hhttps://img.freepik.com/free-photo/3d-rendering-abstract-building_23-2150896714.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723334400&semt=ais_hybrid',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQnWNroTFZrAW9eqHu3W0G3sW_x-RCPZ2jXLy4K31jjfYoi8g5Uc-Eesk0CtTSISzA1IU&usqp=CAU',
  ],
  Plot: [
    'https://img.staticmb.com/mbcontent/images/crop/uploads/2024/7/documents%20checklist%20for%20buying%20a%20plot_0_1200.jpg',
    'https://images.timesproperty.com/blog/3450/tp_iStock_1254330782_SS_Image_Resize.jpg',
    'https://static.vecteezy.com/system/resources/previews/014/445/766/non_2x/land-plot-for-building-house-aerial-view-land-field-with-pins-pin-location-for-housing-subdivision-residential-development-owned-sale-rent-buy-or-investment-home-or-house-expand-the-city-suburb-free-photo.JPG',
  ],
  Commercial: [
    'https://i.pinimg.com/originals/08/b3/31/08b331e7c330d5a9d8272b2a1f9e430f.jpg',
    'https://i.pinimg.com/originals/64/11/2f/64112ff552e5a1f6987f6953d873043c.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPiRVWo6lRXJvnvuJHIOUvN6-ifa-rKXMTxDbZ7BOetqw8c03sUtytQrr0mGvpFrUZJNg&usqp=CAU',
  ],
  Rental: [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiM94SxVnZX1zH88d3ut-S21eDM-LIHYvvwA&s',
    'https://www.investopedia.com/thmb/1PJ-7V7uRfAIrzy3xt9xlPo2XQA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/for-rent-sign-in-front-of-new-house-149060607-1ddf9bfcf61141d08d0f5003277e902c.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyS19CZgow8zrRu3X5341IVUNL6Pu9prEiSQ&s',
  ],
  Flat: [
    'https://is1-3.housingcdn.com/01c16c28/184f0d0f47b761b812e5e4db2cb242cc/v0/medium/3_bhk_apartment-for-sale-kaikondrahalli-Bangalore-hall.jpg',
    'https://housing-images.n7net.in/01c16c28/45b8d6992d64c1abaecd2320ff3885c9/v0/medium/3_bhk_apartment-for-sale-science_city-Ahmedabad-hall.jpg',
    'https://housing-images.n7net.in/01c16c28/e138e74e8d22a9d37d78ac82e6cbf5b5/v0/medium/3_bhk_apartment-for-sale-bandlaguda-Hyderabad-hall.jpg'
  ]
};


const getRandomImage = (type) => {
  const images = propertyImages[type] || [];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex] || 'https://example.com/default.jpg'; // Default image if none available
};

const PropertyList = () => {
  const { type } = useParams();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/properties/propertyType/${type}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = response.data;
        console.log("Fetched properties:", data); // Debugging
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, [type]);

  return (
    
    <div className="property-list">
      <h2>{type ? type.toUpperCase() : 'Properties'}</h2>
      {properties.length > 0 ? (
        <ul>
          {properties.map((property) => (
            <li key={property.id}>
              <img
                src={getRandomImage(property.propertyType)}
                alt={`${property.propertyType} image`}
                className="property-image"
              />
              <strong>Location:</strong> {property.location}<br/>
              <strong>Size:</strong> {property.size}<br/>
              <strong>Price:</strong> {property.price}<br/>
              <strong>For Sale:</strong> {property.sale ? 'Yes' : 'No'}<br/>
              <strong>For Rent:</strong> {property.rent ? 'Yes' : 'No'}<br/>
              <strong>Details:</strong> {property.details}<br/>
              <strong>Agent Name:</strong> {property.agentName}<br/>
              <strong>Agent Contact:</strong> {property.agentContact}<br/>
            </li>
          ))}
        </ul>
      ) : (
        <p>No properties found for this type.</p>
      )}
    </div>
    
  );
};

export default PropertyList;
