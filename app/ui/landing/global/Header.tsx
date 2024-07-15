"use client";

import { lusitana } from '../../fonts';
import Image from 'next/image';
import { Bars3BottomRightIcon, XMarkIcon, EnvelopeIcon, MagnifyingGlassIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import LandingPageNavLinks from './nav-links';



const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className='shadow-md w-full fixed top-0 left-0 bg-white z-50'>
            <div className='pl-2 md:pl-0'>
                <div className='container mx-auto flex items-center justify-between py-2'>
                    {/* Logo Section */}
                    <div className='flex items-center cursor-pointer'>
                        <Image src='/logo.png' alt='Website Logo' width={80} height={80} />
                        <span className={`${lusitana.className} font-bold text-lg ml-2 text-blue-900`}>JOSTUM JOURNAL <br />OF ENGINEERING</span>
                    </div>
                    {/* Menu Icon */}
                    <div onClick={() => setOpen(!open)} className='md:hidden cursor-pointer z-10'>
                        {open ? <XMarkIcon className='w-7 h-7' /> : <Bars3BottomRightIcon className='w-7 h-7' />}
                    </div>
                    {/* Link Items */}
                    <LandingPageNavLinks open={open} />
                    <div className='flex justify-center items-center'>

                        {/* Search Bar */}
                        <div className='relative hidden md:flex items-center border border-gray-300 rounded-full px-2 py-1 focus-within:border-blue-600 focus-within:shadow-md mr-3 bg-[#EBEBEB]'>
                            <MagnifyingGlassIcon className='w-4 h-4 text-gray-800 ml-2' />
                            <input
                                type='text'
                                placeholder='Search journal publications'
                                className='flex-grow bg-transparent border-none focus:outline-none focus:ring-0'
                            />
                            <button className='flex items-center justify-center w-8 h-8 bg-blue-400 rounded-full'>
                                <ArrowRightIcon className='w-4 h-4 text-white' />
                            </button>
                        </div>

                        {/* Email Icon */}
                        {/* <div className='hidden md:block'>
                            <button className='flex items-center justify-center bg-[#EBEBEB] rounded-full p-3'>
                                <EnvelopeIcon className='w-6 h-6 text-blue-500' />
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
