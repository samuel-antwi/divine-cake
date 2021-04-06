import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Rating from 'react-rating';
import Image from 'next/image';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { FaQuoteLeft } from 'react-icons/fa';
import { settings, slickSettings } from 'functions/slick';

const Testimony = ({ testimonies }) => {
  return (
    <Div className='bg-gray-200 pb-8 px-5'>
      <div className='max-w-7xl py-10 mx-auto'>
        <div className='mb-5'>
          <h1 className='md:text-4xl text-2xl font-title font-bold text-center mb-5  pt-5 md:mb-10 text-yellow-900'>
            What Our Customers Are Saying
          </h1>
          <div className='max-w-sm mx-auto w-20 h-1 bg-gray-600'></div>
        </div>
        <Slider {...settings(testimonies.length)}>
          {testimonies.map((testimony) => (
            <div key={testimony.id} className=' bg-white p-5 xl:h-[600px] xs:h-[700px] h-[800px]'>
              <div className='flex justify-between  items-center mb-5'>
                <Image
                  className='rounded-full'
                  src={testimony.image.url}
                  width={90}
                  height={90}
                  layout='fixed'
                />
                <FaQuoteLeft className='text-gray-400' size={40} />
              </div>
              <Rating
                className='text-yellow-500 mb-7 '
                stop={5}
                start={0}
                readonly={true}
                fullSymbol={<BsStarFill size={20} />}
                initialRating={testimony.rating}
                emptySymbol={<BsStar size={20} />}
              />
              <p className='text-lg text-gray-600 mb-10'>{testimony.review.text}</p>
              <p className='md:text-xl font-semibold text-gray-700 mb-3'>{testimony.name}</p>
              <p className='text-gray-400'>Customer</p>
            </div>
          ))}
        </Slider>
      </div>
    </Div>
  );
};

export default Testimony;

const Div = styled.div`
  .slick-list {
    margin: 0 -10px;
  }
  .slick-slide > div {
    padding: 0 10px;
  }
`;
