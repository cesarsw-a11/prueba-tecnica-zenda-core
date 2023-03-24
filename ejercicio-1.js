/* Escribe un programa en PHP, JS o Python que imprima una X construida a base de
los símbolos /, \ y X (barra, contrabarra y letra X) y utilizar un doble espacio cuando
no haya carácter. */


function construirX(altura) {
    if (altura === 0 || isNaN(altura) || altura == undefined) return "ERROR";

    for (let fila = 1; fila <= altura; fila++) {
        for (let columna = 0; columna <= altura; columna++) {
            if (fila < columna) {
                console.log("")
            }
        }
    }
}

console.log(construirX(5))