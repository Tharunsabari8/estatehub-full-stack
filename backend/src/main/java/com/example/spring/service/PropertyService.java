package com.example.spring.service;

import java.util.List;
import com.example.spring.dto.PropertyDTO;
import com.example.spring.dto.SearchCriteria;

public interface PropertyService {
    List<PropertyDTO> getAllProperties();
    PropertyDTO getPropertyById(Long id);
    PropertyDTO createProperty(PropertyDTO propertyDTO);
    PropertyDTO updateProperty(Long id, PropertyDTO propertyDTO);
    void deleteProperty(Long id);
    List<PropertyDTO> searchProperties(SearchCriteria searchCriteria);
    List<PropertyDTO> getPropertiesByBhk(String bhk);
    List<PropertyDTO> getPropertiesByPropertyType(String propertyType);
}
