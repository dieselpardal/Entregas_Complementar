package com.service;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

public class MapLoader {

    public List<Object> mapListClient() {
        return openGsonClient(loadJson());
    }

    public List<Object> mapListJoin() {
        return openGsonJoin(loadJson());
    }

    protected JSONObject loadJson() {
        JSONParser parser = new JSONParser();
        try {
            return (JSONObject) parser.parse(new FileReader("src/main/java/com/service/map.json"));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (org.json.simple.parser.ParseException e) {
            e.printStackTrace();
        }
        return null;
    }

    private List<Object> openGsonObject(JSONObject jsonObj, Type listType, String key) {
        Gson gson = new Gson();
        JSONArray temp = (JSONArray) jsonObj.get(key);
        return gson.fromJson(String.valueOf(temp), listType);
    }

    private List<Object> openGsonClient(JSONObject jsonObj) {
        return openGsonObject(jsonObj, new TypeToken<ArrayList<Client>>() {
        }.getType(), "client");
    }

    private List<Object> openGsonJoin(JSONObject jsonObj) {
        return openGsonObject(jsonObj, new TypeToken<ArrayList<Join>>() {
        }.getType(), "join");
    }


}