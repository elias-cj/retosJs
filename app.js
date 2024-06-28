
//retos funciones
/*Crea una función que calcule el índice de masa corporal (IMC)
 de una persona a partir de su altura en metros 
y peso en kilogramos, que se recibirán como parámetros.*/
/*
function calcularImc(){
    let peso = prompt('ingrese su peso');
    let altura = prompt('ingrese su estatura');
    let imc = peso / (altura * altura);
    if(imc <= 16){
        console.log(`tu imc es de: ${imc.toFixed(2)} por lo que tu estado es de delgades(desnutricion) serera`);
    }
    else if (imc > 16 && imc < 17) {
        console.log(`tu imc es de: ${imc.toFixed(2)} por lo que tu estado es de delgades(desnutricion) moderada`);
    }
    else if(imc >= 17 && imc < 18.5){
        console.log(`tu imc es de: ${imc.toFixed(2)} por lo que tu estado es de delgades(desnutricion) leve`);
    }
    else if(imc >= 18.5 && imc < 25){
        console.log(`tu imc es de: ${imc.toFixed(2)} por lo que tu estado es normal`);
    }
    else if(imc >= 25 && imc < 30){
        console.log(`tu imc es de: ${imc.toFixed(2)} por lo que tu estado es de sobrepeso(preobesidad)`);
    }
    else if(imc >= 30 && imc <35){
        console.log(`tu imc es de: ${imc.toFixed(2)} por lo que tu estado es de obesidad de grado I (leve o moderado)`);
    }
    else if(imc >= 35 && imc < 40){
        console.log(`tu imc es de: ${imc.toFixed(2)} por lo que tu estado es de obesidad de grado II (severa)`);
    }
    else{
        console.log(`tu imc es de: ${imc.toFixed(2)} por lo que tu estado es de obesidad de grado III (morvida)`);
    }
}
calcularImc();*/
/*
// Se obtiene un número del usuario a través de un cuadro de diálogo emergente
let num = prompt('Introduce un número');

// Función para calcular el factorial de un número
function factorial() {
  // Se verifica si el número es 0 o 1, en cuyo caso se retorna 1
  if (num === 0 || num === 1) {
    return 1;
  } else {
    // Se inicializan las variables `i` e `aux`
    let i = 1;
    let aux = num;

    // Bucle `while` que se ejecuta mientras `aux` sea mayor o igual que 1
    while (aux >= 1) {
      // Se multiplica la variable `i` por el valor actual de `aux`
      i = i * aux;
      // Se decrementa el valor de `aux` en 1
      aux--;
    }
    // Se retorna el valor de la variable `i`
    return i;
  }
}
// Ejemplo de uso: se calcula y muestra el factorial del número introducido
alert(`el factoria de ${num} es: ${factorial()}`);
*/
/************************************************************************ */  
let lista = [];
let lenguajesDeProgramacion = ['JavaScript','C','C++','Python'];
lenguajesDeProgramacion.push('Java','Ruby','GoLand');
/************************************************************************ */

function mostrarElementos(){
    console.log(lenguajesDeProgramacion);
}
mostrarElementos();
/************************************************************************ */

function mostrarElementosInvertidos(){
    console.log(lenguajesDeProgramacion.reverse());
}
mostrarElementosInvertidos();

/************************************************************************ */
function numeroPromerdio(){
    let total = 0;
    let promedio = [1,2,3,4,5,6];
    for(let i = 0; i < promedio.length; i++){
        total += promedio[i];
    }
    return total / promedio.length;
}
console.log(numeroPromerdio());

/************************************************************************ */

function encontrarMayorYMenor(lista) {
    if (lista.length === 0) {
        console.log("La lista está vacía.");
        return;
    }
    let mayor = lista[0];
    let menor = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i];
        }
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }
    console.log("Número más grande: " + mayor);
    console.log("Número más pequeño: " + menor);
}
let numeros = [34, 7, 23, 32, 5, 62, 72];
encontrarMayorYMenor(numeros);


/********************************************************* */

function sumaArray(){
    let suma  = 0;
    let elementos = [1,2,3,4,5];
    for(let i = 0; i < elementos.length; i++){
        suma += elementos[i];
    }
    return suma
}
console.log(sumaArray());

/********************************************************* */

function posicionElemento(){
    let posiscion = posElemento[0];
    let posElemento = [1,2,3,4,5,6,4,5,4];
    for(let i = 0; i < posElemento.length; i++){
        
    }
}







/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'hora del desafio';

function consola(){
    console.log('El botón fue clicado');
}

function ciudad(){
    let nombreCiudad = prompt('ingrese el nombre de una ciudad de brasil');
    alert(`estube en ${nombreCiudad} y me acorde de ti`);
}

function amoJs(){
    alert('yo amo js')
}

function suma(){
    let a = prompt('ingrese un numero');
    let b = prompt('ingrese otro numero');
    let resultado = parseInt(a) + parseInt(b);
    alert(`la se suma de los 2 numeros es: ${resultado}`)
}*/

/*function reto1(){
    let nombree = document.getElementById('nombre').value;
    console.log(`hola ${nombree}`);
}

function reto2(){
    console.log('Hola Mundo');
}

function reto3(){
    let numeroDoble = document.getElementById('doble').value;
    let resultado = numeroDoble * 2;
    console.log(resultado);
}

function reto4(){
    let a = prompt('ingrese el primer numero');
    let b = prompt('ingrese el segundo numero');
    let c = prompt('ingrese el tercer numero');
    let promerdio = (parseInt(a) + parseInt(b) + parseInt(c)) / 3;
    console.log(promerdio);
}

function reto5(){
    let x = prompt('ingrese el primer numero');
    let y = prompt('ingrese el segundo numero');
    
    if(x > y){
        console.log(`x: ${x} es mayor que y: ${y}`)
    }
    else if(y > x){
        console.log(`x: ${x} es menor que y: ${y}`)
    }
    else{
        console.log('son iguales')
    }
}


function reto6(){
    let numero = prompt('ingrese un numero');
    let resultadoReto6 = numero * numero;
    console.log(resultadoReto6);
}
*/



