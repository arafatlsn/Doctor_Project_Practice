import { data } from 'autoprefixer';
import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentCard from '../APPOINTMENT CARD/AppointmentCard';
import AppointmentModal from '../APPOINTMENT MODAL/AppointmentModal';

const AvailableApplointments = ({ selected }) => {

  const [appointments, setAppointments] = useState([]);
  const [modalDetail, setModalDetail] = useState([]);
  const date = (format(selected, 'PP'))

  useEffect(() => {
    const url = `http://localhost:5000/appointments`;
    fetch(url)
    .then(res => res.json())
    .then(data =>{

      availableSeats(data)
      
    })
  }, [date, appointments])

  const availableSeats = peraMeter => {
    const func = async() => {
      const url = `http://localhost:5000/patients?date=${date}`
      const { data } = await axios.get(url);
      if(data.length){
        const appointmentsMap = peraMeter.map(el => {
          const dataMap = data.filter(elData => elData.name === el.name )
          if(dataMap.length){
            el['spaces'] = 10 - dataMap.length;
            return el;
          }
          else{
            return el;
          }
        })
        setAppointments(appointmentsMap)
      }
      else{
        setAppointments(peraMeter)
      }
    }
    func()
  }

  return (
    <div className='mt-[97px] mb-[64px] lg:mb-[137px]'>
      <p className='font-bold text-secondary text-center text-[22px] lg:mb-[100px]'>Available Appointments on {date}</p>
      <div className='lg:w-[71%] mx-auto grid lg:grid-cols-3 justify-center justify-items-center gap-[35px]'>
        {
          appointments.map(el => 
          <AppointmentCard key={el._id} elAppointments={el} date={date} setModalDetail={setModalDetail} ></AppointmentCard>
          )
        }
      </div>
      {
        modalDetail._id && <AppointmentModal date={date} elAppointments={modalDetail} setModalDetail={setModalDetail}></AppointmentModal>
      }
    </div>
  );
};

export default AvailableApplointments;