import { 
  loginWithEmailAndPassword, 
  logoutFirebase, 
  registerUserWithEmailAndPassword, 
  signInWithGoole 
} from "../../firebase/providers";
import { clearStoreLogout } from "../journal/journalSlice";

import { 
  checkingCredentials, 
  login, 
  logout 
} from "./authSlice";

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

export const startLoginWithEmailAndPassword = ({ email, password }) => {

  return async(dispatch) => {
    dispatch(checkingCredentials());

    // const resp = await loginWithEmailAndPassword({email, password})
    const { ok, uid, photoURL, errorMessage } = await loginWithEmailAndPassword({ email, password });

    if(!ok) return dispatch(logout(errorMessage));

    dispatch(login({ uid, email, photoURL }));
  }

};

export const startLogout = () => {

  return async(dispatch) => {

    await logoutFirebase();

    dispatch(logout());

    dispatch( clearStoreLogout() );

  }

};
