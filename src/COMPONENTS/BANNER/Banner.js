import React from 'react';
import chairImg from '../../assets/images/chair.png'
import BG from '../../assets/images/bg.png'

const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen rounded-2xl" style={{backgroundImage: `url(${BG})`, backgroundPosition: 'center'}}>
        <div class="flex-col lg:grid lg:grid-cols-2 mx-auto justify-between justify-items-center">
          <img src={chairImg} class="rounded-lg shadow-2xl  block lg:order-2 lg:w-[95%]" />
          <div>
            <h1 class="text-5xl font-bold">Your New Smile Starts <br /> Here</h1>
            <p class="py-6 break-words">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
            <button class="btn bg-gradient-to-r from-secondary to-primary text-white font-bold border-hidden">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;