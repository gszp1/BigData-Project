package org.middleware.service;

import lombok.extern.slf4j.Slf4j;
import org.middleware.dto.KafkaInputMessage;
import org.middleware.dto.PriceRequest;
import org.middleware.dto.PriceResponse;
import org.middleware.kafka.KafkaProducers;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Optional;
import java.util.UUID;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeUnit;

@Slf4j
@Service
public class CarPriceService {

    private final ConcurrentHashMap<String, CompletableFuture<BigDecimal>> carPriceHashMap;

    private final KafkaProducers kafkaProducer;

    public CarPriceService(
            @Qualifier("carPriceHashMap") ConcurrentHashMap<String, CompletableFuture<BigDecimal>> carPriceHashMap,
            KafkaProducers kafkaProducer
    ) {
        this.carPriceHashMap = carPriceHashMap;
        this.kafkaProducer = kafkaProducer;
    }

    public Optional<PriceResponse> getCarPrice(PriceRequest request) {
        var tag = UUID.randomUUID().toString();
        var kafkaMessage = KafkaInputMessage.fromPriceRequest(request, tag);
        CompletableFuture<BigDecimal> future = new CompletableFuture<>();
        carPriceHashMap.put(tag, future);
        kafkaProducer.sendMessage(kafkaMessage);
        log.info("CarPriceService: Waiting for result");

        try {
            BigDecimal price = future.get(60, TimeUnit.SECONDS);
            return Optional.of(new PriceResponse(price));
        } catch (Exception e) {
            log.error("CarPriceService: Error occurred while waiting for car price response for tag {}", tag, e);
            return Optional.empty();
        } finally {
            carPriceHashMap.remove(tag);
        }
    }
}
