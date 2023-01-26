import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import girl from '../../assests/girl.jpg';
const About = () => {
    return (
        <div className='bg-gray-600 pt-12'>
            <h2 className='my-10 text-center font-bold text-2xl text-yellow-500 underline uppercase'>About Me</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 justify-between items-center pb-10'>
                <div className='mt-5'>
                    <h2 className='ml-12 text-3xl text-white font-bold'>Hey !!I'm</h2>
                    <span className='text-cyan-400 text-3xl ml-12'>Auditi Barua</span>
                    <p className='ml-12 text-3xl font-bold text-pink-500'>Full-Stack Web Developer</p><br />
                    <p className='ml-12 text-md text-white'>I am a Full-Stack Developer from Bangladesh. I work with MERN stack Development. I have significant knowledge of MERN stack development. I want to develop myself as a skilled web developer with MERN Stack Development. Also, I am trying to learn new languages. So that I can improve my skills. I am dedicated and passionate about learning new things about web development. <br />
                        I consider myself a quick learner, self-motivated, responsible, and disciplined person who can work under pressure and solve problems in critical situations.</p>
                </div>
                <div className='mx-auto'>
                    <img src={girl} className='border border-gray-500 ' alt='' />
                </div>
                {/* <div>
                    <h3 className='text-2xl ml-12 text-white'>Personal Details</h3>
                    <div className='flex justify-center gap-6 text-white'>
                        <div className="">
                            <p className='text-2xl ml-12 text-white'>Age : <span>24 years</span></p>
                            <p className='text-2xl ml-12 text-white'>Residence : <span>Chattogram,Bangladesh</span></p>
                            <p className='text-2xl ml-12 text-white'>Freelance: <span>Available</span></p>
                            <p className='text-2xl ml-12 text-white'>E-mail : <span>auditibarua6@gmail.com</span></p>
                            <p className='text-2xl ml-12 text-white'>Phone : <span>+8801880654236</span></p>
                            <p className='text-2xl ml-12 text-white'>Address : <span>New Chandgoan R/A ,32/02,Bahaddarhat</span></p>
                        </div>
                        <div>
                            <h3 className='text-2xl  text-white'>Languages</h3>
                            <p className='text-xl text-white'>English: <span>Good</span></p>
                            <p className='text-xl text-white'>Bangla : <span>Good</span></p>
                        </div>
                    </div>
                    <div className=' flex mt-5 text-white gap-4 justify-start ml-12'>
                        <a href='https://www.instagram.com/' target='_blank' ><FaInstagram className='text-3xl' /></a>
                        <a href='https://github.com/auditi-barua' target='_blank'><FaGithub className='text-3xl ' /></a>
                        <a href='https://www.linkedin.com/in/auditi-barua/' target='_blank'><FaLinkedinIn className='text-3xl ' /></a>
                    </div>
                </div > */}
            </div >
        </div>
    );
};

export default About;