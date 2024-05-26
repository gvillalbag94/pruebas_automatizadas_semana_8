# Estrategia de pruebas final - Semana 8

## Integrantes:

* Victor Alfonso Duarte Quintero - v.duarteq@uniandes.edu.co
* Juan Esteban Herrera - je.herrerap@uniandes.edu.co
* Leonardo Cardenas - dl.riverac1@uniandes.edu.co
* Felipe Villalba Gil - g.villalbag@uniandes.edu.co

## Video presentación estrategia y resultado:

()[]

## Descripción estrategia de pruebas:

## Inventario de pruebas exploratorias:

## Herramientas implementadas para la ejecución de la estrategia de pruebas:

Requisitos y versiones:

1. Node v18.20.2

2. Cypress v13.7.3

### Pruebas de Reconocimiento:
 
* Monkey tests:

(SE HACE USO DE ESTA HERRAMIENTA EN LA SEMANA 2, SEGUN EL PLAN DE PRUEBAS)

Para la ejecición de las pruebas de reconocimiento con monkey test el equipo ha desarrollado y dejado a disposición una herramienta que permite realizar monkey test implmenetando la herramienta Cypress.

Instalación y uso de la herramienta:

1. Ubicarse en la carpeta raiz de la herramienta:

```bash
    cd pruebas_automatizadas_semana_8/explorative-test/monkey-test
```

2. Ejecute el comando "npm install" para instalar los modulos requeridos:

```bash
    npm install
```

3. Asegurarse de configurar los archivos "monkey-config.json" y "smart-monkey-config.json" ingresando la URL base de la aplicación bajo pruebas, configurar los parametros de la manera en la que se necesite.

4. Ejecutar las pruebas correspondientes de las preubas exploratorias con los sigueintes comandos:

MONKEY:
```bash
    cypress run --config-file ./monkey-config.json
```

SMART MONKEY:
```bash
    cypress run --config-file ./smart-monkey-config.json
```

5. Visualizar los resultados en la carpeta generada llamada "results".


* Ripping tests:

(SE HACE USO DE ESTA HERRAMIENTA EN LA SEMANA 2, SEGUN EL PLAN DE PRUEBAS)

Para la ejecición de las pruebas de reconocimiento con ripping test el equipo ha desarrollado y dejado a disposición una herramienta que permite realizar ripping test implmenetando la herramienta RiPuppet.

Instalación y uso de la herramienta:

1. Ubicarse en la carpeta raiz de la herramienta:

```bash
    cd pruebas_automatizadas_semana_8/explorative-test/ripping-test
```

2. Ejecute el comando "npm install" para instalar los modulos requeridos:

```bash
    npm install
```

3. Asegurarse de configurar el archivo "config.json" ingresando la URL base de la aplicación bajo pruebas, configurar los parametros de la manera en la que se necesite.

4. Ejecutar las pruebas correspondientes de las preubas exploratorias con los sigueintes comandos:

```bash
    node index.js
```

5. Visualizar los resultados en la carpeta generada llamada "results".

### Pruebas de extremo-a-extremo:

* Cypress Test:

(SE HACE USO DE ESTA HERRAMIENTA EN LA SEMANA 3 y 4, SEGUN EL PLAN DE PRUEBAS)

Para la ejecición de las pruebas de e2e con Cypress que el equipo ha desarrollado y dejado a disposición se deben seguir los siguientes pasos.

Instalación y uso de la herramienta:

1. Las pruebas realizadas bajo la herramienta Cypress s, para ello ubicate en la carpeta raiz de "cypress-tests", puedes usar el siguiente comado:

```bash
    cd pruebas_automatizadas_semana_8/e2e-test/cypress-tests
```

2. Usa el siguiente comando para correr todas las pruebas:

```bash
    cypress run --headless
```

3. Al llegar a este punto ya has ejecutado todas las pruebas end to end, podras revisar todos los screenshots tomados bajo la herramienta cypress entandro a la carpeta "screenshots" ubicada dentro de la carpeta "cypress", para poder visualizarlos puedes ejecutar los siguientes comandos:

