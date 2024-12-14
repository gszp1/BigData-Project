package org.middleware.kafka;

import lombok.extern.slf4j.Slf4j;
import org.middleware.dto.KafkaInputMessage;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class KafkaProducers {

    @Value("${spring.kafka.producer.topic}")
    private String producerTopic;

    private final KafkaTemplate<String, KafkaInputMessage> kafkaTemplate;

    public KafkaProducers(KafkaTemplate<String, KafkaInputMessage> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void sendMessage(KafkaInputMessage message) {
        log.info("PRODUCER: Sending Kafka message with data {} to topic {}", message, producerTopic);
        kafkaTemplate.send(producerTopic, message);
    }
}
