function gerarGrafico() {
    init();
    clearScreen();
    var client = [
            {
                "name": "Ivan",
                "x":270,
                "y":450,
                "qtd": 50
            },
            {
                 "name": "Clara",
                 "x":110,
                 "y":130,
                 "qtd": 100
            }
            ,
            {
                 "name": "Gustavo",
                 "x":380,
                 "y":320,
                 "qtd": 150
            }
    ];
    var join = [
            {
                  "origin": client[0],
                  "destiny":client[1],
                  "cento":50
            },
            {
                  "origin": client[1],
                  "destiny":client[2],
                  "cento":40
            }
            ,
            {
                  "origin": client[0],
                  "destiny":client[2],
                  "cento":90
            }
        ];
    createGraph(client,join);
};