package com.example.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.spring.dto.PropertyDTO;
import com.example.spring.dto.SearchCriteria;
import com.example.spring.service.PropertyService;

import java.util.List;

@CrossOrigin("*") //enables cross origin requests from any domain
@RestController
@RequestMapping("/api/properties")
public class PropertyController {

    @Autowired //connects service and controller
    private PropertyService propertyService;

    @GetMapping
    public List<PropertyDTO> getAllProperties() {
        return propertyService.getAllProperties();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PropertyDTO> getPropertyById(@PathVariable Long id) {
        PropertyDTO propertyDTO = propertyService.getPropertyById(id);
        return propertyDTO != null ? ResponseEntity.ok(propertyDTO) : ResponseEntity.notFound().build();
    }

    @PostMapping("/add")
    public ResponseEntity<PropertyDTO> createProperty(@RequestBody PropertyDTO propertyDTO) {
        PropertyDTO createdProperty = propertyService.createProperty(propertyDTO);
        return ResponseEntity.status(201).body(createdProperty);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PropertyDTO> updateProperty(@PathVariable Long id, @RequestBody PropertyDTO propertyDTO) {
        PropertyDTO updatedProperty = propertyService.updateProperty(id, propertyDTO);
        return updatedProperty != null ? ResponseEntity.ok(updatedProperty) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProperty(@PathVariable Long id) {
        propertyService.deleteProperty(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/search")
    public ResponseEntity<List<PropertyDTO>> searchProperties(@RequestBody SearchCriteria searchCriteria) {
        List<PropertyDTO> properties = propertyService.searchProperties(searchCriteria);
        return properties != null && !properties.isEmpty() ? ResponseEntity.ok(properties) : ResponseEntity.notFound().build();
    }

    @GetMapping("/bhk/{bhk}")
    public ResponseEntity<List<PropertyDTO>> getPropertiesByBhk(@PathVariable String bhk) {
        List<PropertyDTO> properties = propertyService.getPropertiesByBhk(bhk);
        return properties != null && !properties.isEmpty() ? ResponseEntity.ok(properties) : ResponseEntity.notFound().build();
    }

    @GetMapping("/propertyType/{propertyType}")
    public ResponseEntity<List<PropertyDTO>> getPropertiesByPropertyType(@PathVariable String propertyType) {
        List<PropertyDTO> properties = propertyService.getPropertiesByPropertyType(propertyType);
        return properties != null && !properties.isEmpty() ? ResponseEntity.ok(properties) : ResponseEntity.notFound().build();
    }
}
