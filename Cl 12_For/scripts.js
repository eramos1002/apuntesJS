/* Bucles */

/* 
    Determinados, se sabe cuantas veces va a ejecutar

    bucle for

    Su sintaxis se compone de 3 partes
        Iniciación de variable
        Número de vueltas, hasta que no cumpla esta condición
        Incremento o decremento

    for(let i=0;i<=10;i++){
        Código a ejecutar
    }
*/

let numbers = [56, 14, 23, 37, 41, 59];

for (let i = 0; i <= numbers.length; i++) {
    console.log(
        `i vale ${i} y el valor de esa posición en el array es ${numbers[i]}`
    );
}

for (let i = 0; i <= 3; i++) {
    console.log(i);
}