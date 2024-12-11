package org.middleware.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@NoArgsConstructor
@AllArgsConstructor
@Builder
public class KafkaInputMessage {

    private String brand;
    private String model;
    private Integer modelYear;
    private BigDecimal milage;
    private String fuelType;
    private String engine;
    private String transmission;
    private String extCol;
    private String intCol;
    private String accident;
    private String cleanTitle;

    public static KafkaInputMessage fromPriceRequest(PriceRequest priceRequest) {
        return KafkaInputMessage.builder()
                .brand(priceRequest.brand())
                .model(priceRequest.model())
                .modelYear(priceRequest.modelYear())
                .milage(priceRequest.milage())
                .fuelType(priceRequest.fuelType())
                .engine(priceRequest.engine())
                .transmission(priceRequest.transmission())
                .extCol(priceRequest.extCol())
                .intCol(priceRequest.intCol())
                .accident(priceRequest.accident())
                .cleanTitle(priceRequest.cleanTitle())
                .build();
    }
}
