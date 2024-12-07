package org.middleware.controller;

import org.middleware.dto.PriceRequestDto;
import org.middleware.dto.PriceResponseDto;
import org.middleware.service.CarPriceService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.math.BigDecimal;

@RestController
@RequestMapping("/api/car-price")
public class CarPriceController {

    private final CarPriceService carPriceService;

    public CarPriceController(CarPriceService carPriceService) {
        this.carPriceService = carPriceService;
    }

    @PostMapping("")
    public ResponseEntity<PriceResponseDto> getCarPrice(@RequestBody PriceRequestDto request) {
        return ResponseEntity.ok(
                new PriceResponseDto(carPriceService.getCarPrice(request).get())
        );
    }
}
