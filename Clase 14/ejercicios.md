1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola \_**\_, tienes \_\_** años y el año que viene tendrás \_\_\_\_ años"
Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings

let name=prompt("Introduce tu nombre");
let age=prompt("Introduce tu edad");
console.log(`Hola ${name}, tienes ${age} años y el año que viene tendras ${Number(age)+1} años`);

2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
triángulo = b _ h/2
rectángulo = b _ h
círculo = π _ r2 (pi _ radio al cuadrado)

    let figura=prompt("De que figura quiere calcular el area?")
    let area, base, altura, radio=0;

    switch (figura){

    case "triangulo":
    let base=prompt("Introduce la base");
    let altura=prompt("Introduce la altura");
    area= (base*altura)/2;
    break;

    case "rectangulo":
    let b=prompt("Introduce la base");
    let h=prompt("Introduce la altura");
    area= b*h;

    break;

    case "circulo":
    let radio=prompt("Introduce el radio");
    area= (3.14*r*r);

    break;

    default:
    console.log("Debe introducir una figura: triangulo, cuadrado o circulo");
    let figura=prompt("De que figura quiere calcular el area?")

    }

3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar"
si el número es 5 el resultado será:
1 - es impar
2 - es par
3 - es impar
4 - es par
5 - es impar
let number=0;
let numbers= parseInt(prompt("Ingresa un numero"));
for (let i=0; i<=numbers;i++){
if ((i%2)===0) {
console.log(`el ${number} es par`)
} else{
console.log(`el ${number} es impar`)
}
}

// este no es
for ( let number of numbers) {
if ((number%2)===0) {
console.log(`el ${number} es par`)
} else{
console.log(`el ${number} es impar`)
}
}

4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no.
Un número primo es aquel que solo es divisible por sí mismo y la unidad

    let number= parseInt(prompt("Ingresa un numero"));
    for (let i=2 ; i<number ; i++) {
    let resto = number%i
    if (resto===0) {
    console.log(`el ${number} no es primo`);
    i=number;
    } else{
    console.log(`el ${number} es primo`);
    }
    }

5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.

    !5 = 5*4*3*2*1 = 120


     let number= parseInt(prompt("Ingresa un numero"));
     let total=1;
     for (let i=1; i<=number; i++) {
         total*=i;
         return total;
     }
     console.log(total)

6 - Escribe un programa que permita ir introduciendo una serie indeterminada de números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido

let total=0;
let number=0;
let contador=0;
while (total<50){

number= parseInt(prompt("Ingresa un numero"));
total+=number;
contador++
console.log("contador", contador);
}
total -=number;
console.log("total", total)

7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola:
-la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6
-el array de pares e impares

const a = [1,2,3,4,5];
let pares = [];
let impares = [];

8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.

10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
