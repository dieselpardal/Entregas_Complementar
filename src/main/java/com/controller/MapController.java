package com.controller;
import com.service.MapLoader;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import java.util.Map;

@Controller
@EnableAutoConfiguration
public class MapController {

    @RequestMapping(value = "/map",method=RequestMethod.GET)
    public String indicate(Map<String, Object> model) {
        List<Object> client, join;
        MapLoader map = new MapLoader();
        client = map.mapListClient();
        join = map.mapListJoin();
        model.put("mapListClient", client);
        model.put("mapListJoin", join);
        return "indicate";
    }

    @RequestMapping(value = "/map2",method=RequestMethod.GET)
    public ModelAndView indicateView() {
        List<Object> client, join;
        MapLoader map = new MapLoader();
        client = map.mapListClient();
        join = map.mapListJoin();
        ModelAndView modelAndView = new ModelAndView("indicate");
        modelAndView.addObject("mapListClient", client);
        modelAndView.addObject("mapListJoin", join);
        return modelAndView;
    }
}

/*
    OK Utilizar o bibliotecas GSON pra converter codigo Json -> Java
    OK Colocar as packages "controller" e "views" (refactoring)
    OK Mudar o nome das classes para maíusculo e inglês
    OK Fazer a action retornar a View e o Model
    - Adicionar novos clientes no mapa
    - TDD
 */