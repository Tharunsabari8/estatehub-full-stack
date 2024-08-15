import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import Card from "react-bootstrap/Card";

const Exploreproperty = () => {
  const navigate = useNavigate();

  const navigateToProperties = (type) => {
    navigate(`/properties/${type}`);
  };

  return (
    <div className="exploreprop">
      <p className="section-subtitle" id="Properties">Explore Properties</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
        <Card className="card expcard" style={{ width: '15%', margin: '10px' }} onClick={() => navigateToProperties('Plot')}>
          <Card.Img variant="top" src='/Assets/Images/Plot.png' className="cimg" />
          <Card.Body>
            <Card.Title className='exphead'>PLOTS AND LANDS</Card.Title>
            <Card.Text className='expbody'>
              Discover available plots and lands for sale.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card expcard" style={{ width: '15%', margin: '10px' }} onClick={() => navigateToProperties('Villa')}>
          <Card.Img variant="top" src='/Assets/Images/Villa.png' className="cimg" />
          <Card.Body>
            <Card.Title className='exphead'>INDIVIDUAL VILLAS</Card.Title>
            <Card.Text className='expbody'>
              Browse individual villas for your dream home.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card expcard" style={{ width: '15%', margin: '10px' }} onClick={() => navigateToProperties('Commercial Building')}>
          <Card.Img variant="top" src='/Assets/Images/Commercial.png' className="cimg" />
          <Card.Body>
            <Card.Title className='exphead'>COMMERCIAL BUILDINGS</Card.Title>
            <Card.Text className='expbody'>
              Explore commercial buildings for your business needs.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card expcard" style={{ width: '15%', margin: '10px' }} onClick={() => navigateToProperties('Pg/rental')}>
          <Card.Img variant="top" src='/Assets/Images/Rental.png' className="cimg" />
          <Card.Body>
            <Card.Title className='exphead'>PG/RENTAL</Card.Title>
            <Card.Text className='expbody'>
              Find rental properties and PG accommodations.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card expcard" style={{ width: '15%', margin: '10px' }} onClick={() => navigateToProperties('Flat')}>
          <Card.Img variant="top" src='/Assets/Images/flats-for-sale.jpg' className="cimg" />
          <Card.Body>
            <Card.Title className='exphead'>LUXURIOUS FLATS</Card.Title>
            <Card.Text className='expbody'>
              Discover luxurious flats for sale.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card expcard" style={{ width: '15%', margin: '10px' }} onClick={() => navigateToProperties('House')}>
          <Card.Img variant="top" src='/Assets/Images/compacthouses.jpg' className="cimg" />
          <Card.Body>
            <Card.Title className='exphead'>COMPACT HOUSES</Card.Title>
            <Card.Text className='expbody'>
              Discover compact houses for sale.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Exploreproperty;
  