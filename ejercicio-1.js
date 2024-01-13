/* Escribe un programa en PHP, JS o Python que imprima una X construida a base de
los símbolos /, \ y X (barra, contrabarra y letra X) y utilizar un doble espacio cuando
no haya carácter. */
function construirX(tamano) {
    if (tamano === 0 || isNaN(tamano) || tamano == undefined) return "ERROR";

    for (let i = 0; i < tamano; i++) {
        let linea = '';

        for (let j = 0; j < tamano; j++) {
            if (i === j && i !== Math.floor(tamano / 2) && j !== Math.floor(tamano / 2)) {
                // Línea diagonal principal (no en el centro)
                linea += '\\';
            } else if (i === Math.floor(tamano / 2) && j === Math.floor(tamano / 2)) {
                // Centro de la "X"
                linea += "X";
            } else if (i + j === tamano - 1) {
                // Línea diagonal secundaria
                linea += '/';
            } else {
                // Espacio en blanco
                linea += ' ';
            }
        }

        console.log(linea);
    }
}

construirX(5)
