import React from 'react';
import BG from '../../assets/images/appointment.png'

const Contactus = () => {
  const submitForm = e => {
    e.preventDefault();
  }
  return (
    <div className='mt-[150px] lg:mb-[137px]' style={{backgroundImage: `url(${BG})`}}>
      <div>
        <div className='pt-[65px] pb-[60px]'>
          <h6 className='text-secondary text-center font-bold text-[20px]'>Contact Us</h6>
          <h3 className='text-[36px] font-[500] text-center text-white'>Stay connected with us</h3>
        </div>
        <div className='w-[450px] mx-auto pb-[71px]'>
          <form className='flex flex-col gap-[1rem]' onSubmit={submitForm}>
            <input type="text" className='border px-[1rem] py-[.7rem] rounded-xl focus:outline-none' name="email" placeholder='Email Address' />
            <input type="text" className='border px-[1rem] py-[.7rem] rounded-xl focus:outline-none' name="subject" placeholder='Subject' />
            <textarea name="message" className='border px-[1rem] py-[1rem] rounded-xl focus:outline-none' placeholder='Your Message' id="" cols="30" rows="10"></textarea>
            <div className='flex justify-center'>
              <input type="submit" className='btn bg-gradient-to-r from-secondary to-primary border-hidden font-bold px-[33px] py-[15px] text-white' value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;