package org.middleware.service;

import org.apache.kafka.clients.producer.KafkaProducer;
import org.middleware.dto.KafkaInputMessage;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class KafkaService {

    @Value("${spring.kafka.producer.topic}")
    private String producerTopic;

    private final KafkaTemplate<String, KafkaInputMessage> kafkaTemplate;

    public KafkaService(KafkaTemplate<String, KafkaInputMessage> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void sendMessage(KafkaInputMessage message) {
        kafkaTemplate.send(producerTopic, message);
    }
}
