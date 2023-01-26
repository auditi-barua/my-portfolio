import React from 'react';

const Education = () => {
    return (
        <div className='bg-sky-900 pb-8'>
            <div className=''>
                <div>
                    <h2 className='text-3xl text-white text-center pt-8 font-bold uppercase'>Education</h2>
                </div>
                <div className='flex gap-5 ml-12 justify-center'>
                    <div className='border-4 rounded px-3 border-white mt-6'>
                        <p className='text-2xl pt-5 text-white underline'>BSC(Pass-course) at National University</p>
                        <p className='text-xl text-white'>3rd year running</p>
                    </div>  
                    <div className='border-4 rounded px-3 border-white mt-6'>
                        <p className='text-2xl text-white underline pt-2'>Nangolkote Model Mohila College(HSC)</p>
                        <p className='text-xl text-white'>Board: <span>Comilla</span></p>
                        <p className='text-xl text-white'>Group : <span>Science</span></p>
                        <p className='text-xl text-white'>Result : <span>2.92 out of 5.00</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;