```bash
    cd ..
    cd cypress/screenshots
```

* Kraken Test:

(SE HACE USO DE ESTA HERRAMIENTA EN LA SEMANA 3 y 4, SEGUN EL PLAN DE PRUEBAS)

Para la ejecición de las pruebas de e2e con la herramienta Kraken que el equipo ha desarrollado y dejado a disposición se deben seguir los siguientes pasos.

Instalación y uso de la herramienta:

1. Las pruebas realizadas bajo la herramienta Kraken, para ello ubicate en la carpeta raiz de "kraken-tests", puedes usar el siguiente comado:

```bash
    cd pruebas_automatizadas_semana_8/e2e-test/kraken-tests
```

2. Empezaremos con las pruebas realizadas bajo la herramienta kraken-node para la version 5.81.1, para ello ubicate en la carpeta raiz de "kraken-test" y la respectiva version, puedes usar el siguiente comado:
    
```bash
    cd v5.81.1
```

3. Instala las dependencias usadas en el proyecto con el comando:

```bash
    npm install
```

4. Ejecuta las pruebas con el comando:

```bash
    npx kraken-node run
```

5. Si las pruebas no se ejecutaron debido algún error por dependecias te recomendamos ejecutar los siguientes comandos:

```bash
    npm uninstall -g android-platform-tools
    npm uninstall -g @cucumber/cucumber
    npm uninstall -g kraken-node
    npm uninstall -g appium
    npm init -y
    npm install kraken-node
    npm install android-platform-tools
    npm install appium
    npx kraken-node gen
```

    Una vez ejecutados estos comandos, vuelve a seguir el paso número 3 y 4.

6. Una vez finalizada la pruebas con la herramient kraken-node en la version v5.81.1, puedes identificar que se han generado los screenshots de cada paso a paso de cada "feature" sobre la carpeta raiz ghost-e2e,dentro de cada carpeta podras evidenciar la creacion de los screenshots con el nombre "before_(número del paso)", para poder visualizarlos puedes ejecutar los siguientes comandos:

```bash
    cd ..
    cd ..
    cd screenshots
```


7. Continuaremos con las pruebas realizadas bajo la herramienta kraken-node para la version 3.42.4, para ello ubicate en la carpeta raiz de "kraken-test" y la respectiva version, puedes usar el siguiente comado (acuerdate de devolverte de a la carpeta raiz "ghost-e2e"):
    
```bash
    cd kraken-test/v3.42.4
```

8. Instala las dependencias usadas en el proyecto con el comando:

```bash
    npm install
```

9. Ejecuta las pruebas con el comando:

```bash
    npx kraken-node run
```

10. Si las pruebas no se ejecutaron debido algún error por dependecias te recomendamos ejecutar los siguientes comandos:

```bash
    npm uninstall -g android-platform-tools
    npm uninstall -g @cucumber/cucumber
    npm uninstall -g kraken-node
    npm uninstall -g appium
    npm init -y
    npm install kraken-node
    npm install android-platform-tools
    npm install appium
    npx kraken-node gen
```

    Una vez ejecutados estos comandos, vuelve a seguir el paso número 8 y 9.

11. Una vez finalizada la pruebas con la herramient kraken-node en la version v3.42.4, puedes identificar que se han generado los screenshots de cada paso a paso de cada "feature" sobre la carpeta raiz ghost-e2e,dentro de cada carpeta podras evidenciar la creacion de los screenshots con el nombre "after_(número del paso)" para poder visualizarlos puedes ejecutar los siguientes comandos:

```bash
    cd ..
    cd ..
    cd screenshots
```

### Pruebas de regresion visual:

* Resemble:

(SE HACE USO DE ESTA HERRAMIENTA EN LA SEMANA 5 y 6, SEGUN EL PLAN DE PRUEBAS)

Para la ejecución de las pruebas de VRT con la herramienta Resemble que el equipo ha desarrollado y dejado a disposición se deben seguir los siguientes pasos.

