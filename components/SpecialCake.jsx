import styled from 'styled-components';
import Image from 'next/image';
const SpecialCake = () => {
  return (
    <Div className='bg-cover bg-center bg-no-repeat relative'>
      <div className='overlay'>
        <div className='text-white py-10 lg:w-11/12 xl:w-9/12 mx-auto'>
          <div className='md:grid md:grid-cols-2'>
            <div className='col-span-1 pt-10 md:pt-10'>
              <img
                className='object-center'
                style={{ width: 543, height: 543, objectFit: 'cover' }}
                src='/img/happy-customer.jpg'
                alt='Customer with cake'
              />
              {/* <Image
                src='/img/happy-customer.jpg'
                width={543}
                height={543}
                layout='fill'
                objectFit='cover'
                quality={100}
              /> */}
            </div>
            <div className='col-span-1 xl:border-l px-6  md:px-12  py-5'>
              <h1 className='xl:text-6xl md:text-4xl text-2xl title font-bold tracking-wide mb-5'>
                Our Special Cake
              </h1>
              <p className='mb-10 md:text-2xl text-gray-200 tracking-wide'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                praesentium? Similique ipsa voluptatum quisquam molestiae.
              </p>
              <button className='bg-white text-yellow-800 py-2 px-8  md:py-4 md:px-12 font-bold md:text-xl tracking-wide rounded-full hover:bg-yellow-800 hover:text-white hover:border-gray-50 border'>
                Our Cakes
              </button>
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

  .title {
    font-family: 'Playfair Display', serif;
  }

  .overlay {
    background: rgba(80, 48, 33, 0.95);
    min-height: 600px;
  }

  .btn {
    background: #d15732;
  }
`;
