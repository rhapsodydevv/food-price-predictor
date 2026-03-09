package com.example.food_price_predictor_backend.model;

import lombok.Data;

@Data
public class ApiResponse <T>{
    private int status;
    private String message;
    private T data;

    public ApiResponse(int status, String message, T data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
}
