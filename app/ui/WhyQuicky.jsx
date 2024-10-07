import Image from 'next/image';

const WhyQuicky = () => {
  return (
    <section id='why-quicky' className='padding'>
      <div className='max-container'>
        <h1 className='text-center font-semibold text-5xl max-ssm:text-4xl text-red-quicky'>
          <span className='text-black'>ทำไมต้องล้างรถที่</span> QUICKY
        </h1>
        <div className='mt-20 max-ssm:mt-10 grid mdl:grid-cols-2 grid-cols-1 gap-10 w-full md:w-[80%]  mx-auto'>
          <Image
            src='/images/hero_pic_1.jpg'
            alt='hero1'
            width={1920}
            height={1920}
            className='border-4 border-red-quicky rounded-2xl'
          />
          <Image
            src='/images/hero_pic_2.jpg'
            alt='hero1'
            width={1920}
            height={1920}
            className='border-4 border-red-quicky rounded-2xl'
          />
          <Image
            src='/images/hero_pic_3.jpg'
            alt='hero1'
            width={1920}
            height={1920}
            className='border-4 border-red-quicky rounded-2xl'
          />
          <Image
            src='/images/hero_pic_4.jpg'
            alt='hero1'
            width={1920}
            height={1920}
            className='border-4 border-red-quicky rounded-2xl'
          />
        </div>
      </div>
    </section>
  );
};
export default WhyQuicky;
