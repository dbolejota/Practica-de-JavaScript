function saludo() {
    alert("Bienvenido");
}

function circulo() {
    var figura = document.getElementById("figura");
    figura.classList.toggle("circulo");
}
function rectangulo() {
    var figura = document.querySelector("#figura");
    figura.classList.toggle("rectangulo");
}
// aqui
function movetop() {
    var figura = document.querySelector("#figura");
    figura.classList.toggle("top");
}
function left() {
    var figura = document.querySelector("#figura");
    figura.classList.toggle("left");
}

function right() {
    var figura = document.querySelector("#figura");
    figura.classList.toggle("right");
}
function bottom() {
    var figura = document.querySelector("#figura");
    figura.classList.toggle("bottom");
}

function diagonal() {
    var figura = document.querySelector("#figura");
    figura.classList.toggle("diagonal");
}

function imagen() {
    var figura = document.getElementById("figura");
    figura.classList.toggle("imagen");
}
function rombo() {
    var figura = document.querySelector("#figura");
    figura.classList.toggle("rombo");
}

// ALGORITMOS
function suma() {
    var A = 0;
    var B = 0;
    var suma = 0;

    alert("Algoritmo que suma dos valores ingresados por el usuario");

    A = parseInt(prompt("Ingrese el primer valor a sumar"));
    B = parseInt(prompt("Ingrese el segundo valor a sumar"));

    suma = A + B;
    alert("El resultado de la suma es: " + suma);
}


// REALIZAR UN ALGORITMO DE OPERACIONES BASICAS QUE CAPTURE DOS VALORES Y NOS ARROJE EL RESULTADO DE SUMA,
//  RESTA, MULTIPLICACION Y DIVISION DE ESOS DOS VALORES
function operacionesbasicas() {
    var valor1 = 0;
    var valor2 = 0;
    var suma = 0;
    var resta = 0;
    var multiplicacion = 0;
    var division = 0;

    alert("Algoritmo que captura dos valores arrojandonos su SUMA, RESTA, MULTIPLICACIÓN Y DIVISIÓN");
    valor1 = parseInt(prompt("Ingrese el primer valor:"));
    valor2 = parseInt(prompt("Ingrese el segundo valor:"));


    suma = valor1 + valor2;
    resta = valor1 - valor2;
    multiplicacion = valor1 * valor2;
    division = valor1 / valor2;


    alert("La suma es: " + suma);
    alert("La resta es: " + resta);
    alert("La multiplicación es: " + multiplicacion);
    alert("La división es: " + division);
}


// ALGORITMO PROMEDIO
// EL COLEGIO ABC REQUIERE UN SISTEMA QUE LE PERMITA CALCULAR EL PROMEDIO DE UN ALMUNO QUE TIENE SIETE CALIFICACIONES ESTAS SERAN EN UNA ESCALA DE UNA A 10
// EN DONDE APRUEBA SI EL PROMEDIO ES MAYOR O IGUAL A 6.2 ,SI SI APROBO CON TANTO SINO DESAPROBO
function promedio(){
var calificacion1 = parseInt(prompt("Ingrese la calificación 1:"));
var calificacion2 = parseInt(prompt("Ingrese la calificación 2:"));
var calificacion3 = parseInt(prompt("Ingrese la calificación 3:"));
var calificacion4 = parseInt(prompt("Ingrese la calificación 4:"));
var calificacion5 = parseInt(prompt("Ingrese la calificación 5:"));
var calificacion6 = parseInt(prompt("Ingrese la calificación 6:"));
var calificacion7 = parseInt(prompt("Ingrese la calificación 7:"));

// Calcular el promedio de las calificaciones
var suma = calificacion1 + calificacion2 + calificacion3 + calificacion4 + calificacion5 + calificacion6 + calificacion7;
var promedio = suma / 7;

// el alumno aprobó o no
if (promedio >= 6.2) {
  alert(`El promedio del alumno es ${promedio} y aprobó`);
} else {
  alert(`El promedio del alumno es ${promedio} y no aprobó`);
}
}


