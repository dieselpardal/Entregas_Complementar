package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        Application m = new Application();
        m.hello();
        SpringApplication.run(Application.class, args);
    }
    private void hello() {
        System.out.println("Inicio na web!!");
    }
}
