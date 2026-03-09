package com.example.food_price_predictor_backend.controllers;

import com.example.food_price_predictor_backend.model.ApiResponse;
import com.example.food_price_predictor_backend.model.FoodPrice;
import com.example.food_price_predictor_backend.services.FoodPriceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class FoodPriceController {
    @Autowired
    private FoodPriceService foodPriceService;

    @GetMapping("/food-prices")
    public ResponseEntity<ApiResponse<List<FoodPrice>>> getAllFoodPrices(){
        List<FoodPrice> foodPrices = foodPriceService.getAllFoodPrices();
        return ResponseEntity.ok(new ApiResponse<>(1,"Food prices retrieved successfully", foodPrices));
    }

    @GetMapping("/food-prices/{productName}")
    public ResponseEntity<ApiResponse<List<FoodPrice>>> getFoodPricesByFoodName(String productName){
        List<FoodPrice> foodPrices = foodPriceService.getFoodPricesByFoodName(productName);
        return ResponseEntity.ok(new ApiResponse<>(1,"Food prices retrieved successfully", foodPrices));
    }
}
