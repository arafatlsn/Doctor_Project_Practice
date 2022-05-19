import axios from 'axios';
import { format } from 'date-fns';
import React from 'react';
import useFireBase from '../FIREBASE/useFireBase';

const AppointmentModal = ({ elAppointments, date,  setModalDetail }) => {
  const {name, time} = elAppointments;
  const { user } = useFireBase();

  const bookAppointment = e => {
    e.preventDefault();
    const date = e.target.date.value;
    const time = e.target.time.value;
    const fullName = e.target.fullName.value;
    const phoneNumber = e.target.phoneNumber.value;
    const email = e.target.email.value;

    const patientInfo = { name, date, time, fullName, phoneNumber, email};

    const func = async() => {
      
      const { data } = await axios.post('http://localhost:5000/postpatientinfo', patientInfo);

      if(data.insertedId){
        setModalDetail([])
      }

    }

    func()

  }

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <div>
            <p className='absolute left-2 top-2 font-bold text-secondary'>{name}</p>
            <label onClick={() => setModalDetail([])} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          </div>
          <form onSubmit={bookAppointment} className='flex flex-col gap-[23px]'>
            <input type="text" className='font-bold border mt-[47px] py-[.7rem] px-[1rem] rounded-xl focus:outline-none  bg-[#E6E6E6]' name='date' value={date} readOnly/>
            <input type="text" className='font-bold border py-[.7rem] px-[1rem] rounded-xl focus:outline-none bg-[#E6E6E6]' name='time' value={time} readOnly/>
            <input type="text" className='font-bold border py-[.7rem] px-[1rem] rounded-xl focus:outline-none' placeholder='Full Name' name='fullName' value={user && user.displayName} readOnly required />
            <input type="number" className='font-bold border py-[.7rem] px-[1rem] rounded-xl focus:outline-none' placeholder='Phone Number' name='phoneNumber' required />
            <input type="email" className='font-bold border py-[.7rem] px-[1rem] rounded-xl focus:outline-none' placeholder='Email' name='email' value={user && user.email} readOnly required />
            <input type="submit" className='bg-accent btn font-bold border py-[.7rem] px-[1rem] rounded-xl focus:outline-none' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;