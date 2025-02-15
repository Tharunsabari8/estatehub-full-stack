import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchComponent.css';

const SearchComponent = ({ onSearch }) => {
  const [searchCriteria, setSearchCriteria] = useState({
    location: '',
    bhk: '',
    propertyType: '',
    budgetMin: '',
    budgetMax: '',
    sizeMin: '',
    sizeMax: '',
    sale: false,
    rent: false,
  });

  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const type = query.get('type');

    if (type === 'Sale') {
      setSearchCriteria((prevState) => ({
        ...prevState,
        sale: true,
        rent: false,
      }));
    } else if (type === 'Rent') {
      setSearchCriteria((prevState) => ({
        ...prevState,
        sale: false,
        rent: true,
      }));
    }
  }, [location.search]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSearchCriteria({
      ...searchCriteria,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSearch = () => {
    onSearch(searchCriteria);
  };

  return (
    <div className="search-container">
      <div className="search-fields">
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={searchCriteria.location}
          onChange={handleInputChange}
        />
        <select name="bhk" value={searchCriteria.bhk} onChange={handleInputChange}>
          <option value="">BHK</option>
          <option value="1">1 BHK</option>
          <option value="2">2 BHK</option>
          <option value="3">3 BHK</option>
          <option value="4">4 BHK</option>
          <option value="5">5+ BHK</option>
        </select>
        <select name="propertyType" value={searchCriteria.propertyType} onChange={handleInputChange}>
          <option value="">Property Type</option>
          <option value="Flat">Flat</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          <option value="Commercial Building">Commercial Buildings</option>
          <option value="House">House</option>
          <option value="Pg/rental">PG/Rental</option>
        </select>
        <input
          type="number"
          name="budgetMin"
          placeholder="Min Budget"
          value={searchCriteria.budgetMin}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="budgetMax"
          placeholder="Max Budget"
          value={searchCriteria.budgetMax}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="sizeMin"
          placeholder="Min Size"
          value={searchCriteria.sizeMin}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="sizeMax"
          placeholder="Max Size"
          value={searchCriteria.sizeMax}
          onChange={handleInputChange}
        />
        <div className="toggle-buttons">
          <label>
            Sale
            <input
              type="checkbox"
              name="sale"
              checked={searchCriteria.sale}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Rent
            <input
              type="checkbox"
              name="rent"
              checked={searchCriteria.rent}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchComponent;
