package org.middleware.mapper;

import java.util.HashMap;
import java.util.Map;

public class AccidentMapper {

    private static final Map<String, Integer> accidents;

    static {
        accidents = new HashMap<>();
        accidents.put("none reported", 0);
        accidents.put("at least 1 accident or damage reported", 1);
        accidents.put("other", 2);
    }

    public static Integer getAccidentValue(String accident) {
        var value = accidents.get(accident.strip().toLowerCase());
        return value == null ? accidents.get("other") : value;
    }
}
