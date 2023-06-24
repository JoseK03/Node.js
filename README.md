# Taller Node.js
:memo:Taller en node.js con requerimiento por el profesor Vermen de documentar cada paso con la finalidad de mecanizar los procesos necesarios para realización del mismo.

1-Creamos una carpeta Backend y accedemos a dicha carpeta desde la terminal

2-Instalamos desde la terminal el archivo package.json con el comando= npm init -y:fire:

3-vamos a instalar el paquete express ejecutando dentro de consola el comando npm i express

4-Creamos la carpeta src dentro de esta carpetas se adicionan otras carpetas que seran:            :white_check_mark:controllers:white_check_mark:db:white_check_mark:routes

5-A la misma linea de las carpetas recien creadas se crea un archivo llamado app.js y otro llamado :zap:index.js:zap:(Este es    donde convergen todos los archivos) y por ultimo se crea el archivo config.js

6-Creamos el archivo .env que se ubica afuera de la carpeta Backend. Donde colocaremos los datos de la cadena de conexion al server dónde están las bases de datos.

7-Vamos a index.js y creamos el metodo main

8-Vamos a app.js y realizamos el import express

9-Ir a package.json y debajo de "description" colocamos "type" : "module" esto para que el import nos funcione

10-volvemos a app.js se guarda el import en una variable en este caso seria el import express.

11-Realizamos un export default de la variable que acabamos de crear.

12-Creamos el puerto dentro de app.js variable.set("palabraClave", #puerto).

13-Vamos a index y ejecutamos el import debe ser sin llaves ya que fue un export default.

14-Dentro del metodo main llamamos el import con el comando .listen para que escuche en un puerto indicado referenciando con la variable importada.get con parametro la palabra clave para el puerto.

15-vamos al package.json y eliminados de scripts el "test" y colocamos "dev" : "node src/index.js"

16-Ejecutamos nuestro node colocando en consola el siguiente comando: npm run dev

17-Vamos a instalar la dependencia nodemon la cual nos ayudara a que los cambios se ejecuten automaticamente y asi no tener que estar tumbando y levantando el puerto despues de cada cambio

18-En consola colocamos el siguiente comando estando dentro de la carpeta backend: :pushpin:npm i -D nodemon

19-ir al script que se creó en package.json y cambiar el node por nodemon.

20-tumbar por ultima vez el puerto y volverlo a levantar

21-dentro de routes creamos el archivo de una ruta en este caso categorias.routes.js

22-dentro de ese archivo importamos a {Router} from "express"

23-Guardamos esta importacion en una variable y luego la exportamos de manera default

24-En la carpeta controllers creamos un archivo .controllers.js en el cual creamos una constante que nos traera info dela db getCategoria que equivale un arround function (req,res)=>{} con parametro el request y el response.

25-Dentro de la function hacemos un res.json({"ejemplo" : "json"})

26-Exportamos unaa variable puede ser llamado methodHTTP que será igual a {nombre de la constante #24}

27-Vamos al archivo .routers.js y Se hace un .get a la variable con parametros la url de donde se va a recibir la req y lo que se va a ejecutar cuando llegue la req en esa ruta 

28-Vamos a app.js e importamos a router pero puede ser cualquier palabra clave para importarlo ya que es un export default 

29-Colocamos la ruta dentro de app.js con la variable que valia el express.use y como  parametro la palabra clave con la que acabamos de inportar de routes

30.en .routers.js importamos con llaves  a methodHTTP y podriamos cambiarle el nombre por medio de la palabra reservada as

31-Vamos a .env y creamos la conexion a la base de datos con los parametros :white_check_mark=> HOST:white_check_mark:DATABASE:white_check_mark:USER:white_check_mark:PASSWORD

32-Despues de llenar nuestro .nev instalamos nuestro paquete :pushpin:npm i dotenv

33-vamos a config e importamos {config} from dotenv

34-invocamos la funcion config()

35-exportamos de forma default la funcion config a manera de objeto llamando las variables del .env pero dandoles como valor el mismo valor pero de una manera mas segura:  host: process.env.HOST (el primero puede ser en minuscula pero el segundo si debe ser en mayuscula)

36-Creamos una carpeta llamada db a la misma linea de routes y creamos un archivo llamado database.js

37-dentro de consola ejecutamos el siguiente comando :pushpin: npm i promise-mysql

38-dentro de database.js importamos mysql from promise-mysql

39-importamos a config

40- Creamos una constante connection que será igual mysql que se acab de importar mysql.createConneccion({host: config.host separados con coma y asi con los otros datos de .env})

41-vamos a retornar la connection con un around function dentro de una const

42-exportamos por default la constante que returna la connection

43-Importamos en .controllers.js el getConnection

44-Remplazamos el contenido de la around function por una constante que almacene el getconnection que acabamos de importar y lo metemos en un tryCatch

45- agregamos una const donde haremos el await connection.query("SELECT * FROM tabla_requerida"), luego volvemos a colocar nuestro res.json con parametro la misma constante anterior





