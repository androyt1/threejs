import React from "react";

const Navbar = () => {
    return (
        <header className='w-full p-3 md:px-20 h-16 flex justify-between items-center bg-tea'>
            <div>
                <h3 className='text-3xl font-semibold text-white'>Androy</h3>
            </div>
            <nav>
                <ul className='flex gap-3 items-center'>
                    <li className='text-white font-semibold'>Home</li>
                    <li className='text-slate-300 text-xs'>About</li>
                    <li className='text-slate-300 text-xs'>Contact</li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
