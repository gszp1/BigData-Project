package org.middleware.kafka;

import lombok.extern.slf4j.Slf4j;
import org.middleware.dto.KafkaOutputMessage;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class KafkaListeners {

    @Value("${spring.kafka.producer.topic}")
    private String producerTopic;

    @Value("${spring.kafka.consumer.group-id}")
    private String groupId;

    @KafkaListener(topics = "output", groupId = "output-consumers")
    void listener(KafkaOutputMessage message) {
        log.info("Received kafka message with data {} from topic {}", producerTopic, message);
    }
}
