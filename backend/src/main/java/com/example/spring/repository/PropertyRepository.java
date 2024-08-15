package com.example.spring.repository;

import com.example.spring.entity.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Long> {
    List<Property> findByBhk(String bhk);
    List<Property> findByPropertyType(String propertyType);
}
