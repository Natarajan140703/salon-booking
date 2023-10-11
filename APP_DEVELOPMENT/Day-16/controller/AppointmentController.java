package com.example.salon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.salon.Entity.AppointmentEntity;
import com.example.salon.repository.AppointmentRepository;

@RestController
@CrossOrigin("*")
@RequestMapping("/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @PostMapping("/book")
    public AppointmentEntity bookAppointment(@RequestBody AppointmentEntity appointment) {
        return appointmentRepository.save(appointment);
    }

    @GetMapping("/all")
    public Iterable<AppointmentEntity> getAllAppointments() {
        return appointmentRepository.findAll();
    }
}
