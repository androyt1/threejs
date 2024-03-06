"use client";
import { Html } from "@react-three/drei";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Navbar from "./components/Navbar";
const Man = dynamic(() => import("@/components/Man").then((mod) => mod.Man), {
    ssr: false,
});
const page = () => {
    return (
        <div>
            <Navbar />
            <div className='w-full h-screen md:min-h-[calc(100vh-64px)] grid grid-cols-1 md:grid-cols-2 bg-gradient-to-b from-[#fff] to-brown md:px-20 '>
                <div className='h-[50vh] md:h-screen flex flex-col justify-center items-center md:items-start'>
                    {/* <h1 className='text-4xl md:text-6xl text-black font-bold'>Hello 👋 </h1> */}
                    <h3 className='text-4xl text-wrap md:text-8xl font-bold mt-4 text-center md:text-left tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-brown to-tea uppercase'>
                        Aghoghovwia Andrew
                    </h3>
                    <p className='font-normal text-slate-800 mt-4 text-center md:text-left w-full md:max-w-[90%]  md:text-xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam pariatur ut
                        natus accusantium asperiores illum.
                    </p>
                    <button className='px-24 md:px-28 py-3 bg-tea rounded-full text-white font-semibold mt-4 md:mt-8  shadow-sm shadow-brown'>
                        Get Started
                    </button>
                </div>
                <div className='w-full h-[50vh] md:h-screen flex justify-center items-center'>
                    <div className='w-full h-[50vh]  md:h-screen flex justify-start items-center p-3'>
                        <Suspense fallback={<Html>Loading Model, please wait</Html>}>
                            <Man scale={1.2} />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
