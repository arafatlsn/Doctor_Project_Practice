import React from 'react';
import doctor from '../../assets/images/doctor-small.png'
import appointment from '../../assets/images/appointment.png'

const Appointment = () => {
  return (
    <div>
      <div class="hero">
        <div style={{backgroundImage: `url(${appointment})`}} class="flex-col lg:grid grid-cols-2 justify-center items-center mt-[191px] w-[100%]">
          <img src={doctor} className='h-[614px] mt-[-81px] justify-self-end hidden lg:block' />
          <div className='lg:w-[532px]'>
            <h1 class="text-5xl font-bold text-white">Make an appointment Today</h1>
            <p class="py-6 text-white">readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <button class="btn bg-gradient-to-r from-secondary to-primary font-bold border-hidden text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;