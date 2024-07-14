"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';

interface LinkItem {
    name: string;
    link: string;
}

const Header: React.FC = () => {
    const links: LinkItem[] = [
        { name: "HOME", link: "/" },
        { name: "SERVICE", link: "/service" },
        { name: "ABOUT", link: "/about" },
        { name: "CONTACT", link: "/contact" },
    ];
    const [open, setOpen] = useState(false);

    return (
        <header className='shadow-md w-full fixed top-0 left-0 bg-white z-50'>
            <div className='container mx-auto flex items-center justify-between py-4 px-5 md:px-10'>
                {/* Logo Section */}
                <div className='font-bold text-2xl flex items-center gap-1 cursor-pointer'>
                    <BookOpenIcon className='w-7 h-7 text-blue-600' />
                    <span>Inscribe</span>
                </div>
                {/* Menu Icon */}
                <div onClick={() => setOpen(!open)} className='md:hidden cursor-pointer'>
                    {open ? <XMarkIcon className='w-7 h-7' /> : <Bars3BottomRightIcon className='w-7 h-7' />}
                </div>
                {/* Link Items */}
                <ul className={`md:flex md:items-center md:static absolute bg-white w-full md:w-auto left-0 md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16' : 'top-[-490px]'}`}>
                    {links.map((link, index) => (
                        <li key={index} className='md:ml-8 my-7 md:my-0'>
                            <Link href={link.link} className='text-gray-800 hover:text-blue-400 duration-500 font-semibold'>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                {/* Get Started Button */}
                <div className='md:ml-8 my-7 md:my-0'>
                    <Link href="/get-started">
                        <button className='bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-500'>
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
