package com.example.Employeemanagement;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class WelcomeController {

    @GetMapping("/hello")
    
    
    public String welcome(){
        return "Hello world";
    }
    
}
