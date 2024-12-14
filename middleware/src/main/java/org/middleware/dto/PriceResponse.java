package org.middleware.dto;

import java.math.BigDecimal;

public record PriceResponse(BigDecimal price, String message) {

    @Override
    public String toString() {
        return "{" +
                "message='" + message + '\'' +
                "price=" + price +
                '}';
    }
}
