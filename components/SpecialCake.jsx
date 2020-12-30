import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const SpecialCake = () => {
  return (
    <Div className='bg-cover bg-center bg-no-repeat relative'>
      <div className='overlay'>
        <div className='text-white py-10 lg:w-11/12 xl:w-9/12 mx-auto'>
          <div className='md:grid md:grid-cols-2'>
            <div className='col-span-1 pt-10 md:pt-10'>
              <Image
                className='object-cover'
                src='/img/happy-customer.jpg'
                width={543}
                height={543}
                layout='responsive'
                quality={100}
                alt='Customer with cake'
              />
            </div>
            <div className='col-span-1 xl:border-l px-6  md:px-12  py-5'>
              <h1 className='font-title xl:text-6xl md:text-4xl text-2xl title font-bold tracking-wide mb-5'>
                Our Special Cake
              </h1>
              <p className='mb-10 md:text-2xl text-gray-200 tracking-wide'>
                Every special occasion deserves a special treat. We always have
                that in mind, that is why we make special cakes that leave you
                good memories forever.
              </p>
              <Link href='/products'>
                <a className='bg-white text-yellow-800 py-2 px-8  md:py-4 md:px-12 font-bold md:text-xl focus:outline-none tracking-wide rounded-full hover:bg-yellow-800 hover:text-white hover:border-gray-50 border'>
                  Our Cakes
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
};

export default SpecialCake;

const Div = styled.div`
  background: url('/img/hayley.jpg');
  min-height: 600px;

  .overlay {
    background: rgba(80, 48, 33, 0.95);
    min-height: 600px;
  }

  .btn {
    background: #d15732;
  }
`;
