import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useFireBase from '../FIREBASE/useFireBase';
import { useForm } from "react-hook-form";
import { PulseLoader } from 'react-spinners';
import useToken from '../../Hooks/useToken';

const SignIn = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const { 
      user,
      signInWithGoogle,
      signInWithEmailAndPassword,
      loadingSignInWithEmailAndPassword, errorSignInWithEmailAndPassword
     } = useFireBase();

     const { token } = useToken(user);

  const { register, formState: { errors }, handleSubmit } = useForm();

  const submitForm = data => {

    const email = data?.email;
    const password = data?.password;
    signInWithEmailAndPassword(email, password)
    
  }

  useEffect(() => {
    if(token){
      navigate(from, { replace: true })
    }
  }, [token, user])

  return (
    <div className='lg:flex items-center h-[100vh]'>
      <div className='lg:w-[385px] mx-auto pb-[71px] shadow-xl'>
        <h3 className='text-center text-accent font-bold text-[22px] mt-[25px] mb-[37px]'>Login</h3>
          <form className='flex flex-col px-[30px]' onSubmit={handleSubmit(submitForm)}>
            <label htmlFor="email" className='font-bold'>Email</label>
            <input type="email" className='border px-[1rem] py-[.7rem] rounded-xl focus:outline-none' name="email" placeholder='Email Address'
            {...register("email", {
              required: {
                value: true,
                message: 'Email is Required'
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: 'error message'
              }
            })}
            />
            {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email?.message}</span>}
            {errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email?.message}</span>}
            <label htmlFor="password" className='font-bold mt-[12px]'>Password</label>
            <input type="password" className='border px-[1rem] py-[.7rem] rounded-xl focus:outline-none' name="password" placeholder='Password'
            {...register("password", {
              required: {
                value: true,
                message: 'Password is Required'
              },
              minLength: {
                value: 6,
                message: 'Minimum length should be 6 length'
              }
            })} />
            {errors.password?.type === 'required' && <span className='text-red-500'>{errors.password?.message}</span>}
            {errors.password?.type === 'minLength' && <span className='text-red-500'>{errors.password?.message}</span>}
            <p className='font-bold cursor-pointer'>Forget Password?</p>
            {
            errorSignInWithEmailAndPassword && <p className='text-center mb-[.5rem] text-red-500'>{errorSignInWithEmailAndPassword?.message.split(':')[1]}</p>
            }
            {
              loadingSignInWithEmailAndPassword ? <button className={`flex justify-center items-center btn bg-accent border-hidden font-bold ${errorSignInWithEmailAndPassword || 'mt-[32px]'} text-white font-[500]`}><PulseLoader color={'white'} size={10} /></button>
              : <input type="submit" className={`btn bg-accent border-hidden font-bold px-[33px] py-[15px] ${errorSignInWithEmailAndPassword || 'mt-[32px]'} text-white text-[22px] font-[500]`} value="LOGIN" />
            }
            <p className='text-center mt-[11px]'>New to Doctors Portal? <Link className='text-secondary' to={'/signup'}>Create New Account</Link></p>
          </form>
          <div className="flex flex-col w-full border-opacity-50 px-[30px]">
              <div className="divider font-bold">or</div>
          </div>
          <div className='box-border px-[33px]'>
            <button onClick={() => signInWithGoogle()} className='btn bg-white text-accent hover:text-white font-[500] border text-[22px] border-accent w-[100%] h-[48px] rounded-xl capitalize'>Continue With Google</button>
          </div>
        </div>
    </div>
  );
};

export default SignIn;