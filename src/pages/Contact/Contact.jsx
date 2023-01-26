import React from 'react';

const Contact = () => {
    return (
        <div className='bg-gray-700'>
            <div className=''>
                <div className='mt-24'>
                    <h3 className='text-3xl text-center text-pink-500'>Get In Touch</h3>
                    <h2 className='text-3xl text-center text-white font-bold'>If you have any porject or need help. Contact me</h2>
                </div>
                <div className='mt-8'>
                    <div className="w-full max-w-[650px] mx-auto">
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
                            <h2 className='text-2xl text-center text-sky-800 font-bold'>Send me a message</h2>
                            <div className='grid md:grid-cols-2 grid-col-1 gap-3'>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                                        Name
                                    </label>
                                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="enter your name" />
                                </div>
                                <div className="mb-3">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                                        Email
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="enter your email" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="subject">
                                    Subject
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="subject" type="text" placeholder="subject" />
                            </div>
                            <div>
                                <textarea className="w-full form-control border py-4 px-8" id="comment"  placeholder=" Enter Your Message"></textarea>
                            </div>
                            <div className="mt-5">
                                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;