// REALIZAR UN ALGORITMO QUE CALCULE EL AREA DEL TRIANGULO INGRESANDO SU BASE Y ALTURA
function area() {
    alert("CALCULAR AREA DE UN TRIANGULO");
    var base = prompt("Ingresa la base del triángulo");
    var altura = prompt("Ingresa la altura del triángulo");

    var area = (base * altura) / 2;
    alert("El área del triángulo es: " + area + "cm²");
}
// PORCENTAJE INVERSION DE CAPITAL
// UN INDIVIDUO DESEA INVERTIR SU CAPITAL EN UN BANCO Y REQUIERE SABER CUANTO DINERO GANARA DESPUES DE N NUMERO DE AÑOS TENIENDO EN CUENTA QUE EL BNCO PAGA UN INTERES
// DEL 1,7% MENSUAL
function porcentaje() {
    // Pedir al usuario el capital y el número de años
let capital = prompt("¿Cuánto dinero desea invertir en el banco?");
let numAnios = prompt("¿Durante cuántos años desea invertir el dinero en el banco?");

// Convertir el número de años a meses
let numMeses = numAnios * 12;

// Calcular la tasa de interés mensual
let tasaAnual = 0.017; // 1,7% anual
let tasaMensual = Math.pow(1 + tasaAnual, 1/12) - 1;

// Calcular el monto final
let montoFinal = capital * Math.pow(1 + tasaMensual, numMeses);

// Formatear el resultado
let capitalFormateado = new Intl.NumberFormat().format(capital);
let montoFinalFormateado = new Intl.NumberFormat().format(montoFinal.toFixed(2));

// Mostrar el resultado al usuario
alert("Después de " + numAnios + " años, su capital de $" + capitalFormateado + " habrá crecido hasta $" + montoFinalFormateado);

}

// UNA FRUTERIA VENDE MANZANAS A 4.500 EL KILO REALIZE UN ALGORITMO QUE PERMITA SABER AL VENDEDOR
// CUANTO DEBE PAGAR UN CLIENTE TENIENDO EN CUENTA QUE LA FRUTERIA
// TIENE LA SIGUIENTE TABLA DE DESCUENTOS 
// si el peso de las manzanas es menor a 2 kilos, no se aplica ningún descuento
// Si el peso de las manzanas es de 3 a 5 kilos, se aplica un descuento del 10%. 
// Si el peso de las manzanas es de 6 a 10 kilos, se aplica un descuento del 15%. 
// Si el peso de las manzanas es igual o mayor a 10 kilos, se aplica un descuento del 20%. 

function descuento(){
    const PRECIO_MANZANA = 4500;
let totalAPagar = 0;

while (true) {
  let kilos = parseFloat(prompt("Ingrese los kilos de manzanas que desea comprar:"));
  let cantidad = parseInt(prompt("Ingrese la cantidad de manzanas que desea comprar:"));

  if (isNaN(kilos) || isNaN(cantidad) || kilos <= 0 || cantidad <= 0) {
    alert("Ingrese valores válidos!");
    continue;
  }

  let precio = PRECIO_MANZANA * kilos * cantidad;
  let descuento = 0;

  if (kilos >= 3 && kilos <= 5) {
    descuento = 0.1;
  } else if (kilos >= 6 && kilos <= 10) {
    descuento = 0.15;
  } else if (kilos >= 10) {
    descuento = 0.2;
  }

  let montoDescuento = precio * descuento;
  let precioConDescuento = precio - montoDescuento;

  totalAPagar += precioConDescuento;

  if (!confirm("¿Desea agregar más manzanas?")) {
    break;
  }
}

alert(`El total a pagar es de: $${totalAPagar}`);

    
}
// En este código se utiliza un bucle while para que el usuario pueda ingresar la cantidad de manzanas que desee. Se utiliza la función parseFloat para convertir el valor ingresado como string en un número decimal, y la función parseInt para convertir la cantidad ingresada en un número entero.

// Se calcula el precio total de las manzanas multiplicando el precio por kilo por la cantidad de kilos y la cantidad de manzanas. Luego, se determina el descuento correspondiente según los kilos ingresados y se calcula el monto de descuento y el precio con descuento.

// El total a pagar se va sumando en cada iteración del bucle y se muestra al final en una ventana de alerta.