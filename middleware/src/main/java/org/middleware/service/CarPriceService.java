package org.middleware.service;

import org.middleware.dto.PriceRequestDto;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Optional;

@Service
public class CarPriceService {

    public Optional<BigDecimal> getCarPrice(PriceRequestDto request) {
        return Optional.of(new BigDecimal("2137"));
    }
}
