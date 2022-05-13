import { format } from 'date-fns';
import React from 'react';

const AvailableApplointments = ({ selected }) => {
  const date = (format(selected, 'PP'))
  return (
    <div>
      <p className='font-bold text-secondary text-center text-[22px]'>Available Appointments on {date}</p>
    </div>
  );
};

export default AvailableApplointments;