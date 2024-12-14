package org.middleware.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.kafka.common.serialization.Deserializer;
import org.middleware.dto.KafkaOutputMessage;

public class CustomJsonDeserializer  implements Deserializer<KafkaOutputMessage> {

    private ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public KafkaOutputMessage deserialize(String topic, byte[] data) {
        try {
            String jsonData = new String(data);
            return objectMapper.readValue(jsonData, KafkaOutputMessage.class);
        } catch (Exception e) {
            throw new RuntimeException("Failed to deserialize JSON", e);
        }
    }
}
