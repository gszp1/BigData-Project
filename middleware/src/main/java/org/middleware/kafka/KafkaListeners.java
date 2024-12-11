package org.middleware.kafka;

import lombok.extern.slf4j.Slf4j;
import org.middleware.dto.KafkaOutputMessage;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@Component
public class KafkaListeners {

    @Value("${spring.kafka.producer.topic}")
    private String producerTopic;

    @Value("${spring.kafka.consumer.group-id}")
    private String groupId;

    private final ConcurrentHashMap<String, CompletableFuture<BigDecimal>> carPriceHashMap;

    public KafkaListeners(
            @Qualifier("carPriceHashMap") ConcurrentHashMap<String, CompletableFuture<BigDecimal>> carPriceHashMap) {
        this.carPriceHashMap = carPriceHashMap;
    }

    @KafkaListener(topics = "output", groupId = "output-consumers")
    void listener(KafkaOutputMessage message) {
        log.info("LISTENER: Received kafka message with data {} from topic {}", producerTopic, message);
        CompletableFuture<BigDecimal> future = carPriceHashMap.get(message.getTag());
        if (future != null) {
            future.complete(message.getPrice());
            carPriceHashMap.remove(message.getTag());
            log.info("LISTENER: Completed future for tag {} with price {}", message.getTag(), message.getPrice());
        } else {
            log.warn("LISTENER: No future for tag {}", message.getTag());
        }
    }
}
