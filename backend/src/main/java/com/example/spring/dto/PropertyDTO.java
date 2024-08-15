package com.example.spring.dto;

public class PropertyDTO {
    private Long id;
    private String location;
    private String bhk; 
    private String propertyType;
    private String address;
	private String size;
    private String price;
    private boolean sale;
    private boolean rent;
    private String details;
    private String agentName;
    private String agentContact;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
    public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
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
 public boolean getSale() {
	 return this.sale;
 }
    public boolean isRent() {
        return rent;
    }
    public boolean getRent() {
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