Instalación y uso de la herramienta:

1. Para ejecutar las pruebas de regresión visual en Resemblejs, asegurate de estar en la carpeta raiz "resemble", instala las dependencias usadas en el proyecto, puedes usar los siguientes comandos:

```bash
    cd pruebas_automatizadas_semana_8/vrt-test/resemble
    npm install
```

2. Se ejecutan las pruebas con el comando:

```bash
    node index.js
```

3. Dentro de la carpeta resemble, se crean la carpeta results la cual contendrá subcarpetas correspondientes a cada una de las pruebas de regresión visual con sus respectivos resultados.

4. Para visualizar los resultados en los reportes HTML:

```bash
    cd results
    http-server
```

Al correr el http-server, se debe entrar a una de las URLs generadas para visualizar el reporte en el navegador, veras carpetas con las funcionalidades testeadas, al abrir cada una identificaras que el ultimo archivo corresponde a un html donde podras evidenciar las diferencias visuales generadas por la herramienta ResembreJs.
(Procurar eliminar las cookies del navegador antes de realizar este paso para asegurar el buen funcionamiento de la visualización)


* Backstop tests:

(SE HACE USO DE ESTA HERRAMIENTA EN LA SEMANA 5 y 6, SEGUN EL PLAN DE PRUEBAS)

Para la ejecución de las pruebas de VRT con la herramienta BackstopJs que el equipo ha desarrollado y dejado a disposición se deben seguir los siguientes pasos.

Instalación y uso de la herramienta:

1. Para ejecutar las pruebas de regresión visual en BackstopJs, asegurate de estar en la carpeta raiz "backstop-tests", instala las dependencias usadas en el proyecto, puedes usar los siguientes comandos:

```bash
    cd pruebas_automatizadas_semana_8/vrt-test/backstop-tests
    npm install
```

2. Una vez instaldo las dependencias, inicializa el CLI de backstop ejecutando el siguiente comando:

```bash
    backstop init
```

3. Para añadir los escenarios de pruebas de las funcionalidades realizadas en las versiones configuradas, ejecuta el script "index.js" que modifica el archivo "backstop.json", puedes usar el siquiente comando:

```bash
    node index.js
```

4. El primer paso para ejecutar las pruebas em backstop es generar las referencias, debes ejecutar el comando (Esto puede tardar un tiempo considerable):

```bash
    backstop reference
```

5. Finalmente se puede ejecutar la prueba con backstop, debes ejecutar el comando (Esto puede tardar un tiempo considerable):

```bash
    backstop test
```

Al correr "backstop test" y finalizar de manera exitosa, se abre una ventana del navegador donde podras identificar todas las diferecias entre cada uno de los pasos de cada "feature".

### Pruebas Generación de data:

(SE HACE USO DE ESTA HERRAMIENTA EN LA SEMANA 7, SEGUN EL PLAN DE PRUEBAS)

Para la ejecución de las pruebas de generación de datos con la herramienta Cypress que el equipo ha desarrollado y dejado a disposición se deben seguir los siguientes pasos.

1. Para ejecutar las pruebas de generacion de datos, asegurate de estar en la carpeta raiz "generate-data-test", instala las dependencias usadas en el proyecto, puedes usar los siguientes comandos:

```bash
    cd pruebas_automatizadas_semana_8/generate-data-test
    npm install
```

2. Una vez instaldo las dependencias, configure la entrada de datos para cada tipo de generacion de datos (a-priori, aleatorea y pseudoaleatoria), estas configuraciones se pueden realizar dentro de la carpeta "cypress" y "e2e", donde se encuentran las diferentes carpetas y pruebas con su respectiva manera de generación de datos.


3. Una vez terminada la configuración de la entrada de datos, ejecute el siguiente comando para ejecutar todas las pruebas:

```bash
    cypress run --headless
```

## Reporte de inicidencias encontradas:

El registro de incidecias encontradas se reporta en la sección de [Issues](https://github.com/gvillalbag94/pruebas_automatizadas_semana_8/issues) del correspondiente repositorio.

