class Auto {
    constructor (marca, modelo, anio, color, motor, traccion){
        this.marca=marca;
        this.modelo=modelo;
        this.anio=anio;
        this.color=color;
        this.motor=motor;
        this.traccion=traccion;
    }

    mostrarDatos( ) {
        console.log (`La marca del auto es: ${this.marca}`)
        console.log (`El modelo del auto es: ${this.modelo}`)
        console.log (`El año de fabricación es: ${this.anio}`)
        console.log (`El color del auto es: ${this.color}`)
        console.log (`El motor del auto es: ${this.motor}`)
        console.log (`La tracción del auto es: ${this.traccion}`)
    }
}

const auto1 = new Auto (`Fiat`, `Palio`, 2015, `azul`, 1.1, `2x4`)

auto1.mostrarDatos()

console.log (" ")

const auto2 = new Auto (`Ford`, `Focus`, 2020, `blanco`, 1.6, `2x4`)

auto2.mostrarDatos()