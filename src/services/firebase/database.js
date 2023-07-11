import {getFirestore} from "firebase/firebase-firestore";
import conexion from "./"

const db = getFirestore(conexion);

export default db;