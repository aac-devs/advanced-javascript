console.clear();
console.log('06 - FUNCTIONAL PROGRAMMING');

/**
 * FUNCTIONAL PROGRAMMING PILLAR: PURE FUNCTIONS
 * La programación funcional se trata solo de hacer que el código sea predecible.
 */

/**
 * PURE FUNCIONS:
 * - No side effects,
 * - imput --> output, REFERENCIAL TRANSPARENCY.
 */

// EXAMPLE WITH SIDE EFFECTS:
const array: number[] = [1, 2, 3];
console.log(1, array);

function a(arr: number[]): void {
  arr.pop();
}

a(array);
console.log(2, array);

// EXAMPLE WITH NO SIDE EFFECTS:
const array1: number[] = [1, 2, 3];

function removeLastItem(arr: number[]): number[] {
  const newArray: number[] = [...arr];
  newArray.pop();
  return newArray;
}

function multiplyBy2(arr: number[]): number[] {
  return arr.map((item) => item * 2);
}

const array2: number[] = removeLastItem(array1);
const array3: number[] = multiplyBy2(array1);
console.log(array1, array2, array3);

/**
 * REFERENCIAL TRANSPARENCY:
 * No importa cual sea mi entrada, si es la misma, siempre me dará el mismo resultado
 */

function sum(num1: number, num2: number): number {
  return num1 + num2;
}

function multBy2(num: number): number {
  return num * 2;
}

const resp: number = multBy2(sum(3, 4)); // --> 14
console.log(resp);

/**
 * PERFECT FUNCTION:
 * - TASK: Debe hacer sólo una tarea y sólo una, funciones simples que se puedan probar que hace una cosa realmente bien.
 * - RETURN STATEMENT: Debería tener una declaración de retorno.
 * - PURE: Debe ser pura.
 * - NO SHARE STATE: No tener estado compartido con otras funciones.
 * - INMUTABLE STATE: Estado inmutable donde podamos modificar algunos de los estados dentro de nuestras funciones. Pero siempre retornamos lo que obtenemos como una entrada. Siempre devolvemos una nueva copia de esa salida. Nunca modificamos nuestro estado global.
 * - COMPOSABLE: Deben ser componibles.
 * - PREDICTABLE: Deben ser predecibles.
 */
