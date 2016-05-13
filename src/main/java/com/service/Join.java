package com.service;

public class Join {

    public int id;
    public int originIdClient;
    public int destinyIdClient;
    public int ratio;

    public Join(int id, int originIdClient, int destinyIdClient, int ratio) {
        this.id=id;
        this.originIdClient = originIdClient;
        this.destinyIdClient = destinyIdClient;
        this.ratio = ratio;

    }
}
