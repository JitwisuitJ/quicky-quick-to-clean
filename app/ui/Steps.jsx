import Image from 'next/image';
import { FaCar, FaHourglassHalf, FaMoneyBillAlt } from 'react-icons/fa';

const Steps = () => {
  return (
    <section id='steps' className='relative padding max-container'>
      <div
        className='absolute inset-0 bg-cover  bg-center  opacity-30'
        style={{
          backgroundImage: 'url(/images/steps_bg.jpeg)',
          // backgroundPosition: '50% calc(100% + 0px)',
        }}
      />
      <section className='max-container relative z-10 '>
        <h1 className='text-center font-bold text-5xl max-ssm:text-4xl text-red-quicky'>
          ขั้นตอนการรับบริการ
        </h1>
        <div className='flex justify-center gap-10 mt-20 max-ssm:mt-10 max-mdll:flex-col items-strech'>
          <div className='bg-white flex flex-col gap-5 items-center border border-[#E52031] rounded-lg w-1/3 max-mdll:w-full p-8 shadow-inner'>
            <FaCar size={40} color='#E52031' />
            <h3 className='text-2xl text-center'>1. ขับรถเข้าช่องล้าง </h3>
          </div>
          <div className='bg-white flex flex-col gap-5 items-center border border-[#FBC21D] rounded-lg w-1/3 max-mdll:w-full p-8 shadow-inner'>
            <FaHourglassHalf size={40} color='#FBC21D' />
            <h3 className='text-2xl text-center'>2. นั่งรอในรถ 5 นาที </h3>
          </div>
          <div className='bg-white flex flex-col gap-5 items-center border border-[#4EAC4C] rounded-lg w-1/3 max-mdll:w-full p-8 shadow-inner'>
            <FaMoneyBillAlt size={40} color='#4EAC4C' />
            <h3 className='text-2xl text-center max-mobile:text-xl'>
              3. ชำระเงินเพียงแค่ 90 บาท !{' '}
            </h3>
          </div>
        </div>
      </section>
    </section>
  );
};
export default Steps;
