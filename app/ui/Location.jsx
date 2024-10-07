const Location = () => {
  return (
    <section id='location' className='padding max-container'>
      <section className='max-container'>
        <h3 className='text-center text-5xl font-bold max-md944:hidden '>
          <span className='text-red-quicky'>QUICKY</span> ของเรามี 4 สาขาแล้วนะ
        </h3>
        <h3 className='text-center text-5xl font-bold max-md:text-3xl md944:hidden '>
          <span className='text-red-quicky'>QUICKY</span>
          <br /> ของเรามี 4 สาขาแล้วนะ
        </h3>
        <div className='grid grid-cols-2 max-md944:grid-cols-1 gap-8 mt-10'>
          <div className='flex flex-col gap-5'>
            <h3 className='text-center text-red-quicky text-2xl font-bold'>
              QUICKY<span className='text-black font-normal'> @ปากน้ำ</span>
            </h3>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.1054311408225!2d100.60696757500382!3d13.590370286784847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a792b23ec037%3A0x588f5b56c524d4ad!2zUXVpY2t5IEDguJvguLLguIHguJnguYnguLM!5e0!3m2!1sen!2sth!4v1728179762353!5m2!1sen!2sth'
              className='w-full h-72' // Use full width and set a height
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>

          <div className='flex flex-col gap-5'>
            <h3 className='text-center text-red-quicky text-2xl font-bold'>
              QUICKY<span className='text-black font-normal'> @เทพารักษ์</span>
            </h3>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62049.68778746591!2d100.56834265502944!3d13.59036689032353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d5f20f5f38929%3A0x10951ae32350b2e7!2zUXVpY2t5IEDguYDguJfguJ7guLLguKPguLHguIHguKnguYw!5e0!3m2!1sen!2sth!4v1728180162081!5m2!1sen!2sth'
              className='w-full h-72' // Use full width and set a height
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
          <div className='flex flex-col gap-5'>
            <h3 className='text-center text-red-quicky text-2xl font-bold'>
              QUICKY<span className='text-black font-normal'> @เสรีไทย29</span>
            </h3>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62049.68778746591!2d100.56834265502944!3d13.59036689032353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d631666a1aa4b%3A0xc1f857e49b78ccfc!2zUXVpY2t5IEDguYDguKrguKPguLXguYTguJfguKIgMjk!5e0!3m2!1sen!2sth!4v1728180213368!5m2!1sen!2sth'
              className='w-full h-72' // Use full width and set a height
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
          <div className='flex flex-col gap-5 '>
            <h3 className='text-center text-red-quicky text-2xl font-bold'>
              QUICKY<span className='text-black font-normal'> @บางพลี</span>
            </h3>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62000.049768525256!2d100.58853434863282!3d13.778685800000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d5f8079dee1f7%3A0xcaa5477101766083!2zUXVpY2t5IEDguJrguLLguIfguJ7guKXguLU!5e0!3m2!1sen!2sth!4v1728180245186!5m2!1sen!2sth'
              className='w-full h-72' // Use full width and set a height
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </section>
    </section>
  );
};
export default Location;
