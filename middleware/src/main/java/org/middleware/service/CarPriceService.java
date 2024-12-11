package org.middleware.service;

import org.middleware.dto.PriceRequest;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Optional;

@Service
public class CarPriceService {

    public Optional<BigDecimal> getCarPrice(PriceRequest request) {
        return Optional.of(new BigDecimal("2137"));
    }
}
