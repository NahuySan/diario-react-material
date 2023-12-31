import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";
import { startLoadingNotes } from "../store/journal/thunks";

export const useCheckAuth = () => {

  const {status} = useSelector(state => state.auth);
  const dispatch = useDispatch()

 useEffect( () => {

onAuthStateChanged(FirebaseAuth, async(user) => {
  // console.log(user);

  if(!user) return dispatch(logout()); //* en estos casos puedo omitir hasta el return despues del if

  const {uid, email, displayName, photoURL} = user;
  dispatch( login({ uid, email, displayName, photoURL }) );
  dispatch(startLoadingNotes());

}); 

}, []);

return status;

}

