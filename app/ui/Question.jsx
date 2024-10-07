import { faqs } from '@/constants';

const Question = () => {
  return (
    <section id='question' className='padding max-container'>
      <section className='max-container'></section>
      <h1 className='text-center mb-10 font-bold text-5xl max-mobile:text-4xl'>
        คำถามที่พบบ่อย
      </h1>
      <div className='grid grid-cols-2 gap-2 max-md944:grid-cols-1 max-md944:text-center'>
        {faqs.map((faq, index) => (
          <div key={index} className='border p-4 rounded shadow-md'>
            <h3 className='font-semibold text-red-quicky'>{faq.question}</h3>
            <p className='mt-2'>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Question;
