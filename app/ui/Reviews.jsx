'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { reviews } from '@/constants';
import Image from 'next/image';

const Reviews = () => {
  return (
    <section id='reviews' className='padding relative max-container'>
      <div
        className='absolute inset-0 bg-cover bg-center opacity-25'
        style={{
          backgroundImage: 'url(/images/review_bg.jpeg)',
          // backgroundPosition: '50% calc(100% + 130px)',
        }}
      />
      <section className='max-container relative z-10'>
        <h1 className='text-center text-5xl font-bold text-red-quicky max-md:text-4xl max-sm530:text-3xl'>
          รีวิวจากลูกค้าที่ใช้บริการ
        </h1>
        <h1 className='mt-5 text-center text-5xl font-bold mb-10 max-md:text-4xl max-sm530:text-3xl'>
          <span className='text-red-quicky'>QUICKY</span>{' '}
          ขอขอบพระคุณลูกค้าทุกท่านนะคะ
        </h1>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className='flex'
          breakpoints={{
            900: {
              slidesPerView: 2,
            },
            1250: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide
              key={index}
              className='bg-white p-5 rounded-lg shadow-md text-center '
            >
              <div className='flex items-center justify-center gap-5 mb-5'>
                <div className='w-10'>
                  <Image
                    src={`/reviews/${index + 1}_review.png`}
                    alt={`${index + 1}_review_pic`}
                    width={128}
                    height={128}
                  />
                </div>
                <p className='font-bold'>{review.author}</p>
              </div>
              <p className='mb-5 '>{review.originalText}</p>
              <p>
                <small>
                  Rating:{' '}
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i}>
                      <svg
                        key={i}
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='#FFD700' // Google Maps star color
                        stroke='#FFD700' // Optional stroke to outline the star
                        strokeWidth='0.5'
                        className='w-5 h-5 inline-block'
                      >
                        <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
                      </svg>
                    </span>
                  ))}
                </small>
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
};
export default Reviews;
