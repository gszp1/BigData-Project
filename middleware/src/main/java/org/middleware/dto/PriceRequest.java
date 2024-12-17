package org.middleware.dto;

import java.math.BigDecimal;

public record PriceRequest(
        String brand,
        Integer modelYear,
        BigDecimal milage,
        String fuelType,
        BigDecimal engineCapacity,
        BigDecimal engineHorsepower,
        String transmission,
        String extCol,
        String intCol,
        String accident
) {
    @Override
    public String toString() {
        return "{" +
                "brand='" + brand + '\'' +
                ", modelYear=" + modelYear +
                ", milage=" + milage +
                ", fuelType='" + fuelType + '\'' +
                ", engineCapacity=" + engineCapacity +
                ", engineHorsepower=" + engineHorsepower +
                ", transmission='" + transmission + '\'' +
                ", extCol='" + extCol + '\'' +
                ", intCol='" + intCol + '\'' +
                ", accident='" + accident + '\'' +
                '}';
    }
}
