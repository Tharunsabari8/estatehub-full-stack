package com.example.spring.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.spring.dto.PropertyDTO;
import com.example.spring.dto.SearchCriteria;
import com.example.spring.entity.Property;
import com.example.spring.repository.PropertyRepository;
import com.example.spring.service.PropertyService;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PropertyServiceImpl implements PropertyService {

    @Autowired
    private PropertyRepository propertyRepository;

    @Override
    public List<PropertyDTO> getAllProperties() {
        return propertyRepository.findAll().stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    @Override
    public PropertyDTO getPropertyById(Long id) {
        return propertyRepository.findById(id).map(this::convertToDTO).orElse(null);
    }
    //Long id, String location, String bhk, String propertyType, String size, String price, boolean sale, boolean rent, String details, String agentName, String agentContact

    @Override
    public PropertyDTO createProperty(PropertyDTO propertyDTO) {
        Property property = new Property(propertyDTO.getId(),propertyDTO.getLocation(),propertyDTO.getAddress(),propertyDTO.getBhk(),propertyDTO.getPropertyType(),propertyDTO.getSize(),propertyDTO.getPrice(),propertyDTO.getSale(),propertyDTO.getRent(),propertyDTO.getDetails(),propertyDTO.getAgentName(),propertyDTO.getAgentContact());
        propertyRepository.save(property);
		return propertyDTO;
        
    }

    @Override
    public PropertyDTO updateProperty(Long id, PropertyDTO propertyDTO) {
        Property existingProperty = propertyRepository.findById(id).orElse(null);
        if (existingProperty != null) {
            existingProperty.setLocation(propertyDTO.getLocation());
            existingProperty.setBhk(propertyDTO.getBhk());
            existingProperty.setPropertyType(propertyDTO.getPropertyType());
            existingProperty.setSize(propertyDTO.getSize());
            existingProperty.setPrice(propertyDTO.getPrice());
            existingProperty.setSale(propertyDTO.isSale());
            existingProperty.setRent(propertyDTO.isRent());
            existingProperty.setDetails(propertyDTO.getDetails());
            existingProperty.setAgentName(propertyDTO.getAgentName());
            existingProperty.setAgentContact(propertyDTO.getAgentContact());
            return convertToDTO(propertyRepository.save(existingProperty));
        }
        return null;
    }

    @Override
    public void deleteProperty(Long id) {
        propertyRepository.deleteById(id);
    }

    @Override
    public List<PropertyDTO> getPropertiesByBhk(String bhk) {
        return propertyRepository.findByBhk(bhk).stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    @Override
    public List<PropertyDTO> getPropertiesByPropertyType(String propertyType) {
        return propertyRepository.findByPropertyType(propertyType).stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    @Override
    public List<PropertyDTO> searchProperties(SearchCriteria searchCriteria) {
        // Construct query based on search criteria
        List<Property> properties = propertyRepository.findAll().stream()
            .filter(property -> (searchCriteria.getLocation() == null || property.getLocation().contains(searchCriteria.getLocation())) &&
                                (searchCriteria.getBhk() == null || property.getBhk().equals(searchCriteria.getBhk())) &&
                                (searchCriteria.getPropertyType() == null || property.getPropertyType().equals(searchCriteria.getPropertyType())) &&
                                (searchCriteria.getSizeMin() == null || Double.parseDouble(property.getSize()) >= Double.parseDouble(searchCriteria.getSizeMin())) &&
                                (searchCriteria.getSizeMax() == null || Double.parseDouble(property.getSize()) <= Double.parseDouble(searchCriteria.getSizeMax())) &&
                                (searchCriteria.getBudgetMin() == null || Double.parseDouble(property.getPrice()) >= Double.parseDouble(searchCriteria.getBudgetMin())) &&
                                (searchCriteria.getBudgetMax() == null || Double.parseDouble(property.getPrice()) <= Double.parseDouble(searchCriteria.getBudgetMax())) &&
                                (searchCriteria.isSale() == property.isSale()) &&
                                (searchCriteria.isRent() == property.isRent()))
            .collect(Collectors.toList());

        return properties.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    private PropertyDTO convertToDTO(Property property) {
        PropertyDTO dto = new PropertyDTO();
        dto.setId(property.getId());
        dto.setLocation(property.getLocation());
        dto.setBhk(property.getBhk());
        dto.setPropertyType(property.getPropertyType());
        dto.setSize(property.getSize());
        dto.setPrice(property.getPrice());
        dto.setSale(property.isSale());
        dto.setRent(property.isRent());
        dto.setDetails(property.getDetails());
        dto.setAgentName(property.getAgentName());
        dto.setAgentContact(property.getAgentContact());
        return dto;
    }

    private Property convertToEntity(PropertyDTO dto) {
        Property property = new Property();
        property.setLocation(dto.getLocation());
        property.setBhk(dto.getBhk());
        property.setPropertyType(dto.getPropertyType());
        property.setSize(dto.getSize());
        property.setPrice(dto.getPrice());
        property.setSale(dto.isSale());
        property.setRent(dto.isRent());
        property.setDetails(dto.getDetails());
        property.setAgentName(dto.getAgentName());       
        property.setAgentContact(dto.getAgentContact());
        return property;
    }
}
