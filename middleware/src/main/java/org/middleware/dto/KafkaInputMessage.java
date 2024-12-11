package org.middleware.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.UUID;

@Builder
@AllArgsConstructor
@NoArgsConstructor
public class KafkaInputMessage {
    private String tag;
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

    public static KafkaInputMessage fromPriceRequest(PriceRequest priceRequest, String tag) {
        var inputMessage =  KafkaInputMessage.builder()
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
        if (tag == null) {
            inputMessage.tag = UUID.randomUUID().toString();
        } else {
            inputMessage.tag = tag;
        }
        return inputMessage;
    }

    @Override
    public String toString() {
        return "{" +
                "tag='" + tag + '\'' +
                ", brand='" + brand + '\'' +
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
