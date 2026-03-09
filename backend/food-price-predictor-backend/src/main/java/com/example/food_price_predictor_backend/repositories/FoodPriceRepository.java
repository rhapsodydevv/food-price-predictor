package com.example.food_price_predictor_backend.repositories;

import com.example.food_price_predictor_backend.model.FoodPrice;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FoodPriceRepository extends JpaRepository<FoodPrice, Long> {
    List<FoodPrice> findByProductName(String productName);
    List<FoodPrice> findByRegion(String region);
}
