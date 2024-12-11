package org.middleware.dto;

import lombok.*;

import java.math.BigDecimal;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
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
