import React from 'react';
import fluride from '../../assets/images/fluoride.png'

const ServicesCard = () => {
  return (
    
    <div>
      <div className='mt-[130px] mb-[70px]'>
        <h6 className='text-center text-secondary font-bold'>OUR SERVICES</h6>
        <h3 className='text-xl font-bold text-accent text-center'>SERVICES WE PROVIDED</h3>
      </div>
        <div className='grid grid-cols-3 justify-center justify-items-center'>
          <div className="card w-[440px] h-[310px] bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={fluride} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Fluoride Treatment</h2>
              <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
            </div>
          </div>
          <div className="card w-[440px] h-[310px] bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={fluride} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Fluoride Treatment</h2>
              <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
            </div>
          </div>
          <div className="card w-[440px] h-[310px] bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={fluride} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Fluoride Treatment</h2>
              <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
            </div>
          </div>
        </div>
    </div>

  );
};

export default ServicesCard;