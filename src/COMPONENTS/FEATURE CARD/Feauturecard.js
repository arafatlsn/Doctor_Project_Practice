import React from 'react';
import clock from '../../assets/icons/clock.svg'
import location from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Feauturecard = () => {
  return (
    <div className='grid grid-cols-3 gap-[2rem] mt-[41px]'>
      <div className='flex bg-gradient-to-r from-secondary to-primary px-[1rem] py-[2rem] rounded-2xl'>
        <div>
          <img className='w-[86px] h-[86px]' src={clock} alt="" />
        </div>
        <div className='ml-[1rem]'>
          <h3 className=' text-lg font-bold text-white'>OPENING HOURS</h3>
          <p className='m-0 text-lg font-bold text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, dolorum.</p>
        </div>
      </div>
      <div className='flex bg-accent px-[1rem] py-[2rem] rounded-2xl'>
        <div>
          <img className='w-[86px] h-[86px]' src={location} alt="" />
        </div>
        <div className='ml-[1rem]'>
          <h3 className=' text-lg font-bold text-white'>Visit our location</h3>
          <p className='m-0 text-lg font-bold text-white'>Brooklyn, NY 10036, United States</p>
        </div>
      </div>
      <div className='flex bg-gradient-to-r from-secondary to-primary px-[1rem] py-[2rem] rounded-2xl'>
        <div>
          <img className='w-[86px] h-[86px]' src={phone} alt="" />
        </div>
        <div className='ml-[1rem]'>
          <h3 className=' text-lg font-bold text-white'>Contact us now</h3>
          <p className='m-0 text-lg font-bold text-white'>+000 123 456789</p>
        </div>
      </div>
    </div>
  );
};

export default Feauturecard;