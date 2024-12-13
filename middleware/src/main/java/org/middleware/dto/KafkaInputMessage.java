package org.middleware.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.middleware.mapper.*;

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

    @JsonProperty("brand_numeric")
    private Integer brandNumeric;

    @JsonProperty("model_year")
    private Integer modelYear;

    private BigDecimal milage;

    @JsonProperty("fuel_type_numeric")
    private Integer fuelTypeNumeric;

    @JsonProperty("engine_capacity")
    private BigDecimal engineCapacity;

    @JsonProperty("engine_horsepower")
    private BigDecimal engineHorsePower;

    @JsonProperty("transmission_numeric")
    private Integer transmissionNumeric;

    @JsonProperty("ext_col_numeric")
    private Integer extColNumeric;

    @JsonProperty("int_col_numeric")
    private Integer intColNumeric;

    @JsonProperty("accident_numeric")
    private Integer accidentNumeric;

    public static KafkaInputMessage fromPriceRequest(PriceRequest priceRequest, String tag) {
        var inputMessage = KafkaInputMessage.builder()
                .brandNumeric(BrandMapper.getBrandValue(priceRequest.brand()))
                .modelYear(priceRequest.modelYear())
                .milage(priceRequest.milage())
                .fuelTypeNumeric(FuelTypeMapper.getFuelTypeValue(priceRequest.fuelType()))
                .engineCapacity(priceRequest.engineCapacity())
                .engineHorsePower(priceRequest.engineHorsePower())
                .transmissionNumeric(TransmissionMapper.getTransmissionValue(priceRequest.transmission()))
                .extColNumeric(ExteriorColorMapper.getExteriorColorValue(priceRequest.extCol()))
                .intColNumeric(InteriorColorMapper.getInteriorColorValue(priceRequest.intCol()))
                .accidentNumeric(AccidentMapper.getAccidentValue(priceRequest.accident()))
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
                ", brandNumeric=" + brandNumeric +
                ", modelYear=" + modelYear +
                ", milage=" + milage +
                ", fuelTypeNumeric=" + fuelTypeNumeric +
                ", engineCapacity=" + engineCapacity +
                ", engineHorsePower=" + engineHorsePower +
                ", transmissionNumeric=" + transmissionNumeric +
                ", extColNumeric=" + extColNumeric +
                ", intColNumeric=" + intColNumeric +
                ", accidentNumeric=" + accidentNumeric +
                '}';
    }
}
