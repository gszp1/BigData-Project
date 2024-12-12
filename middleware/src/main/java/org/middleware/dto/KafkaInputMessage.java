package org.middleware.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.UUID;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class KafkaInputMessage implements Serializable {
    private String tag;

    private String brand;

    private String model;

    @JsonProperty("model_year")
    private Integer modelYear;

    private BigDecimal milage;

    @JsonProperty("fuel_type")
    private String fuelType;

    @JsonProperty("engine_capacity")
    private BigDecimal engineCapacity;

    @JsonProperty("engine_horsepower")
    private BigDecimal engineHorsePower;

    private String transmission;

    @JsonProperty("ext_col")
    private String extCol;

    @JsonProperty("int_col")
    private String intCol;

    private String accident;

    @JsonProperty("clean_title")
    private String cleanTitle;

    public static KafkaInputMessage fromPriceRequest(PriceRequest priceRequest, String tag) {
        var inputMessage = KafkaInputMessage.builder()
                .brand(priceRequest.brand())
                .model(priceRequest.model())
                .modelYear(priceRequest.modelYear())
                .milage(priceRequest.milage())
                .fuelType(priceRequest.fuelType())
                .engineCapacity(priceRequest.engineCapacity())
                .engineHorsePower(priceRequest.engineHorsePower())
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
