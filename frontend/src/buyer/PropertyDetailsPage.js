import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PropertyDetailsPage.css';
import Patta from './Patta-certificate.pdf'
import EC from './EC-Document.pdf'
const propertyImages = {
  Villa: [
    'https://www.favouritehomes.com/wp-content/uploads/2022/01/luxury-villa-life.jpg',
    'https://image.architonic.com/prj2-3/20714433/swissfineline-reference--villalakezurich-pic01-villa-zurichsee-1-arcit18.jpg',
    'https://www.greentechbuilders.in/projectg16479c90843343.jpg',
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

const handleShowPdf = (pdfPath) => {
  window.open(pdfPath, '_blank'); // Opens the PDF in a new tab
};


const PropertyDetailsPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const amenities = [
    "Swimming pool",
    "Gym",
    "24/7 Security",
    "Parking",
    "Garden",
    "Playground",
    "Clubhouse"
  ];

  const getRandomImage = (type) => {
    const images = propertyImages[type] || [];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex] || 'https://example.com/default.jpg';
  };

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`http://localhost:8080/api/properties/${id}`);
        setProperty(response.data);
      } catch (error) {
        setError('Error fetching property details');
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyDetails();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!property) {
    return <p>No property found.</p>;
  }

  return (
    
    <div className="property-details-page">
    <div className='firstdetail'>
      {/* Images displayed one below the other */}
      <div className='imgdiv'>
        <img
          src={getRandomImage(property.propertyType)}
          alt={`${property.propertyType} in ${property.location}`}
          className="propertydetails-image"
        />
        <img
          src={getRandomImage(property.propertyType)}
          alt={`${property.propertyType} in ${property.location}`}
          className="propertydetails-image"
        />
        <img
          src={getRandomImage(property.propertyType)}
          alt={`${property.propertyType} in ${property.location}`}
          className="propertydetails-image"
        />
      </div>
      
      <div className="property-details-container">
        <h2>{property.propertyType} in {property.location}</h2>
        <div className="property-bhk"><strong>BHK:</strong> {property.bhk}</div>
        <br/>
        <div className="property-size"><strong>Size:</strong> {property.size}</div>
        <br/><div className="property-price"><strong>Price:</strong> {property.sale ? `Buy at ${property.price}` : `Rental Property at ${property.price}`}</div>
        <br/><strong>Address : </strong><a>675, Thiruvalluvar street, Sadhasiva Nagar, Madurai - 625020</a>
        <div className="property-agent">
          <br/><strong>Agent Name:</strong> {property.agentName}
        </div>
        <div>
          <br/><strong>Agent Contact:</strong> {property.agentContact}
        </div>
        <br/>
        <div className="property-details"><strong>Details:</strong> {property.details}</div><br/>
          <h3><strong>Property Documents:</strong></h3><br/>
          <div className='property-details-patta'>
  <button 
    onClick={() => handleShowPdf(Patta)} 
    className="pdf-button" 
    style={{ backgroundColor: 'orange', color: 'black', borderRadius: '8px', padding: '10px' }}
  >
    <strong>Patta-Certificate</strong>
  </button>
  <button 
    onClick={() => handleShowPdf(EC)} 
    className="pdf-button" 
    style={{ backgroundColor: 'orange', color: 'black', borderRadius: '8px', padding: '10px' }}
  >
    <strong>E.C Certificate</strong>
  </button>
</div>
        </div>
      </div>
      <div className='seconddetail'>
      <div className="property-amenities">
          <h3 style={{color:'orange'}}>Amenities:</h3>
          <ul>
            {amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>
        <div className='nearby-facilities'>
        <h1 style={{color:'orange'}}>Nearby Facilities :</h1>
        <a>
        <b>Railway Station :</b> Only 2 km away, the central railway station provides easy and quick access for daily commuting and long-distance travel.
        <br/><b>Airport: </b>The international airport is just a 15-minute drive from the property, offering convenience for frequent travelers.
        <br/><b>Schools: </b>Top-rated schools are located within a 3-5 km radius, ensuring quality education for families with children.
        <br/><b>Hospitals: </b>Nearby hospitals, including multi-specialty centers, are easily accessible within a 5 km radius, ensuring quick medical assistance when needed.
        <br/><b>Shopping Centers: </b>Multiple shopping centers and supermarkets are within a 3-5 km radius, offering a wide range of retail options and daily necessities.
        <br/><b>Public Transportation: </b>Local bus stops and taxi services are conveniently located nearby, making it easy to navigate the city.
        <br/><b>Parks and Recreation: </b>Several parks and recreational facilities are close by, providing green spaces for relaxation and outdoor activities.
        </a>
        </div>
        </div>
      </div>
  );
};

export default PropertyDetailsPage;
