//OBJETOS
const productos = {
  marca : "Acme",
  precio: 1000,
  disponible: false
}

//TODO refresh memory on this 
Object.freeze(productos) //No deja modificarlo, no permite añadir propiedad ni eliminarla 
Object.seal(products) //Permite modificar propiedades, no permite añadir ni eliminar 

productos.marca // "Acme"
productos.precio // 1000

//Desestructuracion 

const marcaProducto = productos.marca

console.log(marcaProducto) // "Acme"

//Arrays o arreglos 
const tecnologias = ["Dw", "Js", "React", "Node" ]
tecnologias[0] // "Dw"Do

//Esto ocupa los espacios o indices 
const [ , , d] = tecnologias // "React"

.push (agregaba elementos al final del array)
.unshift (agregaba al principio del array)
.splice (2,3)
.map (recorrer el array y retornar los elementos )

//Funciones
//FUNCTION DECLARATION 
function sumar (a,b) {
  console.log(a+b)
}

//FUNCTION EXPRESSION 
const sumar = function(a,b) {
  return a + b
}

//ARROW FUNCTIONS
const sumar = (a,b) => a + b

//CONDICIONALES 
let temperatura = 35 

if (temperatura > 35) {
  console.log("Hace calor")
} else {
  console.log("Hace frio")
}

temperatura > 35 ? "Hace calro" : "Hace frio"










