/* Bucles */

/* 
    Determinados

    bucle for of / for in

    for(let variable of estructura){
        Código a ejecutar
    }

    FOR of; Coge el valor de la posición, se usa más
    FOR IN: Coge el indice de la posición del array, se usa más para objetos
    
    let names = ["Paco", "José", "Paula", "María"];
    for (let name of names){
        console.log(name)
    } // devuelve 4 valores, paco, jose,paula y maria

    for (let name in names){
        console.log(name)
    } // devuelve 4 posiciones,0, 1,2,3

    Palabras reservadas de bucles

        break - Rompe el bucle
        continue - Se salta la(s) posicion(es) que le indequemos y después continúa su ejecución
*/

let names = ["Paco", "José", "Paula", "María"];

for (let i = 0; i < names.length; i++) {
    if (names[i] === "Paula") {
        break; // aqui rompe el bucle solo da paco y jose
    }
    console.log(names[i]);
}

for (let name of names) {
    if (name === "Paula") {
        continue; // se salta la posicion de paula y da paco, jose, maria
    }
    console.log(name);
}

for (let index in names) {
    if (names[index] === "Paula") {
        continue;
    }
    console.log(index);
}