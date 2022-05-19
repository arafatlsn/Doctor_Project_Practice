import axios from 'axios';
import { useEffect, useState } from 'react';

const useToken = user => {
  const [token, setToken] = useState('');
  useEffect(() => {

    if(user?.email){

      const func = async() => {

        const userObj = { email: user?.email }
        const { data } = await axios.put(`http://localhost:5000/user?email=${user.email}`, userObj)

        const accesToken = data?.token;
        setToken(accesToken)
        console.log(accesToken)
        localStorage.setItem('access-token', JSON.stringify(accesToken))
      }

      func()

    }

  }, [user])
  return {token}
};

export default useToken;