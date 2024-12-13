package org.middleware.mapper;

import org.apache.catalina.mapper.Mapper;

import java.util.HashMap;
import java.util.Map;

public class TransmissionMapper {

    private static Map<String, Integer> transmissions;

    static {
        transmissions = new HashMap<String, Integer>();
        transmissions.put("automatic", 0);
        transmissions.put("other", 1);
        transmissions.put("manual", 2);
        transmissions.put("variator", 3);
    }

    public static Integer getTransmissionValue(String transmission) {
        var value = transmissions.get(transmission.strip().toLowerCase());
        return value == null ? transmissions.get("other") : value;
    }
}
