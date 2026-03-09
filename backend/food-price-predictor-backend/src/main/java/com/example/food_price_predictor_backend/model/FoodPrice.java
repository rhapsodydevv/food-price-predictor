package com.example.food_price_predictor_backend.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
public class FoodPrice {
    @Id
    private Long id;
    private String productName;
    private String category;
    private String region;
    private String unit;
    private Double priceKES;
    private String currency;
    private LocalDate date;


    //id, product_name, category, region, country, market, unit, price_usd, currency, date, source
}
