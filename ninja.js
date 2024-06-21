class Ninja {
    constructor(nombre, salud) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName() {
        console.log(`Nombre del Ninja: ${this.nombre}`);
    }

    showStats() {
        console.log(`Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}, Salud: ${this.salud}`);
    }

    drinkSake() {
        this.salud += 10;
        console.log(`${this.nombre} ha bebido sake y ahora su salud es ${this.salud}`);
    }
}

class Sensei extends Ninja {
    constructor(nombre, salud) {
        super(nombre, salud);
        this.sabiduria = 10;
    }

    speakWisdom() {
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
        this.drinkSake();  // Sensei también puede beber sake y aumentar su salud
    }

    // Sobreescribir el método drinkSake de Ninja
    drinkSake() {
        this.salud += 10;
        console.log(`El Sensei ${this.nombre} ha bebido sake y ahora su salud es ${this.salud}`);
    }
}

// Ejemplo de uso:
const ninja1 = new Ninja('Hanzo', 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const sensei1 = new Sensei('Kano', 200);
sensei1.sayName();
sensei1.showStats();
sensei1.speakWisdom();
sensei1.showStats();
