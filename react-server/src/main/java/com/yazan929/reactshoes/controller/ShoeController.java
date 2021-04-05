package com.yazan929.reactshoes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import com.yazan929.reactshoes.modal.Shoe;
import com.yazan929.reactshoes.repository.ShoeRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class ShoeController {

	 @Autowired
	    private ShoeRepository userRepository;

	    @GetMapping("users")
	    public List < Shoe > getUsers() {
	        return this.userRepository.findAll();
	    }
}
