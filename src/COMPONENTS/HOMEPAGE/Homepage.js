import React from 'react';
import Appointment from '../APPOINTMENTHOMEPAGE/Appointment';
import Banner from '../BANNER/Banner';
import Contactus from '../CONTACT US/Contactus';
import Feauturecard from '../FEATURE CARD/Feauturecard';
import PatientSays from '../PATIENT SAYS/PatientSays';
import Secondbanner from '../SECOND BANNER/Secondbanner';
import ServicesCard from '../SERVICES CARD/ServicesCard';
import Testimonial from '../TESTIMONIAL/Testimonial';

const Homepage = () => {
  return (
    <div>
      <div className='w-[80%] mx-auto'>
      <Banner></Banner>
      <Feauturecard></Feauturecard>
      <ServicesCard></ServicesCard>
      <Secondbanner></Secondbanner>
    </div>
    <div className='w-[100%]'>
      <Appointment></Appointment>
      <Testimonial></Testimonial>
      <PatientSays></PatientSays>
      <Contactus></Contactus>
    </div>
    </div>
  );
};

export default Homepage;