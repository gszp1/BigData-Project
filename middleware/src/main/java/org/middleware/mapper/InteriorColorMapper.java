package org.middleware.mapper;

import java.util.HashMap;
import java.util.Map;

public class InteriorColorMapper {

    private static final Map<String, Integer> colors;

    static {
        colors = new HashMap<>();
        colors.put("black", 0);
        colors.put("beige", 1);
        colors.put("gray", 2);
        colors.put("brown", 3);
        colors.put("red", 4);
        colors.put("white", 5);
        colors.put("\u2013", 6);
        colors.put("orange", 7);
        colors.put("blue", 8);
        colors.put("silver", 9);
        colors.put("gold", 10);
        colors.put("green", 11);
        colors.put("yellow", 12);
        colors.put("ebony", 13);
        colors.put("jet black", 14);
        colors.put("blk", 15);
        colors.put("boulder", 16);
        colors.put("black onyx", 17);
        colors.put("tan", 18);
        colors.put("charcoal", 19);
        colors.put("charcoal black", 20);
        colors.put("graphite", 21);
        colors.put("medium dark slate", 22);
        colors.put("mesa", 23);
        colors.put("nero", 24);
        colors.put("portland", 25);
        colors.put("camel", 26);
        colors.put("canberra beige", 27);
        colors.put("diesel gray / black", 28);
        colors.put("graystone", 29);
        colors.put("hotspur", 30);
        colors.put("platinum", 31);
        colors.put("black / express red", 32);
        colors.put("brandy", 33);
        colors.put("light titanium", 34);
        colors.put("medium ash gray", 35);
        colors.put("medium stone", 36);
        colors.put("navy pier", 37);
        colors.put("nero ade", 38);
        colors.put("parchment", 39);
        colors.put("red / black", 40);
        colors.put("red/black", 41);
        colors.put("white / brown", 42);
        colors.put("almond beige", 43);
        colors.put("amber", 44);
        colors.put("ash", 45);
        colors.put("black / brown", 46);
        colors.put("black / gray", 47);
        colors.put("black / saddle", 48);
        colors.put("black w/red stitching", 49);
        colors.put("black/red", 50);
        colors.put("charles blue", 51);
        colors.put("chestnut", 52);
        colors.put("cloud", 53);
        colors.put("dark gray", 54);
        colors.put("global black", 55);
        colors.put("gray w/blue bolsters", 56);
        colors.put("ice", 57);
        colors.put("light platinum / jet black", 58);
        colors.put("light slate", 59);
        colors.put("linen", 60);
        colors.put("obsidian black", 61);
        colors.put("orchid", 62);
        colors.put("oyster/black", 63);
        colors.put("rioja red", 64);
        colors.put("sandstone", 65);
        colors.put("slate", 66);
        colors.put("sport", 67);
        colors.put("walnut", 68);
        colors.put("other", 69);
    }

    public static Integer getInteriorColorValue(String color) {
        var value = colors.get(color.strip().toLowerCase());
        return value == null ? colors.get("other") : value;
    }
}
