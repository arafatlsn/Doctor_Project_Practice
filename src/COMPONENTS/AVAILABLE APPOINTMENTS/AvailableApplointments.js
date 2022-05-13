import { data } from 'autoprefixer';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentCard from '../APPOINTMENT CARD/AppointmentCard';

const AvailableApplointments = ({ selected }) => {

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/appointments`;
    fetch(url)
    .then(res => res.json())
    .then(data =>{

      setAppointments(data)
      
    })
  }, [])

  const date = (format(selected, 'PP'))
  return (
    <div className='mt-[97px]'>
      <p className='font-bold text-secondary text-center text-[22px] lg:mb-[100px]'>Available Appointments on {date}</p>
      <div className='lg:w-[71%] mx-auto grid lg:grid-cols-3 justify-center justify-items-center gap-[35px]'>
        {
          appointments.map(el => 
          <AppointmentCard key={el._id} elAppointments={el}></AppointmentCard>
          )
        }
      </div>
    </div>
  );
};

export default AvailableApplointments;