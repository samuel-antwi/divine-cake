import { GiConsoleController } from 'react-icons/gi';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Rating from 'react-rating';
import Image from 'next/image';
// import { slickSettings } from 'functions/slick';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimony = ({ testimonies }) => {
  console.log(testimonies);

  const settings = {
    className: 'slider variable-width',
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Div className='bg-gray-200'>
      <div className='container py-10 mx-auto '>
        <h1 className='md:text-5xl text-2xl font-bold text-center mb-5  pt-5 md:mb-10 text-yellow-900'>
          What Our Customers Are Saying
        </h1>
        <Slider {...settings}>
          {testimonies.map((testimony) => (
            <div className=' bg-white p-5 shadow-xl ' key={testimony.id}>
              <div className='flex justify-between items-center mb-5 '>
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
                fullSymbol={<BsStarFill />}
                initialRating={testimony.rating}
                emptySymbol={<BsStar size={20} />}
              />
              <p className='text-lg text-gray-600 mb-10'>
                {testimony.review.text}
              </p>
              <p className='md:text-xl font-semibold text-gray-700 mb-3'>
                {testimony.name}
              </p>
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
  font-family: 'Playfair Display', serif;

  .slick-list {
    margin: 0 -10px;
  }
  .slick-slide > div {
    padding: 0 10px;
  }
`;
