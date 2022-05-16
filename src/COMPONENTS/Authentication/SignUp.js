import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFireBase from '../FIREBASE/useFireBase';

const SignUp = () => {

  const { createUserWithEmailAndPassword, user } = useFireBase();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const submitForm = e => {
    e.preventDefault();
    if(password === confirmPassword){
      createUserWithEmailAndPassword(email, password)
    }
  }

  console.log(user);

  return (
    <div className='lg:flex items-center h-[100vh]'>
      <div className='lg:w-[385px] mx-auto pb-[71px] shadow-xl'>
        <h3 className='text-center text-accent font-bold text-[22px] mt-[25px] mb-[37px]'>Register</h3>
          <form className='flex flex-col px-[30px]' onSubmit={submitForm}>
            <label htmlFor="email" className='font-bold'>Email</label>
            <input onBlur={(e) => setEmail(e.target.value)} type="email" className='border px-[1rem] py-[.7rem] rounded-xl focus:outline-none' name="email" placeholder='Email Address' />
            <label htmlFor="password" className='font-bold mt-[12px]'>Password</label>
            <input onBlur={e => setPassword(e.target.value)} type="password" className='border px-[1rem] py-[.7rem] rounded-xl focus:outline-none' name="password" placeholder='Password' />
            <label htmlFor="password" className='font-bold mt-[12px]'>Confirm Password</label>
            <input onBlur={e => setConfirmPassword(e.target.value)}  type="password" className='border px-[1rem] py-[.7rem] rounded-xl focus:outline-none' name="confirmPassword" placeholder='Password' />
            <input type="submit" className='btn bg-accent border-hidden font-bold px-[33px] py-[15px] mt-[32px] text-white text-[22px] font-[500]' value="Register" />
          </form>
        </div>
    </div>
  );
};

export default SignUp;