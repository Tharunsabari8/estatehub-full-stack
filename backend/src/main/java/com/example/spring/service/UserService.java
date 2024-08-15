package com.example.spring.service;

import java.util.List;

import com.example.spring.entity.User;

public interface UserService {
    User registerUser(User user) throws Exception;
    User findByEmail(String email);
    List<User> findAllUsers(); 
}
