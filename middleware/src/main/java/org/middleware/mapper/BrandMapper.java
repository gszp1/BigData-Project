package org.middleware.mapper;

import java.util.HashMap;
import java.util.Map;

public class BrandMapper {

    private static final Map<String, Integer> brands;

    static {
        brands = new HashMap<>();
        brands.put("ford", 0);
        brands.put("mercedes-benz", 1);
        brands.put("bmw", 2);
        brands.put("chevrolet", 3);
        brands.put("audi", 4);
        brands.put("porsche", 5);
        brands.put("land", 6);
        brands.put("toyota", 7);
        brands.put("lexus", 8);
        brands.put("jeep", 9);
        brands.put("cadillac", 10);
        brands.put("nissan", 11);
        brands.put("infiniti", 12);
        brands.put("gmc", 13);
        brands.put("dodge", 14);
        brands.put("ram", 15);
        brands.put("subaru", 16);
        brands.put("lincoln", 17);
        brands.put("honda", 18);
        brands.put("mazda", 19);
        brands.put("acura", 20);
        brands.put("hyundai", 21);
        brands.put("volkswagen", 22);
        brands.put("kia", 23);
        brands.put("mini", 24);
        brands.put("jaguar", 25);
        brands.put("genesis", 26);
        brands.put("bentley", 27);
        brands.put("maserati", 28);
        brands.put("chrysler", 29);
        brands.put("volvo", 30);
        brands.put("pontiac", 31);
        brands.put("mitsubishi", 32);
        brands.put("hummer", 33);
        brands.put("alfa", 34);
        brands.put("buick", 35);
        brands.put("lamborghini", 36);
        brands.put("rolls-royce", 37);
        brands.put("ferrari", 38);
        brands.put("aston", 39);
        brands.put("mclaren", 40);
        brands.put("saturn", 41);
        brands.put("scion", 42);
        brands.put("lotus", 43);
        brands.put("mercury", 44);
        brands.put("fiat", 45);
        brands.put("saab", 46);
        brands.put("tesla", 47);
        brands.put("plymouth", 48);
        brands.put("lucid", 49);
        brands.put("rivian", 50);
        brands.put("suzuki", 51);
        brands.put("karma", 52);
        brands.put("maybach", 53);
        brands.put("polestar", 54);
        brands.put("smart", 55);
        brands.put("other", 56);
    }

    public static Integer getBrandValue(String brand) {
        var value = brands.get(brand.strip().toLowerCase());
        return value == null ? brands.get("other") : value;
    }

}
