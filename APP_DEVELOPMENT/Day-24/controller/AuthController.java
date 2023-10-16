package com.example.salon.controller;



import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.salon.Entity.Customer;
import com.example.salon.dto.LoginRequest;
import com.example.salon.dto.RegisterRequest;
import com.example.salon.repository.CustomerRepository;
import com.example.salon.service.AuthService;
import com.example.salon.util.JwtUtil;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@Transactional
public class AuthController {
	@Autowired
	  private final AuthService authService;
	private final JwtUtil jwtUtil;
	 private final CustomerRepository userRepository;

	    @PostMapping("/register")
	    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
	        boolean isRegistered = authService.userRegistration(request);
	        return isRegistered ? ResponseEntity.ok("User registered successfully")
	                : ResponseEntity.badRequest().body("User already Exists");
	    }

	    @PostMapping("/login")
	    public ResponseEntity<?> authenticate(@RequestBody LoginRequest request) {
	    	System.err.println(authService.userAuthentication(request));
	        return (authService.userAuthentication(request));
	    }
	    
	    @GetMapping("/credentials/{token}")
	    public ResponseEntity<?> getCredentials(@PathVariable("token") String token) {
	        try {
	            String userEmail = jwtUtil.extractUserEmail(token);

	            Optional<Customer> userOptional = userRepository.findByEmail(userEmail);

	            if (userOptional.isPresent()) {
	                Customer user = userOptional.get();

	                // Build a response containing the login credentials
	                Map<String, String> credentials = new HashMap<>();
	                credentials.put("email", user.getEmail());
	                credentials.put("password", user.getPassword());

	                return ResponseEntity.ok(credentials);
	            } else {
	                return ResponseEntity.status(HttpStatus.NOT_FOUND)
	                        .body("User not found for the provided token.");
	            }
	        } catch (Exception e) {
	            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
	                    .body("Invalid token or error processing the request.");
	        }
	    }

	    
	    
}