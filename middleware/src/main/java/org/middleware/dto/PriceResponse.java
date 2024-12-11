package org.middleware.dto;

import java.math.BigDecimal;

public record PriceResponse(BigDecimal price, String message) {

    public static PriceResponse fromKafkaOutputMessage(KafkaOutputMessage message) {
        return new PriceResponse(message.getPrice(), "");
    }

    @Override
    public String toString() {
        return "{" +
                "message='" + message + '\'' +
                "price=" + price +
                '}';
    }
}
