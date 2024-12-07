package org.middleware.controller;

import org.middleware.dto.PriceRequestDto;
import org.middleware.dto.PriceResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;

@RestController
@RequestMapping("/api/car-price")
public class CarPriceController {

    @GetMapping("")
    public ResponseEntity<PriceResponseDto> getCarPrice(@RequestBody PriceRequestDto request) {
        return ResponseEntity.ok(new PriceResponseDto(new BigDecimal("2137")));
    }
}
