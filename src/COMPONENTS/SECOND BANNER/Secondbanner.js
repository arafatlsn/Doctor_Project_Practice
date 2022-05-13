import React from 'react';
import dentalCare from '../../assets/images/treatment.png'

const Secondbanner = () => {
  return (
    <div>
      <div className="hero mt-[154px]">
        <div className="hero-content flex-col lg:grid grid-cols-2">
          <img src={dentalCare} className="h-[576px]  rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <button className="btn bg-gradient-to-r from-secondary to-primary border-hidden font-bold text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondbanner;