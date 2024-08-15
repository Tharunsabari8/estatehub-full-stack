package com.example.spring.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "properties")
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	private String location;
	private String address;
    
	private String bhk; // New field
    private String propertyType; // New field
    private String size;
    private String price;
    private boolean sale;
    private boolean rent;
    private String details;
    private String agentName;
    private String agentContact;

    // Default constructor
    public Property() {
    }

    // Parameterized constructor
    public Property(Long id, String location,String address, String bhk, String propertyType, String size, String price, boolean sale, boolean rent, String details, String agentName, String agentContact) {
        this.id = id;
        this.location = location;
        this.bhk = bhk;
        this.address=address;
        this.propertyType = propertyType;
        this.size = size;
        this.price = price;
        this.sale = sale;
        this.rent = rent;
        this.details = details;
        this.agentName = agentName;
        this.agentContact = agentContact;
    }

    // Getters and Setters
    // Add getters and setters for bhk and propertyType
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    
    public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}


    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getBhk() {
        return bhk;
    }

    public void setBhk(String bhk) {
        this.bhk = bhk;
    }

    public String getPropertyType() {
        return propertyType;
    }

    public void setPropertyType(String propertyType) {
        this.propertyType = propertyType;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public boolean isSale() {
        return sale;
    }

    public void setSale(boolean sale) {
        this.sale = sale;
    }

    public boolean isRent() {
        return rent;
    }

    public void setRent(boolean rent) {
        this.rent = rent;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public String getAgentName() {
        return agentName;
    }

    public void setAgentName(String agentName) {
        this.agentName = agentName;
    }

    public String getAgentContact() {
        return agentContact;
    }

    public void setAgentContact(String agentContact) {
        this.agentContact = agentContact;
    }
}
