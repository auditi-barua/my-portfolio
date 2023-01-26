import React from 'react';

const Skill = () => {
    return (
        <div className='bg-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-10 py-10'>
            <div className=''>
                <h2 className='text-center font-bold text-violet-400 text-2xl uppercase'>My Skills</h2>
                <div className='ml-5 sm:px-5'>
                    <div className='skills my-6 mb-3'>
                        <h1>HTML</h1>
                        <div class="w-full bg-gray-200 h-5 mb-6 rounded-xl">
                            <div class='bg-blue-500 h-5 rounded-xl pr-5 text-white text-end max-w-[100%]'>100%</div>
                        </div>
                    </div>
                    <div className='skills my-6 mb-3'>
                        <h1>CSS</h1>
                        <div class="w-full bg-gray-200 h-5 mb-6 rounded-xl">
                            <div class='bg-green-500 h-5 rounded-xl max-w-[80%] pr-5 text-white text-end'>80%</div>
                        </div>
                    </div>
                    <div className='skills my-6 mb-3'>
                        <h1>JAVASRICPT</h1>
                        <div class="w-full bg-gray-200 h-5 mb-6 rounded-xl">
                            <div class='bg-yellow-500 h-5 pr-5 rounded-xl max-w-[60%] text-white text-end'>60%</div>
                        </div>
                    </div>
                    <div className='skills my-6 mb-3'>
                        <h1>REACT.JS</h1>
                        <div class="w-full rounded-xl bg-gray-200 h-5 mb-6">
                            <div class='bg-red-500 h-5 rounded-xl max-w-[80%] pr-5 text-white text-end'>80%</div>
                        </div>
                    </div>
                    <div className='skills my-6 mb-3'>
                        <h1>TAILWIND CSS</h1>
                        <div class="w-full rounded-xl bg-gray-200 h-5 mb-6">
                            <div class='bg-purple-500 h-5 w-[90%] rounded-xl pr-5 text-white text-end'>90%</div>
                        </div>
                    </div>
                    <div className='skills my-6 mb-3'>
                        <h1>NODE.JS</h1>
                        <div class="w-full rounded-xl bg-gray-200 h-5 mb-6">
                            <div class='bg-orange-500 w-[90%] h-5 rounded-xl pr-5 text-white text-end'>90%</div>
                        </div>
                    </div>
                    <div className='skills my-6 mb-3'>
                        <h1>EXPRESS.JS</h1>
                        <div class="w-full rounded-xl bg-gray-200 h-5 mb-6">
                            <div class='bg-cyan-500 w-[90%] h-5 rounded-xl pr-5 text-white text-end'>90%</div>
                        </div>
                    </div>
                    <div className='skills my-6 mb-3'>
                        <h1>MONGODB</h1>
                        <div class="w-full rounded-xl bg-gray-200 h-5 mb-6">
                            <div class='bg-teal-500 w-[60%] h-5 rounded-xl pr-5 text-white text-end'>60%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-2xl text-center font-bold uppercase text-orange-500'>My Services</h2>
                <div className='grid grid-rows-1 sm:grid-rows-3 gap-2 mt-9'>
                    <div className='sm:px-4'>
                        <p className='text-2xl text-cyan-500'>Front-End Developer</p>
                        <p className='text-white text-sm'>About This Gig
                            Hi there!Are you looking for a Frontend Developer to build a responsive, stunning, and user-friendly website from scratch or looking for someone to redesign & develop your existing website, then you are in the right place! What you can think I can develop it for you!Hire me as a Front-End Developer</p>
                    </div>
                    <div className='py-2 sm:px-4'>
                        <p className='text-2xl text-amber-500'>Back-End Developer</p>
                        <p className='text-white text-sm'> I will develop a complete back-end of your website according to your business need with python programming. This dynamic web app will be secure, simple and clean.Hire me as a Back-End Developer</p>
                    </div>
                    <div className='pb-4 sm:px-4'>
                        <p className='text-2xl text-pink-400'>Full-Stack Developer</p>
                        <p className='text-white text-sm'>Hey, If you are looking for someone who can provide you with custom web development then you have come to the right place. I am a full-stack web developer specializing in HTML, CSS, Bootstrap,Tailwind with React.   I have done many websites and web app development projects with an experienced Full-Stack Web Developer.Hire me as a Full-stack Developer.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;   