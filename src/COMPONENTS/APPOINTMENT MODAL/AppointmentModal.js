import { format } from 'date-fns';
import React from 'react';

const AppointmentModal = ({ elAppointments, date,  setModalDetail }) => {
  const {name, time} = elAppointments;

  const bookAppointment = e => {
    e.preventDefault();
    const appointmentName = name;
    const date = e.target.date.value;
    const time = e.target.time.value;
    const fullName = e.target.fullName.value;
    const phoneNumber = e.target.phoneNumber.value;
    const email = e.target.email.value;

    const patientInfo = { appointmentName, date, time, fullName, phoneNumber, email};
    console.log(patientInfo)
  }

  return (
    <div>
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <div>
            <p className='absolute left-2 top-2 font-bold text-secondary'>{name}</p>
            <label onClick={() => setModalDetail([])} for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          </div>
          <form onSubmit={bookAppointment} className='flex flex-col gap-[23px]'>
            <input type="text" className='font-bold border mt-[47px] py-[.7rem] px-[1rem] rounded-xl focus:outline-none  bg-[#E6E6E6]' name='date' value={date} readOnly/>
            <input type="text" className='font-bold border py-[.7rem] px-[1rem] rounded-xl focus:outline-none bg-[#E6E6E6]' name='time' value={time} readOnly/>
            <input type="text" className='font-bold border py-[.7rem] px-[1rem] rounded-xl focus:outline-none' placeholder='Full Name' name='fullName' required />
            <input type="number" className='font-bold border py-[.7rem] px-[1rem] rounded-xl focus:outline-none' placeholder='Phone Number' name='phoneNumber' required />
            <input type="email" className='font-bold border py-[.7rem] px-[1rem] rounded-xl focus:outline-none' placeholder='Email' name='email' required />
            <input type="submit" className='bg-accent btn font-bold border py-[.7rem] px-[1rem] rounded-xl focus:outline-none' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;