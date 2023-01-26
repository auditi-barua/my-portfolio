import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";



const Footer = () => {
  return (
    <div className="bg-gray-500">
      <div className=' flex pt-5  gap-4 justify-center ml-12'>
        <a href='https://www.instagram.com/' target='_blank' ><FaInstagram className='text-3xl' /></a>
        <a href='https://github.com/auditi-barua' target='_blank'><FaGithub className='text-3xl ' /></a>
        <a href='https://www.linkedin.com/in/auditi-barua/' target='_blank'><FaLinkedinIn className='text-3xl ' /></a>
      </div>
      <p className="text-center text-2xl text-black pt-5">&copy;2023 Portfolio Made with by <span className="text-blue-600 text-2xl">Auditi Barua</span></p>
    </div>


  );
};

export default Footer;