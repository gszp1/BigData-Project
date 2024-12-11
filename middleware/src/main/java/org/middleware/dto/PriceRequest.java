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
    @Override
    public String toString() {
        return "{" +
                "brand='" + brand + '\'' +
                ", model='" + model + '\'' +
                ", modelYear=" + modelYear +
                ", milage=" + milage +
                ", fuelType='" + fuelType + '\'' +
                ", engine='" + engine + '\'' +
                ", transmission='" + transmission + '\'' +
                ", extCol='" + extCol + '\'' +
                ", intCol='" + intCol + '\'' +
                ", accident='" + accident + '\'' +
                ", cleanTitle='" + cleanTitle + '\'' +
                '}';
    }
}
