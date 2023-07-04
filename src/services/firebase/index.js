import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

setTimeout(d, 2800)

function hola(name) {
  console.log(name)
}

hola("Victor")


(function(name) {
  console.log(name)
})()

(
  function(name) {
    console.log(name)
  }
)("Victor");

function something() {

}

setTimeout(function() {}, 1500);
setImmediate(function() {

})
console.log("jhdkj")

const promise = new Promise(
  (resolve, reject) => {
    try {
      // something
      resolve("todo okay")
    } catch {
      reject("something error")
    }
  }
)

promise
.then((result) => {console.log(result)})
.catch((error) => {console.log(error)})

// .then
// .catch

async function promiseFunction() {
  const promise = await new Promise(
    (resolve, reject) => {
      try {
        // something
        reject("something error")
        resolve("todo okay")
      } catch {
        reject("something error")
      }
    }
  )
  return promise;
}

promiseFunction();


// tareas bloqueantes, no bloqueantes
// tareas sincronicas y asincronicas
// polling o poll
// timers
// callback
// Función declarativa
// función de expresión
// función flecha o arrow function
// IIFE
// parametros y argumentos
// timers (setTimeout, setImmediate)
// colas y pilas
// Promesas






kjkjhgrt







// Función declarativa
// función de expresión
// función flecha o arrow function
// callbacks
// Promesas
// eventos bloqueantes (sincronico)
// eventos no blqueantes (asincronico)
// javascript es mono hilo - multihilo
// polling
// Pilas y Colas
// timers (setTimeout, setImmediate)
// event loop
// IIFE
// parametros y argumentos