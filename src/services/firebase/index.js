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

// tareas bloqueantes, no bloqueantes
// tareas sincronicas y asincronicas
// polling o poll
// timers
// callback
// tipos de funciones