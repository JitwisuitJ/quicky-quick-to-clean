import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className='w-full relative z-20 padding-x'>
      <nav className='pt-10 h-32 flex justify-between items-center max-container'>
        <div className='h-[150px] w-[150px]  min-w-[150px] relative top-0 left-0'>
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

        <div className='wide:hidden dropdown dropdown-end relative top-0 right-0'>
          <button className='btn btn-square btn-ghost'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block h-10 w-10 stroke-current text-red-quicky'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>
            </svg>
          </button>

          <div className='menu dropdown-content bg-[#F5F5F7] bg-opacity-100 rounded-box z-20 w-max p-2 shadow-lg '>
            <div className='flex flex-col gap-5 p-10'>
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
          </div>
        </div>
      </nav>
    </header>
  );
}
