package com.example.salon.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.salon.Entity.PaymentEntity;
import com.example.salon.repository.PaymentRepository;

@RestController
@RequestMapping("/payments")
@CrossOrigin("*")
public class PaymentController {

    @Autowired
    private PaymentRepository paymentRepository;

    @PostMapping("/pay")
    public ResponseEntity<PaymentEntity> makePayment(@RequestBody PaymentEntity paymentEntity) {
        PaymentEntity savedPayment = paymentRepository.save(paymentEntity);
        return new ResponseEntity<>(savedPayment, HttpStatus.CREATED);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<PaymentEntity>> getAllPayments() {
        List<PaymentEntity> payments = paymentRepository.findAll();
        return new ResponseEntity<>(payments, HttpStatus.OK);
    }
}
