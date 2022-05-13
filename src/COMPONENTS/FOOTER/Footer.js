import React from 'react';
import footerImg from '../../assets/images/footer.png'

const Footer = () => {
  return (
    <div style={{backgroundImage: `url(${footerImg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
      <footer className="footer px-[98px] pt-[74px] text-neutral-content justify-items-center text-accent font-bold">
        <div>
          <span className="footer-title">Services</span> 
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <p className='m-0 text-center mt-[119px] pb-[45px] font-bold'>Copyright 2022 All Rights Reserved</p>
    </div>
  );
};

export default Footer;