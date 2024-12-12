package org.middleware.dto;

import java.math.BigDecimal;

public record PriceRequest(
        String brand,
        String model,
        Integer modelYear,
        BigDecimal milage,
        String fuelType,
        BigDecimal engineCapacity,
        BigDecimal engineHorsePower,
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
                ", engineCapacity=" + engineCapacity +
                ", engineHorsePower=" + engineHorsePower +
                ", transmission='" + transmission + '\'' +
                ", extCol='" + extCol + '\'' +
                ", intCol='" + intCol + '\'' +
                ", accident='" + accident + '\'' +
                ", cleanTitle='" + cleanTitle + '\'' +
                '}';
    }
}
