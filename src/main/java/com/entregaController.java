package com;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@EnableAutoConfiguration
public class entregaController {

//    private static final String template = "Bem Vindo, %s!";
//    private final AtomicLong counter = new AtomicLong();
//
//    @RequestMapping("/greeting")
//    public mapas greeting(@RequestParam(value="name", defaultValue="World") String name) {
//        return new mapas(counter.incrementAndGet(),
//                            String.format(template, name));
//    }
//    @RequestMapping("/entregas")
//    public mapas greeting1(@RequestParam(value="name", defaultValue="World") String name) {
//        return new mapas(counter.incrementAndGet(),
//                String.format(template, name));
//    }
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index(Model model) {
        model.addAttribute("message", "HELLO");
        return "index.html";
}
    @RequestMapping("/mapa")
    public String indicar( Model model, @RequestParam(value="name", required=false, defaultValue="World") String name) {
        model.addAttribute("message", "HELLO");
        return "indicar.html";
    }
}
