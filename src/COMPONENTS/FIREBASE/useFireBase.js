import React from 'react';
import auth from './Firebase.init';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const useFireBase = () => {
  // sign in with google 
  const [signInWithGoogle, usersignInWithGoogle, loadingsignInWithGoogle, errorsignInWithGoogle] = useSignInWithGoogle(auth);
  // create user with email pass 
  const [
    createUserWithEmailAndPassword,
    userCreateUserWithEmailAndPassword,
    loadingCreateUserWithEmailAndPassword,
    errorCreateUserWithEmailAndPassword,
  ] = useCreateUserWithEmailAndPassword(auth);

  // load user 
  const [user, loading, error] = useAuthState(auth);

  return { user, signInWithGoogle, createUserWithEmailAndPassword }
};

export default useFireBase;