'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prevState) => !prevState);

  return (
    <header className='w-full relative z-20 padding-x'>
      <nav className='pt-10 h-32 flex justify-between items-center max-container'>
        <div className='h-[150px] w-[150px]  min-w-[150px] relative top-0 left-0 max-mobile:h-[80px] max-mobile:w-[80px]  max-mobile:min-w-[80px]'>
          <Image
            src='/images/logo_quicky.png'
            alt='quicky-logo'
            width={500}
            height={500}
          />
        </div>

        <div className='hidden wide:flex gap-10'>
          <Link
            href='#why-quicky'
            className='text-red-quicky font-bold text-xl transition-transform transform hover:scale-105 hover:text-red-600 '
          >
            ทำไมต้อง QUICKY
          </Link>
          <Link
            href='#steps'
            className='text-red-quicky font-bold text-xl transition-transform transform hover:scale-105 hover:text-red-600'
          >
            ขั้นตอนรับบริการ
          </Link>
          <Link
            href='#location'
            className='text-red-quicky font-bold text-xl transition-transform transform hover:scale-105 hover:text-red-600'
          >
            QUICKY อยู่ที่ไหนบ้าง
          </Link>
          <Link
            href='#reviews'
            className='text-red-quicky font-bold text-xl transition-transform transform hover:scale-105 hover:text-red-600'
          >
            รีวิวจากลูกค้า
          </Link>
          <Link
            href='#question'
            className='text-red-quicky font-bold text-xl transition-transform transform hover:scale-105 hover:text-red-600'
          >
            คำถามที่พบบ่อย
          </Link>
        </div>

        <div className='relative'>
          <button
            className='p-2 rounded-lg text-red-quicky hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-quicky focus:ring-opacity-50'
            onClick={toggleDropdown}
            aria-haspopup='true'
            aria-expanded={isOpen}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block h-10 w-10 stroke-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>
            </svg>
          </button>

          {isOpen && (
            <div className='absolute right-0 mt-2 w-max rounded-lg shadow-lg bg-[#F5F5F7] z-50'>
              <div className='flex flex-col gap-5 p-6'>
                <Link
                  href='#why-quicky'
                  className='text-red-quicky font-bold text-xl transition-transform transform hover:scale-105 hover:text-red-600'
                  onClick={toggleDropdown}
                >
                  ทำไมต้อง QUICKY
                </Link>
                <Link
                  href='#steps'
                  className='text-red-quicky font-bold text-xl transition-transform transform hover:scale-105 hover:text-red-600'
                  onClick={toggleDropdown}
                >
                  ขั้นตอนรับบริการ
                </Link>
                <Link
                  href='#location'
                  className='text-red-quicky font-bold text-xl transition-transform transform hover:scale-105 hover:text-red-600'
                  onClick={toggleDropdown}
                >
                  QUICKY อยู่ที่ไหนบ้าง
                </Link>
                <Link
                  href='#reviews'
                  className='text-red-quicky font-bold text-xl transition-transform transform hover:scale-105 hover:text-red-600'
                  onClick={toggleDropdown}
                >
                  รีวิวจากลูกค้า
                </Link>
                <Link
                  href='#question'
                  className='text-red-quicky font-bold text-xl transition-transform transform hover:scale-105 hover:text-red-600'
                  onClick={toggleDropdown}
                >
                  คำถามที่พบบ่อย
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
