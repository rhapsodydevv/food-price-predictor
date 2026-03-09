package com.example.food_price_predictor_backend.services;

import com.example.food_price_predictor_backend.model.FoodPrice;
import com.example.food_price_predictor_backend.repositories.FoodPriceRepository;
import org.springframework.batch.core.step.tasklet.CommandRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Service
public class CsvImportService implements CommandLineRunner {
    @Autowired
    private FoodPriceRepository foodPriceRepository;

    public void loadCsvToDatabase() throws Exception {
        BufferedReader reader = new BufferedReader(
                new InputStreamReader(new ClassPathResource("food_prices.csv").getInputStream())
        );
        String line;
        reader.readLine(); // skip header
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        while ((line = reader.readLine()) != null) {
            String[] fields = line.split(",");
            FoodPrice foodPrice = new FoodPrice();
            foodPrice.setId(Long.parseLong(fields[0]));
            foodPrice.setProductName(fields[1]);
            foodPrice.setCategory(fields[2]);
            foodPrice.setRegion(fields[3]);
            foodPrice.setUnit(fields[4]);
            foodPrice.setPriceKES(Double.parseDouble(fields[5]));
            foodPrice.setCurrency(fields[6]);
            foodPrice.setDate(LocalDate.parse(fields[7], formatter));
            foodPriceRepository.save(foodPrice);
        }
        reader.close();
    }

    @Override
    public void run(String... args) throws Exception {
        loadCsvToDatabase();
    }

}
