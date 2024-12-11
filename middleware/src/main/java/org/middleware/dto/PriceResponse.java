package org.middleware.dto;

import java.math.BigDecimal;


public record PriceResponse(BigDecimal price) {

    @Override
    public String toString() {
        return "{" +
                "price=" + price +
                '}';
    }
}
