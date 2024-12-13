package org.middleware.mapper;

import java.util.HashMap;
import java.util.Map;

public class BrandMapper {

    private static Map<String, Integer> values;

    static {
        values = new HashMap<>();
        values.put("ford", 0);
        values.put("mercedes-benz", 1);
        values.put("bmw", 2);
        values.put("chevrolet", 3);
        values.put("audi", 4);
        values.put("porsche", 5);
        values.put("land", 6);
        values.put("toyota", 7);
        values.put("lexus", 8);
        values.put("jeep", 9);
        values.put("cadillac", 10);
        values.put("nissan", 11);
        values.put("infiniti", 12);
        values.put("gmc", 13);
        values.put("dodge", 14);
        values.put("ram", 15);
        values.put("subaru", 16);
        values.put("lincoln", 17);
        values.put("honda", 18);
        values.put("mazda", 19);
        values.put("acura", 20);
        values.put("hyundai", 21);
        values.put("volkswagen", 22);
        values.put("kia", 23);
        values.put("mini", 24);
        values.put("jaguar", 25);
        values.put("genesis", 26);
        values.put("bentley", 27);
        values.put("maserati", 28);
        values.put("chrysler", 29);
        values.put("volvo", 30);
        values.put("pontiac", 31);
        values.put("mitsubishi", 32);
        values.put("hummer", 33);
        values.put("alfa", 34);
        values.put("buick", 35);
        values.put("lamborghini", 36);
        values.put("rolls-royce", 37);
        values.put("ferrari", 38);
        values.put("aston", 39);
        values.put("mclaren", 40);
        values.put("saturn", 41);
        values.put("scion", 42);
        values.put("lotus", 43);
        values.put("mercury", 44);
        values.put("fiat", 45);
        values.put("saab", 46);
        values.put("tesla", 47);
        values.put("plymouth", 48);
        values.put("lucid", 49);
        values.put("rivian", 50);
        values.put("suzuki", 51);
        values.put("karma", 52);
        values.put("maybach", 53);
        values.put("polestar", 54);
        values.put("smart", 55);
    }

    public static Integer getBrandValue(String brand) {
        var value = values.get(brand.strip().toLowerCase());
        return value == null ? values.size() : value;
    }

}
