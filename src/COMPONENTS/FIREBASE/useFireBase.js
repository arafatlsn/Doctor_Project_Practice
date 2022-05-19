import React from 'react';
import auth from './Firebase.init';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';

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
  // signin with email pass 
  const [
    signInWithEmailAndPassword,
    userSignInWithEmailAndPassword,
    loadingSignInWithEmailAndPassword,
    errorSignInWithEmailAndPassword,
  ] = useSignInWithEmailAndPassword(auth);

  // update profile 
  const [updateProfile, updating, errorUpdateProfile] = useUpdateProfile(auth);

  // load user 
  const [user, loading, error] = useAuthState(auth);

  return { user, loading, signInWithGoogle, createUserWithEmailAndPassword, signInWithEmailAndPassword, loadingSignInWithEmailAndPassword, errorSignInWithEmailAndPassword, updateProfile }
};

export default useFireBase;