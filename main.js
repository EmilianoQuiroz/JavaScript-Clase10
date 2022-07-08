/*
**************************
*        STORAGE         *
**************************
*/

//--- STORAGE O ALMACENAMIENTO ---//
/*
El objeto Storage (API de almacenamiento web) permite almacenar datos de manera local en el navegador sin necesidad de realizar ninguna conexión con el servidor.
De esta manera, cada cliente puede preservar información de la aplicación.
El navegador nos ofrece dos tipos de storage: localStorage y sessionStorage.
*/

//--- LOCALSTORAGE: SETITEM ---//
/*
Los datos almacenados en localStorage (variable global preexistente) se almacenan en el navegador de forma indefinida (o hasta que se borren los datos de navegación del browser): 
La informacion persiste reinicios del navegador y hasta del mismo sistema operativo.

Para almacenar información se utiliza setItem:

// Método ->  localStorage.setItem(clave, valor)
// clave = nombre para identificar el elemento 
// valor = valor/contenido del elemento 
localStorage.setItem('bienvenida', '¡Hola Coder!');
localStorage.setItem('esValido', true);
localStorage.setItem('unNumero', 20);
*/

//--- CLAVE - VALOR ---//
/*
La información almacenada en el Storage se guarda en la forma de clave-valor. 
Similar al tratamiento de objetos, definimos claves en el storage donde almacenamos valores.
*/

//--- LOCALSTORAGE: GETITEM ---//
/*
Podemos acceder a la información almacenada en localStorage utilizando getItem. Las claves y valores de Storage se guardan en formato de cadena de caracteres (DOMString).

let mensaje =  localStorage.getItem('bienvenida');
let bandera =  localStorage.getItem('esValido');
let numero  =  localStorage.getItem('unNumero');

console.log(mensaje); // ‘¡Hola Coder!’
console.log(bandera); // ‘true’
console.log(numero);  // ‘20’
*/

//--- SESSIONSTORAGE: SETITEM ---//
/*
La información almacenada en sessionStorage (variable global preexistente) se almacena en el navegador hasta que el usuario cierra la ventana.

Solo existe dentro de la pestaña actual del navegador. Otra pestaña con la misma pagina tendra un session storage distinta.

El tratamiento es similar al localStorage:

// Método ->  sessionStorage.setItem(clave, valor)
// clave = nombre del elemento
// valor = Contenido del elemento
sessionStorage.setItem('seleccionados', [1,2,3]);
sessionStorage.setItem('esValido', false);
sessionStorage.setItem('email', 'info@email.com');
*/

//--- SESSIONSTORAGE: GETITEM ---//
/*
Podemos acceder a la información almacenada en sessionStorage utilizando getItem. Las claves y valores de Storage se guardan siempre en formato de cadena de caracteres.

let lista   =  sessionStorage.getItem('seleccionados').split(",");
let bandera = (sessionStorage.getItem('esValido') == 'true');
let email   =  sessionStorage.getItem('email');

console.log(typeof lista);   //object ["1","2","3"];
console.log(typeof bandera); //boolean;
console.log(typeof email);   //string;
*/

//--- RECORRIENDO EL STORAGE ---//
/*
Es posible obtener todos los valores almacenados en localStorage o sessionStorage con un bucle.
*/

//--- RECORRIENDO EL STORAGE ---//
/*
El bucle a emplear es for con el método key:

//Ciclo para recorrer las claves almacenadas en el objeto localStorage
for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));
}
*/

//--- ELIMINAR DATOS DEL STORAGE ---//
/*
Podemos eliminar la información almacenada en sessionStorage o localStorage usando el método removeItem o clear:

localStorage.setItem('bienvenida', '¡Hola Code!');
sessionStorage.setItem('esValido', true);

localStorage.removeItem('bienvenida');
sessionStorage.removeItem('esValido');
localStorage.clear()    //elimina toda la información
sessionStorage.clear() //elimina toda la información
*/
