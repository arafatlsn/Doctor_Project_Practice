import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useFireBase from '../FIREBASE/useFireBase';
import { useForm } from "react-hook-form";
import useToken from '../../Hooks/useToken';

const SignUp = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const { register, setError, formState: { errors }, handleSubmit } = useForm();

  const { createUserWithEmailAndPassword, user, updateProfile } = useFireBase();

  const { token } = useToken(user);

  const [confirmPassword, setConfirmPassword] = useState('');
  
  const submitForm = data => {

    const displayName = data.name;
    const email = data.email;
    const password = data.password;

    const func = async() => {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName })
    }

    func()

  }

  useEffect(() => {
    if(token){
      navigate(from, { replace: true })
    }
  }, [user])

  return (
    <div className='lg:flex items-center h-[100vh]'>
      <div className='lg:w-[385px] mx-auto pb-[71px] shadow-xl'>
        <h3 className='text-center text-accent font-bold text-[22px] mt-[25px] mb-[37px]'>Register</h3>
          <form className='flex flex-col px-[30px]' onSubmit={handleSubmit(submitForm)}>
            <label htmlFor="password" className='font-bold mt-[12px]'>Name</label>
            <input {...register("name", {
              required: {
                value: true,
                message: 'Your Name is Required'
              }
            })}  type="text" className='border px-[1rem] py-[.7rem] rounded-xl focus:outline-none' placeholder='Your Name' />
            {errors.name?.type === 'required' && <span className='text-red-500'>{errors.name?.message}</span>}
            <label htmlFor="email" className='font-bold'>Email</label>
            <input {...register("email", {
              required: {
                value: true,
                message: 'Email is Required'
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: 'error message'
              }
            })} type="email" className='border px-[1rem] py-[.7rem] rounded-xl focus:outline-none' placeholder='Email Address' />
            {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email?.message}</span>}
            {errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email?.message}</span>}
            <label htmlFor="password" className='font-bold mt-[12px]'>Password</label>
            <input onChange={e => setConfirmPassword(e.target.value)} {...register("password", {
              required: {
                value: true,
                message: 'Password is Required'
              },
              minLength: {
                value: 6,
                message: 'Minimum length should be 6 length'
              }
            })} type="password" className='border px-[1rem] py-[.7rem] rounded-xl focus:outline-none' placeholder='Password' />
            {errors.password?.type === 'required' && <span className='text-red-500'>{errors.password?.message}</span>}
            {errors.password?.type === 'minLength' && <span className='text-red-500'>{errors.password?.message}</span>}
            <input type="submit" className='btn bg-accent border-hidden font-bold px-[33px] py-[15px] mt-[32px] text-white text-[22px] font-[500]' value="Register" />
          </form>
        </div>
    </div>
  );
};

export default SignUp;