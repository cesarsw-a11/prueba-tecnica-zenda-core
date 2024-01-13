class FacturasManager {
    constructor() {
      this.facturas = [];
    }
  
    async obtenerFacturas() {
      try {
        const respuesta = await fetch('https://prueba.zendha.net/facturas');
        const datos = await respuesta.json();
        this.facturas = datos;
      } catch (error) {
        console.error('Error al obtener las facturas:', error);
      }
    }
  
    calcularIVATotal() {
      const ivaTotal = this.facturas.reduce((total, factura) => total + factura.iva, 0);
      console.log('IVA total de los registros devueltos:', ivaTotal);
      return ivaTotal;
    }
  
    calcularCantidadVendidaPorReceptor() {
      const cantidadPorReceptor = {};
  
      this.facturas.forEach((factura) => {
        const receptor = factura.receptor;
  
        if (!cantidadPorReceptor[receptor]) {
          cantidadPorReceptor[receptor] = 0;
        }
  
        cantidadPorReceptor[receptor] += factura.cantidad;
      });
  
      console.log('Cantidad vendida a cada receptor:', cantidadPorReceptor);
      return cantidadPorReceptor;
    }
  
    obtenerPeriodosDeFechas() {
      const periodos = [];
  
      this.facturas.forEach((factura) => {
        const fechaInicio = new Date(factura.fechaInicio);
        const fechaFin = new Date(factura.fechaFin);
  
        const periodo = { inicio: fechaInicio, fin: fechaFin };
        periodos.push(periodo);
      });
  
      console.log('Periodos de las fechas en las que hay facturas:', periodos);
      return periodos;
    }
  
    generarTablaFlexbox(resultados) {
      // Lógica para generar la tabla con Flexbox
      // Puedes utilizar el DOM o bibliotecas de UI como React o Angular para construir la interfaz gráfica.
    }
  }
  
 // Ejemplo de uso
async function ejecutar() {
    const manager = new FacturasManager();
    await manager.obtenerFacturas();
  
    const ivaTotal = manager.calcularIVATotal();
    const cantidadPorReceptor = manager.calcularCantidadVendidaPorReceptor();
    const periodos = manager.obtenerPeriodosDeFechas();
  
    // Luego puedes usar estos resultados para generar la tabla con Flexbox
    manager.generarTablaFlexbox({ ivaTotal, cantidadPorReceptor, periodos });
  }
  
  // Llama a la función ejecutar
  ejecutar();
