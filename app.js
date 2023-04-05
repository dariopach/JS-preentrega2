

const descuento = 0.9
const productosStock = []
let eleccion = 0

class productos {
    constructor(id, tipo, descripcion, precio) {
        this.id = id
        this.tipo = tipo
        this.descripcion = descripcion
        this.precio = Number(precio)
    }

}

const producto1 = new productos(1, "Heladera", "Samsung 1 año de garantia", 800)
const producto2 = new productos(2, "SmartTV 40", "Sony (incluye soporte)", 500)
const producto3 = new productos(3, "SmartTV 48", "Sony (incluye soporte)", 700)
const producto4 = new productos(4, "Anafe", "Continental a gas", 250)
const producto5 = new productos(5, "Lavarropas", "Samsung 50 Litros de capacidad horizontal", 650)
const producto6 = new productos(6, "Horno electrico", "Bosch 3 años de garantia", 600)

productosStock.push(producto1, producto2, producto3, producto4, producto5, producto6)

while (eleccion != 8) {

    eleccion = Number(prompt(`Elija que desea comprar: \n 1 - ${producto1.tipo} \n 2 - ${producto2.tipo} \n 3 - ${producto3.tipo} \n 4 - ${producto4.tipo} \n 5 - ${producto5.tipo} \n 6 - ${producto6.tipo} \n 7 - Mas datos \n 8 - Salir`))

    switch (eleccion) {

        case 1:
            alert(`Usted elegio ${producto1.tipo} el cual le sale US$ ${producto1.precio} IVA incluido`)
            let pago1 = prompt("Paga al contado? (10% de descuento)")
            if (pago1 = "si") {
                alert("El monto a pagar es US$ " + descuentoContado(producto1.precio))
            }
            else {
                alert(`El precio a pagar con tarjeta de credito es US$ ${producto1.precio}`)
            }
            break;
        case 2:
            alert(`Usted elegio ${producto2.tipo} el cual le sale US$ ${producto2.precio} IVA incluido`)
            let pago2 = prompt("Paga al contado? (10% de descuento)")
            if (pago2 = "si") {
                alert("El monto a pagar es US$ " + descuentoContado(producto2.precio))
            }
            else {
                alert(`El precio a pagar con tarjeta de credito es US$ ${producto2.precio}`)
            }
            break;
        case 3:
            alert(`Usted elegio ${producto3.tipo} el cual le sale US$ ${producto3.precio} IVA incluido`)
            let pago3 = prompt("Paga al contado? (10% de descuento)")
            if (pago3 = "si") {
                alert("El monto a pagar es US$ " + descuentoContado(producto3.precio))
            }
            else {
                alert(`El precio a pagar con tarjeta de credito es US$ ${producto3.precio}`)
            }
            break;
        case 4:
            alert(`Usted elegio ${producto4.tipo} el cual le sale US$ ${producto4.precio} IVA incluido`)
            let pago4 = prompt("Paga al contado? (10% de descuento)")
            if (pago4 = "si") {
                alert("El monto a pagar es US$ " + descuentoContado(producto4.precio))
            }
            else {
                alert(`El precio a pagar con tarjeta de credito es US$ ${producto4.precio}`)
            }
            break;
        case 5:
            alert(`Usted elegio ${producto5.tipo} el cual le sale US$ ${producto5.precio} IVA incluido`)
            let pago5 = prompt("Paga al contado? (10% de descuento)")
            if (pago5 = "si") {
                alert("El monto a pagar es US$ " + descuentoContado(producto5.precio))
            }
            else {
                alert(`El precio a pagar con tarjeta de credito es US$ ${producto5.precio}`)
            }
            break;
        case 6:
            alert(`Usted elegio ${producto6.tipo} el cual le sale US$ ${producto6.precio} IVA incluido`)
            let pago6 = prompt("Paga al contado? (10% de descuento)")
            if (pago6 = "si") {
                alert("El monto a pagar es US$ " + descuentoContado(producto6.precio))
            }
            else {
                alert(`El precio a pagar con tarjeta de credito es US$ ${producto6.precio}`)
            }
            break;
        case 7:
            let datos = prompt("Escriba un electrodomestico para obtener mas datos \n Heladera \n SmartTV 40 \n SmartTV 48 \n Anafe \n Lavarropas \n Horno electrico")
            const resultado = productosStock.find((elementoBuscado) => elementoBuscado.tipo === datos)
            alert(`${resultado.tipo}, precio US$${resultado.precio} IVA incluido, marca${resultado.descripcion}`)
            break;
        case 8:
            alert("Gracias por comprar con nosotros")
            break;
        default: alert("selecione una opcion valida")
            break;
    }
}

function descuentoContado(totalDescuento) {
    return totalDescuento * descuento
}