# CoinGecko-WrapperAPI
Proyecto realizado para el proceso de selección de Wolox.

## Comenzando 🚀
Clonamos el repositorio desde https://github.com/kevinderitis/CoinGecko-WrapperAPI  

### Pre-requisitos 📋
Para poder comenzar a correr el proyecto debemos contar con Node Js v14.11.0 instalado en alguno de los siguientes sistemas operativos:
Windows, Mac OS X, Linux, Solaris, FreeBSD, OpenBSD, webOS.
Ademas debemos contar con MySQL v5.1.73 para nuestra base de datos. 

### Instalación 🔧
En primer lugar debemos ejecutar por consola el siguiente comando
-- npm install

Va a instalar todas las dependencias necesarias para el proyecto.
La base de datos debemos tenerla localmente o en caso de querer instalarla remotamente debemos cambiar nuestros datos en config.js 


## Ejecutando los test ⚙️
Corremos los test unitarios de nuestras funcionalidades con el comando
-- npm test

Para los test utilizo jasmine

## Iniciando API
Para poner en marcha nuestra API ejecutamos el comando 
-- npm start


## Endpoints

POST **/api/auth/signin
Creamos usuario enviando objeto user 
{
    id,
    name,
    lastname,
    username,
    password,
    facoin
}
En caso de haber agregado el usuario obtendremos como respuesta un objeto sign con un success

    "sign": {
        "success": "User created."
    }
                            -------------------
POST **/api/auth/login
Nos logueamos enviando objeto con usuario y contraseña validos previamente registrados
{

"username":"admin",
"password":"admin"

}
Si los usuarios son validos recibimos como respuesta el token de autenticación
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyZm91bmQiOlt7ImlkIjozLCJuYW1lIjoiYWRtaW4iLCJsYXN0bmFtZSI6ImFkbWluIiwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiYWRtaW4iLCJmYXZjb2luIjpudWxsLCJjcmVhdGVkQXQiOiIyMDIwLTExLTA1VDAxOjM0OjU4LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIwLTExLTA1VDAxOjM0OjU4LjAwMFoifV0sImlhdCI6MTYwNDU0MDMxNX0.8YRUlQ7qjrAlsSzwg41QlPQ5d4MGrgOQoLmnwgtt8r3"
}
                            -------------------
GET **/api/coins/list
Nos devuelve la lista de las criptomonedas disponibles
{
        symbol,
        current_price,
        name,
        image,
        last_updated
}

GET **/api/coins/top
Nos devuelve el top N de criptomonedas del usuario autenticado
{
        symbol,
        current_price,
        name,
        image,
        last_updated
}

POST **api/users/addCoin/:id
Enviamos id de la criptomoneda a agregar a la lista del usuario autenticado 
{
    "success": "Currency added"
}

Recibiremos success en caso de que la criptomoneda haya sido agregada


## Errores y sus codigos
{ "rc": 1, "msg": "Invalid user or password" }
{ "rc": 2, "msg": "Invalid token" }
{ "rc": 3, "msg": "Database connection error" }
{ "rc": 4, "msg": "API connection error" }
{ "rc": 5, "msg": "Existing user" }
{ "rc": 6, "msg": "No coins saved" }
{ "rc": 7, "msg": "Existing currency for that user" }


## Autor ✒️
Kevin Leandro De Ritis


## Agradecimientos 🎁
Muchas gracias por la oportunidad y su tiempo, espero poder trabajar en la empresa! Saludos. 