class Libro {

    constructor (titulo,autor,genero,precio,stock){
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.precio = precio;
        this.stock = stock;
    }

    descripcion(){
        return `${this.titulo} de ${this.autor}` ;
    }

    tieneStock(){
        return this.stock > 0;
    }
    
    resumen(){
        const disponibilidad = this.stock > 0 ? `En stock (${this.stock} unidades)` : "Sin stock";
        return `${this.descripcion()} | Precio: $${this.precio.toLocaleString('es-AR')} | ${disponibilidad}`
    }
}

const libro1 = new Libro("El Aleph", "Jorge Luis Borges", "Ficción", 15000, 5);
const libro2 = new Libro("La Carretera", "Cormat MCarthy", "Ficcion", 24000, 0);

console.log(libro1.resumen());
console.log(libro1.descripcion());
console.log(libro1.tieneStock());
console.log("Aca Datos Libro 2");
console.log(libro2.resumen());
console.log(libro2.descripcion());
console.log(libro2.tieneStock());
console.log("enzo facho");