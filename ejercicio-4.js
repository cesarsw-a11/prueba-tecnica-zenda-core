/* Genera un objeto que realice las siguientes acciones:
1. Petición a la HTTP a la dirección (prueba.zendha.net) parámetro GET facturas
y con su devolución:
2. Genera un método para realizar cada una de las siguientes acciones:
1. IVA total de los registros devueltos
2. Cantidad vendida a cada receptor (teniendo en cuenta que estos pueden
repetirse)
3. Periodos de las fechas en las que hay facturas.
4. Genera una función que al pasar el resultado de los puntos anteriores
genere una tabla maquetada en FLEXBOX.
 */

class Rendimientos {

    getRendimientos() {
        fetch("prueba.zendha.net")
            .then(data => data.json())
            .then(res => {
                return res.data;
            })
    }

    getTotalIVA() {
        const registros = this.getRendimientos();
        let sumaSubtotales = 0;
        let IVA = 0;

        registros.map((registro) => {
            sumaSubtotales += registro.importe_subtotal;
        });

        IVA = (sumaSubtotales / 100) * 16;

        return IVA;
    }

    getCantidadVendida(){
        const registros = this.getRendimientos();
        let ventas = {};
        registros.forEach(elemento => (ventas[elemento] = ventas[elemento] + 1 || 1 ))

        return ventas;
    }

    getPeriodoFacturas(){
        const registros = this.getRendimientos();
    }

    generarTabla(){

    }

}