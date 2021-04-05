package com.yazan929.reactshoes.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest")
public class HelloWorldController {
	
	@RequestMapping("/hello")
	
	public String sayHello() {
		return "Hello Spring boot";
	}

}
