import './globals.css';
import Navbar from './ui/Navbar';
import Hero from './ui/Hero';
import { kanit } from '@/app//ui/font';
import Footer from './ui/Footer';
import Head from 'next/head';

export const metadata = {
  title: 'QUICKY - QUICK TO CLEAN',
  description:
    'ร้านล้างรถไดร์ฟทรู ล้างภายนอก สะอาด รวดเร็ว คนในเมืองถูกใจสิ่งนี้ เวลาที่เร่งรีบแล้วต้องใช้รถไปทำธุระ ถ้าต้องไปรอล้างนานๆไม่สะดวก มาล้างที่ Quicky ปากน้ำ แยกการไฟฟ้า รถจะสะอาดภายในเวลา 5 นาที แถมไม่ต้องลงจากรถ แวะล้างได้สะดวกสุดๆ แนะนำเลยจ้า ดี ราคาก็ดี',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head>
        <meta
          name='description'
          content='ร้านล้างรถไดร์ฟทรู ล้างภายนอก สะอาด รวดเร็ว คนในเมืองถูกใจสิ่งนี้ เวลาที่เร่งรีบแล้วต้องใช้รถไปทำธุระ ถ้าต้องไปรอล้างนานๆไม่สะดวก มาล้างที่ Quicky ปากน้ำ แยกการไฟฟ้า รถจะสะอาดภายในเวลา 5 นาที แถมไม่ต้องลงจากรถ แวะล้างได้สะดวกสุดๆ แนะนำเลยจ้า ดี ราคาก็ดี'
        />
        <meta
          name='keywords'
          content='ล้างรถ, ไดร์ฟทรู, Quicky, สะอาดเร็ว, #ล้างรถเร็ว, #สะอาดใน5นาที, ล้างรถไดร์ฟทรู, ล้างรถเร็ว, ล้างรถภายนอก, บริการล้างรถ, ล้างรถมืออาชีพ, ล้างรถสะอาด, ล้างรถใน5นาที, บริการล้างรถด่วน, ล้างรถราคาประหยัด, ล้างรถแถวปากน้ำ, ล้างรถไม่ต้องลงจากรถ, บริการล้างรถทันใจ, ล้างรถเปิดตลอด, ล้างรถที่สะดวก, รีวิวร้านล้างรถ, ล้างรถด้วยมือ, ล้างรถระบบออโต้, ล้างรถราคาดี, แนะนำร้านล้างรถ'
        />
        <meta property='og:title' content='QUICKY - QUICK TO CLEAN' />
        <meta
          property='og:description'
          content='ร้านล้างรถไดร์ฟทรู ล้างภายนอก สะอาด รวดเร็ว คนในเมืองถูกใจสิ่งนี้ เวลาที่เร่งรีบแล้วต้องใช้รถไปทำธุระ ถ้าต้องไปรอล้างนานๆไม่สะดวก มาล้างที่ Quicky ปากน้ำ แยกการไฟฟ้า รถจะสะอาดภายในเวลา 5 นาที แถมไม่ต้องลงจากรถ แวะล้างได้สะดวกสุดๆ แนะนำเลยจ้า ดี ราคาก็ดี'
        />
        <meta property='og:image' content='/images/logo_quicky.png' />
      </Head>
      <body className={`${kanit.className} antialiased relative `}>
        <div className='relative h-auto max-container'>
          {/* Pseudo-element for the background with opacity */}
          <div className='absolute inset-0 bg-[url("/images/hero_bg.jpg")] bg-cover bg-center opacity-20'></div>
          <Navbar className='' />
          <Hero className='' />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
