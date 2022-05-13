import React from 'react';
import footerImg from '../../assets/images/footer.png'

const Footer = () => {
  return (
    <div style={{backgroundImage: `url(${footerImg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
      <footer class="footer px-[98px] pt-[74px] text-neutral-content justify-items-center text-accent font-bold">
        <div>
          <span class="footer-title">Services</span> 
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </div> 
        <div>
          <span class="footer-title">Company</span> 
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </div> 
        <div>
          <span class="footer-title">Legal</span> 
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <p className='m-0 text-center mt-[119px] pb-[45px] font-bold'>Copyright 2022 All Rights Reserved</p>
    </div>
  );
};

export default Footer;