package org.middleware.dto;

import lombok.*;

import java.io.Serializable;
import java.math.BigDecimal;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class KafkaOutputMessage implements Serializable {
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
