import React from 'react';
import { Link } from 'react-router-dom';
import useFireBase from '../FIREBASE/useFireBase';

const SignIn = () => {

  const { signInWithGoogle } = useFireBase();

  const submitForm = e => {
    e.preventDefault();
  }

  return (
    <div className='lg:flex items-center h-[100vh]'>
      <div className='lg:w-[385px] mx-auto pb-[71px] shadow-xl'>
        <h3 className='text-center text-accent font-bold text-[22px] mt-[25px] mb-[37px]'>Login</h3>
          <form className='flex flex-col px-[30px]' onSubmit={submitForm}>
            <label htmlFor="email" className='font-bold'>Email</label>
            <input type="text" className='border px-[1rem] py-[.7rem] rounded-xl focus:outline-none' name="email" placeholder='Email Address' />
            <label htmlFor="password" className='font-bold mt-[12px]'>Password</label>
            <input type="text" className='border px-[1rem] py-[.7rem] rounded-xl focus:outline-none' name="password" placeholder='Password' />
            <p className='font-bold cursor-pointer'>Forget Password?</p>
            <input type="submit" className='btn bg-accent border-hidden font-bold px-[33px] py-[15px] mt-[32px] text-white text-[22px] font-[500]' value="LOGIN" />
            <p className='text-center mt-[11px]'>New to Doctors Portal? <Link className='text-secondary' to={'/signup'}>Create New Account</Link></p>
          </form>
          <div class="flex flex-col w-full border-opacity-50 px-[30px]">
              <div class="divider font-bold">or</div>
          </div>
          <div className='box-border px-[33px]'>
            <button onClick={() => signInWithGoogle()} className='btn bg-white text-accent hover:text-white font-[500] border text-[22px] border-accent w-[100%] h-[48px] rounded-xl capitalize'>Continue With Google</button>
          </div>
        </div>
    </div>
  );
};

export default SignIn;