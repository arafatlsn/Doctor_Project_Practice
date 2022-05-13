import React from 'react';
import quote from '../../assets/icons/quote.svg'

const Testimonial = () => {
  return (
    <div className='w-[80%] mx-auto my-[84px]'>
      <div className='flex flex-row-reverse justify-between items-center'>
        <img src={quote} className='h-[156px]' alt="" />
        <div>
          <p className='m-0 text-secondary font-bold'>Testimonial</p>
          <h3 className='text-accent font-bold text-3xl'>What Our Patients Says</h3>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;