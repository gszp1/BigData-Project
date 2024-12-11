package org.middleware.service;

import org.middleware.dto.KafkaInputMessage;
import org.middleware.dto.PriceRequest;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Optional;
import java.util.UUID;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class CarPriceService {

    private final ConcurrentHashMap<String, CompletableFuture<BigDecimal>> carPriceHashMap;

    public CarPriceService(
            @Qualifier("carPriceHashMap") ConcurrentHashMap<String, CompletableFuture<BigDecimal>> carPriceHashMap
    ) {
        this.carPriceHashMap = carPriceHashMap;
    }

    public Optional<BigDecimal> getCarPrice(PriceRequest request) {
        var tag = UUID.randomUUID().toString();
        var kafkaMessage = KafkaInputMessage.fromPriceRequest(request, tag);
        CompletableFuture<BigDecimal> future = new CompletableFuture<>();
        carPriceHashMap.put(tag, future);


        return Optional.of(new BigDecimal("2137"));
    }
}
