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

21-dentro





