package org.middleware.dto;

import java.math.BigDecimal;

public record PriceResponse(BigDecimal price) {

    public static PriceResponse fromKafkaOutputMessage(KafkaOutputMessage message) {
        return new PriceResponse(message.getPrice());
    }

    @Override
    public String toString() {
        return "{" +
                "price=" + price +
                '}';
    }
}
