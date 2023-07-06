import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import app from "./"

function loging (email, password){

  const auth = getAuth(app);


    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(uuserCredentialser) 
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });

}
export { loging }