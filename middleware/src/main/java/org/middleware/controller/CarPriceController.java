package org.middleware.controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.middleware.dto.PriceRequest;
import org.middleware.dto.PriceResponse;
import org.middleware.service.CarPriceService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/api/car-price")
public class CarPriceController {

    private final CarPriceService carPriceService;


    public CarPriceController(CarPriceService carPriceService
    ) {
        this.carPriceService = carPriceService;
    }

    @PostMapping("")
    public ResponseEntity<?> getCarPrice(
            @RequestBody PriceRequest request,
            HttpServletRequest servletRequest
    ) {
        log.info("Request for car price from {} with data: {}", extractClientIP(servletRequest), request);
        Optional<PriceResponse> priceResponseOptional = carPriceService.getCarPrice(request);
        return priceResponseOptional
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity
                        .status(500)
                        .body(new PriceResponse(BigDecimal.ZERO,
                                "Failed to receive response from internal service")
                        )
                );
    }

    private String extractClientIP(HttpServletRequest request) {
        String ip = request.getHeader("X-Forwarded-For");
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getRemoteAddr();
        } else if (ip.contains(",")) {
            ip = ip.split(",")[0].trim();
        }
        return ip;
    }
}
