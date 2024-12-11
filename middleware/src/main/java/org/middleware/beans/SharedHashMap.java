package org.middleware.beans;

import org.middleware.dto.PriceResponse;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ConcurrentHashMap;

@Configuration
public class SharedHashMap {

    @Bean
    public ConcurrentHashMap<String, CompletableFuture<BigDecimal>> carPriceHashMap() {
        return new ConcurrentHashMap<>();
    }
}
