# Cantify-api
Taller sobre servicios web - Especialización UAM

El nuevo servicio Cantify ofrece a sus usuarios un amplio repertorio de canciones con su
respectiva letra para que el usuario cante en karaoke desde cualquier lugar a través de su
aplicación móvil. El usuario se puede registrar e ingresar al sistema utilizando su nombre de
usuario y contraseña.

Una vez autenticado, el usuario podrá revisar la larga lista de canciones que ofrece el
servicio, también puede crear sus propias listas de reproducción, a las cuales puede
agregar y remover canciones, así como consultar qué canciones se encuentran asociadas a
la lista actualmente.

Finalmente, la letra de cualquiera de las canciones existentes en la plataforma podrá ser
consultada, para que pueda ser cantada con la melodiosa voz del usuario

## Tecnologias
API REST generada con:
* NodeJS
* MongoDB Atlas
* JWT

## Configuración
Para correr este proyecto, instalarlo localmente ejecutando el siguiente comando:

```
$ git clone https://github.com/HectorMG/Cantify-api.git
$ cd ../Cantify-api
$ npm install

```
Para cargar los datos adicionales en bd que no se proveen directamente por las funcionalidades solicitadas seguir los siguientes pasos:

1. Cargar datos de las canciones:  
**Nota:** reemplazar la sección **--uri** por la bd de Atlas correspondiente, en este caso se muestra la configuración del entorno de pruebas.
```
$ cd ../config
$ mongoimport --uri mongodb+srv://hectorfmartinez:3BkfCGexOq6oikNA@cluster0.k1i9s9b.mongodb.net/cantify --collection songs --type json --file import-songs.json --jsonArray

```

2. Cargar datos de los usuarios para servicio de login:  
**Nota:** reemplazar la sección **--uri** por la bd de Atlas correspondiente, en este caso se muestra la configuración del entorno de pruebas.
```
$ cd ../config
mongoimport --uri mongodb+srv://hectorfmartinez:3BkfCGexOq6oikNA@cluster0.k1i9s9b.mongodb.net/cantify --collection users --type json --file import-usersLogin.json --jsonArray

```
En el archivo **import-usersLogin.json** se encuentran configurados dos usuarios, el campo password esta descrito por el md5 correspondiente(para guardar en bd), por lo que para probar el endpoint se proveen los passwords correspondientes sin hash:

| username | password |
| ------------- | ------------- |
| ingeniero  | hola123  |
| pruebas  | hola889900#  |
