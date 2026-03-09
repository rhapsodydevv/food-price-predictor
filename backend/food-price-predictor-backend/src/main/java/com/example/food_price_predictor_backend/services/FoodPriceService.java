package com.example.food_price_predictor_backend.services;

import com.example.food_price_predictor_backend.model.FoodPrice;
import com.example.food_price_predictor_backend.repositories.FoodPriceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodPriceService {
    @Autowired
    private FoodPriceRepository foodPriceRepository;

    public List<FoodPrice> getAllFoodPrices() {
        return foodPriceRepository.findAll();

    }

    public List<FoodPrice> getFoodPricesByFoodName(String productName) {
        return foodPriceRepository.findByProductName(productName);
    }
}
