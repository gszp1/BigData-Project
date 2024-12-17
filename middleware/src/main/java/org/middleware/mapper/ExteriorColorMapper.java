package org.middleware.mapper;

import java.util.HashMap;
import java.util.Map;

public class ExteriorColorMapper {

    private static final Map<String, Integer> exteriorColors;

    static {
        exteriorColors = new HashMap<>();
        exteriorColors.put("gasoline", 0);
        exteriorColors.put("e85 flex fuel", 1);
        exteriorColors.put("hybrid", 2);
        exteriorColors.put("diesel", 3);
        exteriorColors.put("plug-in hybrid", 4);
        exteriorColors.put("not supported", 5);
        exteriorColors.put("\u2013", 6);
        exteriorColors.put("black", 7);
        exteriorColors.put("white", 8);
        exteriorColors.put("gray", 9);
        exteriorColors.put("silver", 10);
        exteriorColors.put("blue", 11);
        exteriorColors.put("red", 12);
        exteriorColors.put("green", 13);
        exteriorColors.put("gold", 14);
        exteriorColors.put("brown", 15);
        exteriorColors.put("orange", 16);
        exteriorColors.put("beige", 17);
        exteriorColors.put("yellow", 18);
        exteriorColors.put("purple", 19);
        exteriorColors.put("pink", 20);
        exteriorColors.put("blu", 21);
        exteriorColors.put("diamond black", 22);
        exteriorColors.put("black clearcoat", 23);
        exteriorColors.put("black obsidian", 24);
        exteriorColors.put("white knuckle clearcoat", 25);
        exteriorColors.put("iridium metallic", 26);
        exteriorColors.put("tan", 27);
        exteriorColors.put("vega blue", 28);
        exteriorColors.put("alpine white", 29);
        exteriorColors.put("beluga black", 30);
        exteriorColors.put("black raven", 31);
        exteriorColors.put("black sapphire metallic", 32);
        exteriorColors.put("bright white clearcoat", 33);
        exteriorColors.put("ebony twilight metallic", 34);
        exteriorColors.put("ice", 35);
        exteriorColors.put("moonlight cloud", 36);
        exteriorColors.put("silver zynith", 37);
        exteriorColors.put("summit white", 38);
        exteriorColors.put("white frost tri-coat", 39);
        exteriorColors.put("agate black metallic", 40);
        exteriorColors.put("alfa white", 41);
        exteriorColors.put("atomic silver", 42);
        exteriorColors.put("balloon white", 43);
        exteriorColors.put("bianco isis", 44);
        exteriorColors.put("dark gray metallic", 45);
        exteriorColors.put("dark slate metallic", 46);
        exteriorColors.put("daytona gray pearl effect", 47);
        exteriorColors.put("daytona gray pearl effect w/ black roof", 48);
        exteriorColors.put("delmonico red pearlcoat", 49);
        exteriorColors.put("flame red clearcoat", 50);
        exteriorColors.put("frozen dark silver metallic", 51);
        exteriorColors.put("graphite grey", 52);
        exteriorColors.put("hampton gray", 53);
        exteriorColors.put("iridium silver metallic", 54);
        exteriorColors.put("liquid platinum", 55);
        exteriorColors.put("majestic black pearl", 56);
        exteriorColors.put("majestic plum metallic", 57);
        exteriorColors.put("maximum steel metallic", 58);
        exteriorColors.put("metallic", 59);
        exteriorColors.put("nero daytona", 60);
        exteriorColors.put("obsidian black metallic", 61);
        exteriorColors.put("onyx", 62);
        exteriorColors.put("phantom black pearl effect / black roof", 63);
        exteriorColors.put("quartz blue pearl", 64);
        exteriorColors.put("red obsession", 65);
        exteriorColors.put("redline red", 66);
        exteriorColors.put("rosso corsa", 67);
        exteriorColors.put("rosso mars metallic", 68);
        exteriorColors.put("santorin black", 69);
        exteriorColors.put("snow white pearl", 70);
        exteriorColors.put("snowflake white pearl metallic", 71);
        exteriorColors.put("sparkling silver", 72);
        exteriorColors.put("super black", 73);
        exteriorColors.put("thunder gray", 74);
        exteriorColors.put("twilight blue metallic", 75);
        exteriorColors.put("white platinum tri-coat metallic", 76);
        exteriorColors.put("other", 77);
    }

    public static Integer getExteriorColorValue(String color) {
        var value = exteriorColors.get(color.strip().toLowerCase());
        return value == null ? exteriorColors.get("other") : value;
    }
}
