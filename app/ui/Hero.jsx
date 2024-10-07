const Hero = () => {
  return (
    <section id='hero' className='relative padding-x pt-8 pb-20 z-10'>
      <section
        id='home'
        className='relative z-10 flex justify-center  max-container w-full gap-4 '
      >
        <div className='w-full flex flex-col justify-center items-center  text-center gap-12'>
          <h1 className='md:text-8xl text-6xl font-bold text-red-quicky '>
            QUICKY{' '}
          </h1>
          <h1 className='md:text-7xl text-5xl font-bold max-mobile:text-4xl'>
            ล้างรถ 90 บาท
          </h1>
          <h1 className='md:text-4xl text-2xl max-mobile:text-xl'>
            ใช้เวลาแค่ 5 นาที
          </h1>
          <h1 className='md:text-4xl text-2xl max-mobile:text-xl'>
            ไม่ต้องเสียเวลาหาที่นั่งรอ
          </h1>

          <h1 className='md:text-4xl text-2xl max-mobile:text-xl'>
            ล้างด้วยมือ สะอาดไร้ร้อยทุกจุด
          </h1>

          <h1 className='md:text-4xl text-2xl max-mobile:text-xl'>
            เปิดให้บริการทุกวัน 09:00 - 20:00
          </h1>
        </div>
      </section>
    </section>
  );
};
export default Hero;
