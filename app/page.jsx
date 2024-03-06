"use client";
import Man from "./components/Man";
const page = () => {
    return (
        <div className='w-full h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-b from-[#BBBCC3] to-[#6C5252]'>
            <div className='h-[50vh] md:h-screen flex flex-col justify-center items-center'>
                <h1 className='text-5xl text-black font-semibold'>Hi There 👋 </h1>
                <h3 className='text-3xl font-bold text-slate-800 mt-4 text-center tracking-tighter'>
                    Aghoghovwia Andrew
                </h3>
                <p className='font-normal text-slate-800 mt-4 text-center w-full md:max-w-[80%]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam pariatur ut
                    natus accusantium asperiores illum.
                </p>
            </div>
            <div className='w-full h-[50vh] md:h-screen flex justify-center items-center'>
                <div className='w-full h-[50vh]  md:h-screen flex justify-start items-center p-3'>
                    <Man />
                </div>
            </div>
        </div>
    );
};

export default page;
