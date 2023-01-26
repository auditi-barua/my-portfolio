import React from 'react';
import { FaLongArrowAltDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img1 from '../../assests/girlimg.png'
const Header = () => {
    return (
        <div>
            <div className='bg-gray-500 md:h-[500px] md:flex '>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 items-center'>
                    <div className='my-5 mx-auto max-w-[350px] rounded-full border-8 p-2 border-sky-200'>
                        <img src={img1} className='w-96 justify-center' alt='' />
                    </div>
                    <div className='mt-5'>
                        <h2 className='text-4xl font-bold text-red-800'>Hello ! I'm</h2>
                        <h3 className='text-4xl font-bold text-black'> Auditi Barua</h3>
                        <p className='text-3xl font-bold text-black'>Full-Stack Developer</p>
                        <p className='text-xl'>Hey,are you looking for a developer to build your Brand and grow yoyr business?Let's shake hands with me & hire me.</p>
                        <div className='flex gap-5 my-5'>
                            <button className='px-3 py-2 bg-amber-400 flex items-center text-white  rounded-md animate-bounce'><Link to='/contact'>Hire Me</Link><FaLongArrowAltDown/></button>
                            <button className='px-3 py-2 bg-teal-400 flex items-center text-white animate-bounce rounded-md '>Download CV<FaLongArrowAltDown/></button>
                        </div>
                        {/* <div clasName='text-5xl'>
                            asdfksajdf
                            <div>
                                <button className='flex items-center px-4 py-2   bg-amber-400 font-normal hover:bg-blue-700 text-white rounded'><Link to='/contact'>Hire Me</Link><FaLongArrowAltDown /></button>
                            </div>
                            <div>
                                <button className='flex items-center bg-teal-700 font-normal  px-4 py-2 hover:bg-blue-700 text-white rounded'><Link to=''>Download CV</Link><FaLongArrowAltDown /></button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

/*

<button className='flex items-center normal-case bg-amber-400 font-normal hover:bg-blue-700 text-white py-2 px-4 rounded mt-5 animate-bounce  transition duration-700 ease-in-out '><Link to='/contact'>Hire Me</Link><FaLongArrowAltDown /></button>
                            <button className='flex items-centernormal-case bg-amber-400 font-normal hover:bg-blue-700 text-white py-2 px-4 rounded mt-5 animate-bounce  transition duration-700 ease-in-out '><Link to='/contact'>Download CV</Link><FaLongArrowAltDown /></button>*/