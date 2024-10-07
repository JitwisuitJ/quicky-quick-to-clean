import Image from 'next/image';
import { FaMobileAlt } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='padding bg-black max-container'>
      <section className='max-container flex justify-between gap-10 max-sm650:flex-col-reverse max-sm650:items-center'>
        <div className='flex  flex-col items-center gap-5 w-1/3 max-md1017:w-1/2 max-sm650:w-full'>
          <div className='w-[150px] h-[150px]'>
            <Image
              src='/images/logo_quicky.png'
              alt='quicky_logo'
              width={500}
              height={500}
            />
          </div>
          <p className='text-white text-center'>
            <span className='text-red-quicky text-2xl'>
              <span className='font-bold'>QUICKY</span> - QUICK TO CLEAN
            </span>{' '}
            <br /> <br />
            ร้านล้างรถไดร์ฟทรู ล้างภายนอก สะอาด รวดเร็ว คนในเมืองถูกใจสิ่งนี้
            เวลาที่เร่งรีบแล้วต้องใช้รถไปทำธุระ ถ้าต้องไปรอล้างนานๆไม่สะดวก
            มาล้างที่ Quicky รถจะสะอาดภายในเวลา 5 นาที แถมไม่ต้องลงจากรถ
            แวะล้างได้สะดวกสุดๆ
          </p>

          <div className='flex items-center justify-start gap-10 mt-10'>
            <Link
              href='https://www.facebook.com/profile.php?id=100094555063270'
              target='_blank'
              passHref
            >
              <Image
                src='/images/facebook_logo.svg'
                alt='facebook_logo'
                width={85}
                height={85}
                className='cursor-pointer'
              />
            </Link>

            <Link
              href='https://www.instagram.com/quicky_quicktoclean/'
              target='_blank'
              passHref
            >
              <Image
                src='/images/instagram_logo.svg'
                alt='instagram_logo'
                width={85}
                height={85}
                className='cursor-pointer'
              />
            </Link>
          </div>
          <div className='flex  items-end gap-2 mt-10 h-1/2'>
            <Image
              src='/images/copyright_sign.svg'
              alt='copyright sign'
              width={20}
              height={20}
              className='rounded-full m-0'
            />

            <p className='text-white flex-1 whitespace-nowrap'>
              Copyright. All rights reserved.
            </p>
          </div>
        </div>
        <div className='w-1/3 max-sm650:w-full text-center max-sm650:mb-5'>
          <h1 className='text-white  text-2xl mb-10'>
            สาขาทั้งหมดของ{' '}
            <span className='text-red-quicky font-bold'>QUICKY</span>
          </h1>
          <div className='grid grid-cols-1 gap-10'>
            <div>
              <p className='text-white leading-6 '>
                <span className='text-red-quicky font-bold '>QUICKY </span>
                @ปากน้ำ
                <br />
                456 8 Sukhumvit Rd, Pak Nam, Mueang Samut Prakan District, Samut
                Prakan 10270 <br />
                <FaMobileAlt className='text-white inline' /> 0999026457
              </p>
            </div>
            <div>
              <p className='text-white leading-6 '>
                <span className='text-red-quicky font-bold'>QUICKY </span>
                @เทพารักษ์
                <br />
                112, 10 หมู่ที่ 1 Thepharak Rd, Tambon Thepharak, Mueang Samut
                Prakan District, Samut Prakan 10270 <br />
                <FaMobileAlt className='text-white inline' /> 0999026457
              </p>
            </div>
            <div>
              <p className='text-white leading-6 '>
                <span className='text-red-quicky font-bold'>QUICKY </span>
                @เสรีไทย 29
                <br />
                ปาก Soi SeriThai 29, Khlong Kum, Bueng Kum, Bangkok 10240 <br />
                <FaMobileAlt className='text-white inline' /> 0999026457
              </p>
            </div>
            <div>
              <p className='text-white leading-6 '>
                <span className='text-red-quicky font-bold'>QUICKY </span>
                @บางพลี
                <br />
                32 92, Tambon Bang Phli Yai, Bang Phli District, Samut Prakan
                10540
                <br />
                <FaMobileAlt className='text-white inline' /> 0999026457
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
