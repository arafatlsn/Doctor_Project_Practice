import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useFireBase from '../FIREBASE/useFireBase';

const RequireAuth = ({ children }) => {
  const { user, loading } = useFireBase();

  const location = useLocation();

  if(loading){
    return;
  }

  if(!user){
    return <Navigate  to={'/signin'} state={{ from: location }} replace/>
  }

  return children

};

export default RequireAuth;