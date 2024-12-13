package org.middleware.mapper;

import java.util.HashMap;
import java.util.Map;

public class FuelTypeMapper {

    private static final Map<String, Integer> fuelTypes;

    static {
        fuelTypes = new HashMap<>();
        fuelTypes.put("gasoline", 0);
        fuelTypes.put("e85 flex fuel", 1);
        fuelTypes.put("hybrid", 2);
        fuelTypes.put("diesel", 3);
        fuelTypes.put("plug-in hybrid", 4);
        fuelTypes.put("not supported", 5);
        fuelTypes.put("\u2013", 6);
        fuelTypes.put("other", 7);
    }

    public static Integer getFuelTypeValue(String fuelType) {
        var value = fuelTypes.get(fuelType.strip().toLowerCase());
        return value == null ? fuelTypes.get("other") : value;
    }
}
