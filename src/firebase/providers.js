import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoole = async() => {

  try {

    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result); //* esto es para ver las credenciales que te llegan
    // console.log({credentials})
    // const user = result.user; //* lo mismo que abajo solo que abajo desestructuré user
    const { displayName, email, photoURL, uid } = result.user
    // console.log({user})
    return {
      ok: true,
      displayName, 
      email, 
      photoURL, 
      uid,
    }

  } catch(error) { 
      console.log(error)
      // Handle Errors here. //*esto viene todo de firebase
      const errorCode = error.code;
      const errorMessage = error.message;
      return {
        ok: false,
        errorMessage

      }
  }

}
 
export const registerUserWithEmailAndPassword = async({ email, password, displayName }) => {

  try {
    
    const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid, photoURL } = resp.user;

    await updateProfile(FirebaseAuth.currentUser, { displayName });
    
    return {
      ok: true,
      displayName, 
      email,
      photoURL,
      uid,
    }

  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message
    }
  }
}