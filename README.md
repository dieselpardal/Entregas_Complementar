# Entregas Complementar

Projeto de Entregas 1.0

Programador: Ivan Diesel

Data: 03/05/2016


O ambiente de projeto de Entregas Complementar 1.0 na ambiente OSX com visualização de biblioteca D3.

Funcionalidade:
    1) Para novo cliente: clicar o mouse na area de Brasil e escrever nome e quantidade.
    2) Para junta dos clientes: arrastar o mouse de origem de Cliente até destino de cliente, e escrever o porcentagem.
    3) Para remover um dos clientes: clicar um botão direita do mouse.
    4) Para remover junta dos clientes: clicar um botão esquerda na linha de junta dos clientes. 
    
Requerimento:
    Plataforma: IntelliJ IDEA
    Instalação de gradle

Os pacotes mencionados do documento podem ser encontrados na mesma pasta deste arquivo.

Para executa no site de Servidor de Local:
    
    a) No terminal: 
        ./gradlew build
        ./gradlew bootRun
    
    b) No navegador: 
        http://localhost:8090/

Para converter de codigo-fonte de JAVA em JAR na Terminal:

  1) colocar no arquivo Procfile ( cria se nao existesse)
      web java -Dserver.port=$PORT $JAVA_OPTS -jar build/libs/entregas-0.1.0.jar
  2) ./gradlew jar
  3) adiciona no arquivo build.gradle:
     task stage {
         dependsOn build
     }
  4) ./gradlew stage 

para 
-------------------
Feito:
        
    OK Utilizar o bibliotecas GSON pra converter codigo Json -> Java
    OK Colocar as packages "controller" e "views" (refactoring)
    OK Mudar o nome das classes para maíusculo e inglês
    OK Fazer a action retornar a View e o Model
    OK Adicionar novos clientes no mapa
    OK - TDD

        
Atual:
    1. Usar o selenium pra criar um teste da interface do site - Fazer junto!
    * 2. Como debugar aplicacoes usando o SpringBoot? - Ivan
        
    3. OK como acesso no site em produção? Como gerar o jar? - Gustavo, dps Ivan
    4. OK Colocar o teu site no https://www.heroku.com/? (PaaS - Platform as a Service - serve pra nos dar Hardware e Software sob demanda) - - Gustavo, dps Ivan 
    4.1 concorrencias:
        https://www.heroku.com/
        https://azure.microsoft.com
        https://www.cloudfoundry.org/
        https://www.openshift.com

    
Próximo exercício:

    1. OK Estudar o Typescript pra simplificar nosso Javascript
    2. OK Os dados estão na memória do Javascript, seria legal que estivessem no Java
    3. Aperfeiçoar JQUERY para html e JS
     
    
Algumas Dicas:
    GOOGLE MAPS - http://www.w3schools.com/
    CREATE JAR - http://www.mkyong.com/gradle/gradle-create-a-jar-file-with-dependencies/
    MODIFICAR MAPS - http://www.w3schools.com/googleapi/tryit.asp?filename=tryhtml_map_overlays_circle