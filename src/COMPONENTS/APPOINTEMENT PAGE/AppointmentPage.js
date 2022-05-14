import { format } from 'date-fns';
import React, { useState } from 'react';
import AvailableApplointments from '../AVAILABLE APPOINTMENTS/AvailableApplointments';
import ThirdBanner from '../THIRD BANNER/ThirdBanner';

const AppointmentPage = () => {

  const [selected, setSelected] = useState(new Date())
  return (
    <div>
      <ThirdBanner selected={selected} setSelected={setSelected}></ThirdBanner>
      <AvailableApplointments selected={selected}></AvailableApplointments>
    </div>
  );
};

export default AppointmentPage;