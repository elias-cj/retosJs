
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

function reto1(){
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



