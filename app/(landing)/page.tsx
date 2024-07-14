"use client"

import Link from 'next/link';
import { lusitana } from '../ui/fonts'
import Image from 'next/image';
import { Bars3BottomRightIcon, XMarkIcon, EnvelopeIcon, MagnifyingGlassIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import LandingPageNavLinks from '../ui/landing/nav-links';

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col">
      <div className='bg-gradient-to-br from-white via-gold-300 to-blue-500'>
        <div>
          <div className='container mx-auto flex items-center justify-between pt-4'>
            {/* Logo Section */}
            <div className='flex items-center cursor-pointer'>
              <Image src='/logo.png' alt='Website Logo' width={90} height={90} />
              <span className={`${lusitana.className} font-bold text-xl ml-4 text-blue-900`}>JOSTUM JOURNAL <br />OF ENGINEERING</span>
            </div>
            {/* Menu Icon */}
            <div onClick={() => setOpen(!open)} className='md:hidden cursor-pointer'>
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
              <div className='hidden md:block'>
                <button className='flex items-center justify-center bg-[#EBEBEB] rounded-full p-3'>
                  <EnvelopeIcon className='w-6 h-6 text-blue-500' />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex grow flex-col gap-4 md:flex-row ">
          <div className="flex flex-col justify-center gap-6 px-6 md:w-2/5 md:px-20">
            <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
              <strong>Advancing Engineering Knowledge</strong>
            </p>
            <p className={`${lusitana.className} text-xl text-gray-800 md:text-xl md:leading-normal`}>Explore our collections, submit, track, and publish your research with ease</p>
            <div className="flex space-x-4">
              {/* Explore Collections Button */}
              <Link
                href="/explore-collections"
                className="flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 px-6 py-3 text-white text-sm font-semibold transition-colors duration-300 ease-in-out shadow-md"
              >
                <span>Explore Collections</span>
              </Link>

              {/* Publish Journal Button */}
              <Link
                href="/login"
                className="flex items-center justify-center rounded-full bg-white border border-blue-500 hover:bg-blue-100 px-6 py-3 text-blue-500 text-sm font-medium transition-colors duration-300 ease-in-out shadow-md"
              >
                <span>Publish Journal</span>
              </Link>
            </div>


          </div>
          <div className="flex items-center justify-center md:w-3/5 md:px-28 mb-8 mt-2 mx-4 md:mx-0">
            {/* Add Hero Images Here */}
            <Image
              src="/books.jpg"
              width={500}
              height={600}
              className="mix-blend-multiply rounded-lg hidden md:block"
              alt="Desktop"
            />
            <Image
              src="/books.jpg"
              width={500}
              height={600}
              className="mix-blend-multiply rounded-lg block md:hidden"
              alt="Mobile"
            />

          </div>
        </div>
      </div>

      <div className='h-[500px] p-20'>
        <p>Hello let me just write something and see</p>
      </div>
    </main>
  );
}
