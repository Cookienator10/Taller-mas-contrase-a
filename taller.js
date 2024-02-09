//Taller

// 1. dado el nombre y la edad de una persona retorna si es o no mayor de edad.

// 2. Crea una función para retornar el IMC: Con el sistema métrico, la fórmula para el IMC es el peso en kilogramos dividido por la estatura en metros cuadrados. Debido a que la estatura por lo general se mide en centímetros, divida la estatura en centímetros por 100 para obtener la estatura en metros.

// 3. Crea una función para calcular el área de un rectángulo: Fórmula del área de un rectángulo. Para calcular el área de un rectángulo multiplicamos el largo por el ancho.

// 4. Diseñar un algoritmo que, dados dos números, muestre por pantalla su suma si y solo si son números enteros positivos.

// 5. Dada como entrada un string como password, deberás validar si es aceptable, basado en los siguientes parámetros:
  // * Mínimo 8 caracteres
  // * En caso de que la primera letra no sea mayúscula, conviértela a mayúscula.
  // * Debe contener por lo menos uno de los siguientes caracteres: * / + -
  // Retorne true si la clave es aceptable o false si no.

//develop
//1. edad
let name = 'Sam'
let age = 12;

function older() {
    if  ( age < 18) {
     return 'eres menor de edad'
    }
    else  {
     return   'eres mayor de edad'
    }
};

console.log(older());

//2. IMC
let height = 149;
let weight = 34 ;

let hm2 = (height*1/100); 


function p(base, exponent) {
      let result = base;


      for( let i = 0;  i < exponent; i++) {
        result  *= base;
      }
      return result;
}

let BMI =  weight/ p(hm2, 1);
console.log(`tu indice de masa corporal es:${BMI.toFixed(2)}`);


//3. rectangulo
let large = 1.14;
let wide = 14;
let area = (  wide * large) 

console.log(`el area del rectanbgulo es: ${area.toFixed(2)}` );

//4. suma numeros
let n1 = 34;
let n2 = 45;
function n() {
 if  ( n1,n2 > 0) {
  return  true
 }
  else if  ( n1,n2 < 0) {
    return false
  }
};

function sumasitrue() {
  if (n()) {
    return n1+n2;

  } else {
    return 'los numeris no son positivos para hacer la operacion'
    
  }
}


console.log(sumasitrue());





