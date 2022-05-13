import React from 'react';
import peapleOne from '../../assets/images/people1.png'

const PatientSays = () => {
  return (
    <div className='w-[80%] mx-auto grid grid-cols-3 gap-[3rem]'>
      <div className='h-[270px] shadow-xl border px-[26px] rounded-xl'>
        <div className='mt-[38px]'>
          <p className='m-0'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
        </div>
        <div className='flex items-center mt-[42px]'>
          <img className='w-[70px] rounded-[50%] outline outline-offset-2 outline-secondary' src={peapleOne} alt="" />
          <div className='ml-[1rem]'>
            <h6 className='font-bold text-xl'>Winson Herry</h6>
            <p className='m-0 font-bold'>California</p>
          </div>
        </div>
      </div>
      <div className='h-[270px] shadow-xl border px-[26px] rounded-xl'>
        <div className='mt-[38px]'>
          <p className='m-0'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
        </div>
        <div className='flex items-center mt-[42px]'>
          <img className='w-[70px] rounded-[50%] outline outline-offset-2 outline-secondary' src={peapleOne} alt="" />
          <div className='ml-[1rem]'>
            <h6 className='font-bold text-xl'>Winson Herry</h6>
            <p className='m-0 font-bold'>California</p>
          </div>
        </div>
      </div>
      <div className='h-[270px] shadow-xl border px-[26px] rounded-xl'>
        <div className='mt-[38px]'>
          <p className='m-0'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
        </div>
        <div className='flex items-center mt-[42px]'>
          <img className='w-[70px] rounded-[50%] outline outline-offset-2 outline-secondary' src={peapleOne} alt="" />
          <div className='ml-[1rem]'>
            <h6 className='font-bold text-xl'>Winson Herry</h6>
            <p className='m-0 font-bold'>California</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientSays;