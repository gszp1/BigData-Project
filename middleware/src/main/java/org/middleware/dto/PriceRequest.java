package org.middleware.dto;

import java.math.BigDecimal;

public record PriceRequest(
        String brand,
        String model,
        Integer modelYear,
        BigDecimal milage,
        String fuelType,
        String engine,
        String transmission,
        String extCol,
        String intCol,
        String accident,
        String cleanTitle
) {
}
