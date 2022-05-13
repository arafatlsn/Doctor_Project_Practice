import React from 'react';
import chairImg from '../../assets/images/chair.png'
import BG from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const ThirdBanner = ({ selected, setSelected }) => {

  return (
    <div className='w-[95%] lg:w-[80%] mx-auto'>
      <div className="hero min-h-screen rounded-2xl" style={{backgroundImage: `url(${BG})`, backgroundPosition: 'center'}}>
        <div className="flex-col lg:grid lg:grid-cols-2 mx-auto justify-between justify-items-center">
          <img src={chairImg} className="rounded-lg shadow-2xl  block lg:order-2 lg:w-[95%]" />
          <div>
          <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdBanner;