import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../../assests/logo.png';


const Navbar = () => {
    const [show, setShow] = React.useState(false);

    const handle_click = () => {
        setShow(!show);
    }
    return (
        <div className=' border-gray-200 rounded bg-gray-600 dark:bg-gray-800 dark:border-gray-700'>
            <div className='max-w-[1440px] mx-auto'>
                <div className='md:flex md:justify-between py-5 items-center uppercase font-semibold'>
                    <div className='flex items-center md:justify-between'>
                        <div className='md:hidden p-2 mr-2'>
                            <span className='text-slate-400 text-2xl' onClick={handle_click}><FaBars /></span>
                        </div>
                        <img className='logo pl-4 md:p-0 w-8 sm:w-12' src={logo} alt="" />
                        <h2 className='text-2xl font-bold text-white'>AUDITI.</h2>
                    </div>
                    <div className='hidden md:block text-sm'>
                        <ul className='flex text-bold items-center '>
                            <li ><Link className='text-white   py-2 px-4 cursor-pointer hover:opacity-50' to='/home'>Home</Link></li>
                            <li><Link className='text-white py-2 px-4 cursor-pointer hover:opacity-50' to='/about'>About</Link></li>
                            <li><Link className='text-white py-2 px-4 cursor-pointer hover:opacity-50' to='/education'>Education</Link></li>
                            <li><Link className='text-white py-2 px-4 cursor-pointer hover:opacity-50' to='/projects'>Projects</Link></li>
                            <li><Link className='text-white py-2 px-4 cursor-pointer hover:opacity-50' to='/skills'>Skills</Link></li>
                            <li><Link className=' py-2 px-4 cursor-pointer hover:opacity-50 button text-white yellow w-full' to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className={`${show ? 'active' : undefined} absolute z-10 bg-white navbar md:hidden w-[140px] border rounded-sm mt-8`} onclick={handle_click}>
                        <ul className='z-0'>
                            <li onClick={handle_click} className='border-b border-slate-300 text-black py-2 px-4 cursor-pointer hover:bg-slate-200'><Link to='/home'>Home</Link></li>
                            <li onClick={handle_click} className='border-b border-slate-300 text-black py-2 px-4 cursor-pointer hover:bg-slate-200'><Link to='/about'>About</Link></li>
                            <li onClick={handle_click} className='border-b border-slate-300 text-black py-2 px-4 cursor-pointer hover:bg-slate-200'><Link to='/education'>Education</Link></li>
                            <li onClick={handle_click} className='border-b border-slate-300 text-black py-2 px-4 cursor-pointer hover:bg-slate-200'><Link to='/projects'>Projects</Link></li>
                            <li onClick={handle_click} className='border-b border-slate-300 text-black py-2 px-4 cursor-pointer hover:bg-slate-200'><Link to='/skills'>Skills</Link></li>
                            <li onClick={handle_click} className=' py-2 px-4 cursor-pointer hover:bg-slate-200 button text-black yellow w-full'><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;