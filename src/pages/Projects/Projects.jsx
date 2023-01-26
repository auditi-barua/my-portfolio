import React from 'react';
import { FaCircle } from 'react-icons/fa';

const Projects = () => {
    return (
        <div>
            <div className='pb-3'>
                <h2 className='text-center font-bold text-2xl text-teal-500 my-10'>My Projects</h2>
                <div className='max-w-[1240px] mx-auto p-5 md:p-0'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-4'>
                        <div className='border pt-5 border-gray-200 rounded '>
                            <h2 className='text-2xl font-bold text-sky-400 ml-3'>1.Quick Quiz</h2>
                            <p className='text-xl text-red-400 ml-4'>Features:</p>
                            <p className='flex items-center ml-6 text-md text-emerald-400'><FaCircle className='w-2' /><span>A digital MCQ platform to learn to code easily.</span></p>
                            <p className='flex items-center ml-6 text-md text-emerald-400'><FaCircle className='w-2' /><span>You Can check how much I have learned by Taking an MCQ test</span></p>
                            <p className='flex items-center ml-6 text-md text-emerald-400'><FaCircle className='w-2' /><span>Learners can find out where they are right or wrong.</span></p>
                            <p className='flex items-center text-2xl text-emerald-400 ml-5'>Technology:<span className='text-md'>React.JS, React Router, Tailwind Css, Recharts, REST API</span></p>
                            <div className='flex items-center text-blue-500 ml-5 underline gap-3'>
                                <a href='https://polite-swan-d014bb.netlify.app/'>Live Site</a>
                                ||
                                <a href='https://github.com/auditi-barua/quize-crackers'>Github</a>
                            </div>
                        </div>
                        <div className='border pt-5 border-gray-200 rounded'>
                            <h2 className='text-2xl font-bold text-pink-400 ml-3'>2.Online Learning Platform</h2>
                            <p className='text-xl text-orange-400 ml-4'>Features :</p>
                            <p className='flex items-center ml-6 text-md text-emerald-400'><FaCircle className='w-2' /> A digital learning platform to learn easily.</p>
                            <p className='flex items-center ml-6 text-md text-emerald-400'><FaCircle className='w-2' /> You can learn everywhere in Bangladesh.</p>
                            <p className='flex items-center ml-6 text-md text-emerald-400'><FaCircle className='w-2' />Learner can learn new new thing in this platform.</p>
                            <p className='flex items-center text-2xl text-emerald-400 ml-5'>Technology:<span>React.Js, React Router,React Router Dom, Tailwind CSS,Firebase,React
                                Toast,React Icon,React Hooks</span></p>
                            <div className='flex items-center text-blue-500 ml-5 underline gap-3'>
                                <a href='https://srdreamit-website.web.app/'>Live Site</a>
                                ||
                                <a href='https://github.com/auditi-barua/srdreamit'>Github</a>
                            </div>
                            <p></p></div>
                        <div className='border pt-5 border-gray-200 rounded'>
                            <h2 className='text-2xl font-bold text-purple-500 ml-3'>3.Website Page</h2>
                            <p className='text-xl text-lime-500 ml-4'>Features :</p>
                            <p className='flex items-center ml-6 text-md text-emerald-400'><FaCircle className='w-2' />Best digital website page.</p>
                            <p className='flex items-center ml-6 text-md text-emerald-400'><FaCircle className='w-2' />Many many things in this website.</p>
                            <p className='flex items-center ml-6 text-md text-emerald-400'><FaCircle className='w-2' />You can design a beautiful website on a low budget and 24 support.</p>
                            <p className='flex items-center text-2xl text-emerald-400 ml-5'>Technology: <span>Html & css</span></p>
                            <div className='flex items-center text-blue-500 ml-5 underline gap-3'>
                                <a href='https://lucent-dusk-1743e3.netlify.app'>Live Site</a>
                                ||
                                <a href='https://github.com/auditi-barua/html-css-projects-2'>Github</a>
                            </div>
                        </div>
                        <div className='border pt-5 border-gray-200 rounded'>
                            <h2 className='text-2xl font-bold text-pink-400 ml-3'>4.</h2>
                            <p className='text-xl text-green-500 ml-4'>Features:</p>
                            <p className='flex items-center ml-6 text-md text-emerald-400'><FaCircle className='w-2' /></p>
                            <p className='flex items-center ml-6 text-md text-emerald-400'><FaCircle className='w-2' /></p>
                            <p className='flex items-center ml-6 text-md text-emerald-400'><FaCircle className='w-2' /></p>
                            <p className='flex items-center text-2xl text-emerald-400 ml-5'></p>
                            <div className='flex items-center text-blue-500 ml-5 underline gap-3'>
                                <a href='https://stellar-naiad-a65a31.netlify.app'>Live Site</a>
                                ||
                                <a href='https://github.com/auditi-barua/quize-crackers'>Github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;