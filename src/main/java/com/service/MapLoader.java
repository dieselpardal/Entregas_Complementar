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
        }
        catch (FileNotFoundException e) {
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
        return openGsonObject(jsonObj, new TypeToken<ArrayList<Client>>() {}.getType(), "client");
    }

    private List<Object> openGsonJoin(JSONObject jsonObj) {
        return openGsonObject(jsonObj, new TypeToken<ArrayList<Join>>() {}.getType(), "join");
    }

//    private List<Client> openJsonClient(JSONObject jsonObj) {
//        List<Client> client = new ArrayList<>();
//        JSONArray temp = (JSONArray) jsonObj.get("client");
//        Iterator<JSONObject> iterator = temp.iterator();
//        while (iterator.hasNext()) {
//            JSONObject jsonOne = iterator.next();
//            client.add(new Client((String) jsonOne.get("name"),
//                    Integer.valueOf((String) jsonOne.get("x")),
//                    Integer.valueOf((String) jsonOne.get("y")),
//                    Integer.valueOf((String) jsonOne.get("qtd"))));
//        }
//        return client;
//    }
//
//    private List<Join> openJsonJoin(JSONObject jsonObj, List<Client> client) {
//        List<Join> join = new ArrayList<>();
//        JSONArray temp = (JSONArray) jsonObj.get("join");
//        Iterator<JSONObject> iterator = temp.iterator();
//        while (iterator.hasNext()) {
//            JSONObject jsonOne = iterator.next();
//            int origin = findWay(client, jsonOne, "origin");
//            int destiny = findWay(client, jsonOne, "destiny");
//            join.add(new Join(Integer.valueOf((String) jsonOne.get("id")),origin, destiny, Integer.valueOf((String) jsonOne.get("ratio"))));
//        }
//        return join;
//    }
//
//    private int findWay(List<Client> client, JSONObject jsonOne, String way) {
//        int i=0;
//        while(i<client.size() && !jsonOne.get(way).equals(client.get(i).name)) {
//            i++;
//        }
//        return i;
//    }
}