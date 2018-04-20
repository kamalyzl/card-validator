# Libreria ValidCard

ValidCard  es un libreria basada en el algoritmo de  [Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn), te ayudará a saber si una tarjeta de crédito es válida o invalida. Puedes usar datos como: fecha de vencimiento, código de verificación (cvv) y nombre completo que aparece en la tarjeta.


![valid](https://user-images.githubusercontent.com/32285958/39020379-4309b664-43f2-11e8-8955-c3927ff9268b.PNG)

## Lo que se utilizó en este proyecto

* Html 5.2
* Css
* EDGrid
* ES6
* Boostrap
* Fontawesome

## Desarrollado para 
[Laboratoria](http://laboratoria.la)

*Autor: Kamaly Zapana Lorenzo*


- [Contenido](#contenido)
- [Instrucciones de instalación](#instrucciones-de-instalación)
- [Documentación](https://kamalyzl.github.io/card-validator/public/index.html)
- [Plan de trabajo](#plan-de-trabajo)

ValidCard  es un libreria basada en el algoritmo de  [Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn), te ayudará a saber si una tarjeta de crédito es válida o invalida. Puedes usar datos como: fecha de vencimiento, código de verificación (cvv) y nombre completo que aparece en la tarjeta.

## Contenido
Este repositorio incluye los siguientes archivos:

* **public/js/index.js** - contiene la libreria en su versión ES5.
* **src/index.js** - contiene la libreria en su versión ES6.

```
public/
├── js/
│   ├── index.js
│   ├
src/
├── index.js


```
## Instrucciones de instalación
1. Descargar el archivo `index.js`.
2. Copiar el archivo `index.js` a tu carpeta donde tienes los archivos js

3. Agregar archivo en un documento `html` como un `script`
 
```js
 <script src="js/index.js"></script>
 ```

4. Utilizar la función `$.validCard('parámetro')` e incluir el número de la tarjeta como parámetro, esta acción te devolverá un valor booleano (true or false) .

```js
 $.validCard(cardNumber)
 ```


## Plan de trabajo
* La Delegación de tareas lo encontrarás en los ` issues`. 
* Por otro lado, este trabajo se ha venido realizando en un **repositorio distinto a este** por lo que pueden visitarlo en : [JackelineGCP](https://github.com/JackelineGCP/validadorTarjetaCredito/commits/master)


 
 