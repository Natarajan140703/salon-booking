package com.example.salon.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.salon.Entity.UserSignupEntity;
import com.example.salon.repository.UserRepository;


@RestController
@CrossOrigin("*")
@RequestMapping("/usersignup")
public class UserSignupController {

	@Autowired UserRepository repo;

	@PostMapping("/post")
	private UserSignupEntity PostUser(@RequestBody UserSignupEntity s){
		return repo.save(s);
	}
	@GetMapping("/get")
	private Iterable<UserSignupEntity> GetUsers(){
		return repo.findAll();
	}

}