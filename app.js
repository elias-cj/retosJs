
//retos funciones
/*Crea una función que calcule el índice de masa corporal (IMC)
 de una persona a partir de su altura en metros 
y peso en kilogramos, que se recibirán como parámetros.*/

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
calcularImc();
























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



