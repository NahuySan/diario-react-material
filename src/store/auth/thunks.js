import { registerUserWithEmailAndPassword, signInWithGoole } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuth = (email, password) => {

  return async( dispatch ) => {
  dispatch(checkingCredentials())


  }

};

export const startGoogleSignIn = (email, password) => {

  return async( dispatch ) => {

  dispatch(checkingCredentials());
  const result = await signInWithGoole();
  // console.log({result})
  if(!result.ok) return dispatch(logout({errorMessage}));
  dispatch(login(result));

  }

};

export const startCreatingUserWithEmailAndPassword = ({ email, password, displayName }) => {

  return async(dispatch) => {
    dispatch(checkingCredentials());

    const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailAndPassword({ email, password, displayName });

    if(!ok) return dispatch(logout(errorMessage));

    dispatch(login({ uid, displayName, email, photoURL }));
  }
};
