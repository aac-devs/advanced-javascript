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

console.log('?????????? PURE FUNCTIONS');

console.log('------- SIDE EFFECTS FUNCTIONS'.toLowerCase());

// EXAMPLE WITH SIDE EFFECTS:
const array: number[] = [1, 2, 3];
console.log(1, array);

function a(arr: number[]): void {
  arr.pop();
}

a(array);
console.log(2, array);

console.log('------- NO SIDE EFFECTS FUNCTIONS'.toLowerCase());

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

console.log('?????????? REFERENCIAL TRANSPARENCY');

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

/**
 * IDEMPOTENCE.
 * In functions means: multiple call is still going to do the same thing, even though it's not a pure function. For example, in APIs like HTTP, we can do an API call and expect that the API gives some sort of parameters that is always going to return the same results, even though we are communicating with the outside world.
 */

/**
 * IMPERATIVE vs DECLARATIVE.
 * Imperative code, is code that tells the machine what to do and how to do it.
 * Declarative code, is code that tells the machine what to do and what should happen.
 * Machine code is very imperative.
 * High Level Language becomes more declarative.
 */

console.log('?????????? IMPERATIVE VS DECLARATIVE');

console.log('------- IMPERATIVE'.toLowerCase());

// IMPERATIVE EXAMPLE:
for (let i = 1; i <= 3; i++) {
  console.log('imp-', i);
}

console.log('------- DECLARATIVE'.toLowerCase());

// DECLARATIVE EXAMPLE:
[1, 2, 3].forEach((item) => console.log('dec-', item));

/**
 * INMUTABILITY.
 * Means not changing the data, not changing the state, instead, make copies of the state and returning a new state every time. Uses STRUCTURAL SHARING for memory optimization.
 */

console.log('?????????? INMUTABILITY');

type NameObj = {
  name: string;
};

const obj: NameObj = { name: 'Andrés' };

function clone(obj: NameObj): NameObj {
  return { ...obj };
}

function updateName(o: NameObj, name: string): object {
  const newObj: NameObj = clone(o);
  newObj.name = name;
  return newObj;
}

console.log(obj);
console.log(updateName(obj, 'Juank'));
console.log(obj);

/**
 * In JavaScript Functions are First Class Citizens, what means that they have HOF and Closures
 * HIGH ORDER FUNCTIONS AND CLOSURES.
 */

/**
 *  HOF: as in mathematics, means it's a function that does one of two things. It either takes one or more functions as arguments, or returns a function as a result, often called a 'callback'
 */

console.log('?????????? HIGHER ORDER FUNCTIONS');

const hof = function () {
  return function () {
    return 5;
  };
};

console.log(hof());
console.log(hof()());

const hof2 = function (fn: Function) {
  return fn(25);
};

console.log(
  hof2(function a(x: number) {
    return x;
  })
);

/**
 * CLOSURES: In JavaScript are a mechanism for containing some sort of state, and in JS we create a closure whenever a function accesses a variable defined outside of the inmediate function scope, that is the scope of the parent.
 * To create a closure, we simply define a function inside another function and expose the inner function either by returning it or passing it to another function so that we can use that variable.
 */

console.log('?????????? CLOSURES');

const closure = function () {
  let count = 0;
  return function () {
    return ++count;
  };
};

console.log('-closure', closure());
console.log('-closure', closure()());
const incr = closure();
console.log('increment:', incr());
console.log('increment:', incr());
console.log('increment:', incr());

console.log('------- CLOSURE EXERCISE'.toLowerCase());

const counter = function (): Function {
  let count: number = 0;
  return () => {
    count = 0;
    return () => {
      count++;
      return () => {
        count--;
        return () => count;
      };
    };
  };
};

const reset: Function = counter();
const increment: Function = reset();
const decrement: Function = increment();
const get: Function = decrement();

if (reset && increment && decrement && get) {
  reset(); // count = 0
  increment(); // count = 1
  increment(); // count = 2
  console.log(get()); // count = 2

  reset(); // count = 0
  increment(); // count = 1
  increment(); // count = 2
  increment(); // count = 3
  increment(); // count = 4
  console.log(get()); // count = 4

  decrement(); // count = 3
  decrement(); // count = 2
  decrement(); // count = 1
  decrement(); // count = 0
  decrement(); // count = -1
  decrement(); // count = -2
  console.log(get()); // count = -2
}

/**
 * CURRYING.
 * Is a technique of translating the evaluation of a function that takes multiple arguments, into evaluating a sequence of functions, each with a single argument
 * */

console.log('?????????? CURRYING');

console.log('------- NOT CURRYING'.toLowerCase());

// NOT CURRYING:
const multiplyNotCurrying = (a: number, b: number): number => a * b;
console.log(multiplyNotCurrying(3, 4));
