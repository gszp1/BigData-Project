package org.middleware.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Builder
@AllArgsConstructor
@NoArgsConstructor
public class KafkaOutputMessage {
    private String tag;
    private BigDecimal price;

    @Override
    public String toString() {
        return "{" +
                "tag='" + tag + '\'' +
                ", price=" + price +
                '}';
    }
}
