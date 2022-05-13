import React from 'react';

const AppointmentCard = ({ elAppointments }) => {
  const { name, time, spaces } = elAppointments;
  return (
    <div>
      <div className="card w-[425px] h-[230px] bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-secondary">{name}</h2>
          <p className='m-0 p-0'>{time}</p>
          <p className='m-0 p-0'>{spaces} Spaces Available</p>
          <div className="card-actions">
            <button className="btn bg-gradient-to-r from-secondary to-primary border-hidden text-white">Book Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;